import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "border-border bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-primary/20 aria-invalid:border-error flex h-12 w-full rounded-md border px-4 py-2.5 text-base transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
