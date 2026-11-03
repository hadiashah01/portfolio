import type { ReactNode } from "react";

import { Section } from "@/components/ui/Section";

type PlaceholderPageProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function PlaceholderPage({
  title,
  description,
  children,
}: PlaceholderPageProps) {
  return (
    <Section>
      <div className="max-w-2xl">
        <p className="text-primary text-sm font-medium">Placeholder</p>
        <h1 className="text-foreground text-display-sm mt-4 font-black tracking-[-0.06em]">
          {title}
        </h1>
        <p className="text-muted-foreground mt-6 text-lg leading-8">
          {description}
        </p>
        {children}
      </div>
    </Section>
  );
}
