export type ProjectCategory = "All" | "AI & Automation" | "Dashboards" | "Product";

export interface Project {
    slug: string;
    title: string;
    displayTitle: string; // The user-facing title (may be redacted)
    category: ProjectCategory;
    status: "In progress" | "Prototype" | "Concept" | "Shipped";
    oneLiner: string;
    tags: string[];
    featured: boolean;
    link?: string;
    redacted?: boolean;
}

export const projects: Project[] = [
    {
        slug: "stealth-ops-platform",
        title: "Stealth Ops Intelligence Platform (IbexIQ)", // For internal ref if needed
        displayTitle: "Stealth Ops Intelligence Platform (IbexIQ)",
        category: "Product",
        status: "In progress",
        oneLiner: "An operations intelligence product for construction/engineering workflows.",
        tags: ["Next.js", "AI", "Construction Ops", "Supabase"],
        featured: true,
        redacted: true,
    },
    {
        slug: "training-analytics-dashboard",
        title: "Training Analytics Dashboard",
        displayTitle: "Training Analytics Dashboard",
        category: "Dashboards",
        status: "Prototype",
        oneLiner: "Tracking training load, performance trends, and team readiness.",
        tags: ["React", "D3.js", "Analytics"],
        featured: true,
    },
    {
        slug: "project-controls-automation",
        title: "Project Controls Automation",
        displayTitle: "Project Controls Automation",
        category: "AI & Automation",
        status: "Concept",
        oneLiner: "Automating routine scheduling updates and risk flagging using NLP.",
        tags: ["Python", "NLP", "Automation"],
        featured: true,
    },
    {
        slug: "rfi-assistant",
        title: "RFI Assistant",
        displayTitle: "RFI / Submittal Assistant",
        category: "AI & Automation",
        status: "Concept",
        oneLiner: "Intelligent drafting and conflict detection for construction RFIs.",
        tags: ["LLMs", "RAG", "Engineering"],
        featured: false,
    },
    {
        slug: "marine-risk-tracker",
        title: "Marine Risk Tracker",
        displayTitle: "Marine Project Risk Dashboard",
        category: "Dashboards",
        status: "Prototype",
        oneLiner: "Real-time risk visualization for complex marine infrastructure projects.",
        tags: ["TypeScript", "Mapbox", "Data Viz"],
        featured: true,
    }
];

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
