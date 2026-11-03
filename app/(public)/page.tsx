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
        className="border-b border-border pt-14 pb-14 sm:pt-20 sm:pb-20"
        aria-labelledby="hero-heading"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <div className="hero-rise flex items-start gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="relative mt-[7px] flex h-2 w-2 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent/35" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="max-w-md">{personal.availability}</span>
            </div>

            <h1
              id="hero-heading"
              className="hero-rise mt-7 text-display text-foreground"
              style={{ animationDelay: "80ms" }}
            >
              <span className="block">{firstName}</span>{" "}
              <span className="block font-serif font-normal italic text-primary">
                {lastName}
              </span>
            </h1>

            <p
              className="hero-rise mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9"
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
            className="hero-rise lg:col-span-4 lg:border-l lg:border-border lg:pl-8"
            style={{ animationDelay: "320ms" }}
          >
            <div className="border-b border-border pb-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {homePageContent.currentFocusTitle}
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {homePageContent.currentFocusDescription}
            </p>
            <ul className="mt-6 space-y-4">
              {personal.currentFocus.map((item, index) => (
                <li
                  key={item}
                  className="grid grid-cols-[24px_1fr] gap-3 border-t border-border pt-4"
                >
                  <span className="font-mono text-[11px] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-6 text-foreground/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border pt-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Based in
              </p>
              <p className="mt-2 text-sm text-foreground">{personal.location}</p>
            </div>
          </aside>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-border pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
            Selected work
          </span>
          <span className="hidden sm:inline">
            {personal.technicalInterests.slice(0, 3).join(" / ")}
          </span>
        </div>
      </Section>

      <Section className="border-b border-border">
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
                className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                All projects
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={index * 70}
                className="h-full"
              >
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-b border-border">
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
            <div className="border-t border-border">
              {skillCategories.map((category, index) => (
                <Reveal key={category.title} delay={index * 60}>
                  <div className="grid gap-3 border-b border-border py-6 sm:grid-cols-[180px_1fr] sm:gap-6">
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
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

      <Section className="border-b border-border">
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
          <div className="rounded-2xl bg-foreground px-6 py-12 text-background sm:px-10 sm:py-14 lg:px-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-background/60">
                  {homePageContent.ctaEyebrow}
                </p>
                <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                  {homePageContent.ctaTitle}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-background/70">
                  {homePageContent.ctaDescription}
                </p>
              </div>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "bg-background text-foreground hover:bg-background/90",
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
