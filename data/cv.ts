export interface Profile {
  name: string;
  title: string;
  location: string;
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
  thesis: string;
  thesisPeriod: string;
}

export const profile: Profile = {
  name: "TRA NGUYEN",
  title: "Software Engineer",
  location: "Ho Chi Minh",
  phone: "0399223202",
  email: "travan.it.96@gmail.com",
  linkedin: "https://www.linkedin.com/in/tra-n-516b361b1/",
};

export const summary: string =
  "Highly skilled Software Engineer with 7+ years of experience in building robust web applications. Proven ability to collaborate with teams, architect scalable systems, and deliver exceptional user experiences. Proficient in JavaScript, Node.js, and React.";

export interface GithubProject {
  name: string;
  description: string;
  tech: string[];
  href: string;
}

export const githubProfile: { url: string; projects: GithubProject[] } = {
  url: "https://github.com/travan",
  projects: [
    { name: "crud_angular", description: "CRUD application built with Angular.", tech: ["JavaScript", "Angular"], href: "https://github.com/travan/crud_angular" },
    { name: "shop_phuc", description: "E-commerce store front-end and source code.", tech: ["HTML"], href: "https://github.com/travan/shop_phuc" },
    { name: "demo_test", description: "Testing and demo utilities.", tech: ["JavaScript"], href: "https://github.com/travan/demo_test" },
    { name: "demo_quanly", description: "Management demo application.", tech: ["JavaScript"], href: "https://github.com/travan/demo_quanly" },
    { name: "demo_fb", description: "Demo project with HTML-based UI.", tech: ["HTML"], href: "https://github.com/travan/demo_fb" },
    { name: "test_demo", description: "Test and demo project.", tech: ["JavaScript"], href: "https://github.com/travan/test_demo" },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    items: [
      "NodeJS",
      "Expressjs",
      "MEANjs",
      "Loopback",
      "Nestjs",
      "Typescript",
      "C#",
      "ASP.NET (Webform, Winform, MVC)",
    ],
  },
  {
    category: "Frontend",
    items: [
      "Bootstrap",
      "HTML",
      "CSS",
      "jQuery",
      "Reactjs",
      "Angularjs",
      "Angular 8",
      "Nextjs",
    ],
  },
  {
    category: "Database & APIs",
    items: ["MongoDB", "PostgreDB", "Firebase", "GraphQL", "GRPC"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker", "AWS"],
  },
  {
    category: "Other",
    items: ["Unreal Engine 4.19"],
  },
];

export const experience: ExperienceJob[] = [
  {
    company: "Glo",
    role: "Senior Fullstack Engineer",
    period: "2025-2026",
    products: ["Glo app"],
    techStack: ["Nestjs", "Postgre", "Redis", "GRPC", "GraphQL", "Nextjs", "Strapi", "AWS service"],
    responsibilities: [
      "Led the migration of legacy monolithic APIs to a microservices architecture, improving scalability, maintainability, and deployment flexibility.",
      "Contributed to building and optimizing a Strapi-based CMS application to support static website generation, ensuring smooth content management and publishing workflows.",
      "Investigated and analyzed API performance bottlenecks, identifying root causes of latency and proposing effective solutions to enhance response time and system reliability.",
      "Authored high-level design documentation for core modules and system architecture, ensuring alignment across engineering teams and supporting long-term scalability.",
    ],
  },
  {
    company: "Katalon",
    role: "Software Engineer",
    period: "2021-2024",
    products: ["Katalon Recorder Extension", "Katalon Recorder CLI", "Cloud Studio"],
    techStack: [
      "ReactJs",
      "Typescript",
      "Nodejs",
      "ExpressJs",
      "Commander Js",
      "Javascript",
      "HTML",
      "CSS",
      "Jet",
      "Puppeteer",
      "Playwright",
      "Selenium",
    ],
    responsibilities: [
      "Firmly maintained and developed features for Katalon Recorder Extension, Recorder - Editor of Cloud Studio, Local Engine CLI (including bug fixes, performance optimization, and new functionality implementation).",
      "Smoothly developed and launched Katalon Recorder CLI as a solo project, guaranteeing that users can run with command line fast in the most convenient way.",
      "Governed in a leading role of the design of a scalable and secure high level solution for some features (capture new object, spy tool, ...) in Cloud Studio.",
      "Implemented the new core keywords and functions in Local Engine CLI by Nodejs, Puppeteer, Playwright, Selenium.",
      "Built up Regression test project for Katalon Recorder for testing without QA.",
      "Intensively wrote unit-test to cover the test cases in Local Engine CLI, Recorder, Editor by Jest.",
      "Collaborated with team members to ensure clear understanding of project requirements.",
      "Partnered with the Quality Engineer to streamline testing processes and improve efficiency.",
    ],
  },
  {
    company: "BePOS",
    role: "Full-stack Developer",
    period: "2020-2021",
    products: ["CRM of Shopping Store"],
    techStack: ["Nodejs", "ExpressJs", "Nest Js", "Angular 8", "Postgres DB", "Firestore"],
    responsibilities: [
      "Implement the features of UI/UX in CRM of view using Angular 8, Firestore.",
      "Update and implement the APIs using Nodejs, Nestjs, Postgres DB",
    ],
  },
  {
    company: "CMC Telecom",
    role: "Backend Developer",
    period: "2019-2020",
    products: ["Service of Voice and SMS", "CRM of service"],
    techStack: ["Nodejs", "Loopback 3", "MongoDB"],
    responsibilities: [
      "Voice service, CRM: Formulated the features (connect service, send sms,...) and exported the report API.",
      "Developed and launched SMS service as a solo project, achieving that users could send sms by API and track reports.",
      "Integrated Payment API to CRM service.",
    ],
  },
  {
    company: "Abby Store",
    role: "Full-stack Developer",
    period: "2018",
    products: ["CMS of Shopping Store"],
    techStack: ["Nodejs", "MEANjs", "Mochajs", "Chaijs"],
    responsibilities: [
      "Continuously maintained and evolved the feature sets for CMS of shopping web with tech-stack Mongodb, MEANjs, Angular.js.",
      "Write unit test by Mochajs, Chaijs.",
    ],
  },
  {
    company: "Freelancer",
    role: "Full-stack Developer",
    period: "2019-Present",
    products: ["Shopping Web", "CMS", "Flying Simulation System CMS"],
    techStack: ["HTML", "CSS", "jQuery", "Nodejs", "Expressjs", "PostgreDB", "Knex.js", "AWS", "WinForms", "C#", "MongoDB"],
    responsibilities: [
      "Established and managed the entire development lifecycle for Shopping Web, including front-end design with HTML, CSS, jQuery, back-end development with Nodejs, Expressjs, and database implementation with PostgreDB. (2019)",
      "Individually built Shopping Web and CMS from scratch, utilizing Nodejs, Knex.js, a PostgreSQL database, and AWS services to address the need for support users. (2020)",
      "Single-handedly built a full-stack MVP for CMS of Flying Simulation System, demonstrating proficiency in both front-end and back-end development with tech-stack WinForms, C#, and MongoDB. (2020)",
    ],
  },
];

export const education: EducationItem = {
  school: "Military Technical Academy",
  degree: "Information Technology Engineer",
  thesis:
    "Developing and Building the Simulate Apartment design in urban 3D software by Unreal Engine 4.19, Blueprint, C++.",
  thesisPeriod: "1/2019 - 5/2019",
};
