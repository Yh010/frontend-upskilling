# Frontend Upskilling

A small React + Vite playground for learning motion, interaction design, and polished frontend micro-interactions.

The repo is intentionally component-heavy: each route focuses on one animation idea, from hover-driven UI to chained sequences, tooltips, particles, and state transitions.

## Demo Gallery

### Animated Card

Blurred entrance, hover reveal, and exit/reopen state transitions.

![Animated Card](public/demos/animated-card.gif)

Route: `/animatedcard`

### Payment Sequence

A chained `useAnimate` flow: loader, morph, bounce, gradient, and checkmark draw.

![Payment Sequence](public/demos/payment-sequence.gif)

Route: `/animatedsequence`

### Floating Dock

Dock icons scale and lift based on cursor proximity, with tooltips.

![Floating Dock](public/demos/floating-dock.gif)

Route: `/floatingdock`

### Sidebar Stagger

Expandable sidebar with staggered item entrance and compact/expanded states.

![Sidebar Stagger](public/demos/sidebar-stagger.gif)

Route: `/sidebar`

### Smart Tooltip

Tooltip placement follows the cursor and springs into view.

![Smart Tooltip](public/demos/tooltip-placement.gif)

Route: `/toolTip`

### Toast Stack

Stacking toast cards with depth scaling and smooth enter transitions.

![Toast Stack](public/demos/toast-stack.gif)

Route: `/sonnertoast`

### Trash Flow

Selection-driven UI state: cards collapse into a focused delete confirmation.

![Trash Flow](public/demos/trash-flow.gif)

Route: `/trashanimation`

### Particle Button

Button dissolves into generated particles with randomized timing.

![Particle Button](public/demos/particle-button.gif)

Route: `/particles`

### Motion Progress

Segmented circular progress control with hover focus states.

![Motion Progress](public/demos/motion-progress.gif)

Route: `/progress`

### Text Reveal

Character-level text reveal using Motion's `useAnimate` and stagger.

![Text Reveal](public/demos/text-reveal.gif)

Route: `/animatedText`

## More Routes

There are also smaller experiments for:

- `/movingbutton`
- `/motionhooks`
- `/layout`
- `/navbar`
- `/card`
- `/testimonials`
- `/animatedunderline`
- `/compare`
- `/responsive`
- `/transition`
- `/keyframe`
- `/clippath`
- `/onboarding`
- `/motion/learning`
- `/projects`
- `/certifications`

## Tech Stack

- React
- Vite
- Tailwind CSS
- Motion / Framer Motion
- Lucide React
- React Router

## Run Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL and visit any route above.

## Notion-powered blog

The blog can publish from a Notion data source while retaining a static, fast Vercel site. A Notion update calls `api/notion-webhook.js`, which validates the event and triggers a new deployment. During that deployment, `scripts/sync-notion-content.mjs` fetches the latest published posts and generates the site's blog data.

### 1. Create the Notion data source

Create a Notion database and use these exact property names:

| Property | Type | Purpose |
| --- | --- | --- |
| `Name` | Title | Blog title |
| `Slug` | Text | URL-safe unique slug, for example `building-a-small-agent` |
| `Excerpt` | Text | Short introduction shown in the index and article header |
| `Category` | Select | Article collection, for example `OpenKode` |
| `Reading time` | Text | Label such as `5 min read` |
| `Published` | Checkbox | Only checked posts are visible on the site |

Use normal paragraph blocks and heading blocks for the post body. The sync currently renders paragraphs, quotes, numbered lists, bulleted lists, and headings.

### 2. Create and share a Notion connection

Create an internal connection in the [Notion integrations settings](https://www.notion.so/my-integrations), enable read access, and share the blog database with that connection. Copy its access token and the data source ID from the database URL.

### 3. Configure Vercel

Add these Production environment variables in Vercel:

| Variable | Value |
| --- | --- |
| `NOTION_ACCESS_TOKEN` | Notion connection access token |
| `NOTION_BLOG_DATA_SOURCE_ID` | Your Notion data source ID |
| `VERCEL_DEPLOY_HOOK_URL` | A Vercel Deploy Hook URL for this project |
| `NOTION_WEBHOOK_VERIFICATION_TOKEN` | Added after the first webhook delivery, described below |

Deploy once after adding the first three variables. Create a Deploy Hook in **Project Settings → Git → Deploy Hooks**; it must target the production branch.

### 4. Activate Notion updates

In your Notion connection's **Webhooks** tab, add this public endpoint:

`https://<your-domain>/api/notion-webhook`

Subscribe to `page.created`, `page.content_updated`, `page.properties_updated`, `page.deleted`, and `page.undeleted`. The first delivery writes the verification token to the Vercel function logs. Copy that token into `NOTION_WEBHOOK_VERIFICATION_TOKEN`, redeploy once, then complete verification in Notion.

From then on, publishing or editing a Notion post triggers a signed webhook and deploys the refreshed blog automatically. Never commit the Notion token or Deploy Hook URL.

## Capture Notes

The README demos are stored in `public/demos/`.

- GIF previews are used because they render directly in GitHub READMEs.
- The original `.webm` recordings are kept beside the GIFs for higher-quality playback when opened directly.
