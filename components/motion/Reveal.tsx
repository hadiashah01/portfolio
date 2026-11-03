"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      setState("shown");
      return;
    }

    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.92) {
      setState("shown");
      return;
    }

    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
        state === "hidden" ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100",
        className,
      )}
      style={{
        transitionDelay: state === "shown" && delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}
