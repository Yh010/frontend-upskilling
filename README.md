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

## Capture Notes

The README demos are stored in `public/demos/`.

- GIF previews are used because they render directly in GitHub READMEs.
- The original `.webm` recordings are kept beside the GIFs for higher-quality playback when opened directly.
