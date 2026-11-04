"use client";

import { Fragment, useRef, type CSSProperties } from "react";
import {
  motion,
  useScroll,
  type MotionStyle,
  type UseScrollOptions,
} from "motion/react";

import { cn } from "@/utils/cn";

type ScrollRevealTextProps = {
  children: string;
  className?: string;
  offset?: UseScrollOptions["offset"];
};

type RevealStyle = MotionStyle & {
  "--reveal-progress": ReturnType<typeof useScroll>["scrollYProgress"];
  "--reveal-span": number;
};

type WordStyle = CSSProperties & {
  "--word-index": number;
};

const defaultOffset: UseScrollOptions["offset"] = ["start 0.88", "end 0.42"];

export function ScrollRevealText({
  children,
  className,
  offset = defaultOffset,
}: ScrollRevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const words = children.split(/\s+/).filter(Boolean);

  return (
    <motion.span
      ref={ref}
      className={cn("scroll-reveal-text", className)}
      style={
        {
          "--reveal-progress": scrollYProgress,
          "--reveal-span": Math.max(words.length * 1.18, 2.36),
        } as RevealStyle
      }
    >
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span
            className="scroll-reveal-word"
            style={{ "--word-index": index } as WordStyle}
          >
            {word}
          </span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </motion.span>
  );
}
