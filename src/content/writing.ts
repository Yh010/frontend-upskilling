export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type NotionRichText = {
  text: string;
  href?: string;
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  code?: boolean;
};

export type NotionBlock = {
  id: string;
  type: string;
  richText?: NotionRichText[];
  caption?: NotionRichText[];
  imageUrl?: string;
  language?: string;
  children?: NotionBlock[];
};

export type BlogEntry = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readingTime: string;
  source: "Notion";
  sections: BlogSection[];
  blocks?: NotionBlock[];
  notionUrl?: string;
};

export type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  href: string;
  thumbnail: string;
};

export type NotionYouTubeVideo = YouTubeVideo & {
  playlistTitle: string;
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

import { notionYouTubeVideos } from "./notionVideos.generated";

export const youtubePlaylists: YouTubePlaylist[] = Array.from(new Set(notionYouTubeVideos.map((video) => video.playlistTitle))).map((title) => ({
  id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  title,
  description: `Videos tagged ${title} in Notion.`,
  videos: notionYouTubeVideos.filter((video) => video.playlistTitle === title),
}));
