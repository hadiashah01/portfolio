import { Download } from "lucide-react";

import { Section } from "@/components/ui/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import { SectionHeading } from "@/components/sections";
import { Reveal } from "@/components/motion";
import { buildMetadata } from "@/config/metadata";
import { aboutPageContent, personal } from "@/config/personal";

export const metadata = buildMetadata({
  title: "About",
  description: "Learn about background, focus areas, and career goals.",
  path: "/about",
});

const profileRows = [
  { label: "Based in", value: personal.location },
  { label: "Education", value: personal.education },
  { label: "Email", value: personal.email },
];

export default function AboutPage() {
  return (
    <>
      <Section containerSize="lg" className="border-b border-border pt-16 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                as="h1"
                eyebrow={aboutPageContent.eyebrow}
                title={aboutPageContent.title}
                description={aboutPageContent.description}
              />
            </Reveal>
            <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {personal.intro}
            </p>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <div className="rounded-xl border border-border bg-surface p-6 shadow-sm sm:p-7">
                <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                  <h2 className="text-lg font-medium tracking-[-0.01em]">
                    {aboutPageContent.quickProfileTitle}
                  </h2>
                  <span
                    className="h-2 w-2 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {aboutPageContent.quickProfileDescription}
                </p>
                <dl className="mt-2 divide-y divide-border">
                  {profileRows.map((row) => (
                    <div
                      key={row.label}
                      className="grid gap-1 py-3 sm:grid-cols-[100px_1fr]"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {row.label}
                      </dt>
                      <dd className="text-sm text-foreground">{row.value}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={personal.resumePath}
                  download
                  className={cn(
                    buttonVariants({ variant: "outline", size: "md" }),
                    "mt-5 w-full",
                  )}
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download resume
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{aboutPageContent.currentFocusTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {personal.currentFocus.map((item) => (
                  <p
                    key={item}
                    className="text-sm leading-6 text-muted-foreground"
                  >
                    {item}
                  </p>
                ))}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={70}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>
                  {aboutPageContent.technicalInterestsTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {personal.technicalInterests.map((interest) => (
                  <Badge key={interest} variant="outline">
                    {interest}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={140}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>
                  {aboutPageContent.learningPhilosophyTitle}
                </CardTitle>
                <CardDescription>
                  {personal.learningPhilosophy}
                </CardDescription>
              </CardHeader>
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
