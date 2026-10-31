// Single source of truth for the site's content. Everything here comes from
// the CV; edit this file to update the site.
import type {
  CaseStudy,
  EarlierProject,
  EarlierRole,
  Education,
  FocusArea,
  Language,
  Person,
  Role,
  SkillGroup,
} from "./types";

export const person: Person = {
  name: "Yasine Tokan",
  givenName: "Yasine",
  familyName: "Tokan",
  username: "YasTokan",
  seoTitle: "Yasine Tokan · Tech Lead / CTO in Dubai · Full Stack & AI",
  role: "Tech Lead / CTO",
  headline: "Full Stack, Applied AI & Cloud Architecture",
  currentRole: "Tech Lead, Sharkhood Tech",
  intro:
    "Technical lead and full stack engineer with eleven years of experience across web, mobile and cloud. Currently Tech Lead at Sharkhood Tech, leading the web and backend teams and building self-hosted AI on the company's own infrastructure.",
  description:
    "Tech Lead in Dubai with 11+ years in full stack, applied AI and cloud architecture: self-hosted RAG platforms, private AI assistants and legacy modernisation.",
  location: "Dubai, UAE",
  summary: [
    "My work tends to land on two kinds of hard problems: moving large legacy systems forward without stopping the business running on top of them, and putting AI into production where the data isn't allowed to leave the building. That means self-hosted RAG platforms and assistants deployed for banking and enterprise clients.",
    "Angular and Next.js up front, NestJS, Node, and .NET Core behind, PostgreSQL and MongoDB underneath. I set the engineering bar, mentor the people who meet it, and stay close enough to the code to defend every decision I make.",
  ],
  email: "yastokan@gmail.com",
  linkedin: "https://www.linkedin.com/in/yasine-tokan-733a55147/",
  github: "https://github.com/YasTokan",
  cv: "/Yasine_Tokan_CV.pdf",
  siteUrl: "https://yastokan.github.io",
};

/** Phrases people search for; used in the site's keywords tag. */
export const keywords = [
  "Yasine Tokan",
  "Tech Lead Dubai",
  "CTO Dubai",
  "Full Stack Engineer Dubai",
  "Lead Full Stack Developer UAE",
  "Applied AI engineer",
  "Self-hosted RAG",
  "Private AI assistant",
  "Self-hosted LLM",
  "Legacy modernization",
  "AngularJS migration",
  "Engineering leadership",
  "Cloud architecture",
  "Angular",
  "Next.js",
  "NestJS",
  ".NET Core",
];

/** Subjects listed in the search data that describes the person. */
export const expertise = [
  "Engineering leadership",
  "Software architecture",
  "Cloud architecture",
  "Full stack development",
  "Applied AI",
  "Retrieval-augmented generation",
  "Self-hosted LLMs",
  "Vector databases",
  "Legacy system modernisation",
  "Microservices",
  "Angular",
  "React",
  "Next.js",
  "NestJS",
  "Node.js",
  ".NET Core",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Azure",
];

