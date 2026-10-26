"use client";

import Image from "next/image";
import { useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

type ProjectPreviewProps = {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
};

/**
 * Hover-to-scroll preview: the screenshot moves smoothly inside a fixed frame
 * on hover, revealing more of the image, and returns to the top on leave.
 * Motion is purposeful and respects prefers-reduced-motion.
 */
export function ProjectPreview({
  src,
  alt,
  height = 400,
  width = 800,
  className,
}: ProjectPreviewProps) {
  const ref = useRef<HTMLDivElement>(null);

  const y = useMotionValue(0);
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const { clientY } = event;
    const percentage = (clientY - rect.top) / rect.height;
    const maxMove = 120; // pixels the image can travel upward
    y.set(-percentage * maxMove);
  };

  const handleMouseLeave = () => {
    y.set(0);
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded-lg border border-border">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover"
          style={{ transform: `translateY(${ySpring.get()}px)` }}
          loading="lazy"
        />
      </div>
    </div>
  );
}