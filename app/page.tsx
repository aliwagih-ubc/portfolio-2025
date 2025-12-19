import { HeroSection } from "@/components/hero-section";
import { JourneyStrip } from "@/components/journey-strip";
import { ProjectGrid } from "@/components/project-grid";
import { HowIWork } from "@/components/how-i-work";
import { ContactSection } from "@/components/contact-section";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        eyebrow="Civil Engineer → Consulting PM → CS Student → AI Builder"
        title="Bridging engineering reality with the power of software."
        description={
          <>
            <p>
              I build AI-powered solutions for the physical world. With a background delivering high-stakes marine infrastructure projects, I know that software only matters if it works in the field.
            </p>
            <p>
              Now, I combine systems thinking with modern engineering to help teams make better decisions under pressure.
            </p>
          </>
        }
        primaryCta={{ label: "See Projects", href: "/projects" }}
        secondaryCta={{ label: "My Story", href: "/about" }}
        status="Currently: PM on Marine Infrastructure • CS Student • Building Stealth Ops Platform"
      />

      <JourneyStrip />

      <section className="py-24 container-custom">
        <div className="flex justify-between items-end mb-12">
          <SectionHeading
            title="Featured Projects"
            className="mb-0" // Override margin since we handle it in container
          />
          <Link href="/projects" className="hidden md:inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            View all projects <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <ProjectGrid projects={featuredProjects} />

        <div className="mt-12 text-center md:hidden">
          <Link href="/projects" className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors">
            View all projects <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      <HowIWork />

      <ContactSection />
    </div>
  );
}