export const focusAreas: FocusArea[] = [
  {
    title: "Applied AI on private data",
    description:
      "Self-hosted RAG platforms and assistants for environments where data can't leave the building: ingestion and chunking, embeddings, vector retrieval, model selection and evaluation, grounded answers.",
  },
  {
    title: "Legacy modernisation",
    description:
      "Moving long-lived systems to a modern stack in phases while the business keeps running: migration paths, incremental component replacement, shared UI libraries, and cleaned-up integrations.",
  },
  {
    title: "Engineering leadership",
    description:
      "Technical direction end to end: stack and architecture standards, documented decisions, hiring, code review, 1:1 mentoring, and sprint planning with stakeholders.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "self-hosted-rag",
    title: "A self-hosted RAG platform over private company data",
    organisation: "Sharkhood Tech",
    period: "2026",
    context:
      "Company knowledge needed to be searchable and answerable by AI without sending private data to a third-party model provider.",
    contributions: [
      "Architected the platform end to end: document ingestion and chunking, vector storage and retrieval, and grounded answer generation.",
      "Selected and benchmarked the model stack (mxbai-embed-large-v1 for embeddings, mistral-7b-openorca for generation), tuning chunk size, retrieval depth, and prompt structure for accuracy and latency.",
      "Used PostgreSQL for relational and vector workloads and MongoDB for unstructured content, with NestJS services behind an Angular frontend.",
      "Documented the architecture trade-offs between self-hosted infrastructure cost, performance, and data-privacy requirements.",
    ],
    outcome:
      "Shipped a RAG platform that answers over private company data on self-hosted infrastructure.",
    stack: [
      "NestJS",
      "PostgreSQL (vector)",
      "MongoDB",
      "Angular",
      "mxbai-embed-large-v1",
      "mistral-7b-openorca",
    ],
  },
  {
    id: "crm-modernisation",
    title: "Modernising a 20-year-old enterprise CRM",
    organisation: "dailypoint",
    period: "2025",
    context:
      "A CRM built on two decades of AngularJS and .NET Razor Pages code, still running customers' businesses every day.",
    contributions: [
      "As lead full stack developer, defined the migration path to a modern stack and executed a phased replacement of AngularJS components.",
      "Designed and built a reusable, Bootstrap-like UI library from scratch, adopted across modules and apps.",
      "Refactored .NET Razor Pages integrations for maintainability and performance, and resolved cross-module and API integration issues.",
    ],
    outcome:
      "A phased path off AngularJS instead of a big-bang rewrite, on one shared UI library used across the product.",
    stack: ["AngularJS", ".NET Razor Pages", "UI library design"],
    href: "https://www.dailypoint.com",
  },
  {
    id: "private-ai-assistant",
    title: "A private AI assistant, shipped to a banking client",
    organisation: "Top Spots FZE",
    period: "2022–2025",
    context:
      "The company wanted an AI assistant running on its own servers and trained on its own data. A banking client then needed the same capability under its own data and security requirements.",
    contributions: [
      "Set up the AI chat system on company servers and wrapped it in our own API so it runs on its own, supporting text, voice, and avatar conversations using OpenAI and Ollama.",
      "Trained the assistant on company data to keep answers private and useful, and integrated ElevenLabs for voice and HeyGen for avatars.",
      "Shipped it to production for a banking client as a client-facing deployment, tailored to their data and security requirements.",
    ],
    outcome:
      "An assistant in production for a bank, alongside a 65% site-speed improvement on the core Top Spots platform.",
    stack: ["OpenAI", "Ollama", "ElevenLabs", "HeyGen"],
    href: "https://www.topspotsdubai.com",
  },
  {
    id: "real-time-classifieds",
    title: "A real-time classifieds platform at high volume",
    organisation: "ShoofBook LLC",
    period: "2020–2022",
    context:
      "A classifieds marketplace that had to handle a high volume of user-generated content in real time.",
    contributions: [
      "Led the full development lifecycle, from planning to deployment, and architected the platform for high-volume, real-time content.",
      "Cut load times significantly with Redis caching and built a custom search algorithm for faster, more accurate results.",
      "Delivered real-time updates and notifications, with a responsive Angular and PrimeNG interface.",
    ],
    outcome:
      "Taken from concept to launch as a scalable platform for posting, browsing, and searching ads.",
    stack: ["Angular", "PrimeNG", "Node.js", "Express", "MongoDB", "Redis"],
  },
];

export const earlierProjects: EarlierProject[] = [
  {
    name: "UberME",
    description:
      "Lead developer of a luxury car-rental app in Flutter, with a .NET Core API, advanced search, map view, booking flows, and a demo mode.",
  },
  {
    name: "ECSC",
    description:
      "Backend work on a government e-services platform (licensing, passport renewals) in a 12-person team, using Express, .NET Core, and Oracle.",
  },
];

