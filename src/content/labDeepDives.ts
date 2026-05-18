import type { LabDeepDive } from "./types";

export const labDeepDives: Record<string, LabDeepDive> = {
  "animated-card": {
    coreSnippetTitle: "Presence-driven open / close state",
    coreSnippetLanguage: "tsx",
    coreSnippet: `const [open, setOpen] = useState(true);

<AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
    />
  )}
</AnimatePresence>`,
    implementationThinking: [
      "Treat the card like a state swap between expanded content and a minimal reopen trigger, not just a hover effect.",
      "Use blur and scale together so the entrance feels soft and premium without slowing comprehension.",
    ],
  },
  "payment-sequence": {
    coreSnippetTitle: "Imperative animation timeline",
    coreSnippetLanguage: "tsx",
    coreSnippet: `const [scope, animate] = useAnimate();

const startAnimating = async () => {
  await animate(".loader", { rotate: 1440 }, { duration: 2 });
  await animate("button", { width: "5rem", borderRadius: "999px" });
  await animate(".check-icon path", { pathLength: 1 }, { duration: 0.3 });
};`,
    implementationThinking: [
      "The animation is intentionally sequential because payment feedback should feel like one confident story, not several disconnected effects.",
      "Each step removes ambiguity: loading, completion, and confirmation happen in a single readable rhythm.",
    ],
  },
  "floating-dock": {
    coreSnippetTitle: "Distance-based icon response",
    coreSnippetLanguage: "tsx",
    coreSnippet: `const distance = activeId === null ? 10 : Math.abs(idx - activeId);

const getScale = (d: number) => (d === 0 ? 1.5 : d === 1 ? 1.25 : 1);
const getY = (d: number) => (d === 0 ? -15 : d === 1 ? -8 : 0);

<motion.div animate={{ scale: getScale(distance), y: getY(distance) }} />`,
    implementationThinking: [
      "The active item should influence its neighbors so the dock feels spatial, not like isolated hover states.",
      "Scaling and lift are enough; the trick is in the relationship between nearby items.",
    ],
  },
  "sidebar-stagger": {
    coreSnippetTitle: "Container width plus staggered children",
    coreSnippetLanguage: "tsx",
    coreSnippet: `const sidebarVariants = {
  open: { width: "16rem" },
  closed: { width: "4.5rem" },
};

const listAnimation = {
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};`,
    implementationThinking: [
      "Animate the container and the child items separately so density changes feel organized rather than abrupt.",
      "The delayed item entrance makes the expanded state read like a reveal of hierarchy.",
    ],
  },
  "tooltip-placement": {
    coreSnippetTitle: "Pointer-aware placement calculation",
    coreSnippetLanguage: "tsx",
    coreSnippet: `const min = Math.min(distTop, distBottom, distLeft, distRight);

if (min === distTop) setPlacement("top");
else if (min === distBottom) setPlacement("bottom");
else if (min === distLeft) setPlacement("left");
else setPlacement("right");`,
    implementationThinking: [
      "The tooltip chooses the side with the most immediate room around the cursor instead of hard-coding one position.",
      "This keeps the interaction feeling adaptive without needing a heavy positioning engine.",
    ],
  },
  "toast-stack": {
    coreSnippetTitle: "Array order creates visual depth",
    coreSnippetLanguage: "tsx",
    coreSnippet: `const [toasts, setToasts] = useState<number[]>([]);

const addToast = () => setToasts((prev) => [...prev, Date.now()]);

{[...toasts].reverse().map((id, idx) => (
  <Card key={id} idx={idx} />
))}`,
    implementationThinking: [
      "The newest toast should sit on top, so reversing the array becomes part of the visual model.",
      "Depth is communicated with small scale and translate changes instead of a complex notification framework.",
    ],
  },
  "trash-flow": {
    coreSnippetTitle: "Selection collapses into confirmation",
    coreSnippetLanguage: "tsx",
    coreSnippet: `const visibleCards = showOnlySelected
  ? cards.filter((id) => selectedItems.includes(id))
  : cards;

if (selectedItems.length && !confirmDelete) {
  setShowOnlySelected(true);
  setConfirmDelete(true);
}`,
    implementationThinking: [
      "The key move is reducing the canvas to only selected items before the destructive action is confirmed.",
      "That reduction shifts attention from browsing mode into decision mode.",
    ],
  },
  "particle-button": {
    coreSnippetTitle: "Generate particles from button geometry",
    coreSnippetLanguage: "tsx",
    coreSnippet: `for (let row = 0; row < rows; row += 1) {
  for (let col = 0; col < particlesPerRow; col += 1) {
    particles.push({ id: row + "-" + col, delay, duration, endX, endY });
  }
}

setParticles(particles);`,
    implementationThinking: [
      "The particles are generated from a grid so the button visually disintegrates from its own shape.",
      "Random offsets add energy, while controlled delays preserve a directional wave.",
    ],
  },
  "motion-progress": {
    coreSnippetTitle: "Progress arcs derived from segment math",
    coreSnippetLanguage: "tsx",
    coreSnippet: `const createSegmentProps = (progress: number, startOffset: number) => {
  const filledLength = (segmentLength * progress) / 100;
  return { strokeDasharray: filledLength + " " + circumference, strokeDashoffset: -startOffset };
};`,
    implementationThinking: [
      "Each arc is treated like an independent segment so focus can move between metrics without losing the whole composition.",
      "SVG dash math keeps the control expressive while staying lightweight.",
    ],
  },
  "text-reveal": {
    coreSnippetTitle: "Staggered span reveal",
    coreSnippetLanguage: "tsx",
    coreSnippet: `useEffect(() => {
  animate("span", { opacity: 1, filter: "blur(0px)", y: 0 }, {
    delay: stagger(0.02),
  });
}, [animate]);`,
    implementationThinking: [
      "Breaking the sentence into spans makes the reveal feel editorial instead of like one block fading in.",
      "The animation is fast enough to add drama without delaying reading.",
    ],
  },
  "moving-button": {
    coreSnippetTitle: "Button personality from motion states",
    coreSnippetLanguage: "tsx",
    coreSnippet: `<motion.button
  animate={{ rotate: [0, 10, 0, 5, 0] }}
  whileHover={{ rotate: 25, boxShadow: "0px 0.5px 5px rgba(8,112,184,0.7)" }}
  whileTap={{ y: 100 }}
/>`,
    implementationThinking: [
      "This lab tests how much personality a button can carry before it stops feeling usable.",
      "Rest, hover, and tap each get a distinct response so the control feels alive in every state.",
    ],
  },
  "motion-hooks": {
    coreSnippetTitle: "Hooks convert motion values into UI response",
    coreSnippetLanguage: "tsx",
    coreSnippet: `const { scrollYProgress } = useScroll({ target: ref });
const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
const shadow = useMotionTemplate\`0 24px 60px rgba(0,0,0,\${scrollYProgress})\`;

<motion.div style={{ y, boxShadow: shadow }} />`,
    implementationThinking: [
      "The point of this lab is learning how motion hooks become reusable primitives rather than one-off animations.",
      "Mapping motion values into style makes interactions feel continuous and reactive.",
    ],
  },
  "layout-cards": {
    coreSnippetTitle: "Layout IDs plus outside-click dismissal",
    coreSnippetLanguage: "tsx",
    coreSnippet: `const ref = useOutsideClick(() => setCurrent(null));

{current && (
  <motion.div layoutId={"card-" + current.title} ref={ref}>
    {current.content()}
  </motion.div>
)}`,
    implementationThinking: [
      "The layout transition keeps the expanded card visually connected to its collapsed origin.",
      "Closing on outside click protects the spatial illusion by making the interaction behave like a focused surface.",
    ],
  },
  "three-d-card": {
    coreSnippetTitle: "Normalize cursor position into tilt",
    coreSnippetLanguage: "tsx",
    coreSnippet: `const normX = mouseX / rect.width - 0.5;
const normY = mouseY / rect.height - 0.5;

setRotation({
  x: -(normY * 20),
  y: normX * 20,
});`,
    implementationThinking: [
      "The important step is normalizing pointer position to a small symmetric range before applying rotation.",
      "That keeps the tilt expressive without becoming chaotic at the card edges.",
    ],
  },
  testimonials: {
    coreSnippetTitle: "Active index drives stacked media motion",
    coreSnippetLanguage: "tsx",
    coreSnippet: `const [active, setActive] = useState(0);

<motion.div
  animate={{
    opacity: idx === active ? 1 : 0.7,
    scale: idx === active ? 1.1 : 0.95,
    y: idx === active ? [0, -80, 0] : 0,
  }}
/>`,
    implementationThinking: [
      "One active index is enough to drive the whole stack when the inactive cards remain partially visible behind it.",
      "The vertical pulse on the active card makes the switch feel featured rather than just selected.",
    ],
  },
  "animated-underline": {
    coreSnippetTitle: "Draw the underline path instead of fading it in",
    coreSnippetLanguage: "tsx",
    coreSnippet: `<motion.path
  initial={{ pathLength: 0, opacity: 0 }}
  animate={{ pathLength: 1, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
/>`,
    implementationThinking: [
      "The underline is treated like handwriting so the emphasis feels intentional rather than decorative.",
      "A drawn path gives text emphasis more personality than a simple opacity transition.",
    ],
  },
  "compare-card": {
    coreSnippetTitle: "Comparison shell placeholder",
    coreSnippetLanguage: "tsx",
    coreSnippet: `return (
  <div className="min-h-screen flex justify-center items-center">
    <div className="rounded-2xl border p-6">CompareCard</div>
  </div>
);`,
    implementationThinking: [
      "This lab is still a shell, so the key logic is simply reserving a clear place for future comparison patterns.",
      "Keeping the placeholder explicit is better than pretending the pattern is already solved.",
    ],
  },
  "responsive-patterns": {
    coreSnippetTitle: "Breakpoint-driven nav swap",
    coreSnippetLanguage: "tsx",
    coreSnippet: `<div className="md:flex hidden items-center gap-6">
  <a href="#">Home</a>
  <a href="#">About</a>
</div>

<button className="md:hidden"><HamburgerIcon /></button>`,
    implementationThinking: [
      "The desktop and mobile versions should not just resize; they should switch interaction models entirely.",
      "This lab keeps the idea simple: links on large screens, a trigger on small screens.",
    ],
  },
  "transition-practice": {
    coreSnippetTitle: "One state picks the active transition study",
    coreSnippetLanguage: "tsx",
    coreSnippet: `const [transitionType, setTransitionType] = useState("hover");

const transitions = {
  hover: <Hover />,
  CardHover: <CardHover />,
  DownloadArrow: <DownloadArrow />,
};`,
    implementationThinking: [
      "This page behaves like a switchboard for small transition ideas, which makes side-by-side comparison easier.",
      "Isolating each pattern keeps the lesson focused on timing and feel instead of page-level composition.",
    ],
  },
  "keyframe-practice": {
    coreSnippetTitle: "CSS keyframes as the motion engine",
    coreSnippetLanguage: "css",
    coreSnippet: `@keyframes orbit {
  0% { transform: rotateY(0deg) translateZ(72px) rotateY(360deg); }
  100% { transform: rotateY(360deg) translateZ(72px) rotateY(0deg); }
}

.animate-orbit { animation: orbit 6s linear infinite; }`,
    implementationThinking: [
      "This lab proves that some motion ideas are cleaner when CSS owns the loop and React only picks the state.",
      "Keyframes are especially useful for repeated motion vocabulary like orbit, pulse, and reveal.",
    ],
  },
  "clip-path-practice": {
    coreSnippetTitle: "Reveal content through clip-path",
    coreSnippetLanguage: "css",
    coreSnippet: `@keyframes reveal {
  from { clip-path: inset(0 0 100% 0); }
  to { clip-path: inset(0 0 0 0); }
}

.animate-reveal { animation: reveal 1s forwards cubic-bezier(0.77, 0, 0.175, 1); }`,
    implementationThinking: [
      "Clip-path lets the reveal feel directional and intentional instead of just fading content on.",
      "This is useful when the animation should imply a physical mask or sliding window.",
    ],
  },
  onboarding: {
    coreSnippetTitle: "Sequenced cards explain the process",
    coreSnippetLanguage: "tsx",
    coreSnippet: `<div className="h-80 rounded-xl">
  <ItalyCard />
  <DubaiCard />
  <BangaloreCard />
</div>

<div className="flex gap-x-2 animate-paymentSlider">
  <ItalyPaymentCard />
  <DubaiPaymentCard />
  <BangalorePaymentCard />
</div>`,
    implementationThinking: [
      "The flow is split into visible process stages so animation teaches the product journey instead of decorating it.",
      "Each card group represents one decision moment: browse, pay, then confirmation.",
    ],
  },
  "motion-learning": {
    coreSnippetTitle: "Single page, multiple concept toggles",
    coreSnippetLanguage: "tsx",
    coreSnippet: `const [transitionType, setTransitionType] = useState("SimpleButton");

const transitions = {
  SimpleButton: <SimpleButton />,
  Switch: <Switch />,
  AppStoreCard: <AppStoreCard />,
};`,
    implementationThinking: [
      "This sandbox groups multiple concepts behind one selector so experimentation stays fast.",
      "The goal is breadth of motion vocabulary, not a single polished artifact.",
    ],
  },
};
