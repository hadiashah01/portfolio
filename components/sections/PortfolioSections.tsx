import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/utils/cn";
import type { Project } from "@/config/projects";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </p>
      </div>
      <Heading className="mt-5 text-3xl font-medium tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
        {title}
      </Heading>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}

type ProjectCardProps = {
  project: Project;
  index?: number;
  variant?: "featured" | "detailed";
  priority?: boolean;
  headingLevel?: "h2" | "h3";
};

function ProjectLinks({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (!project.githubUrl && !project.demoUrl) return null;

  if (compact) {
    return (
      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-5">
        {project.githubUrl ? (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </Link>
        ) : null}
        {project.demoUrl ? (
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Live demo
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {project.githubUrl ? (
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} on GitHub`}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "no-underline",
          )}
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </Link>
      ) : null}
      {project.demoUrl ? (
        <Link
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live demo`}
          className={cn(
            buttonVariants({ variant: "primary", size: "sm" }),
            "no-underline",
          )}
        >
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
          Live demo
        </Link>
      ) : null}
    </div>
  );
}

function ProjectPreview({
  project,
  index,
  priority,
  sizes,
}: {
  project: Project;
  index: number;
  priority: boolean;
  sizes: string;
}) {
  const hasImage = Boolean(
    project.image && !project.image.includes("placeholder"),
  );

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-muted">
      {hasImage ? (
        <Image
          src={project.image as string}
          alt={`${project.title} website preview`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
      ) : (
        <div className="grid h-full w-full place-items-center px-6 text-center">
          <span className="font-serif text-4xl italic text-muted-foreground/60">
            {project.title}
          </span>
        </div>
      )}
      <span className="absolute top-4 left-4 rounded-full border border-border bg-background/85 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-foreground backdrop-blur-sm">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export function ProjectCard({
  project,
  index = 0,
  variant = "featured",
  priority = false,
  headingLevel = "h3",
}: ProjectCardProps) {
  const headingId = `project-title-${project.slug}`;
  const projectNumber = String(index + 1).padStart(2, "0");
  const ProjectHeading = headingLevel;

  if (variant === "detailed") {
    return (
      <article
        aria-labelledby={headingId}
        className="group grid gap-8 border-t border-border pt-10 lg:grid-cols-12 lg:gap-10"
      >
        <div
          className={cn(
            "lg:col-span-7",
            index % 2 === 1 ? "lg:order-2" : "lg:order-1",
          )}
        >
          <ProjectPreview
            project={project}
            index={index}
            priority={priority}
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>

        <div
          className={cn(
            "flex flex-col lg:col-span-5",
            index % 2 === 1 ? "lg:order-1" : "lg:order-2",
          )}
        >
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="text-primary">{projectNumber}</span>
            <span className="h-px w-6 bg-border" aria-hidden="true" />
            <span>{project.featured ? "Featured project" : "Project"}</span>
          </div>

          <ProjectHeading
            id={headingId}
            className="mt-3 text-2xl font-medium tracking-[-0.02em] text-foreground sm:text-3xl"
          >
            {project.title}
          </ProjectHeading>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
            {project.description}
          </p>

          {project.problem || project.solution ? (
            <dl className="mt-6 space-y-4 border-t border-border pt-5">
              {project.problem ? (
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Problem
                  </dt>
                  <dd className="mt-1.5 text-sm leading-7 text-foreground/80">
                    {project.problem}
                  </dd>
                </div>
              ) : null}
              {project.solution ? (
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Solution
                  </dt>
                  <dd className="mt-1.5 text-sm leading-7 text-foreground/80">
                    {project.solution}
                  </dd>
                </div>
              ) : null}
            </dl>
          ) : null}

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <li key={technology}>
                <Badge variant="outline">{technology}</Badge>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    );
  }

  const visibleTechnologies = project.technologies.slice(0, 4);
  const remainingTechnologies =
    project.technologies.length - visibleTechnologies.length;

  return (
    <article
      aria-labelledby={headingId}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-300 hover:border-foreground/20"
    >
      <div className="p-2.5 pb-0">
        <ProjectPreview
          project={project}
          index={index}
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {projectNumber} / Project
            </p>
            <ProjectHeading
              id={headingId}
              className="mt-2 text-xl font-medium tracking-[-0.02em] text-foreground sm:text-2xl"
            >
              {project.title}
            </ProjectHeading>
          </div>
          {project.featured ? (
            <Badge variant="filled" className="shrink-0">
              Featured
            </Badge>
          ) : null}
        </div>

        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {visibleTechnologies.map((technology) => (
            <li key={technology}>
              <Badge variant="outline">{technology}</Badge>
            </li>
          ))}
          {remainingTechnologies > 0 ? (
            <li>
              <Badge variant="soft">+{remainingTechnologies}</Badge>
            </li>
          ) : null}
        </ul>

        <ProjectLinks project={project} compact />
      </div>
    </article>
  );
}

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  headingLevel?: "h2" | "h3";
};

export function TimelineItem({
  year,
  title,
  description,
  headingLevel = "h3",
}: TimelineItemProps) {
  const TimelineHeading = headingLevel;

  return (
    <li className="grid gap-2 border-t border-border py-6 sm:grid-cols-[96px_1fr] sm:gap-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
        {year}
      </p>
      <div>
        <TimelineHeading className="text-lg font-medium tracking-[-0.01em] text-foreground sm:text-xl">
          {title}
        </TimelineHeading>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          {description}
        </p>
      </div>
    </li>
  );
}

type ContactMethodListProps = {
  methods: ReadonlyArray<{ label: string; value: string; href: string }>;
};

export function ContactMethodList({ methods }: ContactMethodListProps) {
  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "github":
        return <Github className="h-4 w-4" aria-hidden="true" />;
      case "linkedin":
        return <Linkedin className="h-4 w-4" aria-hidden="true" />;
      case "phone":
        return <Phone className="h-4 w-4" aria-hidden="true" />;
      default:
        return <Mail className="h-4 w-4" aria-hidden="true" />;
    }
  };

  return (
    <ul className="divide-y divide-border border-y border-border">
      {methods.map((method) => {
        const isEmail = method.label.toLowerCase() === "email";
        const isPhone = method.label.toLowerCase() === "phone";
        const isExternal = !isEmail && !isPhone;
        const finalHref =
          isEmail && !method.href.startsWith("mailto:")
            ? `mailto:${method.href}`
            : method.href;

        return (
          <li key={method.label}>
            <a
              href={finalHref}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group flex min-w-0 items-center gap-4 py-4 transition-colors hover:text-primary"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-surface text-primary transition-colors group-hover:border-primary/30">
                {getIcon(method.label)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {method.label}
                </span>
                <span className="mt-0.5 block truncate text-sm text-foreground">
                  {method.value}
                </span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
