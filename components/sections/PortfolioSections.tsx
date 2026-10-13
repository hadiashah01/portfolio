import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Mail, Linkedin, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/utils/cn";
import type { Project } from "@/config/projects";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-primary text-sm font-medium tracking-[0.24em] uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="text-muted-foreground text-lg">{description}</p>
    </div>
  );
}

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasImage = project.image && !project.image.includes("placeholder");

  return (
    <Card className="h-auto self-start">
      <div className=" space-y-4   ">
        {hasImage && (
          <div className="border-border group relative overflow-hidden rounded-md border">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              width={800}
              height={450}
              className="h-auto w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
            />
          </div>
        ) }

        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            {project.featured ? <Badge variant="filled">Featured</Badge> : null}
            <Badge variant="soft">{project.technologies[0]}</Badge>
          </div>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <div>
              <p className="text-foreground text-sm font-semibold">Problem</p>
              <p className="text-muted-foreground text-sm">{project.problem}</p>
            </div>
            <div>
              <p className="text-foreground text-sm font-semibold">Solution</p>
              <p className="text-muted-foreground text-sm">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <Badge key={technology} variant="outline">
                {technology}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.githubUrl ? (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
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
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "primary", size: "sm" }),
                  "no-underline",
                )}
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live Demo
              </Link>
            ) : null}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
};

export function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <li className="before:bg-primary after:bg-border relative pl-8 before:absolute before:top-2 before:left-0 before:h-3 before:w-3 before:rounded-full after:absolute after:top-6 after:left-[5px] after:h-full after:w-px">
      <div className="border-border bg-surface space-y-2 rounded-lg border p-5">
        <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
          {year}
        </p>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground text-sm leading-7">{description}</p>
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
        return <Github className="text-primary h-4 w-4" aria-hidden="true" />;
      case "linkedin":
        return <Linkedin className="text-primary h-4 w-4" aria-hidden="true" />;
      case "phone":
        return <Phone className="text-primary h-4 w-4" aria-hidden="true" />;
      default:
        return <Mail className="text-primary h-4 w-4" aria-hidden="true" />;
    }
  };

  return (
    <ul className="space-y-3">
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
              className="border-border bg-surface hover:bg-muted flex items-center justify-between rounded-lg border px-4 py-3 text-sm transition-colors"
            >
              <span className="text-foreground font-medium">
                {method.label}
              </span>
              <span className="text-muted-foreground">{method.value}</span>
              {getIcon(method.label)}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
