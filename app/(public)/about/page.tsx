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
import { buildMetadata } from "@/config/metadata";
import { aboutPageContent, personal } from "@/config/personal";

export const metadata = buildMetadata({
  title: "About",
  description: "Learn about my background, approach, and the work I do.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section containerSize="lg" className="pt-24 sm:pt-32 pb-20 sm:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="space-y-8">
            <SectionHeading
              eyebrow={aboutPageContent.eyebrow}
              title={aboutPageContent.title}
              description={aboutPageContent.description}
            />
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              {personal.intro}
            </p>
          </div>

          <Card className="bg-surface-elevated">
            <CardHeader>
              <CardTitle>{aboutPageContent.quickProfileTitle}</CardTitle>
              <CardDescription>
                {aboutPageContent.quickProfileDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-border rounded-md border p-4 text-sm">
                <p className="text-foreground font-medium">Education</p>
                <p className="text-muted-foreground">
                  {personal.education}
                </p>
              </div>
              <div className="border-border rounded-md border p-4 text-sm">
                <p className="text-foreground font-medium">Location</p>
                <p className="text-muted-foreground">
                  {personal.location}
                </p>
              </div>
              <div className="border-border rounded-md border p-4 text-sm">
                <p className="text-foreground font-medium">Email</p>
                <p className="text-muted-foreground">
                  {personal.email}
                </p>
              </div>
              <div className="pt-4">
                <a
                  href={personal.resumePath}
                  download
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "w-full justify-center text-sm font-semibold"
                  )}
                >
                  Download Resume
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="border-t border-border/60">
        <div className="space-y-12">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>{aboutPageContent.currentFocusTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {personal.currentFocus.map((item) => (
                  <div key={item} className="text-muted-foreground text-sm">
                    • {item}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{aboutPageContent.technicalInterestsTitle}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {personal.technicalInterests.map((interest) => (
                  <Badge key={interest} variant="outline">
                    {interest}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{aboutPageContent.learningPhilosophyTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {personal.learningPhilosophy}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I don&apos;t position myself as an agency or an expert in everything.
              I&apos;m a frontend developer who builds thoughtful websites for
              businesses &mdash; work I can own from start to finish. If you have a
              project in mind, I&apos;d be glad to discuss it.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}