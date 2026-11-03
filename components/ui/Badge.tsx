import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-pill border px-2.5 py-1 text-[11px] leading-none font-medium tracking-[0.02em]",
  {
    variants: {
      variant: {
        filled: "border-transparent bg-primary text-primary-foreground",
        outline: "border-border bg-transparent text-muted-foreground",
        soft: "border-transparent bg-muted text-foreground/75",
      },
    },
    defaultVariants: {
      variant: "soft",
    },
  },
);

export type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { badgeVariants };
