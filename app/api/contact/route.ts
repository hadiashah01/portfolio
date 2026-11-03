import { NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { sendContactNotification } from "@/lib/resend";
import { getClientIp } from "@/lib/request";
import { rateLimit } from "@/lib/rate-limit";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("A valid email is required").max(254),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(5000),
  website: z.string().optional(),
});

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limit = rateLimit(`contact:${ip}`, 5, 10 * 60 * 1000);

  if (!limit.success) {
    return NextResponse.json(
      { error: "Too many messages sent. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(
            Math.ceil((limit.resetAt - Date.now()) / 1000),
          ),
        },
      },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        error: "Invalid request body",
        issues: result.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const { name, email, subject, message, website } = result.data;

  if (website) {
    return NextResponse.json(
      { message: "Contact message saved successfully" },
      { status: 201 },
    );
  }

  try {
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    void sendContactNotification(contactMessage);

    return NextResponse.json(
      { message: "Contact message saved successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to save contact message", error);

    return NextResponse.json(
      {
        error: "Failed to save contact message",
      },
      { status: 500 },
    );
  }
}
