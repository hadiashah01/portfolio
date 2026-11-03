import type { HTMLAttributes } from "react";

import { cn } from "@/utils/cn";

export type DividerProps = HTMLAttributes<HTMLHRElement> & {
  label?: string;
};

export function Divider({ className, label, ...props }: DividerProps) {
  if (!label) {
    return (
      <hr
        className={cn("border-border border-0 border-t", className)}
        {...props}
      />
    );
  }

  return (
    <div
      className={cn("flex items-center gap-4", className)}
      role="separator"
      aria-label={label}
    >
      <div className="bg-border h-px flex-1" />
      <span className="text-muted-foreground text-xs font-medium">{label}</span>
      <div className="bg-border h-px flex-1" />
    </div>
  );
}
