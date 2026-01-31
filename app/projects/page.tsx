import { projects } from "@/data/projects";
import { ProjectsList } from "@/components/projects-list";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <HeroSection
        eyebrow="My Work"
        title="Solutions grounded in reality."
        description={
          <p>
            A collection of products, prototypes, and concepts exploring the
            intersection of construction/engineering operations and modern AI.
          </p>
        }
        compact
      />

      <section className="container-custom pb-24 md:pb-32">
        <ProjectsList projects={projects} />
      </section>

      <ContactSection />
    </div>
  );
}
