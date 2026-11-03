import { Download } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { PageIntro } from "@/components/sections";
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
      <Section containerSize="lg" className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <PageIntro
          eyebrow={aboutPageContent.eyebrow}
          title={aboutPageContent.title}
          description={aboutPageContent.description}
          meta={`${personal.professionalTitle} / ${personal.location}`}
        />

        <div className="border-border mt-16 grid gap-12 border-t pt-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="text-foreground text-lg font-semibold">
                {aboutPageContent.quickProfileTitle}
              </h2>
              <p className="text-muted-foreground mt-3 text-sm leading-6">
                {aboutPageContent.quickProfileDescription}
              </p>

              <dl className="mt-8 space-y-5">
                {profileRows.map((row) => (
                  <div key={row.label}>
                    <dt className="text-muted-foreground text-sm">
                      {row.label}
                    </dt>
                    <dd className="text-foreground mt-1 text-base">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href={personal.resumePath}
                download
                className="link-underline text-foreground mt-8 inline-flex items-center gap-2 text-sm font-semibold"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download resume
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <p className="text-foreground max-w-3xl text-2xl leading-10 tracking-[-0.025em] sm:text-3xl sm:leading-[1.35]">
                {personal.intro}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="border-border border-t">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-8">
          <Reveal>
            <div>
              <h2 className="text-foreground text-xl font-semibold tracking-[-0.02em]">
                {aboutPageContent.currentFocusTitle}
              </h2>
              <ul className="mt-6">
                {personal.currentFocus.map((item) => (
                  <li
                    key={item}
                    className="border-border text-muted-foreground border-t py-4 text-base leading-7"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <h2 className="text-foreground text-xl font-semibold tracking-[-0.02em]">
                {aboutPageContent.technicalInterestsTitle}
              </h2>
              <p className="text-muted-foreground mt-6 text-base leading-8">
                {personal.technicalInterests.join(" / ")}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-border border-t">
        <Reveal>
          <div className="max-w-5xl">
            <p className="text-primary text-sm font-medium">
              {aboutPageContent.learningPhilosophyTitle}
            </p>
            <blockquote className="text-foreground mt-5 text-3xl leading-[1.25] font-semibold tracking-[-0.04em] sm:text-4xl sm:leading-[1.2] lg:text-5xl">
              &ldquo;{personal.learningPhilosophy}&rdquo;
            </blockquote>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
