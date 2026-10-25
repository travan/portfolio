export interface Profile {
  name: string;
  title: string;
  location?: string;
  phone: string;
  email: string;
  linkedin: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceJob {
  company: string;
  role: string;
  period: string;
  products: string[];
  techStack: string[];
  responsibilities: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  schoolPeriod: string;
  thesis: string;
  thesisPeriod: string;
}

export const profile: Profile = {
  name: "TRA NGUYEN",
  title: "Senior Software Engineer",
  phone: "0399223202",
  email: "travan.it.96@gmail.com",
  linkedin: "https://www.linkedin.com/in/tra-n-516b361b1/",
};

export const summary: string =
  "Senior Fullstack Engineer with 7+ years of experience building scalable backend systems and modern web applications. Strong expertise in Node.js, microservices architecture, and performance optimization. Proven ability to design high-throughput APIs, lead system migrations, and deliver production-ready solutions. Backend-focused with solid frontend experience (React, Angular). Experienced in remote collaboration and AI-assisted development workflows.";

export interface GithubProject {
  name: string;
  description: string;
  tech: string[];
  href: string;
  repositoryVisibility?: "public" | "private";
  demo?: string;
  demoUnavailable?: boolean;
  packages?: { name: string; href: string; description: string }[];
  featured?: {
    artwork: "verification" | "discovery" | "travel" | "speech";
    category: string;
    problem: string;
    solution: string;
  };
}

export const githubProfile: { url: string; projects: GithubProject[] } = {
  url: "https://github.com/travan",
  projects: [
    {
      name: "VeriCause",
      description:
        "An AI verification toolkit for comparing structured claims with runtime evidence, investigating browser failures, and returning guardrail decisions through a TypeScript SDK, CLI, or HTTP API.",
      tech: ["TypeScript", "Node.js", "NestJS", "Playwright", "Jest"],
      href: "https://github.com/travan/VeriCause",
      packages: [
        {
          name: "ai-reliability-runtime",
          href: "https://www.npmjs.com/package/ai-reliability-runtime",
          description:
            "Claim verification, guardrail decisions, and evaluation.",
        },
        {
          name: "ai-reliability-layer",
          href: "https://www.npmjs.com/package/ai-reliability-layer",
          description:
            "Browser failure analysis checked against Playwright evidence.",
        },
      ],
      featured: {
        artwork: "verification",
        category: "AI reliability · Developer tooling",
        problem:
          "A confident AI claim can still contradict what actually happened. Agents and automation need evidence before taking the next step.",
        solution:
          "Verifies structured claims against runtime observations and investigates Playwright failures. An SDK, CLI, and HTTP API return verdicts and policy decisions for the calling application to enforce.",
      },
    },
    {
      name: "extension-text2speech",
      description:
        "A topic-aware Chrome extension that filters page content and reads relevant segments aloud using browser/device voices, with optional cloud or local AI relevance scoring.",
      tech: [
        "React",
        "TypeScript",
        "Chrome MV3",
        "Ollama",
        "Vitest",
        "Playwright",
      ],
      href: "https://github.com/travan/extension-text2speech",
      repositoryVisibility: "public",
      featured: {
        artwork: "speech",
        category: "Browser extension · Topic-aware reading",
        problem:
          "Long pages and busy feeds make it difficult to find and listen to the content that matches your interests.",
        solution:
          "Scans visible page content, ranks segments by topic, and reads relevant text with configurable browser voices. Includes playback controls, domain presets, feed capture, and optional OpenAI or local Ollama relevance scoring.",
      },
    },
    {
      name: "AI-Powered Travel Planner",
      description:
        "A travel planning application that generates personalized multi-city itineraries from dates, budget, and travel preferences, across web and mobile.",
      tech: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Expo",
        "Playwright",
      ],
      href: "https://github.com/travan/AI-Powered-_Travel_Planner",
      repositoryVisibility: "private",
      featured: {
        artwork: "travel",
        category: "AI applications · Web & mobile",
        problem:
          "Planning a multi-city trip means balancing destinations, daily schedules, travel preferences, and a budget across disconnected tools.",
        solution:
          "Generates personalized itineraries with daily activities and budget breakdowns. Next.js and Expo clients share types and API access with a NestJS backend and PostgreSQL, organized in a pnpm/Turbo monorepo.",
      },
    },
    {
      name: "letEnjoyYourMeals",
      description:
        "Full-stack platform to search and explore new restaurants. Includes REST API, website, and mobile app with Docker deployment.",
      tech: ["TypeScript", "Node.js", "Docker"],
      href: "https://github.com/travan/letEnjoyYourMeals",
      repositoryVisibility: "private",
      demo: "https://eym-zeta.vercel.app/",
      demoUnavailable: true,
      featured: {
        artwork: "discovery",
        category: "Full-stack · Restaurant discovery",
        problem:
          "Exploring new restaurants calls for a connected experience across web and mobile.",
        solution:
          "A restaurant discovery platform spanning a REST API, website, and mobile app, with Docker deployment.",
      },
    },
    {
      name: "folk_games",
      description:
        "Full-stack folk games web application with dedicated backend and frontend.",
      tech: ["TypeScript", "JavaScript", "CSS"],
      href: "https://github.com/travan/folk_games",
    },
    {
      name: "portfolio",
      description: "My personal portfolio website built with Next.js.",
      tech: ["TypeScript", "Next.js"],
      href: "https://github.com/travan/portfolio",
    },
    {
      name: "crud_angular",
      description: "CRUD application built with Angular.",
      tech: ["JavaScript", "Angular"],
      href: "https://github.com/travan/crud_angular",
    },
    {
      name: "shop_phuc",
      description: "E-commerce store front-end and source code.",
      tech: ["HTML"],
      href: "https://github.com/travan/shop_phuc",
    },
    {
      name: "demo_test",
      description: "Testing and demo utilities.",
      tech: ["JavaScript"],
      href: "https://github.com/travan/demo_test",
    },
    {
      name: "demo_quanly",
      description: "Management demo application.",
      tech: ["JavaScript"],
      href: "https://github.com/travan/demo_quanly",
    },
    {
      name: "demo_fb",
      description: "Demo project with HTML-based UI.",
      tech: ["HTML"],
      href: "https://github.com/travan/demo_fb",
    },
    {
      name: "test_demo",
      description: "Test and demo project.",
      tech: ["JavaScript"],
      href: "https://github.com/travan/test_demo",
    },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    category: "System Design",
    items: [
      "Microservices Architecture",
      "High-Level System Design",
      "Scalable Backend Systems",
      "API Performance Optimization",
      "Caching Strategies (Redis)",
      "Async Processing",
      "High-Load System Handling",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js (NestJS, Express, Loopback)",
      "REST APIs, GraphQL, gRPC",
      "Redis (Caching), Async Processing",
    ],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Firebase (Firestore)"],
  },
  {
    category: "Frontend",
    items: ["ReactJS", "Next.js", "Angular 1&8", "HTML", "CSS", "Bootstrap"],
  },
  {
    category: "Testing & Automation",
    items: ["Jest", "Mocha", "Chai", "Puppeteer", "Playwright", "Selenium"],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Docker",
      "AWS",
      "CI/CD",
      "Git",
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
      "Unreal Engine 4.19",
    ],
  },
];

