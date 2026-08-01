import { mkdir, writeFile } from "node:fs/promises";

const outputFile = new URL("../src/content/notionWriting.generated.ts", import.meta.url);
const notionImageDirectory = new URL("../public/notion-images/", import.meta.url);
const apiVersion = "2026-03-11";
const token = process.env.NOTION_ACCESS_TOKEN;
const publicSiteOrigin = (process.env.NOTION_PUBLIC_SITE_ORIGIN || "https://yashhegde.notion.site").replace(/\/$/, "");
let dataSourceId = process.env.NOTION_BLOG_DATA_SOURCE_ID;
const databaseId = process.env.NOTION_BLOG_DATABASE_ID;

if (!token || (!dataSourceId && !databaseId)) {
  console.log("Notion sync skipped: configure NOTION_ACCESS_TOKEN and either NOTION_BLOG_DATA_SOURCE_ID or NOTION_BLOG_DATABASE_ID.");
  process.exit(0);
}

const request = async (path, options = {}) => {
  const response = await fetch(`https://api.notion.com/v1${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": apiVersion,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Notion request failed (${response.status}): ${await response.text()}`);
  }

  return response.json();
};

const plainText = (value = []) => value.map((item) => item.plain_text ?? item.text?.content ?? "").join("").trim();
const propertyText = (property) => plainText(property?.title ?? property?.rich_text ?? []);
const blockText = (block) => plainText(block[block.type]?.rich_text ?? []);
const richText = (value = []) => value.map((item) => ({
  text: item.plain_text ?? item.text?.content ?? "",
  ...(item.href ? { href: item.href } : {}),
  ...(item.annotations?.bold ? { bold: true } : {}),
  ...(item.annotations?.italic ? { italic: true } : {}),
  ...(item.annotations?.strikethrough ? { strikethrough: true } : {}),
  ...(item.annotations?.underline ? { underline: true } : {}),
  ...(item.annotations?.code ? { code: true } : {}),
}));

if (!dataSourceId) {
  const database = await request(`/databases/${databaseId}`);
  dataSourceId = database.data_sources?.[0]?.id;
  if (!dataSourceId) throw new Error("The Notion database does not contain a data source.");
}

async function getChildren(pageId) {
  const blocks = [];
  let cursor;

  do {
    const query = new URLSearchParams({ page_size: "100" });
    if (cursor) query.set("start_cursor", cursor);
    const response = await request(`/blocks/${pageId}/children?${query}`);
    blocks.push(...response.results);
    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);

  return blocks;
}

async function persistImage(sourceUrl, pageId, blockId) {
  if (!sourceUrl) return undefined;

  const response = await fetch(sourceUrl);
  if (!response.ok) return sourceUrl;

  const extension = response.headers.get("content-type")?.split("/")[1]?.split(";")[0]?.replace("jpeg", "jpg") || "png";
  const pageDirectory = new URL(`${pageId.replace(/-/g, "")}/`, notionImageDirectory);
  const filename = `${blockId.replace(/-/g, "")}.${extension}`;

  await mkdir(pageDirectory, { recursive: true });
  await writeFile(new URL(filename, pageDirectory), Buffer.from(await response.arrayBuffer()));
  return `/notion-images/${pageId.replace(/-/g, "")}/${filename}`;
}

function sectionsFromBlocks(blocks) {
  const sections = [];
  let current = { paragraphs: [] };

  for (const block of blocks) {
    const text = blockText(block);
    if (!text) continue;

    if (block.type === "heading_1" || block.type === "heading_2" || block.type === "heading_3") {
      if (current.paragraphs.length || current.heading) sections.push(current);
      current = { heading: text, paragraphs: [] };
      continue;
    }

    if (block.type === "paragraph" || block.type === "bulleted_list_item" || block.type === "numbered_list_item" || block.type === "quote") {
      current.paragraphs.push(block.type.endsWith("list_item") ? `• ${text}` : text);
    }
  }

  if (current.paragraphs.length || current.heading) sections.push(current);
  return sections.length ? sections : [{ paragraphs: ["This published Notion post has no supported text blocks yet."] }];
}

async function notionBlocks(blocks, pageId) {
  return Promise.all(blocks.map(async (block) => {
    const data = block[block.type] ?? {};
    const image = block.type === "image" ? data[data.type] : undefined;
    const children = block.has_children ? await notionBlocks(await getChildren(block.id), pageId) : undefined;

    return {
      id: block.id,
      type: block.type,
      ...(data.rich_text ? { richText: richText(data.rich_text) } : {}),
      ...(data.caption ? { caption: richText(data.caption) } : {}),
      ...(image?.url ? { imageUrl: await persistImage(image.url, pageId, block.id) } : {}),
      ...(data.language ? { language: data.language } : {}),
      ...(children?.length ? { children } : {}),
    };
  }));
}

const posts = [];
let cursor;
do {
  const body = {
    page_size: 100,
    sorts: [{ timestamp: "last_edited_time", direction: "descending" }],
  };
  if (cursor) body.start_cursor = cursor;
  const response = await request(`/data_sources/${dataSourceId}/query`, { method: "POST", body: JSON.stringify(body) });
  posts.push(...response.results);
  cursor = response.has_more ? response.next_cursor : undefined;
} while (cursor);

// Some newer Notion workspaces expose database entries to an internal
// connection through Search before they appear in the data-source query.
// The connection for this project is granted access only to Blog Posts, so
// this is a safe fallback and keeps publishing reliable across both shapes.
if (!posts.length) {
  let searchCursor;
  do {
    const body = {
      page_size: 100,
      filter: { property: "object", value: "page" },
    };
    if (searchCursor) body.start_cursor = searchCursor;

    const response = await request("/search", { method: "POST", body: JSON.stringify(body) });
    posts.push(
      ...response.results.filter((page) => page.properties?.Name && page.properties?.Slug),
    );
    searchCursor = response.has_more ? response.next_cursor : undefined;
  } while (searchCursor);
}

const entries = await Promise.all(posts.filter((page) => page.properties.Published?.checkbox !== false).map(async (page) => {
  const properties = page.properties;
  const title = propertyText(properties.Name);
  const slug = propertyText(properties.Slug);

  if (!title || !slug) {
    throw new Error(`Every published Notion post needs a Name and Slug. Page ${page.id} is missing one.`);
  }

  const blocks = await getChildren(page.id);

  return {
    slug,
    title,
    category: properties.Category?.select?.name ?? "Writing",
    excerpt: propertyText(properties.Excerpt),
    readingTime: propertyText(properties["Reading time"]) || "Read note",
    source: "Notion",
    notionUrl: `${publicSiteOrigin}/ebd//${page.id.replace(/-/g, "")}`,
    sections: sectionsFromBlocks(blocks),
    blocks: await notionBlocks(blocks, page.id),
  };
}));

const source = `import type { BlogEntry } from "./writing";\n\n// Generated by scripts/sync-notion-content.mjs. Do not edit manually.\nexport const notionBlogEntries: BlogEntry[] = ${JSON.stringify(entries, null, 2)};\n`;
await writeFile(outputFile, source);
console.log(`Synced ${entries.length} published post${entries.length === 1 ? "" : "s"} from Notion.`);
