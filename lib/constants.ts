export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "About", href: "#about" },
  { label: "Echo", href: "#echo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1));

export const SOCIAL_LINKS = {
  instagram: {
    label: "Instagram",
    href: "https://instagram.com/cosecant.io",
    handle: "@cosecant.io",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/cosecant-io",
  },
  email: {
    label: "Email",
    href: "mailto:cosecentai@gmail.com",
    address: "cosecentai@gmail.com",
  },
  whatsapp: {
    label: "WhatsApp",
    href: "https://wa.me/923425956596",
    display: "+92 342 5956596",
  },
} as const;

export const COMPANY = {
  name: "Cosecant",
  tagline: "Industrial AI software for real businesses.",
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  demoHref: string;
  caseStudyHref: string;
};

export const PROJECTS: Project[] = [
  {
    id: "echo",
    name: "Echo",
    tagline: "AI voice ordering for restaurants.",
    description:
      "Echo answers every call, takes the order, and pushes it straight to the kitchen — in any language, at any volume.",
    demoHref: "#contact",
    caseStudyHref: "/case-studies/echo",
  },
];

export type EchoFeature = {
  label: string;
  detail: string;
};

export const ECHO_FEATURES: EchoFeature[] = [
  { label: "AI Voice Ordering", detail: "Natural, real-time conversations that take a full order without a script." },
  { label: "Restaurant Automation", detail: "Runs the repetitive parts of the front-of-house so staff can focus on service." },
  { label: "POS Integration", detail: "Orders land directly in the existing point-of-sale — no re-entry, no gaps." },
  { label: "Natural Conversations", detail: "Handles interruptions, corrections, and follow-up questions like a person would." },
  { label: "Call Handling", detail: "Every call answered instantly, even during peak hours with lines ringing at once." },
  { label: "Order Management", detail: "Structured, accurate orders — modifiers, substitutions, and special requests included." },
  { label: "Analytics", detail: "Call volume, order value, and conversion tracked automatically, per location." },
  { label: "Multi-language", detail: "Serves customers in their own language without adding staff or scripts." },
  { label: "Real-time Responses", detail: "Sub-second latency that feels like a live conversation, not a bot." },
];

export type Service = {
  id: string;
  title: string;
  summary: string;
  capabilities: string[];
};

export const SERVICES: Service[] = [
  {
    id: "ai-voice-agents",
    title: "AI Agents & Voice AI",
    summary: "Conversational systems that handle real work, not scripted demos.",
    capabilities: [
      "Voice ordering & call automation",
      "Multi-turn conversational agents",
      "Real-time speech-to-speech pipelines",
    ],
  },
  {
    id: "llm-integration",
    title: "LLM Integration",
    summary: "Foundation models wired into your existing systems and data.",
    capabilities: [
      "Retrieval-augmented generation",
      "Model routing & fallback strategy",
      "Prompt & context engineering",
    ],
  },
  {
    id: "enterprise-saas",
    title: "Enterprise Software & SaaS",
    summary: "Multi-tenant platforms built to scale past the first customer.",
    capabilities: [
      "SaaS architecture & billing",
      "Role-based access & permissions",
      "Internal tools & admin systems",
    ],
  },
  {
    id: "automation-infrastructure",
    title: "Automation & Infrastructure",
    summary: "The repetitive work removed, the pipeline made reliable.",
    capabilities: [
      "Workflow & process automation",
      "Event-driven pipelines",
      "Monitoring & observability",
    ],
  },
  {
    id: "cloud-architecture",
    title: "Cloud Architecture",
    summary: "Infrastructure designed for uptime, not just launch day.",
    capabilities: [
      "AWS & Kubernetes deployments",
      "CI/CD & environment strategy",
      "Cost-aware scaling",
    ],
  },
  {
    id: "consulting-integration",
    title: "Consulting & Enterprise Integration",
    summary: "Hands-on engineering partnership, from architecture to delivery.",
    capabilities: [
      "Technical due diligence",
      "Legacy system integration",
      "Embedded engineering teams",
    ],
  },
];

export type BudgetOption = {
  label: string;
  value: string;
};

export const BUDGET_OPTIONS: BudgetOption[] = [
  { label: "Under $10k", value: "under-10k" },
  { label: "$10k – $50k", value: "10k-50k" },
  { label: "$50k – $150k", value: "50k-150k" },
  { label: "$150k+", value: "150k-plus" },
  { label: "Not sure yet", value: "unsure" },
];

export type TeamMember = {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Irtaza Ali",
    role: "Co-founder",
    photo: "/Irtaza.jpeg",
    bio: "Three-plus years in generative AI and software quality, and still happiest with his hands in the code. He led the engineering behind Cosecant and built a good deal of it himself.",
  },
  {
    name: "Sayyaf Nadir",
    role: "Co-founder",
    photo: "/sayyaf.jpeg",
    bio: "A physics major who found his way into cybersecurity and compliance. He has founded and sold multiple solutions to businesses, and he will keep turning a problem over until the cleanest answer falls out.",
  },
  {
    name: "Fassih Haroon",
    role: "Engineering Lead",
    photo: "/Image.jpeg",
    bio: "The idea for Cosecant started with him. A CS graduate with fundamentals he actually uses, he leads our engineering and holds the line on clean design and the simplest solution that works.",
  },
  {
    name: "Hifza Chaudhry",
    role: "Operations Head",
    photo: "/hifza.jpeg",
    bio: "She runs onboarding and gives the demos, so she is usually the first person a new client meets. A researcher by background, with the practical operations experience to make the handover feel easy.",
  },
];

export type TechLayerData = {
  id: string;
  name: string;
  description: string;
  items: string[];
};

export const TECH_STACK: TechLayerData[] = [
  {
    id: "interface",
    name: "Interface",
    description: "What users and operators touch.",
    items: ["Next.js", "TypeScript"],
  },
  {
    id: "intelligence",
    name: "Intelligence",
    description: "The models doing the reasoning and the listening.",
    items: ["OpenAI", "Claude", "Gemini", "Whisper"],
  },
  {
    id: "services",
    name: "Services",
    description: "The application layer connecting everything together.",
    items: ["FastAPI"],
  },
  {
    id: "data",
    name: "Data",
    description: "Where state lives and stays consistent.",
    items: ["PostgreSQL", "Supabase", "Redis"],
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    description: "What keeps it running under real load.",
    items: ["Docker", "Kubernetes", "AWS"],
  },
];
