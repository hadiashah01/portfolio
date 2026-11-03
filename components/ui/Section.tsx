import type { ElementType, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/cn";
import { Container } from "@/components/ui/Container";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  containerSize?: "sm" | "md" | "lg" | "full";
  as?: ElementType;
};

export function Section({
  children,
  className,
  containerSize = "lg",
  as: Component = "section",
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn("scroll-mt-24 py-20 sm:py-28 lg:py-32", className)}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </Component>
  );
}
