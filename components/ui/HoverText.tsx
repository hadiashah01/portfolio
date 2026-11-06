"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/utils/cn";

type TextHoverEffectProps = {
  text: string;
  duration?: number;
  className?: string;
};

export function TextHoverEffect({
  text,
  duration = 0.2,
  className,
}: TextHoverEffectProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const rawId = useId().replace(/:/g, "");
  const gradientId = `text-gradient-${rawId}`;
  const revealId = `reveal-mask-${rawId}`;
  const maskId = `text-mask-${rawId}`;
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const svgRect = svg.getBoundingClientRect();
    if (svgRect.width === 0 || svgRect.height === 0) return;

    const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
    const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;

    if (!Number.isFinite(cxPercentage) || !Number.isFinite(cyPercentage))
      return;

    setMaskPosition({
      cx: `${cxPercentage}%`,
      cy: `${cyPercentage}%`,
    });
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(event) => setCursor({ x: event.clientX, y: event.clientY })}
      className={cn("uppercase select-none", className)}
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#3ca2fa" />
              <stop offset="50%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#3ca2fa" />
            </>
          )}
        </linearGradient>
        <motion.radialGradient
          id={revealId}
          gradientUnits="userSpaceOnUse"
          r="25%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id={maskId}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${revealId})`}
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-white/20 font-[helvetica] text-7xl font-bold"
        style={{ opacity: hovered ? 0.8 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="stroke-footer-accent/80 fill-transparent font-[helvetica] text-7xl font-bold"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke={`url(#${gradientId})`}
        strokeWidth="0.65"
        strokeLinejoin="round"
        mask={`url(#${maskId})`}
        className="fill-transparent font-[helvetica] text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
}
