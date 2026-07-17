import { Section } from "@/components/ui/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/sections";
import { buildMetadata } from "@/config/metadata";
import { aboutPageContent, personal } from "@/config/personal";

export const metadata = buildMetadata({
  title: "About",
  description: "Learn about background, focus areas, and career goals.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section containerSize="lg" className="pt-20 sm:pt-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow={aboutPageContent.eyebrow}
              title={aboutPageContent.title}
              description={aboutPageContent.description}
            />
            <p className="text-muted-foreground max-w-2xl text-lg leading-8">
              {personal.intro}
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>{aboutPageContent.quickProfileTitle}</CardTitle>
              <CardDescription>
                {aboutPageContent.quickProfileDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border-border text-muted-foreground rounded-md border p-4 text-sm">
                <p className="text-foreground font-medium">
                  {aboutPageContent.quickProfileTitle}
                </p>
                <p>{personal.location}</p>
              </div>
              <div className="border-border text-muted-foreground rounded-md border p-4 text-sm">
                <p className="text-foreground font-medium">Email</p>
                <p>{personal.email}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="border-border/70 border-t">
        <div className="grid gap-6 lg:grid-cols-3">
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
              <p className="text-muted-foreground text-sm leading-7">
                {personal.learningPhilosophy}
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
