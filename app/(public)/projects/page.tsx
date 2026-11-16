import { Section } from "@/components/ui/Section";
import { ProjectCard, PageIntro } from "@/components/sections";
import { Reveal } from "@/components/motion";
import { buildMetadata } from "@/config/metadata";
import { projects } from "@/config/projects";
import { projectsPageContent } from "@/config/personal";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Independent business websites and React projects by Hadia Shahjahan, each with a live demo, source code, and implementation details.",
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
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                variant="featured"
                headingLevel="h2"
                priority={index < 2}
              />
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}
