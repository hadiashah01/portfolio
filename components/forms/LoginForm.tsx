"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Script from "next/script";
import * as z from "zod";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { CardContent } from "@/components/ui/Card";

const loginFormSchema = z.object({
  email: z.string().trim().email("A valid email is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

type GrecaptchaWindow = typeof window & {
  grecaptcha?: {
    ready: (callback: () => void) => void;
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
  };
};

function getSafeNextPath(rawPath: string | null) {
  if (!rawPath) return "/dashboard";
  if (!rawPath.startsWith("/") || rawPath.startsWith("//")) return "/dashboard";
  return rawPath;
}

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Check if there was an unauthorized redirect error parameter
  const authError = searchParams.get("error") === "unauthorized" 
    ? "Access denied. Admin role is required." 
    : null;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const onSubmit = async (data: LoginFormValues) => {
    setErrorMsg(null);
    let recaptchaToken = "";

    try {
      const globalWindow = window as unknown as GrecaptchaWindow;
      const grecaptcha = globalWindow.grecaptcha;
      if (recaptchaSiteKey && typeof window !== "undefined" && grecaptcha) {
        recaptchaToken = await new Promise<string>((resolve) => {
          const timeout = setTimeout(() => resolve(""), 10000);
          grecaptcha.ready(async () => {
            try {
              const token = await grecaptcha.execute(recaptchaSiteKey, {
                action: "login",
              });
              clearTimeout(timeout);
              resolve(token);
            } catch (err) {
              console.error("reCAPTCHA execution error:", err);
              clearTimeout(timeout);
              resolve("");
            }
          });
        });
      }

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      let result: { error?: string } = {};
      try {
        result = await response.json();
      } catch (jsonErr) {
        console.error("Failed to parse JSON response:", jsonErr);
      }

      if (!response.ok) {
        setErrorMsg(result.error || `Login failed (Status: ${response.status}).`);
        return;
      }

      const nextPath = getSafeNextPath(searchParams.get("next"));
      router.push(nextPath);
      router.refresh();
    } catch (err) {
      console.error(err);
      setErrorMsg("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <>
      {recaptchaSiteKey && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4 pt-4">
          {(errorMsg || authError) && (
            <div
              role="alert"
              className="rounded-md bg-error/10 border border-error/20 p-4 text-sm text-error"
            >
              {errorMsg || authError}
            </div>
          )}
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="admin@hadia.dev"
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "login-email-error" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <p id="login-email-error" className="text-xs text-error mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={
                errors.password ? "login-password-error" : undefined
              }
              {...register("password")}
            />
            {errors.password && (
              <p id="login-password-error" className="text-xs text-error mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            variant="primary"
            className="w-full mt-2"
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
        </CardContent>
      </form>
    </>
  );
}
