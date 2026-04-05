export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type SkillGroup = {
  title: string;
  items: { name: string; icon: string }[];
};

export type TimelineStep = {
  title: string;
  period: string;
  description: string;
};

// ================= SITE =================

export const site = {
  name: "Kartik Singh Bisht",
  title: "Full Stack Developer (MERN + Next.js)",
  tagline:
    "I help startups and businesses build fast, scalable web applications with clean architecture and great user experience.",
  email: "kartiksinghbisht.dev@gmail.com",
  emailLabel: "Email me",
  social: {
    github: "http://github.com/kartik01a",
    linkedin: "www.linkedin.com/in/kartik-singh-bisht-13816a207",
    upwork:
      "https://www.upwork.com/freelancers/~01e74ab725bfcfa302?viewMode=1",
  },
};

// ================= TIMELINE =================

export const timeline: TimelineStep[] = [
  {
    title: "Started with Web Development",
    period: "2020 — 2021",
    description:
      "Built a strong foundation in HTML, CSS, and JavaScript by creating small projects and understanding core web concepts.",
  },
  {
    title: "Full Stack Development (MERN)",
    period: "2021 — 2023",
    description:
      "Learned React, Node.js, Express, and databases. Built real-world applications with authentication, APIs, and scalable architecture.",
  },
  {
    title: "Associate Software Developer @ 75way",
    period: "2024",
    description:
      "Worked on multiple production-grade applications including fintech, edtech, and ecommerce platforms. Focused on building reusable UI components and scalable backend services.",
  },
  {
    title: "Freelance Developer (Upwork)",
    period: "2025 — Present",
    description:
      "Delivering end-to-end solutions for startups. Built and optimized applications like BrandRadar and Optimate with focus on performance, reliability, and clean architecture.",
  },
];

// ================= SKILLS =================

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: "layout" },
      { name: "Next.js", icon: "layout" },
      { name: "TypeScript", icon: "code" },
      { name: "Tailwind CSS", icon: "palette" },
      { name: "Framer Motion", icon: "sparkles" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "server" },
      { name: "Express.js", icon: "server" },
      { name: "MongoDB", icon: "database" },
      { name: "PostgreSQL", icon: "database" },
      { name: "REST APIs", icon: "share" },
    ],
  },
  {
    title: "Cloud & Tools",
    items: [
      { name: "AWS (EC2, Lambda, S3)", icon: "cloud" },
      { name: "Docker (Basics)", icon: "box" },
      { name: "Git & GitHub", icon: "github" },
      { name: "Vercel", icon: "rocket" },
      { name: "Cursor", icon: "cursor" },
    ],
  },
];

// ================= PROJECTS =================

export const projects = [
  {
    id: "brandradar",
    title: "BrandRadar",
    description:
      "AI-powered platform to track how your brand appears across LLMs and competitors.",
    longDescription:
      "Developed a full-stack platform that analyzes how large language models mention brands compared to competitors. Built using Next.js, TypeScript, Tailwind, and OpenAI APIs. Focused on scalable data processing, performance optimization, and SEO-friendly architecture.",
    image: "/projects/brandradar.png",
    imageAlt: "BrandRadar dashboard",
    tech: ["Next.js", "TypeScript", "Tailwind", "OpenAI API"],
    liveUrl: "https://brandradar.ai/",
  },
  {
    id: "monudesk",
    title: "MonuDesk – Order Management System",
    description:
      "A modern order management platform designed to streamline operations, track payments, and manage workflows efficiently.",
    longDescription:
      "MonuDesk is a full-stack order management system built to help businesses track orders, payments, documents, and workflows in one unified platform. It provides a centralized dashboard where teams can view order status, manage tasks, and handle customer interactions without switching tools.\n\nThe platform includes features like real-time order tracking, smart task reminders, integrated communication, and a dedicated customer portal for transparency. It significantly reduces manual work, prevents missed payments, and improves operational efficiency.\n\nI contributed to building scalable frontend interfaces using Next.js and modern UI practices, along with backend integrations for handling workflows, data management, and performance optimization.",
    image: "/projects/monudesk.png",
    imageAlt: "MonuDesk dashboard",
    tech: ["Next.js", "ExpressJS", "GraphQl", "PostgreSQL", "TypeScript"],
    liveUrl: "https://monudesk.com/",
  },
];


// ================= UPWORK =================

export const upwork = {
  headline:
    "Full Stack Developer | MERN | Next.js | Scalable Web Applications",
  summary:
    "I work with startups and teams to build scalable, high-performance web applications using React, Next.js, and Node.js. I focus on clean code, performance optimization, and delivering reliable production-ready solutions.",
  profileUrl:
    "https://www.upwork.com/freelancers/~01e74ab725bfcfa302?viewMode=1",
  stats: [
    { label: "Upwork Rating", value: "⭐ 5.0" },
    { label: "Top Rated", value: "Upwork Verified" },
    { label: "Freelance Earnings", value: "$7K+" },
    { label: "Projects Delivered", value: "10+ Production Apps" },
  ]
};
