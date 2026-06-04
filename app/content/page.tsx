import { HeroSection } from "@/components/hero-section";
import { ContentTabs } from "@/components/content-tabs";
import { ContactSection } from "@/components/contact-section";
import { articles, videos } from "@/data/content";

export default function ContentPage() {
  return (
    <div className="flex flex-col">
      <HeroSection
        eyebrow="Writing & video"
        title="Thinking out loud."
        description={
          <p>
            Notes and videos on AI, construction tech, and switching careers
            from engineering to software. Sometimes in English, sometimes in
            Arabic.
          </p>
        }
        compact
      />

      <section className="container-custom pb-24 md:pb-32">
        <ContentTabs articles={articles} videos={videos} />
      </section>

      <ContactSection variant="minimal" />
    </div>
  );
}
