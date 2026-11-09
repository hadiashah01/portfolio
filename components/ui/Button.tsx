import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-semibold tracking-[-0.01em] whitespace-nowrap transition-[background-color,border-color,color,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        primary:
          "flow-fill-button group bg-primary text-primary-foreground border border-primary hover:text-primary hover:rounded-lg focus-visible:text-primary focus-visible:rounded-lg",
        flow:
          "flow-fill-button group bg-primary text-primary-foreground border border-primary hover:text-primary hover:rounded-lg focus-visible:text-primary focus-visible:rounded-lg",
        footer:
          "flow-fill-button button-footer group bg-footer-foreground text-footer border border-footer-foreground hover:rounded-lg hover:text-footer-foreground focus-visible:rounded-lg focus-visible:text-footer-foreground",
        cta:
          "flow-fill-button button-cta group bg-cta-foreground text-cta border border-cta-foreground hover:rounded-lg hover:text-cta-foreground focus-visible:rounded-lg focus-visible:text-cta-foreground",
        secondary:
          "flow-fill-button button-secondary group bg-foreground text-background border border-foreground hover:rounded-lg hover:text-foreground focus-visible:rounded-lg focus-visible:text-foreground",
        outline:
          "border border-border bg-transparent text-foreground hover:border-foreground/30 hover:bg-muted/60",
        ghost: "bg-transparent text-foreground hover:bg-muted",
        text: "bg-transparent px-0 text-primary underline-offset-4 hover:underline",
        icon: "bg-transparent text-foreground hover:bg-muted",
        danger:
          "flow-fill-button button-danger group bg-error text-white border border-error hover:rounded-lg hover:text-error focus-visible:rounded-lg focus-visible:text-error",
      },
      size: {
        sm: "h-9 px-4 text-[13px]",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-[15px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, loading = false, disabled, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        <span className="relative z-[1] inline-flex items-center justify-center gap-2">
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : null}
          {children}
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";

export { buttonVariants };
