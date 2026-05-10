import { createRequire } from "node:module";
import fs from "node:fs/promises";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("D:/Projects/job-automation/career-ops/node_modules/playwright");

const baseUrl = process.env.DEMO_BASE_URL || "http://127.0.0.1:5174";
const outDir = path.resolve("public/demos");

const demos = [
  {
    slug: "animated-card",
    title: "Animated Card",
    route: "/animatedcard",
    description: "Blurred entrance, hover reveal, and exit/reopen state transitions.",
    recordMs: 5200,
    actions: async (page) => {
      await page.mouse.move(640, 430);
      await page.waitForTimeout(700);
      await page.mouse.move(640, 560);
      await page.waitForTimeout(1000);
      await page.getByRole("button", { name: /Explore/i }).click();
      await page.waitForTimeout(900);
      await page.getByRole("button", { name: /open/i }).click();
      await page.waitForTimeout(900);
    },
  },
  {
    slug: "payment-sequence",
    title: "Payment Sequence",
    route: "/animatedsequence",
    description: "A chained useAnimate sequence: loader, morph, bounce, gradient, and checkmark draw.",
    recordMs: 5200,
    actions: async (page) => {
      await page.waitForTimeout(500);
      await page.getByRole("button").click();
      await page.waitForTimeout(4200);
    },
  },
  {
    slug: "floating-dock",
    title: "Floating Dock",
    route: "/floatingdock",
    description: "Dock icons scale and lift based on cursor proximity, with tooltips.",
    recordMs: 5200,
    actions: async (page) => {
      const y = 360;
      for (const x of [470, 535, 600, 665, 730, 795, 665, 535]) {
        await page.mouse.move(x, y, { steps: 16 });
        await page.waitForTimeout(260);
      }
      await page.mouse.move(960, 120, { steps: 12 });
      await page.waitForTimeout(500);
    },
  },
  {
    slug: "sidebar-stagger",
    title: "Sidebar Stagger",
    route: "/sidebar",
    description: "Expandable sidebar with staggered item entrance and compact/expanded states.",
    recordMs: 4500,
    actions: async (page) => {
      await page.waitForTimeout(500);
      const toggle = page.locator("button.absolute.top-4.right-4");
      await toggle.click();
      await page.waitForTimeout(1300);
      await toggle.click();
      await page.waitForTimeout(1000);
      await toggle.click();
      await page.waitForTimeout(900);
    },
  },
  {
    slug: "tooltip-placement",
    title: "Smart Tooltip",
    route: "/toolTip",
    description: "Tooltip placement follows the cursor and springs into view.",
    recordMs: 4800,
    actions: async (page) => {
      for (const point of [
        [640, 360],
        [602, 347],
        [675, 345],
        [682, 377],
        [610, 379],
        [640, 360],
      ]) {
        await page.mouse.move(point[0], point[1], { steps: 14 });
        await page.waitForTimeout(420);
      }
      await page.mouse.move(960, 120, { steps: 10 });
      await page.waitForTimeout(400);
    },
  },
  {
    slug: "toast-stack",
    title: "Toast Stack",
    route: "/sonnertoast",
    description: "Stacking toast cards with depth scaling and smooth enter transitions.",
    recordMs: 5000,
    actions: async (page) => {
      await page.waitForTimeout(500);
      const addToast = page.getByRole("button", { name: /Add toast/i });
      for (let i = 0; i < 4; i += 1) {
        await addToast.click();
        await page.waitForTimeout(520);
      }
      await page.waitForTimeout(900);
    },
  },
  {
    slug: "trash-flow",
    title: "Trash Flow",
    route: "/trashanimation",
    description: "Selection-driven UI state: cards collapse into a focused delete confirmation.",
    recordMs: 5000,
    actions: async (page) => {
      await page.waitForTimeout(500);
      const boxes = page.locator("input[type='checkbox']");
      await boxes.nth(0).check();
      await page.waitForTimeout(350);
      await boxes.nth(2).check();
      await page.waitForTimeout(500);
      await page.getByRole("button", { name: /Add to Trash/i }).click();
      await page.waitForTimeout(1500);
    },
  },
  {
    slug: "particle-button",
    title: "Particle Button",
    route: "/particles",
    description: "Button dissolves into generated particles with randomized timing.",
    recordMs: 4200,
    actions: async (page) => {
      await page.waitForTimeout(500);
      await page.getByRole("button", { name: /Click me/i }).click();
      await page.waitForTimeout(2600);
    },
  },
  {
    slug: "motion-progress",
    title: "Motion Progress",
    route: "/progress",
    description: "Segmented circular progress control with hover focus states.",
    recordMs: 4800,
    actions: async (page) => {
      for (const point of [
        [640, 250],
        [730, 430],
        [550, 430],
        [640, 250],
      ]) {
        await page.mouse.move(point[0], point[1], { steps: 16 });
        await page.waitForTimeout(650);
      }
    },
  },
  {
    slug: "text-reveal",
    title: "Text Reveal",
    route: "/animatedText",
    description: "Character-level text reveal using Motion's useAnimate and stagger.",
    recordMs: 3600,
    actions: async (page) => {
      await page.waitForTimeout(2600);
    },
  },
];

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const results = [];

for (const demo of demos) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
    recordVideo: {
      dir: outDir,
      size: { width: 1280, height: 720 },
    },
  });
  const page = await context.newPage();
  await page.goto(`${baseUrl}${demo.route}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await demo.actions(page);
  await page.waitForTimeout(Math.max(0, demo.recordMs - 500));
  await context.close();

  const video = page.video();
  const tempPath = await video.path();
  const finalWebm = path.join(outDir, `${demo.slug}.webm`);
  await fs.rename(tempPath, finalWebm);
  results.push({ ...demo, webm: `public/demos/${demo.slug}.webm`, gif: `public/demos/${demo.slug}.gif` });
}

await browser.close();
await fs.writeFile(
  path.join(outDir, "manifest.json"),
  JSON.stringify(results.map(({ title, slug, route, description, webm, gif }) => ({ title, slug, route, description, webm, gif })), null, 2),
);

console.log(`Recorded ${results.length} demos to ${outDir}`);
