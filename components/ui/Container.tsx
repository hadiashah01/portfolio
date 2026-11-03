import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

export type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "full";
};

const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  full: "max-w-none",
} as const;

export function Container({
  children,
  className,
  size = "lg",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-10",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
