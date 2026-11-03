"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CardContent } from "@/components/ui/Card";
import { contactPageContent } from "@/config/personal";
import { contactFormPlaceholders } from "@/config/social";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("A valid email is required").max(254),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(5000),
  website: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitStatus({ type: null, message: null });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessage = result.error || "Failed to submit message.";
        setSubmitStatus({
          type: "error",
          message: errorMessage,
        });
        return;
      }

      setSubmitStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });
      reset();
    } catch (err) {
      console.error(err);
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardContent className="space-y-4">
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>
        {submitStatus.type === "success" && (
          <div className="rounded-md bg-success/10 border border-success/20 p-4 text-sm text-success">
            {submitStatus.message}
          </div>
        )}
        {submitStatus.type === "error" && (
          <div className="rounded-md bg-error/10 border border-error/20 p-4 text-sm text-error">
            {submitStatus.message}
          </div>
        )}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="name">
              {contactPageContent.nameLabel}
            </label>
            <Input
              id="name"
              placeholder={contactFormPlaceholders.name}
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
            {errors.name && (
              <p id="name-error" className="text-xs text-error mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">
              {contactPageContent.emailLabel}
            </label>
            <Input
              id="email"
              type="email"
              placeholder={contactFormPlaceholders.email}
              disabled={isSubmitting}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <p id="email-error" className="text-xs text-error mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="subject">
            {contactPageContent.subjectLabel}
          </label>
          <Input
            id="subject"
            placeholder={contactFormPlaceholders.subject}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            {...register("subject")}
          />
          {errors.subject && (
            <p id="subject-error" className="text-xs text-error mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="message">
            {contactPageContent.messageLabel}
          </label>
          <Textarea
            id="message"
            placeholder={contactFormPlaceholders.message}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <p id="message-error" className="text-xs text-error mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          variant="primary"
          className="w-full sm:w-auto"
          loading={isSubmitting}
        >
          {contactPageContent.submitLabel}
        </Button>
      </CardContent>
    </form>
  );
}
