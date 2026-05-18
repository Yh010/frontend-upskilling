import AnimatedCard from "../components/AnimatedCard";
import { AnimatedText } from "../components/AnimatedText";
import { AnimationSequences } from "../components/AnimationSequences";
import ClippathPractice from "../components/ClippathPractice";
import FloatingDock from "../components/FloatingDock";
import KeyframePractice from "../components/KeyframePractice";
import LayoutCards from "../components/LayoutCards";
import MotionHooks from "../components/MotionHooks";
import MotionLearning from "../components/MotionLearning";
import MovingButton from "../components/MovingButton";
import Onboarding from "../components/Onboarding";
import { Particles } from "../components/Particles";
import Progress from "../components/Progress";
import { Responsive } from "../components/Responsive";
import Sidebar from "../components/Sidebar";
import SonnerToast from "../components/SonnerToast";
import { Testimonials } from "../components/Testimonials";
import { ThreeDCard } from "../components/ThreeDCard";
import { ToolTip } from "../components/ToolTip";
import TrashAnimation from "../components/TrashAnimation";
import TransitionPractice from "../components/TransitionPractice";
import UnderlineEffect from "../components/UnderlineEffect";
import { CompareCard } from "../components/CompareCard";
import { labDeepDives } from "./labDeepDives";
import type { LabDeepDive, LabEntry } from "./types";

type LabEntryBase = Omit<LabEntry, keyof LabDeepDive>;

