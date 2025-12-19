import { projects, allTags } from "@/data/projects";
import { ProjectsView } from "@/components/projects-view";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                eyebrow="My Work"
                title="Solutions grounded in reality."
                description={
                    <p>
                        A collection of products, prototypes, and concepts exploring the intersection of construction/engineering operations and modern AI.
                    </p>
                }
            />

            <section className="container-custom pb-24 min-h-[50vh]">
                <ProjectsView projects={projects} allTags={allTags} />
            </section>

            <ContactSection />
        </div>
    );
}
