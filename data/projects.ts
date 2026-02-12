export type ProjectCategory =
  | "All"
  | "AI & Automation"
  | "Dashboards & Apps"
  | "Product"
  | "Case Study";

export type DiagramId = "ops-platform" | "arabic-pipeline" | "gohelpme";

export type ProjectMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "diagram"; id: DiagramId }
  | { type: "placeholder" };

export interface Project {
  slug: string;
  title: string;
  displayTitle: string;
  category: ProjectCategory;
  status: "In progress" | "Prototype" | "Concept" | "Shipped";
  oneLiner: string;
  tags: string[];
  featured: boolean;
  media: ProjectMedia;
  link?: string;
  redacted?: boolean;
  problem?: string;
  solution?: string;
  result?: string;
}

export const projects: Project[] = [
  {
    slug: "ops-intelligence-platform",
    title: "Operations Intelligence Platform (IbexIQ)",
    displayTitle: "Operations Intelligence Platform",
    category: "Product",
    status: "In progress",
    oneLiner:
      "Ops intelligence platform for portfolio oversight, project health checks, forecasting, and earned value reporting.",
    tags: ["Gemini", "Claude", "Next.js", "Amazon RDS", "Acumatica"],
    featured: true,
    redacted: true,
    media: { type: "diagram", id: "ops-platform" },
    problem:
      "Executives lack real-time portfolio visibility; PMs spend too much time on fragmented monthly reporting and forecasting.",
    solution:
      "Centralizes project and org data (SharePoint, Acumatica CRM, Dayforce HR), enabling drill-down dashboards and a PM module for monthly health checks, cost forecasting, and EVM.",
    result:
      "In-user testing with internal teams.",
  },
  {
    slug: "home-builder-estimating-assistant",
    title: "Home Builder Estimating Assistant",
    displayTitle: "Home Builder Estimating Assistant",
    category: "AI & Automation",
    status: "Concept",
    oneLiner:
      "AI estimating assistant that drafts accurate home-build cost estimates from templates, history, and local comps.",
    tags: ["RAG", "Gemini", "Claude", "Supabase", "Web Scraping", "Excel Automation"],
    featured: false,
    media: { type: "image", src: "/projects/home-builder-estimating-assistant/cover.png", alt: "Home Builder Estimating Assistant — data flow diagram" },
    problem:
      "Home builder loses leads because estimates take too long and accuracy varies with experience and workload.",
    solution:
      "Ingests existing Excel templates and historical job costs, enriches with nearby comp data, and uses an LLM + RAG layer to generate a draft estimate with line items and assumptions for review.",
    result:
      "Concept defined; next step is a prototype with mocked cost history and template ingestion.",
  },
  {
    slug: "home-owner-client-dashboard",
    title: "Home Owner Client Dashboard",
    displayTitle: "Home Owner Client Dashboard",
    category: "Dashboards & Apps",
    status: "Concept",
    oneLiner:
      "Client dashboard for homeowners to track build progress, schedule, photos, and costs in one place.",
    tags: ["Next.js", "TypeScript", "Sage Construction API", "Supabase", "File Storage/CDN"],
    featured: false,
    redacted: true,
    media: { type: "image", src: "/projects/home-owner-client-dashboard/cover.png", alt: "Home Owner Client Dashboard — concept wireframe" },
    problem:
      "Homeowners constantly ask for updates; builders waste time on repetitive status back-and-forth and sharing photos across channels.",
    solution:
      "A lightweight client-facing portal where builders post periodic updates (milestones, schedule shifts, photos/media) and costs sync in via Sage Construction Management APIs.",
    result:
      "Concept defined. Next task is to create a prototype with mocked data.",
  },
  {
    slug: "gohelpme",
    title: "GoHelpMe",
    displayTitle: "GoHelpMe",
    category: "Dashboards & Apps",
    status: "Prototype",
    oneLiner:
      "GoFundMe-style platform where people pledge volunteer hours (not money) to campaigns.",
    tags: ["Next.js 15", "Supabase", "TypeScript", "Tailwind CSS", "Claude AI"],
    featured: true,
    media: { type: "diagram", id: "gohelpme" },
    problem:
      "Crowdfunding excludes people who can't donate cash but can contribute time and skills; volunteer coordination is messy.",
    solution:
      "Campaigns raise volunteer hours with skill matching, hour-goal tracking, approvals, search/filters, and OAuth login.",
    result:
      "MVP backbone built (DB schema + auth + core flows). Frontend components in progress.",
  },
  {
    slug: "cpsc-436c-cloud-computing",
    title: "CPSC 436C - Cloud Computing: A Case Study",
    displayTitle: "Cloud Computing: A Case Study",
    category: "Case Study",
    status: "In progress",
    oneLiner:
      "Experiment completing a cloud computing course using custom AI agents with full transparency and logging.",
    tags: ["Custom AI Agents", "Claude", "Cursor", "Google Cloud"],
    featured: false,
    media: { type: "image", src: "/projects/cpsc-436c-cloud-computing/cover.png", alt: "Cloud Computing Case Study — GenAI interaction log" },
    problem:
      "AI can meaningfully contribute to coursework, but most workflows are opaque and lack accountability and integrity controls.",
    solution:
      "Built a structured AI-collaboration framework (multiple specialized agents) that logs every interaction and ties work to evidence and git commits, backed by a CCT methodology and an ethics ledger.",
    result:
      "Custom AI agents and their interaction framework are built and operational, with end-to-end logging and commit-level traceability in place. Capstone in development: an engineering knowledge preservation system that extracts key data from large documents before cloud storage deletion.",
  },
  {
    slug: "ai-content-pipeline",
    title: "Arabic AI Content Pipeline",
    displayTitle: "Arabic AI Content Pipeline",
    category: "AI & Automation",
    status: "Shipped",
    oneLiner:
      "Automated pipeline that discovers AI trends and generates Egyptian Arabic scripts end-to-end.",
    tags: ["Gemini AI", "GitHub Actions", "Notion API", "YouTube Data API", "Google Docs API"],
    featured: false,
    media: { type: "diagram", id: "arabic-pipeline" },
    problem:
      "Producing consistent, high-quality AI content in Egyptian Arabic is time-heavy: trend tracking, scripting, translation, and pipeline management.",
    solution:
      "Zero-infra automation that monitors AI sources and creators, scores opportunities with Gemini, and generates English scripts then localizes to Egyptian Arabic (RTL Google Docs), orchestrated via GitHub Actions and managed through Notion workflows with notifications.",
    result:
      "Fully operational system (trend scouting, creator monitoring/discovery, script writing, Arabic localization, and on-demand agent). Running on schedules and actively used for a 2–3x/week publishing cadence target within low/no-cost limits.",
  },
  {
    slug: "arabic-video-script-generator",
    title: "Arabic Video Script Generator Extension",
    displayTitle: "Arabic Video Script Generator",
    category: "AI & Automation",
    status: "Shipped",
    oneLiner:
      "Chrome extension that turns multiple YouTube videos into an Egyptian Arabic script via AI synthesis.",
    tags: ["Gemini", "Claude", "Google Docs API", "Notion API", "Chrome Extension"],
    featured: true,
    media: { type: "image", src: "/projects/arabic-video-script-generator/cover.png", alt: "Arabic Video Script Generator — extension UI on YouTube" },
    problem:
      "Creating Egyptian Arabic scripts from multiple English videos takes hours: research, synthesis, dialect translation, b-roll, and formatting.",
    solution:
      "Browser-native workflow: queue videos on YouTube, fetch transcripts, synthesize across 5–10 sources, generate a 10–12 min Egyptian Arabic script, output a properly formatted Google Doc, and log metadata to Notion.",
    result:
      "End-to-end working extension (collection → transcript → generation → Google Doc → Notion) with OAuth, retries/backoff, and token expiry handling. Cuts script creation from ~3–4 hours to ~2–3 minutes.",
  },
];

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
