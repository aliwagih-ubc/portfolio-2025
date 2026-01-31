import { HeroSection } from "@/components/hero-section";
import { ContentTabs } from "@/components/content-tabs";
import { ContactSection } from "@/components/contact-section";
import { articles, videos } from "@/data/content";

export default function ContentPage() {
  return (
    <div className="flex flex-col">
      <HeroSection
        eyebrow="Insights & Content"
        title="Thoughts on building at the edge of AI."
        description={
          <p>
            I write and create content about AI, construction tech, and the
            journey from engineering to software. Sometimes in English, sometimes
            in Arabic.
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
