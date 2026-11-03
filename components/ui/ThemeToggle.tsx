"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

export type ThemeToggleProps = {
  className?: string;
  variant?: "outline" | "ghost";
};

export function ThemeToggle({
  className,
  variant = "outline",
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <Button
        type="button"
        variant={variant}
        size="icon"
        aria-label="Toggle theme"
        className={className}
        disabled
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant={variant}
      size="icon"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(className)}
    >
      {isDark ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </Button>
  );
}
