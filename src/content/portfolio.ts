import type {
  CertificationEntry,
  ContactLink,
  ExperienceEntry,
  Metric,
  NavItem,
  Profile,
  ProjectEntry,
} from "./types";

export const profile: Profile = {
  name: "Yash Hegde",
  shortName: "YH",
  role: "Full-stack engineer with frontend precision",
  location: "India",
  availability: "Open to product-focused opportunities",
  summary:
    "I build full-stack products across financial workflows, AI interfaces, and real-time systems, with a strong eye for interaction quality and polished execution.",
  heroTitle: "Building full-stack products that feel as refined as they function.",
  heroLead:
    "I design and ship production products that combine frontend craft, AI workflows, real-time interaction, and practical system thinking.",
  heroSubcopy:
    "From financial workflow UIs and AI-backed products to interaction labs and full-stack delivery, this portfolio is structured to show how I think, build, and polish.",
  resumeUrl: "/Yash-Hegde-Resume.pdf",
};

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Labs", path: "/labs/motion" },
  { label: "Certifications", path: "/certifications" },
  { label: "Contact", path: "/contact" },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    shortLabel: "Email",
    href: "mailto:yashhegde010@gmail.com",
    type: "primary",
  },
  {
    label: "LinkedIn",
    shortLabel: "LinkedIn",
    href: "https://www.linkedin.com/in/yash-hegde-927721201/",
    type: "primary",
  },
  {
    label: "GitHub",
    shortLabel: "GitHub",
    href: "https://github.com/Yh010",
    type: "primary",
  },
  {
    label: "X / Twitter",
    shortLabel: "X",
    href: "https://x.com/YashHegde7",
    type: "secondary",
  },
  {
    label: "WhatsApp",
    shortLabel: "WhatsApp",
    href: "https://wa.me/918369573424?text=Hi%2C%20I%20want%20to%20work%20with%20you",
    type: "secondary",
  },
  {
    label: "Cal",
    shortLabel: "Cal",
    href: "https://cal.com/yash-hegde-qethnp/15min",
    type: "secondary",
  },
];

