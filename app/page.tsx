import { HeroSection } from "@/components/hero-section";
import { VisualJourney } from "@/components/visual-journey";
import { HowIWork } from "@/components/how-i-work";
import { ContactSection } from "@/components/contact-section";
import { SectionHeading } from "@/components/section-heading";
import { FeaturedProjectTeaser } from "@/components/featured-project-teaser";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="Field-tested builder bridging engineering reality with AI."
        description={
          <p>
            I build AI-powered solutions for the physical world. With a
            background delivering high-stakes marine infrastructure, I know that
            software only matters if it works in the field.
          </p>
        }
        primaryCta={{ label: "View Projects", href: "/projects" }}
        secondaryCta={{ label: "Get in Touch", href: "mailto:contact@aliwagih.com" }}
        status="Available for new projects"
        showWaves
      />

      {/* How I Work */}
      <HowIWork />

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <SectionHeading
              title="Featured Projects"
              subtitle="Products, prototypes, and concepts exploring the intersection of construction and AI."
              className="mb-0"
            />
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              View all projects
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectTeaser
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              View all projects
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <VisualJourney />

      {/* Contact CTA */}
      <ContactSection />
    </div>
  );
}
