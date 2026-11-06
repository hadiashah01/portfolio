import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageIntro, ProjectCard } from "@/components/sections";
import { Reveal } from "@/components/motion";
import { Section } from "@/components/ui/Section";
import { projects } from "@/config/projects";
import { buildMetadata } from "@/config/metadata";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return buildMetadata({
      title: "Project not found",
      description: "The requested project could not be found.",
      path: "/projects",
    });
  }

  return buildMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];

  return (
    <>
      <Section containerSize="lg" className="pt-16 pb-16 sm:pt-24 sm:pb-20">
        <PageIntro
          eyebrow={project.featured ? "Featured project" : "Project"}
          title={project.title}
          description={project.description}
          meta={project.technologies.join(" / ")}
        />
      </Section>

      <Section containerSize="lg" className="pt-0 pb-20 sm:pb-28">
        <Reveal>
          <ProjectCard
            project={project}
            index={projectIndex}
            variant="detailed"
            headingLevel="h2"
            priority
          />
        </Reveal>
      </Section>
    </>
  );
}