export const metrics: Metric[] = [
  {
    value: "10+",
    label: "interaction labs",
    detail: "Motion prototypes and UI experiments focused on tactile product moments.",
  },
  {
    value: "04",
    label: "flagship builds",
    detail: "Healthcare AI, creator tooling, developer tooling, and fintech work selected from the strongest projects in the resume.",
  },
  {
    value: "05",
    label: "teams shipped with",
    detail: "Enterprise fintech, startup product teams, freelance AI work, and engineering productivity environments.",
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "oracle-ofss",
    company: "Oracle Financial Services",
    title: "Application Developer I",
    period: "Sept 2025 - Present",
    location: "Bengaluru, India",
    team: "Oracle Banking Digital Experience",
    summary:
      "Own frontend-heavy product development for digital banking workflows, building new transaction experiences in Oracle JET and improving performance, reliability, and team delivery speed in a production financial environment.",
    highlights: [
      "Owned frontend development for a new Cashflow Transaction module in Oracle JET, building the UI from scratch, integrating service APIs, and implementing multi-step transaction workflows.",
      "Integrated backend service APIs into existing transaction flows while preserving backward compatibility across production financial workflows.",
      "Optimized API interactions by reducing redundant service calls and improving response performance across UI and service layers.",
      "Resolved high-priority production defects in client-facing financial workflows, improving reliability and reducing business impact.",
      "Created Codex agent skills for team-specific workflows, reducing turnaround time for large user stories from weeks to days and driving AI adoption within the team.",
      "Led Git workflow adoption by standardizing branching practices and improving collaboration across backend, framework, and QA teams.",
    ],
    tags: [
      "Oracle JET",
      "JavaScript",
      "Enterprise UI",
      "API Integration",
      "OBDX",
      "AI Developer Tooling",
    ],
  },
  {
    id: "balco",
    company: "Bharat Aluminium Company",
    title: "GET, Commissioning, Potline 3",
    period: "Jan 2025 - Sept 2025",
    location: "Korba, Chhattisgarh, India",
    team: "Commissioning / Production Readiness",
    summary:
      "Worked in plant commissioning and production-readiness operations, coordinating technical inspections, risk workflows, and cross-team execution across structural and electrical systems.",
    highlights: [
      "Led inspections of structural and electrical components while coordinating with project and third-party teams during potline commissioning.",
      "Improved technical documentation and execution visibility during commissioning and production handover activities.",
      "Supported megger testing, anode change processes, manpower planning, and Critical Risk Management workflows during production-readiness work.",
    ],
    tags: [
      "Technical Operations",
      "Documentation",
      "Cross-team Coordination",
      "Production Readiness",
      "Risk Management",
    ],
  },
  {
    id: "xquare-labs",
    company: "Xquare Labs (Coldbean AI)",
    title: "Full Stack Developer - Freelance",
    period: "Aug 2024 - Sep 2024",
    location: "Remote, Canada",
    team: "AI Product Development",
    summary:
      "Built production-ready full-stack AI product workflows, spanning responsive frontend surfaces, real-time chat, authentication, and modular backend APIs consuming third-party data sources.",
    highlights: [
      "Built a production-ready dashboard, chat UI, and AI result table from Figma designs with responsive styling and reusable frontend patterns.",
      "Integrated Redux and WebSockets for state-driven real-time chat updates across AI workflows.",
      "Implemented Google OAuth, Zod input validation, and session flows for authenticated product experiences.",
      "Developed modular backend APIs to fetch and serve AI-enhanced content using Twitter, Crunchbase, and Google Maps data sources.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "WebSockets",
      "OAuth",
    ],
  },
  {
    id: "persana-ai",
    company: "Persana AI",
    title: "Frontend Intern",
    period: "Feb 2024 - Apr 2024",
    location: "Remote, SF Bay Area",
    team: "Startup Product Engineering",
    summary:
      "Worked in a startup-speed environment modernizing frontend architecture and shipping new UI modules for core product workflows.",
    highlights: [
      "Refactored and migrated legacy frontend features into a more modular React and TypeScript codebase.",
      "Built additional UI modules for core product workflows while adapting to fast-moving startup requirements.",
    ],
    tags: [
      "React",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Chakra UI",
      "TanStack Router",
      "MongoDB",
    ],
  },
  {
    id: "lnt",
    company: "Larsen and Toubro Energy Hydrocarbon",
    title: "Software Development Engineer Intern",
    period: "May 2023 - July 2023",
    location: "Powai, Mumbai, India",
    team: "Engineering Productivity",
    summary:
      "Built engineering productivity tools that turned long-running operational tasks into software-assisted workflows with measurable time savings.",
    highlights: [
      "Reduced cable routing time from 25 days to 1 hour using Python, Dijkstra’s algorithm, graph models, ezdxf, and networkx.",
      "Built a user manual generator with CRUD operations, stored procedures, and ADO.NET on ASP.NET MVC, saving 1 to 2 developer days per project.",
    ],
    tags: [
      "Python",
      "Algorithms",
      "ASP.NET MVC",
      "ADO.NET",
      "Engineering Tools",
      "Automation",
    ],
  },
];

