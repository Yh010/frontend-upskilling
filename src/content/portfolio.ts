import type {
  AchievementEntry,
  CertificationEntry,
  ContactLink,
  ExperienceEntry,
  Metric,
  NavItem,
  OnCameraEntry,
  Profile,
  ProjectEntry,
} from "./types";

export const profile: Profile = {
  name: "Yash Hegde",
  shortName: "YH",
  role: "Software engineer building AI-enabled financial products",
  location: "India",
  availability: "Open to full-stack product engineering roles",
  summary:
    "Software engineer building financial workflows, AI-enabled products, real-time interfaces, and production systems.",
  heroTitle: "Full-stack engineer building reliable financial and AI-enabled products.",
  heroLead:
    "I work across product interfaces, backend systems, and end-to-end delivery, with recent experience in digital banking, document intelligence, and AI products.",
  heroSubcopy:
    "This portfolio brings together selected projects, work experience, and motion studies to show how I build products end to end.",
  resumeUrl: "/Yash-Hegde-Resume.pdf",
};

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Writing", path: "/blogs" },
  { label: "Videos", path: "/youtube" },
  { label: "Labs", path: "/labs/motion" },
  { label: "Courses", path: "/courses" },
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
    detail: "Motion and interaction studies focused on UI behavior, transitions, and product feel.",
  },
  {
    value: "04",
    label: "selected projects",
    detail: "Healthcare, AI, developer tooling, and fintech projects chosen for product and engineering range.",
  },
  {
    value: "05",
    label: "work environments",
    detail: "Enterprise, startup, freelance, and engineering operations environments across different teams and constraints.",
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "oracle-ofss",
    company: "Oracle Financial Services",
    logo: "/company-oracle.png",
    title: "Application Developer I",
    period: "Sept 2025 - Present",
    location: "Bengaluru, India",
    team: "Oracle Banking Digital Experience",
    summary:
      "Built digital banking and AI-assisted document workflows spanning cash forecasting, payment receipts, API integrations, and production release support.",
    highlights: [
      "Built a two-stage payment-receipt workflow combining document upload, AI-assisted field extraction, user correction, validation, and payment-record submission.",
      "Delivered cash-forecasting workflows for recurring schedules, expected-versus-actual cashflows, account and counterparty selection, categorization, and transaction review and edit flows.",
      "Developed cashflow tracking, filtering, allocation, and reconciliation features that help operations teams investigate projected movements and connect forecasts with completed payments.",
      "Stabilized customer-facing banking workflows across five production point releases by resolving API, document-ID mapping, external-account, authorization, generated-UI, localization, and deployment defects.",
      "Contributed to an AI knowledge graph connecting enterprise code, APIs, database objects, UI metadata, security configuration, and documentation into a traceable dependency model.",
      "Built graph-backed, evidence-first agent workflows for impact analysis, code exploration, bug investigation, security review, and test discovery.",
    ],
    tags: [
      "Oracle JET",
      "JavaScript",
      "Enterprise UI",
      "REST APIs",
      "Cash Management",
      "OBDX",
      "Agentic AI",
      "Graph Retrieval",
    ],
  },
  {
    id: "balco",
    company: "Bharat Aluminium Company",
    logo: "/company-balco.png",
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
    logo: "/company-xquare.png",
    title: "Full Stack Developer - Freelance",
    period: "Aug 2024 - Sep 2024",
    location: "Remote, Canada",
    team: "AI Product Development",
    summary:
      "Built full-stack AI product workflows spanning responsive UI, real-time chat, authentication, and backend APIs using third-party data sources.",
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
    logo: "/company-persana.png",
    title: "Frontend Intern",
    period: "Feb 2024 - Apr 2024",
    location: "Remote, SF Bay Area",
    team: "Startup Product Engineering",
    summary:
      "Worked on frontend modernization and shipped new UI modules for core product workflows in a startup environment.",
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
    logo: "/company-lnt.png",
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
      "Voice-first healthcare assistant with appointment booking, doctor discovery, document context, and real-time AI responses.",
    outcome:
      "Pairs Sarvam AI speech-to-text and text-to-speech with a responsive React interface, then ships the frontend on S3 and CloudFront and the backend on EC2.",
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
      "AI creator platform for script writing, descriptions, thumbnails, and real-time collaboration.",
    outcome:
      "Uses a Mediasoup SFU, WebSocket synchronization, Redis queue workers, and Dockerized services to support an N:N real-time product stack.",
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
      "AI assistant that generates frontend components and previews the output beside the code.",
    outcome:
      "Combines real-time Gemini responses, Google OAuth, persisted sessions, and a prompt-to-code preview workflow for UI generation.",
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
      "Portfolio tracker for uploaded holdings, live prices, market news, editing, and export.",
    outcome:
      "Combines spreadsheet ingestion, SerpAPI market data, editable holdings, and export flows in a finance UI.",
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
    id: "llm-engineering",
    title: "LLM Engineering: Master AI, Large Language Models & Agents",
    issuer: "Udemy",
    year: "2025",
    category: "AI Engineering",
    note: "Issued Oct 2025. Credential ID: UC-187cf3cb-a0ea-4959-8ff0-e6dd0d843b8b.",
    credentialUrl:
      "https://www.udemy.com/share/10bOXH3%40YBn0GZ8fQN5kvt2J0036Zw2SeKBPN8A2Qv_MOthb6If0_Bfq9XultaOSgH-8JFhL/",
  },
  {
    id: "agent-memory",
    title: "LLMs as Operating Systems: Agent Memory",
    issuer: "DeepLearning.AI",
    year: "2025",
    category: "AI Engineering",
    note: "Issued Oct 2025. Credential ID: bfeae57c-dfe2-4ad3-9e57-27ce3be67db.",
    credentialUrl:
      "https://www.deeplearning.ai/courses/llms-as-operating-systems-agent-memory",
  },
  {
    id: "backend-performance",
    title: "Troubleshooting Backend Performance",
    issuer: "Udemy",
    year: "2025",
    category: "Backend Systems",
    note: "Issued Aug 2025. Credential ID: UC-dfc1b26c-4165-4574-b0db-1222984f48ea.",
    credentialUrl:
      "https://www.udemy.com/course/discovering-backend-bottlenecks-unlocking-peak-performance/",
  },
  {
    id: "google-adk",
    title: "Build intelligent agents with Agent Development Kit (ADK)",
    issuer: "Google Cloud Skills Boost",
    year: "2025",
    category: "AI Engineering",
    note: "Issued Jul 2025. Credential ID: f323e3c1-c8b1-4f88-83a0-62a46804c7b6/badges/17032240.",
    credentialUrl:
      "https://www.cloudskillsboost.google/course_templates/1382?linkId=16038701",
  },
  {
    id: "100x-full-stack",
    title: "Full stack development",
    issuer: "100xDevs",
    year: "2025",
    category: "Full-Stack Development",
    note: "Issued Jan 2025. Credential ID: 12RRC7S4.",
    credentialUrl: "https://100xdevs.com/new-courses/2",
  },
  {
    id: "kyverno-fundamentals",
    title: "Fundamentals for Kyverno",
    issuer: "Nirmata",
    year: "2023",
    category: "Cloud Native",
    note: "Issued May 2023.",
    credentialUrl: "https://www.credly.com/org/nirmata/badge/fundamentals-for-kyverno",
  },
];

export const onCameraEntries: OnCameraEntry[] = [
  {
    id: "harkirat-podcast",
    title: "Career switch story",
    platform: "YouTube",
    host: "Harkirat Singh",
    summary:
      "A short conversation on moving from chemical engineering into software.",
    href: "https://www.youtube.com/watch?feature=shared&v=SI18YDCFEYQ",
    ctaLabel: "Watch on YouTube",
    thumbnail: "https://img.youtube.com/vi/SI18YDCFEYQ/maxresdefault.jpg",
  },
];

export const achievementEntries: AchievementEntry[] = [
  {
    id: "google-agentic-ai",
    title: "Top 50 Finalist",
    event: "Google Agentic AI Hackathon",
    year: "2025",
    detail: "Selected from 70,000+ developers across India.",
  },
  {
    id: "tata-teleport",
    title: "Top 50 Finalist",
    event: "TATA Elxsi TELIPORT Hackathon",
    year: "2023",
    detail: "All-India finalist finish.",
  },
  {
    id: "dr-reddys-aspire",
    title: "Top 10 Finalist",
    event: "Dr. Reddy's Aspire Challenge",
    year: "2023",
    detail: "All-India finalist finish.",
  },
];