const rawLabsMotionEntries: LabEntryBase[] = [
  {
    slug: "animated-card",
    title: "Animated Card",
    summary: "Blurred entrance, hover reveal, and a clean exit/reopen loop.",
    tags: ["Hover", "Presence", "Card UI"],
    year: "2025",
    featured: true,
    previewGif: "/demos/animated-card.gif",
    previewVideo: "/demos/animated-card.webm",
    route: "/labs/motion/animated-card",
    legacyPaths: ["/animatedcard"],
    technique: "AnimatePresence + layered hover choreography",
    whatItDemonstrates:
      "A compact product card that feels tactile before the user even clicks.",
    whyItMatters:
      "Useful for settings, previews, and dashboard panels that need clarity plus personality.",
    implementationNotes:
      "This experiment focuses on blur, scale, and timing to make a simple card feel premium without becoming distracting.",
    component: AnimatedCard,
  },
  {
    slug: "payment-sequence",
    title: "Payment Sequence",
    summary: "A chained payment confirmation flow driven by useAnimate.",
    tags: ["Sequencing", "Feedback", "Button UI"],
    year: "2025",
    featured: true,
    previewGif: "/demos/payment-sequence.gif",
    previewVideo: "/demos/payment-sequence.webm",
    route: "/labs/motion/payment-sequence",
    legacyPaths: ["/animatedsequence"],
    technique: "Imperative animation sequencing with useAnimate",
    whatItDemonstrates:
      "A multi-step interaction that turns a static button into a meaningful transaction moment.",
    whyItMatters:
      "Payment and confirmation states need confidence, rhythm, and immediate feedback.",
    implementationNotes:
      "The loader, shape morph, color shift, and checkmark are orchestrated as one narrative so the user understands progress without reading extra copy.",
    component: AnimationSequences,
  },
  {
    slug: "floating-dock",
    title: "Floating Dock",
    summary: "Cursor-proximity scaling with tooltips for a compact nav pattern.",
    tags: ["Navigation", "Cursor", "Spatial UI"],
    year: "2025",
    featured: true,
    previewGif: "/demos/floating-dock.gif",
    previewVideo: "/demos/floating-dock.webm",
    route: "/labs/motion/floating-dock",
    legacyPaths: ["/floatingdock"],
    technique: "Distance-based scaling and lift",
    whatItDemonstrates:
      "A dock that reacts to pointer position rather than simple hover on one target.",
    whyItMatters:
      "It suggests playfulness while still remaining legible, which is useful for tool-heavy interfaces.",
    implementationNotes:
      "The interaction relies on calculating distance to the active item so neighboring items respond with decreasing intensity.",
    component: FloatingDock,
  },
  {
    slug: "sidebar-stagger",
    title: "Sidebar Stagger",
    summary: "Compact-to-expanded sidebar with staggered item entrance.",
    tags: ["Navigation", "Stagger", "Layout"],
    year: "2025",
    featured: true,
    previewGif: "/demos/sidebar-stagger.gif",
    previewVideo: "/demos/sidebar-stagger.webm",
    route: "/labs/motion/sidebar-stagger",
    legacyPaths: ["/sidebar"],
    technique: "Layout animation plus staggered children",
    whatItDemonstrates:
      "An adaptive navigation surface that preserves hierarchy while changing density.",
    whyItMatters:
      "Useful for dashboards where navigation needs to scale from focused to expanded states without feeling abrupt.",
    implementationNotes:
      "This study uses width changes, delayed child entrance, and a simple control point to make state change feel intentional.",
    component: Sidebar,
  },
  {
    slug: "tooltip-placement",
    title: "Smart Tooltip",
    summary: "Tooltip placement follows cursor geometry instead of staying fixed.",
    tags: ["Tooltip", "Pointer", "Microinteraction"],
    year: "2025",
    featured: true,
    previewGif: "/demos/tooltip-placement.gif",
    previewVideo: "/demos/tooltip-placement.webm",
    route: "/labs/motion/tooltip-placement",
    legacyPaths: ["/toolTip"],
    technique: "Cursor-aware placement calculation",
    whatItDemonstrates:
      "A tooltip that chooses placement based on available space around the pointer.",
    whyItMatters:
      "Tooltips feel more responsive and less brittle when they react to context rather than forcing one position.",
    implementationNotes:
      "The component computes proximity to the edges of the trigger area and updates the spring-entered tooltip position accordingly.",
    component: ToolTip,
  },
  {
    slug: "toast-stack",
    title: "Toast Stack",
    summary: "Toast cards stack with depth scaling as new messages enter.",
    tags: ["Feedback", "Stacking", "System UI"],
    year: "2025",
    featured: true,
    previewGif: "/demos/toast-stack.gif",
    previewVideo: "/demos/toast-stack.webm",
    route: "/labs/motion/toast-stack",
    legacyPaths: ["/sonnertoast"],
    technique: "Depth-based enter animation",
    whatItDemonstrates:
      "A notification system that maintains visual order while still feeling dynamic.",
    whyItMatters:
      "System feedback should be readable at a glance, even when multiple messages arrive quickly.",
    implementationNotes:
      "Scaling and vertical offsets create hierarchy so newer notifications feel anchored above older ones without a heavy UI shell.",
    component: SonnerToast,
  },
  {
    slug: "trash-flow",
    title: "Trash Flow",
    summary: "Selection state collapses into a focused destructive-action confirmation.",
    tags: ["Selection", "Destructive Action", "State Transition"],
    year: "2025",
    featured: true,
    previewGif: "/demos/trash-flow.gif",
    previewVideo: "/demos/trash-flow.webm",
    route: "/labs/motion/trash-flow",
    legacyPaths: ["/trashanimation"],
    technique: "State-dependent UI reduction",
    whatItDemonstrates:
      "A multi-select interface that narrows attention to only the chosen items before delete confirmation.",
    whyItMatters:
      "Destructive actions need clarity and focus so users understand scope before committing.",
    implementationNotes:
      "The study explores how reducing surrounding noise can make confirmation states feel more confident and less alarming.",
    component: TrashAnimation,
  },
  {
    slug: "particle-button",
    title: "Particle Button",
    summary: "A button dissolves into particles with randomized timing and spread.",
    tags: ["Particles", "CTA", "Experimental"],
    year: "2025",
    featured: true,
    previewGif: "/demos/particle-button.gif",
    previewVideo: "/demos/particle-button.webm",
    route: "/labs/motion/particle-button",
    legacyPaths: ["/particles"],
    technique: "Generated particles with staggered escape vectors",
    whatItDemonstrates:
      "A CTA that visually decomposes into particles after activation.",
    whyItMatters:
      "High-energy motion can be valuable in marketing or celebratory product moments when used sparingly.",
    implementationNotes:
      "Particle positions and delays are generated per click to keep the motion organic rather than perfectly repeated.",
    component: Particles,
  },
  {
    slug: "motion-progress",
    title: "Motion Progress",
    summary: "Segmented circular progress with focus and hover emphasis.",
    tags: ["Data UI", "Progress", "Interactive SVG"],
    year: "2025",
    featured: true,
    previewGif: "/demos/motion-progress.gif",
    previewVideo: "/demos/motion-progress.webm",
    route: "/labs/motion/motion-progress",
    legacyPaths: ["/progress"],
    technique: "Segmented SVG progress interaction",
    whatItDemonstrates:
      "A progress control that behaves like a mini dashboard instead of a flat chart.",
    whyItMatters:
      "This is useful for analytics, goals, and dashboards where data emphasis changes with focus.",
    implementationNotes:
      "Segments respond independently so the component can highlight one metric while preserving the overall composition.",
    component: Progress,
  },
  {
    slug: "text-reveal",
    title: "Text Reveal",
    summary: "Character-level blur-and-rise reveal using useAnimate and stagger.",
    tags: ["Typography", "Reveal", "Editorial"],
    year: "2025",
    featured: true,
    previewGif: "/demos/text-reveal.gif",
    previewVideo: "/demos/text-reveal.webm",
    route: "/labs/motion/text-reveal",
    legacyPaths: ["/animatedText"],
    technique: "Staggered text reveal",
    whatItDemonstrates:
      "A readable headline animation that can support premium landing-page copy.",
    whyItMatters:
      "Text motion is powerful when it improves cadence without delaying comprehension.",
    implementationNotes:
      "This experiment uses blur, opacity, and slight vertical movement to keep the reveal expressive but readable.",
    component: AnimatedText,
  },
  {
    slug: "moving-button",
    title: "Moving Button",
    summary: "A playful button interaction study from the early lab set.",
    tags: ["Button", "Foundations"],
    year: "2025",
    featured: false,
    route: "/labs/motion/moving-button",
    legacyPaths: ["/movingbutton"],
    technique: "Foundational button motion",
    whatItDemonstrates: "A small study in CTA movement and response.",
    whyItMatters: "Early interaction studies help shape larger system behaviors later.",
    implementationNotes:
      "Included as part of the broader lab archive to show iteration range, not just polished highlights.",
    component: MovingButton,
  },
  {
    slug: "motion-hooks",
    title: "Motion Hooks",
    summary: "Hook-driven interaction patterns explored in a sandbox page.",
    tags: ["Hooks", "Foundations"],
    year: "2025",
    featured: false,
    route: "/labs/motion/motion-hooks",
    legacyPaths: ["/motionhooks"],
    technique: "Hook-based motion primitives",
    whatItDemonstrates:
      "A playground for learning how motion hooks can drive stateful UI behavior.",
    whyItMatters:
      "Understanding the primitives makes larger UI choreography easier to reason about.",
    implementationNotes:
      "This lab is intentionally more educational and exploratory than production-polished.",
    component: MotionHooks,
  },
  {
    slug: "layout-cards",
    title: "Layout Cards",
    summary: "Card layout interaction experiments with click-away behavior.",
    tags: ["Layout", "Cards"],
    year: "2025",
    featured: false,
    route: "/labs/motion/layout-cards",
    legacyPaths: ["/layout"],
    technique: "Layout state transitions",
    whatItDemonstrates:
      "A compact study in spatial transitions and click-away interactions.",
    whyItMatters:
      "Layout transitions help users maintain context while surfaces resize or shift.",
    implementationNotes:
      "The experiment explores spatial continuity more than decorative animation.",
    component: LayoutCards,
  },
  {
    slug: "three-d-card",
    title: "3D Card",
    summary: "Pointer-reactive card with depth and tilt.",
    tags: ["3D", "Hover", "Depth"],
    year: "2025",
    featured: false,
    route: "/labs/motion/three-d-card",
    legacyPaths: ["/card"],
    technique: "Pointer-driven tilt",
    whatItDemonstrates:
      "A card that responds to cursor movement with depth cues.",
    whyItMatters:
      "Depth effects can make promotional or portfolio surfaces feel tactile when kept subtle.",
    implementationNotes:
      "This lab is more expressive than utilitarian and is best suited for spotlight modules.",
    component: ThreeDCard,
  },
  {
    slug: "testimonials",
    title: "Testimonials Carousel",
    summary: "A motion-driven testimonial presentation study.",
    tags: ["Carousel", "Content"],
    year: "2025",
    featured: false,
    route: "/labs/motion/testimonials",
    legacyPaths: ["/testimonials"],
    technique: "Animated card rotation",
    whatItDemonstrates:
      "A testimonial surface that uses motion to guide attention between voices.",
    whyItMatters:
      "Content sliders need controlled emphasis so they do not feel mechanical.",
    implementationNotes:
      "This is a useful study for social proof or portfolio recommendation sections.",
    component: Testimonials,
  },
  {
    slug: "animated-underline",
    title: "Animated Underline",
    summary: "A text-emphasis treatment with motion-led underline behavior.",
    tags: ["Typography", "Hover"],
    year: "2025",
    featured: false,
    route: "/labs/motion/animated-underline",
    legacyPaths: ["/animatedunderline"],
    technique: "Typographic emphasis motion",
    whatItDemonstrates: "How micro-motion can sharpen text hierarchy.",
    whyItMatters: "Text links and emphasis states benefit from subtle movement.",
    implementationNotes:
      "This is a microinteraction-level study intended to feed larger UI systems.",
    component: UnderlineEffect,
  },
  {
    slug: "compare-card",
    title: "Compare Card",
    summary: "A placeholder comparison pattern reserved for future refinement.",
    tags: ["Placeholder", "Cards"],
    year: "2025",
    featured: false,
    route: "/labs/motion/compare-card",
    legacyPaths: ["/compare"],
    technique: "Comparison card foundation",
    whatItDemonstrates:
      "A sandbox reserved for side-by-side pattern exploration.",
    whyItMatters:
      "Keeping unfinished labs visible can show breadth, but they should be clearly framed as experiments.",
    implementationNotes:
      "This entry is intentionally labeled as exploratory and can be upgraded later.",
    component: CompareCard,
  },
  {
    slug: "responsive-patterns",
    title: "Responsive Patterns",
    summary: "Responsive UI behavior explored in a small pattern study.",
    tags: ["Responsive", "Layout"],
    year: "2025",
    featured: false,
    route: "/labs/motion/responsive-patterns",
    legacyPaths: ["/responsive"],
    technique: "Responsive motion adjustments",
    whatItDemonstrates: "How layout and motion adapt together across viewport sizes.",
    whyItMatters:
      "Recruiters and users alike will judge polish across desktop and mobile first.",
    implementationNotes:
      "This study supports the broader goal of building interfaces that remain intentional at every breakpoint.",
    component: Responsive,
  },
  {
    slug: "transition-practice",
    title: "Transition Practice",
    summary: "A collection of smaller transition studies and timing exercises.",
    tags: ["Transitions", "Foundations"],
    year: "2025",
    featured: false,
    route: "/labs/motion/transition-practice",
    legacyPaths: ["/transition"],
    technique: "Focused transition studies",
    whatItDemonstrates:
      "How small timing choices affect perceived quality and responsiveness.",
    whyItMatters:
      "A portfolio of transition studies helps show range beyond one hero interaction.",
    implementationNotes:
      "This page is best read as a workshop bench rather than a finished feature.",
    component: TransitionPractice,
  },
  {
    slug: "keyframe-practice",
    title: "Keyframe Practice",
    summary: "Pure keyframe experiments for orbit, pulse, reveal, and visual rhythm.",
    tags: ["Keyframes", "CSS", "Foundations"],
    year: "2025",
    featured: false,
    route: "/labs/motion/keyframe-practice",
    legacyPaths: ["/keyframe"],
    technique: "Tailwind theme keyframes",
    whatItDemonstrates:
      "How expressive motion can be built with CSS keyframes before bringing in heavier orchestration.",
    whyItMatters:
      "Some motion problems are cleaner with pure CSS than with JS-driven choreography.",
    implementationNotes:
      "This lab sits closer to motion foundations and animation vocabulary than polished product UI.",
    component: KeyframePractice,
  },
  {
    slug: "clip-path-practice",
    title: "Clip Path Practice",
    summary: "Reveal and masking studies built around clip-path animation.",
    tags: ["Clip Path", "Reveal"],
    year: "2025",
    featured: false,
    route: "/labs/motion/clip-path-practice",
    legacyPaths: ["/clippath"],
    technique: "Masking and reveal animation",
    whatItDemonstrates:
      "A study in controlled reveal mechanics using clipping rather than opacity alone.",
    whyItMatters:
      "Masking can create more intentional and directional reveals for content and media.",
    implementationNotes:
      "This experiment is useful as a motion vocabulary exercise and could evolve into richer UI reveals.",
    component: ClippathPractice,
  },
  {
    slug: "onboarding",
    title: "Onboarding Journey",
    summary: "A three-step booking narrative that turns process into a product story.",
    tags: ["Onboarding", "Narrative", "Cards"],
    year: "2025",
    featured: false,
    route: "/labs/motion/onboarding",
    legacyPaths: ["/onboarding"],
    technique: "Card sequencing with keyframed process states",
    whatItDemonstrates:
      "How animation can turn a complex process into a teachable visual journey.",
    whyItMatters:
      "Onboarding should reduce anxiety and make the next step obvious.",
    implementationNotes:
      "This experiment is one of the more product-like labs because it frames motion as process communication rather than decoration.",
    component: Onboarding,
  },
  {
    slug: "motion-learning",
    title: "Motion Learning",
    summary: "A broader motion sandbox that captures earlier interaction explorations.",
    tags: ["Learning", "Sandbox"],
    year: "2025",
    featured: false,
    route: "/labs/motion/motion-learning",
    legacyPaths: ["/motion/learning"],
    technique: "Sandboxed motion learning",
    whatItDemonstrates:
      "A learning surface where multiple animation concepts were explored side by side.",
    whyItMatters:
      "Showing the learning process helps explain how polish develops over time.",
    implementationNotes:
      "This is intentionally less curated than the featured labs and belongs in the archive section.",
    component: MotionLearning,
  },
];

export const labsMotionEntries: LabEntry[] = rawLabsMotionEntries.map((entry) => ({
  ...entry,
  ...labDeepDives[entry.slug],
}));

export const featuredLabs = labsMotionEntries.filter((lab) => lab.featured);

export const getLabBySlug = (slug?: string) =>
  labsMotionEntries.find((lab) => lab.slug === slug);