export const projectEntries: ProjectEntry[] = [
  {
    id: "vitalflow",
    title: "VitalFlow",
    category: "AI Product",
    role: "Full-stack engineer",
    year: "2026",
    image: "/project-vitalflow.png",
    summary:
      "Voice-first healthcare assistant that combines appointment booking, AI chat, document intelligence, and doctor workflows in a single patient-facing and clinician-facing product.",
    outcome:
      "Shows end-to-end product execution across polished frontend UX, real-time voice interaction, RAG-backed medical context, and production-style deployment on AWS.",
    technologies: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "LiveKit",
      "Sarvam AI",
      "Gemini",
      "Node.js",
      "AWS",
    ],
    featured: true,
    links: [
      {
        label: "Demo",
        href: "https://www.youtube.com/watch?v=akoh6J3vQzY",
        variant: "primary",
      },
      { label: "Frontend", href: "https://github.com/Yh010/vitalflow_frontend" },
      { label: "Backend", href: "https://github.com/Yh010/vitalflow_backend" },
    ],
  },
  {
    id: "lithouse",
    title: "Lithouse",
    category: "AI Product",
    role: "Full-stack engineer",
    year: "2025",
    image: "/project-lithouse.png",
    summary:
      "AI creator platform spanning script generation, description writing, thumbnail generation, personalized media workflows, and collaborative real-time spaces.",
    outcome:
      "Highlights architecture depth across Redis-backed workers, WebSocket sync, payment flows, AI media pipelines, and cost-aware deployment on a single DigitalOcean setup.",
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "WebSockets",
      "Redis",
      "Replicate",
      "Razorpay",
      "Docker",
    ],
    featured: true,
    links: [
      { label: "Frontend", href: "https://github.com/MetaCreators/Frontend" },
      { label: "Backend", href: "https://github.com/MetaCreators/Backend" },
      { label: "Realtime", href: "https://github.com/MetaCreators/WebSocketServer" },
      { label: "Workers", href: "https://github.com/MetaCreators/workers" },
    ],
  },
  {
    id: "generoid",
    title: "Generoid",
    category: "Developer Tooling",
    role: "Full-stack engineer",
    year: "2024",
    image: "/project-generoid.png",
    summary:
      "Chat-driven AI assistant that generates frontend UI components, persists conversations, and shows generated code alongside a live component preview.",
    outcome:
      "Demonstrates developer-tooling thinking through prompt-to-code generation, auth-backed sessions, stateful chat history, and an in-browser code sandbox for fast iteration.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Gemini",
      "Prisma",
      "NextAuth",
      "CodeMirror",
      "Tailwind CSS",
      "Zustand",
    ],
    featured: true,
    links: [{ label: "Source", href: "https://github.com/Yh010/Generoid" }],
  },
  {
    id: "investment-tracker",
    title: "Real-Time Investment Tracker",
    category: "Fintech",
    role: "Full-stack engineer",
    year: "2024",
    image: "/project-investment-tracker.png",
    summary:
      "Finance tool where users upload Excel holdings, pull live prices and market news, inspect graphs, edit positions, and export updated portfolio data.",
    outcome:
      "Shows practical product thinking around spreadsheet ingestion, live third-party market data, editable portfolio workflows, and recruiter-friendly fintech UI execution.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "XLSX",
      "SerpAPI",
      "Express",
      "Prisma",
      "AWS S3",
    ],
    featured: false,
    links: [
      { label: "Frontend", href: "https://github.com/Yh010/expensetrackerFrontend" },
      { label: "Backend", href: "https://github.com/Yh010/expenseTrackerBackend" },
    ],
  },
];

export const certificationEntries: CertificationEntry[] = [
  {
    id: "react-guide",
    title: "React - The Complete Guide",
    issuer: "Udemy",
    year: "2024",
    category: "Frontend Development",
    note: "Hooks, architecture, routing, and production React patterns.",
  },
  {
    id: "advanced-js",
    title: "Advanced JavaScript Concepts",
    issuer: "Coursera",
    year: "2024",
    category: "Programming",
    note: "Closures, async workflows, and modern JavaScript fundamentals.",
  },
  {
    id: "typescript",
    title: "TypeScript Fundamentals",
    issuer: "Pluralsight",
    year: "2023",
    category: "Programming",
    note: "Static typing for maintainable frontends and service layers.",
  },
  {
    id: "aws-cloud",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
    category: "Cloud",
    note: "Cloud fundamentals for product teams building internet-facing systems.",
  },
];
