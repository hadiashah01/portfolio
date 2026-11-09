import { Section } from "@/components/ui/Section";
import { ExpandableProjectGallery, PageIntro } from "@/components/sections";
import { Reveal } from "@/components/motion";
import { buildMetadata } from "@/config/metadata";
import { projects } from "@/config/projects";
import { projectsPageContent } from "@/config/personal";

export const metadata = buildMetadata({
  title: "Projects",
  description: "Independent frontend projects built with React, Next.js, responsive design, and accessible interfaces.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <Section containerSize="lg" className="pt-16 pb-16 sm:pt-24 sm:pb-20">
        <PageIntro
          eyebrow={projectsPageContent.eyebrow}
          title={projectsPageContent.title}
          description={projectsPageContent.description}
          meta={`${String(projects.length).padStart(2, "0")} projects`}
        />
      </Section>

      <Section containerSize="lg" className="pt-0 pb-20 sm:pb-28">
        <Reveal>
          <ExpandableProjectGallery projects={projects} priority />
        </Reveal>
      </Section>
    </>
  );
}
