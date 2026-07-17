import Link from "next/link";

import { Section } from "@/components/ui/Section";
import { buttonVariants } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { SectionHeading, ProjectCard } from "@/components/sections";
import { buildMetadata } from "@/config/metadata";
import { homePageContent, personal } from "@/config/personal";
import { featuredProjects } from "@/config/projects";
import { skillCategories } from "@/config/skills";
import { journeyMilestones } from "@/config/journey";

export const metadata = buildMetadata({
  title: "Home",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Section containerSize="lg" className="pt-20 sm:pt-28">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="filled">{personal.professionalTitle}</Badge>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                {personal.name}
              </h1>
              <p className="text-muted-foreground max-w-2xl text-lg leading-8">
                {personal.tagline}
              </p>
              <p className="text-muted-foreground max-w-xl text-base">
                {personal.availability}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className={buttonVariants({ variant: "primary", size: "md" })}
              >
                {homePageContent.primaryCtaLabel}
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "outline", size: "md" })}
              >
                {homePageContent.secondaryCtaLabel}
              </Link>
            </div>
          </div>

          <Card className="bg-surface-elevated">
            <CardHeader>
              <CardTitle>{homePageContent.currentFocusTitle}</CardTitle>
              <CardDescription>
                {homePageContent.currentFocusDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {personal.currentFocus.map((item) => (
                <div
                  key={item}
                  className="border-border bg-background/70 text-muted-foreground rounded-md border p-3 text-sm"
                >
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="border-border/70 border-t">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow={homePageContent.featuredProjectsEyebrow}
            title={homePageContent.featuredProjectsTitle}
            description={homePageContent.featuredProjectsDescription}
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-border/70 border-t">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow={homePageContent.skillsEyebrow}
            title={homePageContent.skillsTitle}
            description={homePageContent.skillsDescription}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {skillCategories.map((category) => (
              <Card key={category.title}>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-border/70 border-t">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <SectionHeading
            eyebrow={homePageContent.journeyEyebrow}
            title={homePageContent.journeyTitle}
            description={homePageContent.journeyDescription}
          />
          <Card>
            <CardContent className="space-y-4">
              {journeyMilestones.map((milestone) => (
                <div
                  key={milestone.title}
                  className="border-border rounded-md border p-4"
                >
                  <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
                    {milestone.year}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="border-border/70 border-t">
        <div className="border-border bg-surface rounded-2xl border px-6 py-10 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-primary text-sm font-medium tracking-[0.24em] uppercase">
                {homePageContent.ctaEyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {homePageContent.ctaTitle}
              </h2>
              <p className="text-muted-foreground text-lg">
                {homePageContent.ctaDescription}
              </p>
            </div>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "primary", size: "md" })}
            >
              {homePageContent.ctaLinkLabel}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
