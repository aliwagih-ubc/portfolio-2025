export type ProjectCategory = "All" | "AI & Automation" | "Dashboards" | "Product";

export interface Project {
  slug: string;
  title: string;
  displayTitle: string;
  category: ProjectCategory;
  status: "In progress" | "Prototype" | "Concept" | "Shipped";
  oneLiner: string;
  tags: string[];
  featured: boolean;
  link?: string;
  redacted?: boolean;
  problem?: string;
  solution?: string;
  result?: string;
}

export const projects: Project[] = [
  {
    slug: "stealth-ops-platform",
    title: "Stealth Ops Intelligence Platform (IbexIQ)",
    displayTitle: "Operations Intelligence Platform",
    category: "Product",
    status: "In progress",
    oneLiner: "An operations intelligence product for construction/engineering workflows.",
    tags: ["Next.js", "AI", "Construction Ops", "Supabase", "TypeScript"],
    featured: true,
    redacted: true,
    problem: "Field teams spend hours copying data between systems instead of making decisions.",
    solution: "AI-powered platform that unifies project data and surfaces actionable insights.",
    result: "Beta testing with early construction partners.",
  },
  {
    slug: "training-analytics-dashboard",
    title: "Training Analytics Dashboard",
    displayTitle: "Training Analytics Dashboard",
    category: "Dashboards",
    status: "Prototype",
    oneLiner: "Tracking training load, performance trends, and team readiness.",
    tags: ["React", "D3.js", "Analytics", "TypeScript"],
    featured: true,
    problem: "Coaches lack visibility into athlete load and recovery patterns.",
    solution: "Real-time dashboard visualizing training metrics and fatigue indicators.",
    result: "Prototype complete, gathering feedback.",
  },
  {
    slug: "project-controls-automation",
    title: "Project Controls Automation",
    displayTitle: "Project Controls Automation",
    category: "AI & Automation",
    status: "Concept",
    oneLiner: "Automating routine scheduling updates and risk flagging using NLP.",
    tags: ["Python", "NLP", "Automation", "LangChain"],
    featured: true,
    problem: "Project managers spend 40% of time on manual schedule updates and reporting.",
    solution: "NLP system that parses meeting notes and auto-updates schedules.",
    result: "Concept validated with industry interviews.",
  },
  {
    slug: "rfi-assistant",
    title: "RFI Assistant",
    displayTitle: "RFI / Submittal Assistant",
    category: "AI & Automation",
    status: "Concept",
    oneLiner: "Intelligent drafting and conflict detection for construction RFIs.",
    tags: ["LLMs", "RAG", "Engineering", "Python"],
    featured: false,
    problem: "RFI responses take days due to manual specification searching.",
    solution: "RAG-powered assistant that drafts responses using project documents.",
    result: "Early research phase.",
  },
  {
    slug: "marine-risk-tracker",
    title: "Marine Risk Tracker",
    displayTitle: "Marine Project Risk Dashboard",
    category: "Dashboards",
    status: "Prototype",
    oneLiner: "Real-time risk visualization for complex marine infrastructure projects.",
    tags: ["TypeScript", "Mapbox", "Data Viz", "React"],
    featured: true,
    problem: "Marine projects face compound risks that traditional tools miss.",
    solution: "Interactive dashboard correlating weather, tides, and schedule data.",
    result: "Prototype tested on past project data.",
  },
];

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
