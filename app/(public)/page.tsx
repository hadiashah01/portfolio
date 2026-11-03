import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  SectionHeading,
  ProjectCard,
  TimelineItem,
} from "@/components/sections";
import { Reveal } from "@/components/motion";
import { cn } from "@/utils/cn";
import { buildMetadata } from "@/config/metadata";
import { homePageContent, personal } from "@/config/personal";
import { featuredProjects } from "@/config/projects";
import { skillCategories } from "@/config/skills";
import { journeyMilestones } from "@/config/journey";

export const metadata = buildMetadata({
  title: "Home",
  path: "/",
});

const [firstName, ...nameRemainder] = personal.name.split(" ");
const lastName = nameRemainder.join(" ");

export default function HomePage() {
  return (
    <>
      <Section
        containerSize="lg"
        className="border-border border-b pt-14 pb-14 sm:pt-20 sm:pb-20"
        aria-labelledby="hero-heading"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <div className="hero-rise text-muted-foreground flex items-start gap-3 font-mono text-[11px] tracking-[0.2em] uppercase">
              <span
                className="relative mt-[7px] flex h-2 w-2 shrink-0"
                aria-hidden="true"
              >
                <span className="bg-brand/35 absolute inline-flex h-full w-full rounded-full" />
                <span className="bg-brand relative inline-flex h-2 w-2 rounded-full" />
              </span>
              <span className="max-w-md">{personal.availability}</span>
            </div>

            <h1
              id="hero-heading"
              className="hero-rise text-display text-foreground mt-7 font-semibold tracking-[-0.055em] uppercase"
              style={{ animationDelay: "80ms" }}
            >
              <span className="block">{firstName}</span>{" "}
              <span className="brand-gradient-text block">{lastName}</span>
            </h1>

            <p
              className="hero-rise text-muted-foreground mt-8 max-w-2xl text-lg leading-8 sm:text-xl sm:leading-9"
              style={{ animationDelay: "160ms" }}
            >
              {personal.tagline}
            </p>

            <div
              className="hero-rise mt-9 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                href="/projects"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                {homePageContent.primaryCtaLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                {homePageContent.secondaryCtaLabel}
              </Link>
            </div>
          </div>

          <aside
            className="hero-rise lg:border-border lg:col-span-4 lg:border-l lg:pl-8"
            style={{ animationDelay: "320ms" }}
          >
            <div className="border-border border-b pb-3">
              <p className="text-muted-foreground font-mono text-[11px] tracking-[0.2em] uppercase">
                {homePageContent.currentFocusTitle}
              </p>
            </div>
            <p className="text-muted-foreground mt-4 text-sm leading-6">
              {homePageContent.currentFocusDescription}
            </p>
            <ul className="mt-6 space-y-4">
              {personal.currentFocus.map((item, index) => (
                <li
                  key={item}
                  className="border-border grid grid-cols-[24px_1fr] gap-3 border-t pt-4"
                >
                  <span className="text-primary font-mono text-[11px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-foreground/80 text-sm leading-6">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-border mt-6 border-t pt-4">
              <p className="text-muted-foreground font-mono text-[11px] tracking-[0.2em] uppercase">
                Based in
              </p>
              <p className="text-foreground mt-2 text-sm">
                {personal.location}
              </p>
            </div>
          </aside>
        </div>

        <div className="border-border text-muted-foreground mt-14 flex items-center justify-between border-t pt-4 font-mono text-[11px] tracking-[0.18em] uppercase">
          <span className="inline-flex items-center gap-2">
            <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
            Selected work
          </span>
          <span className="hidden sm:inline">
            {personal.technicalInterests.slice(0, 3).join(" / ")}
          </span>
        </div>
      </Section>

      <Section className="border-border border-b">
        <div className="space-y-10">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow={homePageContent.featuredProjectsEyebrow}
                title={homePageContent.featuredProjectsTitle}
                description={homePageContent.featuredProjectsDescription}
              />
              <Link
                href="/projects"
                className="group text-foreground inline-flex shrink-0 items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
              >
                All projects
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 70} className="h-full">
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-border border-b">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow={homePageContent.skillsEyebrow}
                title={homePageContent.skillsTitle}
                description={homePageContent.skillsDescription}
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="border-border border-t">
              {skillCategories.map((category, index) => (
                <Reveal key={category.title} delay={index * 60}>
                  <div className="border-border grid gap-3 border-b py-6 sm:grid-cols-[180px_1fr] sm:gap-6">
                    <h3 className="text-muted-foreground font-mono text-[11px] tracking-[0.18em] uppercase">
                      {category.title}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <li key={skill}>
                          <Badge variant="outline">{skill}</Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-border border-b">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow={homePageContent.journeyEyebrow}
                title={homePageContent.journeyTitle}
                description={homePageContent.journeyDescription}
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <ol>
                {journeyMilestones.map((milestone) => (
                  <TimelineItem
                    key={milestone.title}
                    year={milestone.year}
                    title={milestone.title}
                    description={milestone.description}
                  />
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="footer-canvas border-footer-border text-footer-foreground relative overflow-hidden rounded-[2rem] border px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
            <div
              aria-hidden="true"
              className="footer-grid pointer-events-none absolute inset-0 opacity-40"
            />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-footer-muted font-mono text-[11px] tracking-[0.22em] uppercase">
                  {homePageContent.ctaEyebrow}
                </p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  {homePageContent.ctaTitle}
                </h2>
                <p className="text-footer-muted mt-4 max-w-xl text-base leading-7">
                  {homePageContent.ctaDescription}
                </p>
              </div>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "bg-footer-foreground text-footer hover:bg-footer-foreground/90",
                )}
              >
                {homePageContent.ctaLinkLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
