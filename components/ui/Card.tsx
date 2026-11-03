import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "border-border bg-surface rounded-lg border p-6",
          className,
        )}
        {...props}
      />
    );
  },
);

Card.displayName = "Card";

export type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={cn("mb-4 space-y-2", className)} {...props} />;
}

export type CardTitleProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h2" | "h3";
};

export function CardTitle({
  className,
  as: Heading = "h3",
  ...props
}: CardTitleProps) {
  return (
    <Heading
      className={cn(
        "text-foreground text-lg font-semibold tracking-[-0.02em]",
        className,
      )}
      {...props}
    />
  );
}

export type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p
      className={cn("text-muted-foreground text-sm leading-6", className)}
      {...props}
    />
  );
}

export type CardContentProps = HTMLAttributes<HTMLDivElement>;

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn(className)} {...props} />;
}