export const systemDesign: string[] = [
  "Designed scalable backend systems using microservices, caching, async processing",
  "Optimized API performance and handled high-load systems",
  "Strong understanding of system architecture trade-offs",
];

export const experience: ExperienceJob[] = [
  {
    company: "Glo",
    role: "Senior Fullstack Engineer",
    period: "2025-2026",
    products: ["Glo app"],
    techStack: [
      "NestJS",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "gRPC",
      "Next.js",
      "Strapi",
      "AWS",
    ],
    responsibilities: [
      "Led migration from monolithic to microservices architecture, improving scalability and deployment flexibility.",
      "Designed high-level system architecture, enabling long-term scalability and team alignment.",
      "Identified and resolved API performance bottlenecks, improving response time and system reliability.",
      "Built and optimized CMS system (Strapi) for static site generation and efficient content workflows.",
      "Applied AI-assisted development (Claude, Cursor, Copilot) to accelerate development productivity and CI/CD pipelines.",
      "Improved engineering efficiency through code review, prompt optimization, and structured workflows.",
    ],
  },
  {
    company: "Katalon",
    role: "Software Engineer",
    period: "2021-2024",
    products: [
      "Katalon Recorder Extension",
      "Katalon Recorder CLI",
      "Cloud Studio",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Puppeteer",
      "Playwright",
      "Selenium",
    ],
    responsibilities: [
      "Developed and maintained core features for Katalon Recorder Extension, Cloud Studio, and CLI tools.",
      "Designed and built Katalon Recorder CLI (solo project), enabling high-performance automation workflows.",
      "Contributed to scalable and secure system design for advanced features (object capture, spy tool).",
      "Implemented automation logic using Node.js + Puppeteer + Playwright + Selenium.",
      "Built regression testing system, reducing dependency on QA and improving release stability.",
      "Increased code quality through unit testing (Jest) and improved test coverage.",
      "Collaborated with cross-functional teams to optimize delivery pipeline and testing processes.",
    ],
  },
  {
    company: "BePOS",
    role: "Full-stack Developer",
    period: "2020-2021",
    products: ["CRM of Shopping Store"],
    techStack: ["Node.js", "NestJS", "Angular 8", "PostgreSQL", "Firestore"],
    responsibilities: [
      "Developed CRM system features for retail platform.",
      "Designed and implemented REST APIs using Node.js + NestJS.",
      "Improved data handling efficiency and system performance with PostgreSQL & Firestore with Zalo APIs to support customer engagement and marketing users.",
    ],
  },
  {
    company: "CMC Telecom",
    role: "Backend Developer",
    period: "2019-2020",
    products: ["Service of Voice and SMS", "CRM of service"],
    techStack: ["Node.js", "Loopback", "MongoDB"],
    responsibilities: [
      "Developed Voice & SMS services, including API integration and reporting systems.",
      "Built SMS service (solo project) with tracking and reporting capabilities.",
      "Integrated payment APIs into CRM system.",
    ],
  },
  {
    company: "Abby Store",
    role: "Full-stack Developer",
    period: "2018-2018",
    products: ["CMS of Shopping Store"],
    techStack: ["Node.js", "MEAN Stack", "MongoDB"],
    responsibilities: [
      "Maintained and enhanced e-commerce CMS system.",
      "Improved system stability and feature scalability.",
      "Wrote unit tests (Mocha, Chai).",
    ],
  },
  {
    company: "Freelancer",
    role: "Full-stack Developer",
    period: "2019-Present",
    products: ["Shopping Web", "CMS", "Flying Simulation System CMS"],
    techStack: ["Node.js", "PostgreSQL", "AWS"],
    responsibilities: [
      "Built and deployed fullstack systems using Node.js, PostgreSQL, AWS.",
      "Designed scalable backend architecture and modular frontend systems.",
      "Delivered MVP systems independently, including CMS and simulation platforms.",
    ],
  },
];

export const education: EducationItem = {
  school: "Military Technical Academy",
  degree: "Information Technology Engineer",
  schoolPeriod: "2014 - 2019",
  thesis:
    "Developing and Building the Simulate Apartment design in urban 3D software by Unreal Engine 4.19, Blueprint, C++.",
  thesisPeriod: "1/2019 - 5/2019",
};
