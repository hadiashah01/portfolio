import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getClientIp } from "@/lib/request";
import { createClient } from "@/utils/supabase/server";

const loginSchema = z.object({
  email: z.string().trim().email("A valid email is required").max(254),
  password: z.string().min(1, "Password is required").max(128),
  recaptchaToken: z.string().max(10000).optional(),
});

async function verifyRecaptcha(token: string | undefined) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    if (process.env.NODE_ENV === "production") {
      console.error("RECAPTCHA_SECRET_KEY is not defined. Rejecting login.");
      return false;
    }
    console.warn("RECAPTCHA_SECRET_KEY is not defined. Skipping verification.");
    return true;
  }
  if (!token) return false;

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );
    const result = await response.json();
    return result.success && result.score >= 0.5;
  } catch (error) {
    console.error("reCAPTCHA validation failed:", error);
    return false;
  }
}

const FAILED_ATTEMPT_WINDOW_MS = 15 * 60 * 1000;
const FAILED_ATTEMPT_LIMIT = 5;
const ATTEMPT_RETENTION_MS = 7 * 24 * 60 * 60 * 1000;

export async function POST(request: Request) {
  const ip = getClientIp(request);

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  try {
    const result = loginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input fields", issues: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { email, password, recaptchaToken } = result.data;

    // 1. Rate Limiting: Check failed attempts in the last 15 minutes
    const failedAttempts = await prisma.loginAttempt.count({
      where: {
        ip,
        success: false,
        attemptedAt: {
          gte: new Date(Date.now() - FAILED_ATTEMPT_WINDOW_MS),
        },
      },
    });

    if (failedAttempts >= FAILED_ATTEMPT_LIMIT) {
      return NextResponse.json(
        { error: "Too many failed login attempts. Please try again in 15 minutes." },
        { status: 429 }
      );
    }

    // 2. Google reCAPTCHA Verification
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // 3. Supabase Auth Sign In
    const supabase = await createClient();
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError || !authData.user) {
      // Record failed attempt
      await prisma.loginAttempt.create({
        data: {
          ip,
          email,
          success: false,
        },
      });
      await prisma.loginAttempt.deleteMany({
        where: { attemptedAt: { lt: new Date(Date.now() - ATTEMPT_RETENTION_MS) } },
      });

      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 400 }
      );
    }

    // 4. Role Authorization: Verify they are an admin
    const profile = await prisma.profile.findUnique({
      where: { id: authData.user.id },
    });

    if (!profile || profile.role !== "ADMIN") {
      // Record failed attempt and sign out
      await prisma.loginAttempt.create({
        data: {
          ip,
          email,
          success: false,
        },
      });
      await prisma.loginAttempt.deleteMany({
        where: { attemptedAt: { lt: new Date(Date.now() - ATTEMPT_RETENTION_MS) } },
      });
      await supabase.auth.signOut();

      return NextResponse.json(
        { error: "Access denied. Only administrators are allowed." },
        { status: 403 }
      );
    }

    // Record successful attempt
    await prisma.loginAttempt.create({
      data: {
        ip,
        email,
        success: true,
      },
    });

    return NextResponse.json({ message: "Authenticated successfully." });
  } catch (error) {
    console.error("Login endpoint failed:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
