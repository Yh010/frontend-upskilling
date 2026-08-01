export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogEntry = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readingTime: string;
  source: "Notion";
  sections: BlogSection[];
  notionEmbedUrl?: string;
};

export type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  href: string;
  thumbnail: string;
};

export type YouTubePlaylist = {
  id: string;
  title: string;
  description: string;
  videos: YouTubeVideo[];
};

// These entries establish the public writing structure. The Notion page is private
// in the current session, so its toggle text should be pasted into `sections` once
// access is available rather than rewritten from memory.
const fallbackBlogEntries: BlogEntry[] = [
  {
    slug: "why-headless-ai-core-and-start-with-cli-not-vscode-extension",
    category: "OpenKode",
    title: "Why headless AI core and start with CLI, not a VS Code extension",
    excerpt:
      "A product and systems decision about keeping the AI core portable, scriptable, and independent of a single editor surface.",
    readingTime: "Decision note",
    source: "Notion",
    sections: [
      {
        paragraphs: [
          "The source decision for this post is stored in the private Notion workspace. Its original toggle content will be imported here verbatim once Notion access is available in this session.",
        ],
      },
    ],
  },
  {
    slug: "why-agents-use-model-guided-fuzzy-retrieval-instead-of-regex-or-ast",
    category: "OpenKode",
    title:
      "Why agents like Codex and Pi use model-guided fuzzy retrieval instead of a deterministic approach like regex or AST",
    excerpt:
      "A decision note on retrieval trade-offs: deterministic precision, fuzzy recall, and why agent workflows need both.",
    readingTime: "Decision note",
    source: "Notion",
    sections: [
      {
        paragraphs: [
          "The source decision for this post is stored in the private Notion workspace. Its original toggle content will be imported here verbatim once Notion access is available in this session.",
        ],
      },
    ],
  },
];

import { notionBlogEntries } from "./notionWriting.generated";

export const blogEntries = notionBlogEntries.length ? notionBlogEntries : fallbackBlogEntries;

export const youtubePlaylists: YouTubePlaylist[] = [
  {
    id: "openkode-devlog",
    title: "Building OpenKode",
    description:
      "Devlogs from building an AI coding assistant in public: repository understanding, streaming, token tracking, and architecture decisions.",
    videos: [
      {
        id: "openkode-day-5-dependency-scanning",
        title: "Day 5: Deterministic repository dependency scanning",
        description:
          "A short build update on mapping repository dependencies for better codebase understanding.",
        href: "https://www.youtube.com/watch?v=A3ECEmieYA4",
        thumbnail: "https://img.youtube.com/vi/A3ECEmieYA4/maxresdefault.jpg",
      },
      {
        id: "openkode-day-4",
        title: "Day 4: Building OpenKode in public",
        description:
          "A progress update from the ongoing build-in-public series.",
        href: "https://www.youtube.com/watch?v=UCR9l_SNGDM",
        thumbnail: "https://img.youtube.com/vi/UCR9l_SNGDM/maxresdefault.jpg",
      },
      {
        id: "openkode-devlog-2",
        title:
          "Devlog #2: Streaming, token tracking & clean architecture",
        description:
          "A deeper walkthrough of the streaming and architecture decisions behind the AI coding assistant.",
        href: "https://www.youtube.com/watch?v=gJJ6OiD30wo",
        thumbnail: "https://img.youtube.com/vi/gJJ6OiD30wo/maxresdefault.jpg",
      },
      {
        id: "openkode-devlog-1",
        title: "Devlog #1: Building an AI coding agent from scratch",
        description:
          "The first public devlog introducing the idea, scope, and early implementation of OpenKode.",
        href: "https://www.youtube.com/watch?v=epCbd9UhSnA",
        thumbnail: "https://img.youtube.com/vi/epCbd9UhSnA/maxresdefault.jpg",
      },
    ],
  },
  {
    id: "ai-architecture",
    title: "AI architecture, explained",
    description:
      "Long-form learning notes that unpack the architectures behind modern AI systems.",
    videos: [
      {
        id: "mixture-of-experts-part-2",
        title: "Mixture of Experts, Part 2: Router math, top-K gating & Switch Transformer",
        description:
          "An explanation of routing, top-K gating, and the Switch Transformer in Mixture-of-Experts models.",
        href: "https://www.youtube.com/watch?v=zAbbf-Rac7U",
        thumbnail: "https://img.youtube.com/vi/zAbbf-Rac7U/maxresdefault.jpg",
      },
      {
        id: "mixture-of-experts-part-1",
        title:
          "Mixture of Experts, Part 1: The AI architecture behind modern LLMs",
        description:
          "An introduction to Mixture-of-Experts and why the architecture matters for large language models.",
        href: "https://www.youtube.com/watch?v=LE-3ke4HvEU",
        thumbnail: "https://img.youtube.com/vi/LE-3ke4HvEU/maxresdefault.jpg",
      },
    ],
  },
  {
    id: "design-engineering",
    title: "Design & engineering",
    description:
      "Short learning videos on motion, interfaces, and the craft of communicating through software.",
    videos: [
      {
        id: "animation-as-communication",
        title: "Animation as communication",
        description:
          "A lesson on using motion deliberately to communicate state and intent in interfaces.",
        href: "https://www.youtube.com/watch?v=R-3yuy4LyG0",
        thumbnail: "https://img.youtube.com/vi/R-3yuy4LyG0/maxresdefault.jpg",
      },
      {
        id: "why-animations-matter",
        title: "Why animations matter",
        description:
          "An introduction to the role animation plays in creating understandable, responsive interfaces.",
        href: "https://www.youtube.com/watch?v=N2jXAIun3o8",
        thumbnail: "https://img.youtube.com/vi/N2jXAIun3o8/maxresdefault.jpg",
      },
    ],
  },
];
