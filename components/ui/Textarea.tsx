import { forwardRef, type TextareaHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "border-border bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-primary/20 aria-invalid:border-error flex min-h-36 w-full rounded-md border px-4 py-3 text-base transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm",
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";