export const experience: Role[] = [
  {
    title: "Tech Lead",
    company: "Sharkhood Tech",
    start: "Feb 2026",
    end: "Present",
    highlights: [
      "Own technical direction end to end: defined the stack, architecture standards, and delivery process across web and backend teams.",
      "Architected and shipped a self-hosted RAG platform over private company data.",
      "Led hiring, established code review and quality standards, and mentor engineers through 1:1s and technical guidance.",
      "Run sprint planning, estimation, and prioritisation with stakeholders; make and document architecture decisions.",
    ],
  },
  {
    title: "Senior Full Stack Engineer",
    company: "dailypoint",
    start: "Feb 2025",
    end: "Jan 2026",
    highlights: [
      "Lead full stack developer on the modernisation of a 20-year-old CRM built on AngularJS and .NET Razor Pages.",
      "Defined the migration path and executed a phased replacement of AngularJS components.",
      "Designed and built a reusable UI library adopted across modules and apps.",
    ],
  },
  {
    title: "Senior Full Stack Engineer",
    company: "Top Spots FZE",
    start: "Jan 2022",
    end: "Jan 2025",
    highlights: [
      "Improved UX and increased site speed by 65% through responsive design work.",
      "Built a self-hosted AI assistant (text, voice, avatar) and shipped it to production for a banking client.",
      "Integrated N-Genius, Google Maps, Firebase, and Dubai Park APIs.",
      "Built a supplier dashboard with per-supplier profiles and payment details, and onboarding and payouts managed centrally.",
    ],
  },
  {
    title: "Lead Full Stack Developer",
    company: "ShoofBook LLC",
    start: "Jan 2020",
    end: "Jan 2022",
    highlights: [
      "Led the end-to-end development lifecycle and architected a scalable platform for high-volume, real-time user content.",
      "Reduced load times with Redis caching, built a custom search algorithm, and delivered real-time notifications.",
      "Contributed to AI-driven features and SaaS platform scalability.",
    ],
  },
];

export const earlierRoles: EarlierRole[] = [
  {
    title: "Full Stack Developer",
    company: "TechnoWave FZ",
    start: "2019",
    end: "2020",
    summary:
      "Angular front ends, .NET Core and Express back ends, NativeScript and Ionic mobile apps.",
  },
  {
    title: "Full Stack Engineer",
    company: "Al Andalus University for Medical Sciences",
    start: "2017",
    end: "2018",
    summary:
      "Taught web programming, built AngularJS and Ionic apps on Node.js and .NET Core APIs, and managed university servers.",
  },
  {
    title: "Software Developer",
    company: "Scase",
    start: "2015",
    end: "2017",
    summary:
      ".NET Core REST APIs on Oracle, AngularJS web apps, and Node.js services.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Leadership",
    skills: [
      "Technical leadership & mentoring",
      "Architecture decisions",
      "Hiring & code review",
      "Sprint planning & estimation",
    ],
  },
  {
    name: "Applied AI",
    skills: [
      "RAG",
      "Self-hosted LLMs",
      "Vector databases",
      "Embeddings & model evaluation",
      "Ollama",
      "LM Studio",
      "OpenAI",
      "ElevenLabs",
      "HeyGen",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "Fastify",
      ".NET Core",
      "REST APIs",
      "Microservices",
      "WebSockets & MQTT",
      "OAuth & JWT",
    ],
  },
  {
    name: "Frontend & mobile",
    skills: [
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "Server-side rendering",
      "Ionic",
      "NativeScript",
      "Flutter",
    ],
  },
  {
    name: "Data",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Redis", "Prisma"],
  },
  {
    name: "Cloud & delivery",
    skills: [
      "AWS",
      "Azure",
      "Vercel",
      "IIS",
      "Docker",
      "CI/CD",
      "SaaS",
      "S3 & Azure Blob Storage",
      "GitHub, GitLab, Bitbucket",
    ],
  },
  {
    name: "Integrations",
    skills: [
      "Stripe",
      "PayPal",
      "Google Pay",
      "N-Genius",
      "Firebase",
      "Google Maps",
    ],
  },
];

export const education: Education[] = [
  {
    qualification: "Master's, Web Science",
    institution: "Syrian Virtual University",
    period: "2022 – present",
  },
  {
    qualification: "Bachelor's, Information Technology",
    institution: "Al-Ba'ath University",
    period: "2013 – 2017",
  },
  {
    qualification: "Entrepreneurship & Business Skills Training",
    institution: "Al-Ba'ath University",
    period: "2015",
  },
];

export const languages: Language[] = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
];
