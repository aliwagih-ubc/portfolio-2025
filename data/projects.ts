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
    status: "Shipped",
    oneLiner:
      "Ops platform that gives execs portfolio visibility and gives PMs one place for health checks, forecasting, and earned value reporting.",
    tags: ["Gemini", "Claude", "Next.js", "Amazon RDS", "Acumatica"],
    featured: false,
    redacted: true,
    media: { type: "diagram", id: "ops-platform" },
    problem:
      "Executives had no real-time view of the portfolio, and PMs lost days each month stitching reports together from systems that don't talk to each other.",
    solution:
      "Pulls project and org data from SharePoint, Acumatica CRM, and Dayforce into one place, with drill-down dashboards and a PM module for monthly health checks, cost forecasting, and EVM.",
    result:
      "Live with internal teams. Runs the monthly project health checks, cost forecasting, and earned value reporting it was built for.",
  },
  {
    slug: "finops-ai",
    title: "Opendoor FinOps AI Agents",
    displayTitle: "Opendoor FinOps AI Agents",
    category: "AI & Automation",
    status: "Prototype",
    oneLiner:
      "Agentic finance automation. Four AI agents that code journal entries, reconcile accounts, write variance narratives, and answer policy questions.",
    tags: ["Claude", "FastAPI", "Next.js", "TypeScript", "Agentic Workflows"],
    featured: true,
    link: "https://finops-ai-dashboard.vercel.app/overview",
    media: { type: "image", src: "/projects/finops-ai/cover.png", alt: "Opendoor FinOps AI Agents — finance automation dashboard" },
    problem:
      "Finance teams burn hours every close on the same repetitive work: coding transactions, matching invoices, explaining variances, and answering the same policy questions.",
    solution:
      "Four agents split the busywork. A classifier codes journal entries against a 57-account chart, a reconciliation agent matches bank to GL and runs three-way invoice matches, a flux agent writes variance narratives, and a policy agent answers finance questions over live data.",
    result:
      "Prototype built to show what agentic accounting can look like. Live dashboard with a build journey and an adoption guide.",
  },
  {
    slug: "lienclock",
    title: "LienClock",
    displayTitle: "LienClock",
    category: "Product",
    status: "Shipped",
    oneLiner:
      "Deadline tracker for BC construction payments. A free lien and prompt-payment calculator, a CPPA readiness audit, and a paid tracker behind them.",
    tags: ["Next.js", "TypeScript", "Supabase", "Resend", "SaaS"],
    featured: true,
    link: "https://lienclock.ca",
    media: { type: "image", src: "/projects/lienclock/cover.png", alt: "LienClock — BC lien and prompt payment deadline tracker" },
    problem:
      "BC's Construction Prompt Payment Act adds strict new payment clocks on top of the existing lien deadlines. Miss one and you lose your leverage, or the money itself.",
    solution:
      "A dual-regime deadline engine that models both the current Builders Lien Act and the incoming CPPA rules, behind a free question-driven calculator and a readiness audit that emails a full report. The paid tracker adds holdback ledgers, SMS and email alerts, and lawyer-reviewed document drafts.",
    result:
      "Live at lienclock.ca ahead of the act coming into force, with a full demo workspace and a growing waitlist.",
  },
  {
    slug: "superintendent",
    title: "Superintendent",
    displayTitle: "Superintendent",
    category: "Product",
    status: "In progress",
    oneLiner:
      "An AI project manager that flips the script. Coding agents ask it for clarification through Linear instead of stalling and waiting on you.",
    tags: ["TypeScript", "Node 20", "Ink", "Linear SDK", "Anthropic SDK", "SQLite", "Next.js"],
    featured: false,
    media: { type: "placeholder" },
    problem:
      "Coding agents stall on ambiguous tickets, so people end up babysitting them instead of doing real work.",
    solution:
      "A daemon that refines Linear tickets by asking clarifying questions, dispatches work across Claude Code, Codex, and Gemini, and escalates only when it's genuinely stuck. It tracks cost per ticket, runs an automated PR self-review loop, and ships a Next.js dashboard for observability. Because refined tickets and plans live in Linear, executives get one place to query for project context.",
    result:
      "In active development.",
  },
  {
    slug: "opendoor-help-center",
    title: "Opendoor Help Center",
    displayTitle: "Opendoor Help Center",
    category: "Product",
    status: "Prototype",
    oneLiner:
      "A rebuilt help center concept for Opendoor with fast search, guided flows, and a walkthrough of how it was made.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Design System"],
    featured: true,
    link: "https://help-center-20.vercel.app/",
    media: { type: "image", src: "/projects/opendoor-help-center/cover.png", alt: "Opendoor Help Center — search and AI assistant" },
    problem:
      "Support docs are easy to write and hard to navigate. People give up before they find the answer.",
    solution:
      "A help center built on Opendoor's design system: searchable articles, guided multi-step flows for common tasks, and a build-journey page that documents the design and engineering decisions behind it.",
    result:
      "Prototype deployed, with a build-journey walkthrough alongside it.",
  },
  {
    slug: "the-help-club",
    title: "The Help Club",
    displayTitle: "The Help Club",
    category: "Dashboards & Apps",
    status: "Shipped",
    oneLiner:
      "A GoFundMe for time. People pledge volunteer hours instead of money to causes they care about.",
    tags: ["Next.js 15", "Supabase", "TypeScript", "Tailwind CSS", "Claude AI"],
    featured: true,
    link: "https://thehelp.club",
    media: { type: "diagram", id: "gohelpme" },
    problem:
      "Crowdfunding leaves out people who can give time and skills but not cash, and coordinating volunteers by hand is messy.",
    solution:
      "Campaigns raise volunteer hours instead of dollars, with skill matching, hour goals, approvals, search and filters, and OAuth login.",
    result:
      "Live at thehelp.club.",
  },
  {
    slug: "cpsc-436c-cloud-computing",
    title: "CPSC 436C - Cloud Computing: A Case Study",
    displayTitle: "Cloud Computing: A Case Study",
    category: "Case Study",
    status: "Shipped",
    oneLiner:
      "An experiment in completing a cloud computing course with custom AI agents, fully logged and traceable.",
    tags: ["Custom AI Agents", "Claude", "Cursor", "Google Cloud"],
    featured: false,
    media: { type: "image", src: "/projects/cpsc-436c-cloud-computing/cover.png", alt: "Cloud Computing Case Study — GenAI interaction log" },
    problem:
      "AI can do real coursework, but most of the time you can't see how it got there, which makes accountability and academic integrity hard to defend.",
    solution:
      "A team of specialized AI agents that logs every interaction and ties each piece of work to evidence and a git commit, backed by a defined methodology and an ethics ledger.",
    result:
      "Finished the course with an A+. The agents and logging framework are built and operational, with commit-level traceability throughout.",
  },
  {
    slug: "arabic-video-script-generator",
    title: "Arabic Video Script Generator Extension",
    displayTitle: "Arabic Video Script Generator",
    category: "AI & Automation",
    status: "Shipped",
    oneLiner:
      "A Chrome extension that turns a stack of YouTube videos into one Egyptian Arabic script.",
    tags: ["Gemini", "Claude", "Google Docs API", "Notion API", "Chrome Extension"],
    featured: false,
    media: { type: "image", src: "/projects/arabic-video-script-generator/cover.png", alt: "Arabic Video Script Generator — extension UI on YouTube" },
    problem:
      "Turning several English videos into an Egyptian Arabic script takes hours of research, synthesis, dialect translation, and formatting.",
    solution:
      "Queue videos right on YouTube, pull their transcripts, synthesize across five to ten sources, and generate a 10 to 12 minute Egyptian Arabic script straight into a formatted Google Doc, with metadata logged to Notion.",
    result:
      "Works end to end, from collecting videos to the finished Google Doc. Cuts script writing from three or four hours down to a couple of minutes.",
  },
  {
    slug: "ai-content-pipeline",
    title: "Arabic AI Content Pipeline",
    displayTitle: "Arabic AI Content Pipeline",
    category: "AI & Automation",
    status: "Shipped",
    oneLiner:
      "An automated pipeline that spots AI trends and writes Egyptian Arabic scripts from start to finish.",
    tags: ["Gemini AI", "GitHub Actions", "Notion API", "YouTube Data API", "Google Docs API"],
    featured: false,
    media: { type: "diagram", id: "arabic-pipeline" },
    problem:
      "Putting out consistent AI content in Egyptian Arabic eats time: tracking trends, scripting, translating, and keeping the pipeline running.",
    solution:
      "Zero-infrastructure automation that watches AI sources and creators, scores story ideas with Gemini, writes scripts in English, then localizes them to Egyptian Arabic in RTL Google Docs. Orchestrated with GitHub Actions and managed through Notion.",
    result:
      "Fully running, from trend scouting to script writing to Arabic localization. On a schedule, aiming for two to three videos a week within free-tier limits.",
  },
  {
    slug: "home-builder-estimating-assistant",
    title: "Home Builder Estimating Assistant",
    displayTitle: "Home Builder Estimating Assistant",
    category: "AI & Automation",
    status: "Prototype",
    oneLiner:
      "An AI estimating assistant that drafts home-build cost estimates from templates, past jobs, and local comps.",
    tags: ["RAG", "Gemini", "Claude", "Supabase", "Web Scraping", "Excel Automation"],
    featured: false,
    media: { type: "image", src: "/projects/home-builder-estimating-assistant/cover.png", alt: "Home Builder Estimating Assistant — data flow diagram" },
    problem:
      "Builders lose leads because estimates take too long, and accuracy swings with whoever is doing them and how busy they are.",
    solution:
      "Reads existing Excel templates and historical job costs, pulls in nearby comp data, and uses an LLM with a RAG layer to draft an estimate with line items and assumptions to review.",
    result:
      "Prototype in progress with mocked cost history and template ingestion.",
  },
  {
    slug: "home-owner-client-dashboard",
    title: "Home Owner Client Dashboard",
    displayTitle: "Home Owner Client Dashboard",
    category: "Dashboards & Apps",
    status: "Prototype",
    oneLiner:
      "A dashboard where homeowners can track build progress, schedule, photos, and costs in one place.",
    tags: ["Next.js", "TypeScript", "Sage Construction API", "Supabase", "File Storage/CDN"],
    featured: false,
    redacted: true,
    media: { type: "image", src: "/projects/home-owner-client-dashboard/cover.png", alt: "Home Owner Client Dashboard — concept wireframe" },
    problem:
      "Homeowners keep asking for updates, and builders waste time repeating themselves and scattering photos across texts and email.",
    solution:
      "A simple client portal where builders post milestones, schedule changes, and photos, while costs sync in from Sage Construction Management.",
    result:
      "Prototype in progress with mocked data.",
  },
];

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
