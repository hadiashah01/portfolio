import { Section } from "@/components/ui/Section";
import { PageIntro, ContactMethodList } from "@/components/sections";
import { Reveal } from "@/components/motion";
import { buildMetadata } from "@/config/metadata";
import { contactPageContent, personal } from "@/config/personal";
import { contactMethods } from "@/config/social";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact Hadia Shahjahan about frontend developer opportunities, remote roles, freelance projects, or collaborations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section containerSize="lg" className="pt-16 pb-20 sm:pt-24 sm:pb-28">
      <PageIntro
        eyebrow={contactPageContent.eyebrow}
        title={contactPageContent.title}
        description={contactPageContent.description}
        meta={personal.availability}
      />

      <div className="border-border mt-16 grid gap-14 border-t pt-10 lg:grid-cols-12 lg:gap-8">
        <div className="min-w-0 lg:col-span-5">
          <Reveal>
            <h2 className="text-foreground text-xl font-semibold tracking-[-0.02em]">
              {contactPageContent.reachOutTitle}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md text-base leading-7">
              {contactPageContent.reachOutDescription}
            </p>
            <ContactMethodList methods={contactMethods} />
          </Reveal>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <Reveal delay={80}>
            <div className="border-border bg-surface rounded-lg border p-6 sm:p-8">
              <h2 className="text-foreground text-2xl font-semibold tracking-[-0.035em]">
                {contactPageContent.formTitle}
              </h2>
              <p className="text-muted-foreground mt-2 text-sm leading-6">
                {contactPageContent.formDescription}
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
