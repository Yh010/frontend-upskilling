import type { CourseEntry, CourseLesson, CourseModule } from "./types";
import { createStandardLesson } from "./courseBuilders";
import {
  CardExpandDemo,
  CardHardCutDemo,
  ErrorLocalClarityDemo,
  ErrorTooSoftDemo,
  ImmediateTabsDemo,
  ModalClearHandoffDemo,
  ModalOverlapDemo,
  PanelInstantDemo,
  PanelLoudDemo,
  PanelTriggerLinkedDemo,
  QueuedTabsDemo,
  SegmentedSharedDemo,
  SegmentedTeleportDemo,
  SuccessLocalDemo,
  SuccessNoiseDemo,
} from "../components/courses/motionCourseDemos";

const module01Lessons: CourseLesson[] = [
  createStandardLesson({
    slug: "motion-as-communication",
    title: "01-01 Motion As Communication",
    runtime: "7 min",
    summary:
      "Learn the core lens for judging UI motion: not by taste words like smooth or premium, but by what the motion helps the user understand.",
    goal:
      "Look at a UI animation and explain what message it is sending instead of only saying that it looks smooth, polished, or cool.",
    notes: [
      "Motion is useful when it reduces mental work. The interface should explain the state change instead of asking the user to infer it.",
      "The same four questions will be repeated through all of Module 1, so the learner starts building judgment before implementation depth.",
      "This lesson stays intentionally code-light. The target is diagnosis first, not showing off technique.",
    ],
    exercise:
      "Diagnose three weak interactions. For each one, answer what changed, who caused it, what needs attention, and what should stay stable, then write one sentence saying whether the motion helps or hurts understanding.",
    summaryCards: [
      {
        id: "module",
        label: "Current module",
        value: "What Motion Is Actually For",
        icon: "module",
      },
      {
        id: "outcome",
        label: "Learner outcome",
        value:
          "Explain what message the motion is sending instead of judging it with taste words only.",
        icon: "outcome",
      },
      {
        id: "framework",
        label: "Diagnostic lens",
        value:
          "What changed? Who caused it? What needs attention? What should stay stable?",
        icon: "custom",
        emphasis: "wide",
      },
    ],
    prependSections: [
      {
        id: "promise",
        type: "callout",
        eyebrow: "Lesson promise",
        title: "What this lesson is really trying to teach",
        content:
          "Motion is part of the interface language. The goal is not to make the UI feel expensive. The goal is to make a state change easier to understand.",
        tone: "surface",
      },
      {
        id: "framework",
        type: "list",
        eyebrow: "Diagnostic framework",
        title: "Ask these four questions every time you judge motion",
        items: [
          "What changed? Name the state change before you judge the animation.",
          "Who caused it? The motion should usually feel connected to the action or event that triggered it.",
          "What needs attention? The strongest motion should point at the thing the user now needs to notice or act on.",
          "What should stay stable? Good motion preserves enough continuity that the user does not lose context.",
        ],
        style: "cards",
      },
      {
        id: "product-reads",
        type: "paragraphs",
        eyebrow: "In product UI",
        title: "The same lens works on real interface patterns",
        paragraphs: [
          "A dropdown should feel attached to the trigger that opened it. If it appears from nowhere, cause and effect gets weaker.",
          "A toast needs enough motion to be noticed, but not so much that it steals attention from the main task.",
          "A modal is a larger interruption, so it can use stronger motion, but it still needs to preserve where the user came from and what changed.",
        ],
        style: "cards",
      },
    ],
    snippets: [
      {
        id: "panel-instant",
        title: "Bad: instant panel with no transition",
        language: "js",
        variant: "bad",
        demoComponent: PanelInstantDemo,
        code: `trigger.addEventListener("click", () => {
  panel.hidden = !panel.hidden;
});`,
        note:
          "This changes the state, but it does not explain it. The user can tell that something appeared, but not how it relates to the trigger or what path the interface took to get there.",
      },
      {
        id: "panel-random-zoom",
        title: "Bad: loud motion with weak meaning",
        language: "css",
        variant: "bad",
        demoComponent: PanelLoudDemo,
        code: `.panel {
  transform-origin: center;
  animation: giantZoom 420ms cubic-bezier(.2, .8, .2, 1);
}

@keyframes giantZoom {
  from { opacity: 0; transform: scale(0.55); }
  to { opacity: 1; transform: scale(1); }
}`,
        note:
          "There is motion now, but the motion is answering the wrong question. It adds energy without improving cause and effect, so it feels theatrical instead of informative.",
      },
      {
        id: "panel-trigger-linked",
        title: "Good: attach the panel to the trigger",
        language: "css",
        variant: "good",
        demoComponent: PanelTriggerLinkedDemo,
        code: `.panel {
  opacity: 0;
  transform: translateY(8px) scale(0.98);
  transform-origin: top right;
  transition:
    opacity 160ms ease,
    transform 220ms cubic-bezier(.22, 1, .36, 1);
}

.panel[data-state="open"] {
  opacity: 1;
  transform: translateY(0) scale(1);
}`,
        note:
          "This version is quieter but more useful. The movement implies where the panel came from, what changed, and where attention should go. That is the difference between motion that decorates and motion that explains.",
      },
    ],
    appendSections: [
      {
        id: "failure-cases",
        type: "list",
        eyebrow: "Common failure cases",
        title: "Three ways motion often fails even when it looks polished",
        items: [
          "Motion with no message: something moves, but the user still cannot tell what changed or why.",
          "Motion with the wrong emphasis: a secondary element gets more energy than the thing the user actually needs to notice.",
          "Motion that breaks cause and effect: the transition is disconnected from the trigger, so the interface feels dramatic instead of useful.",
        ],
        style: "cards",
      },
    ],
    status: "published",
  }),
  createStandardLesson({
    slug: "continuity-and-spatial-memory",
    title: "01-02 Continuity And Spatial Memory",
    runtime: "8 min",
    summary:
      "Teach stable anchors and show why some transitions feel connected while others feel jumpy.",
    goal:
      "Name the stable anchor in a transition and explain whether continuity is preserved or broken.",
    notes: [
      "Continuity means the user can track the change without losing their place.",
      "Spatial memory is the mental map the user keeps while the UI changes state.",
      "If you cannot name the stable anchor, the transition will usually feel weak.",
    ],
    exercise:
      "Critique three transitions, name the stable anchor in each one, and suggest one fix that preserves continuity.",
    snippets: [
      {
        id: "segmented-teleport",
        title: "Bad: active pill teleports between tabs",
        language: "tsx",
        variant: "bad",
        demoComponent: SegmentedTeleportDemo,
        code: `{active === "overview" && <span className="pill pill-overview" />}
{active === "details" && <span className="pill pill-details" />}`,
        note:
          "The user sees a selected state, but not a clear state transition. One pill disappears and another appears. Identity is weak.",
      },
      {
        id: "segmented-shared-pill",
        title: "Good: one moving selection surface",
        language: "tsx",
        variant: "good",
        demoComponent: SegmentedSharedDemo,
        code: `<span
  className="pill"
  style={{ transform: active === "overview" ? "translateX(0%)" : "translateX(100%)" }}
/>`,
        note:
          "Now the user can track one thing moving between states. That moving pill becomes the stable anchor.",
      },
      {
        id: "card-hard-cut",
        title: "Bad: list card hard-cuts into detail view",
        language: "tsx",
        variant: "bad",
        demoComponent: CardHardCutDemo,
        code: `{selected ? <ExpandedCard /> : <CardGrid />}`,
        note:
          "The state change is clear functionally, but the relationship between the list item and the detail view is lost. The card feels replaced instead of expanded.",
      },
      {
        id: "card-expand",
        title: "Good: preserve card identity while expanding",
        language: "tsx",
        variant: "good",
        demoComponent: CardExpandDemo,
        code: `<motion.article layoutId={"card-" + card.id}>
  {selected ? <ExpandedContent /> : <CardPreview />}
</motion.article>`,
        note:
          "The user can now track the same card through the transition. This keeps the interface understandable even when the visual state changes a lot.",
      },
    ],
    status: "published",
  }),
  createStandardLesson({
    slug: "feedback-hierarchy-and-attention",
    title: "01-03 Feedback Hierarchy And Attention",
    runtime: "9 min",
    summary:
      "Show that not every movement deserves equal emphasis and teach how motion guides attention.",
    goal:
      "Judge whether the strongest motion is attached to the most important message in the interaction.",
    notes: [
      "Some motion is primary, some is secondary, and some should stay ambient.",
      "Stronger does not always mean bigger. It means clearer, more direct, and harder to miss.",
      "A lot of bad motion comes from attaching too much energy to low-importance UI.",
    ],
    exercise:
      "Redesign a weak product flow with loading, success, and error states so the attention goes to the right place in each state.",
    snippets: [
      {
        id: "success-noise",
        title: "Bad: background celebrates more than the confirmation",
        language: "tsx",
        variant: "bad",
        demoComponent: SuccessNoiseDemo,
        code: `<motion.div animate={{ scale: [1, 1.16, 1], rotate: [0, 8, -8, 0] }} />
<button className="submit-success">Saved</button>`,
        note:
          "The background is doing more work than the actual confirmation target. The user sees energy, but not clear emphasis.",
      },
      {
        id: "success-local",
        title: "Good: local confirmation, quiet surroundings",
        language: "tsx",
        variant: "good",
        demoComponent: SuccessLocalDemo,
        code: `<motion.button
  animate={{ scale: [1, 1.03, 1], backgroundColor: "#0f8a5f" }}
  transition={{ duration: 0.24 }}
>
  Saved
</motion.button>`,
        note:
          "The most important change is attached directly to the control that completed the action. The UI confirms success without hijacking the entire screen.",
      },
      {
        id: "error-too-soft",
        title: "Bad: critical validation with timid feedback",
        language: "css",
        variant: "bad",
        demoComponent: ErrorTooSoftDemo,
        code: `.field-error {
  transition: opacity 220ms ease;
  opacity: 0.75;
}`,
        note:
          "The user needs a stronger signal here because the form cannot progress. Weak opacity-only feedback under-emphasizes the importance of the problem.",
      },
      {
        id: "error-local-clarity",
        title: "Good: clear local error emphasis",
        language: "css",
        variant: "good",
        demoComponent: ErrorLocalClarityDemo,
        code: `.field[data-invalid="true"] {
  border-color: #c53a2f;
  transform: translateY(0);
}

.field-message[data-invalid="true"] {
  opacity: 1;
  transform: translateY(0);
}`,
        note:
          "The important state gets a direct visual change where the user needs to act. Motion stays local, legible, and proportional to the message.",
      },
    ],
    status: "published",
  }),
  createStandardLesson({
    slug: "interruptions-without-confusion",
    title: "01-04 Interruptions Without Confusion",
    runtime: "9 min",
    summary:
      "Design motion that survives fast user behavior instead of breaking outside the happy path.",
    goal:
      "Evaluate whether a transition remains understandable when the user changes direction quickly.",
    notes: [
      "Demo motion assumes a patient viewer. Product motion must survive impatient behavior.",
      "When interruptions happen, clarity matters more than flourish.",
      "A production-ready transition respects the latest truth quickly instead of finishing old motion for too long.",
    ],
    exercise:
      "Take an interrupted state sequence and explain what must remain stable, what can be interrupted safely, and how you would redesign the flow.",
    snippets: [
      {
        id: "queued-tabs",
        title: "Bad: transitions queue behind old intent",
        language: "tsx",
        variant: "bad",
        demoComponent: QueuedTabsDemo,
        code: `setTimeout(() => setVisibleTab(nextTab), 320);
setTimeout(() => setIndicator(nextTab), 320);`,
        note:
          "This looks fine when the user clicks once, but it breaks under fast interaction because the interface keeps honoring stale intent.",
      },
      {
        id: "immediate-state-truth",
        title: "Good: latest state wins immediately",
        language: "tsx",
        variant: "good",
        demoComponent: ImmediateTabsDemo,
        code: `setActiveTab(nextTab);
setVisibleTab(nextTab);`,
        note:
          "The UI updates to the latest truth first, then motion expresses that truth. This is the right default for product interactions.",
      },
      {
        id: "modal-overlap",
        title: "Bad: entering and exiting layers compete",
        language: "tsx",
        variant: "bad",
        demoComponent: ModalOverlapDemo,
        code: `<AnimatePresence>
  {open && <Modal />}
  {!open && <Trigger />}
</AnimatePresence>`,
        note:
          "Without controlling overlap, fast open-close-open sequences can produce two competing states on screen at once.",
      },
      {
        id: "modal-clear-handoff",
        title: "Good: clear handoff between old and new states",
        language: "tsx",
        variant: "good",
        demoComponent: ModalClearHandoffDemo,
        code: `<AnimatePresence mode="wait" initial={false}>
  {open ? <Modal key="modal" /> : <Trigger key="trigger" />}
</AnimatePresence>`,
        note:
          "The states now hand off more cleanly. The user can still follow the interaction when they change direction quickly.",
      },
    ],
    status: "published",
  }),
];

const plannedModules: CourseModule[] = [
  {
    id: "module-02",
    title: "Module 2: Why Some Motion Feels Right",
    outcome:
      "Name timing, easing, spring, overshoot, and visual-weight rules in plain language.",
    lessons: [
      {
        slug: "timing-is-not-just-duration",
        title: "02-01 Timing Is Not Just Duration",
        runtime: "8 min",
        summary: "Understand why equal duration does not mean equal feel.",
        goal: "Judge duration relative to distance, weight, and urgency.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Compare and fix intentionally weak timing choices.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "easing-families-in-plain-english",
        title: "02-02 Easing Families In Plain English",
        runtime: "9 min",
        summary: "Make easing choices understandable without jargon overload.",
        goal: "Choose easing based on intent, not memorization.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Match the correct curve to product situations.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "springs-and-natural-motion",
        title: "02-03 Springs And Natural Motion",
        runtime: "10 min",
        summary: "Learn what springs communicate and when they feel natural.",
        goal: "Tune springs for believable UI motion.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Tune a weak spring into a stronger one.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "velocity-overshoot-and-anticipation",
        title: "02-04 Velocity Overshoot And Anticipation",
        runtime: "10 min",
        summary: "Use momentum cues without turning UI into cartoon motion.",
        goal: "Explain and apply overshoot deliberately.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Fix intentionally bad motion cues.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "visual-weight-and-matching-motion",
        title: "02-05 Visual Weight And Matching Motion",
        runtime: "9 min",
        summary: "Match motion energy to visual weight and meaning.",
        goal: "Choose motion based on what the object feels like.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Choose and justify better motion for UI objects.",
        snippets: [],
        status: "planned",
      },
    ],
  },
  {
    id: "module-03",
    title: "Module 3: CSS Motion Foundations",
    outcome:
      "Build small polished interactions with plain HTML, CSS, and JavaScript.",
    lessons: [
      {
        slug: "transform-vs-layout-properties",
        title: "03-01 Transform Vs Layout Properties",
        runtime: "10 min",
        summary: "Start with cheap motion and avoid layout-heavy traps.",
        goal: "Pick better properties for product motion.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Rewrite a weak animation using transforms.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "opacity-and-staged-reveals",
        title: "03-02 Opacity And Staged Reveals",
        runtime: "8 min",
        summary: "Use opacity to support clarity, not as a default crutch.",
        goal: "Stage reveals without muddying attention.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Build a clean reveal state.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "transitions-with-delay-and-sequence",
        title: "03-03 Transitions With Delay And Sequence",
        runtime: "9 min",
        summary: "Sequence simple state changes without overcomplicating the code.",
        goal: "Use delays and order intentionally.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Build a small sequenced interaction.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "when-keyframes-beat-state-changes",
        title: "03-04 When Keyframes Beat State Changes",
        runtime: "10 min",
        summary: "Know when keyframes are the cleaner tool.",
        goal: "Choose keyframes only when the state path truly needs them.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Build a multi-step CSS motion state.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "clip-path-filters-and-transform-origin",
        title: "03-05 Clip Path Filters And Transform Origin",
        runtime: "10 min",
        summary: "Use stronger CSS effects without losing readability.",
        goal: "Apply effects that support the message.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Build a targeted reveal effect.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "layered-motion-without-chaos",
        title: "03-06 Layered Motion Without Chaos",
        runtime: "11 min",
        summary: "Coordinate multiple layers while keeping one visual idea clear.",
        goal: "Compose multiple properties into one coherent pattern.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Build a layered modal or panel interaction.",
        snippets: [],
        status: "planned",
      },
    ],
  },
  {
    id: "module-04",
    title: "Module 4: Product Patterns In CSS",
    outcome:
      "Apply motion thinking to real product patterns instead of isolated animation tricks.",
    lessons: [
      {
        slug: "hover-press-and-micro-feedback",
        title: "04-01 Hover Press And Micro Feedback",
        runtime: "8 min",
        summary: "Build micro feedback that feels responsive, not noisy.",
        goal: "Sharpen affordance with small motion.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Build a small but convincing microinteraction.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "dropdowns-and-popovers",
        title: "04-02 Dropdowns And Popovers",
        runtime: "10 min",
        summary: "Anchor lightweight overlays clearly to the trigger.",
        goal: "Design anchored reveal states that preserve cause and effect.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Build a dropdown with cleaner continuity.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "tabs-and-segmented-controls",
        title: "04-03 Tabs And Segmented Controls",
        runtime: "10 min",
        summary: "Use motion to preserve selected-state continuity.",
        goal: "Make switching feel connected instead of jumpy.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Build a segmented control and a tab switcher.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "drawers-and-modals",
        title: "04-04 Drawers And Modals",
        runtime: "11 min",
        summary: "Handle larger state changes without losing orientation.",
        goal: "Use motion to support entry, exit, and context.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Build a modal or drawer with stronger context preservation.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "toasts-inline-feedback-and-skeletons",
        title: "04-05 Toasts Inline Feedback And Skeletons",
        runtime: "11 min",
        summary: "Use motion to communicate status without stealing focus.",
        goal: "Build small feedback patterns that feel product-ready.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Implement three feedback patterns from static references.",
        snippets: [],
        status: "planned",
      },
    ],
  },
  {
    id: "module-05",
    title: "Module 5: Product UX Motion Decisions",
    outcome:
      "Choose motion based on the job the state change needs to do in the product.",
    lessons: [
      {
        slug: "a-decision-framework-for-motion",
        title: "05-01 A Decision Framework For Motion",
        runtime: "8 min",
        summary: "Formalize the change-cause-attention-stability lens.",
        goal: "Use one repeatable framework across product cases.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Map the framework onto product states.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "loading-success-and-progress",
        title: "05-02 Loading Success And Progress",
        runtime: "10 min",
        summary: "Use motion to reduce anxiety while waiting.",
        goal: "Design clearer loading and completion states.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Redesign a weak progress flow.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "validation-errors-and-destructive-actions",
        title: "05-03 Validation Errors And Destructive Actions",
        runtime: "10 min",
        summary: "Tune motion for risk, friction, and clarity.",
        goal: "Use caution without adding panic.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Redesign a risky flow.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "multi-step-flows-and-interrupted-journeys",
        title: "05-04 Multi Step Flows And Interrupted Journeys",
        runtime: "11 min",
        summary: "Handle progress and interruption through product flows.",
        goal: "Keep journeys legible across multiple states.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Repair a multi-step flow.",
        snippets: [],
        status: "planned",
      },
    ],
  },
  {
    id: "module-06",
    title: "Module 6: Performance, Accessibility, And QA",
    outcome:
      "Treat performance and accessibility as first-class parts of motion design.",
    lessons: [
      {
        slug: "what-60-fps-actually-means",
        title: "06-01 What 60 FPS Actually Means",
        runtime: "8 min",
        summary: "Understand the frame budget in practical UI terms.",
        goal: "Diagnose low-framerate behavior more intelligently.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Diagnose low-fps examples.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "layout-paint-and-browser-pitfalls",
        title: "06-02 Layout Paint And Browser Pitfalls",
        runtime: "10 min",
        summary: "Avoid expensive property choices and browser traps.",
        goal: "Choose better implementation paths for smooth UI.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Fix a janky motion pattern.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "reduced-motion-without-removing-meaning",
        title: "06-03 Reduced Motion Without Removing Meaning",
        runtime: "10 min",
        summary: "Preserve clarity even when motion is reduced.",
        goal: "Ship reduced-motion variants that still communicate state.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Create an accessible alternate version.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "focus-screen-readers-and-state-continuity",
        title: "06-04 Focus Screen Readers And State Continuity",
        runtime: "10 min",
        summary: "Support non-visual understanding during state change.",
        goal: "Treat focus and semantics as part of motion quality.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Audit an interaction for accessibility.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "a-motion-qa-workflow",
        title: "06-05 A Motion QA Workflow",
        runtime: "9 min",
        summary: "Use a repeatable checklist to review motion before shipping.",
        goal: "Evaluate motion systematically instead of intuitively only.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Critique and fix an interaction with the checklist.",
        snippets: [],
        status: "planned",
      },
    ],
  },
  {
    id: "module-07",
    title: "Module 7: Motion Fundamentals",
    outcome:
      "Map the CSS-first mental model onto Motion without turning the course into docs commentary.",
    lessons: [
      {
        slug: "mapping-css-thinking-to-motion",
        title: "07-01 Mapping CSS Thinking To Motion",
        runtime: "8 min",
        summary: "Translate state-thinking from CSS into Motion.",
        goal: "Carry prior concepts into a React + Motion setup.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Rebuild a CSS pattern in Motion.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "initial-animate-and-exit",
        title: "07-02 Initial Animate And Exit",
        runtime: "10 min",
        summary: "Handle lifecycle motion intentionally.",
        goal: "Use entry and exit states without losing clarity.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Rebuild a presence pattern.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "transitions-springs-and-variants",
        title: "07-03 Transitions Springs And Variants",
        runtime: "10 min",
        summary: "Turn repeated motion rules into reusable patterns.",
        goal: "Build variants instead of scattering config everywhere.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Build a reusable variant pattern.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "gestures-and-live-interaction",
        title: "07-04 Gestures And Live Interaction",
        runtime: "10 min",
        summary: "Link motion to direct manipulation.",
        goal: "Use hover, tap, drag, and motion values deliberately.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Build an interaction-driven control.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "orchestration-without-mystery",
        title: "07-05 Orchestration Without Mystery",
        runtime: "11 min",
        summary: "Coordinate multiple pieces without making the system feel magical.",
        goal: "Sequence parent and child motion predictably.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Fix weak orchestration.",
        snippets: [],
        status: "planned",
      },
    ],
  },
  {
    id: "module-08",
    title: "Module 8: Advanced Product Motion",
    outcome:
      "Handle layout motion, crossfades, interrupted state changes, and debugging.",
    lessons: [
      {
        slug: "layout-animations-and-shared-layout",
        title: "08-01 Layout Animations And Shared Layout",
        runtime: "11 min",
        summary: "Preserve identity across structural changes.",
        goal: "Understand when shared layout helps continuity.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Rebuild a layout-continuity pattern.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "crossfade-height-auto-and-sequencing",
        title: "08-02 Crossfade Height Auto And Sequencing",
        runtime: "11 min",
        summary: "Handle common product transitions that often feel magical at first.",
        goal: "Use crossfade, height, and sequence patterns with control.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Fix a broken implementation.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "interruptions-async-states-and-control",
        title: "08-03 Interruptions Async States And Control",
        runtime: "10 min",
        summary: "Protect clarity during mid-flight changes.",
        goal: "Handle async state changes without confusion.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Repair an interrupted flow.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "debugging-the-magical-path",
        title: "08-04 Debugging The Magical Path",
        runtime: "9 min",
        summary: "Teach why advanced libraries sometimes hide the problem instead of solving it.",
        goal: "Diagnose behavior instead of guessing at APIs.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Debug a motion issue from symptoms.",
        snippets: [],
        status: "planned",
      },
    ],
  },
  {
    id: "module-09",
    title: "Module 9: Walkthrough A - App Store Card Expansion",
    outcome:
      "Break down a premium reference into analysis, architecture, polish, and QA.",
    lessons: [
      {
        slug: "design-analysis-and-motion-map",
        title: "09-01 Design Analysis And Motion Map",
        runtime: "10 min",
        summary: "Study the reference before writing any code.",
        goal: "Inventory the motion decisions before implementing.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Complete the analysis worksheet.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "first-pass-architecture",
        title: "09-02 First Pass Architecture",
        runtime: "12 min",
        summary: "Build the structural foundation of the interaction.",
        goal: "Set up the main continuity path cleanly.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Complete the first pass build.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "polish-backdrop-and-scroll-lock",
        title: "09-03 Polish Backdrop And Scroll Lock",
        runtime: "12 min",
        summary: "Add polish where it supports clarity and premium feel.",
        goal: "Refine the experience without losing the core logic.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Polish the interaction with supporting layers.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "reduced-motion-performance-and-qa",
        title: "09-04 Reduced Motion Performance And QA",
        runtime: "10 min",
        summary: "Ship the reference like a product engineer, not just a demo builder.",
        goal: "Apply reduced motion, performance review, and QA.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Finish the ship-ready pass.",
        snippets: [],
        status: "planned",
      },
    ],
  },
  {
    id: "module-10",
    title: "Module 10: Walkthrough B - Dynamic Island Style Live Activity",
    outcome:
      "Use a second major reference to prove the learner can transfer the framework.",
    lessons: [
      {
        slug: "design-study-and-state-map",
        title: "10-01 Design Study And State Map",
        runtime: "10 min",
        summary: "Study the multi-state reference before implementation.",
        goal: "Name the states, springs, and transitions before coding.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Complete the state map.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "simplified-build-and-spring-tuning",
        title: "10-02 Simplified Build And Spring Tuning",
        runtime: "12 min",
        summary: "Start simple and tune the feel before adding complexity.",
        goal: "Build the simpler version with credible spring behavior.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Complete the simplified build.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "advanced-morph-and-multi-view-orchestration",
        title: "10-03 Advanced Morph And Multi View Orchestration",
        runtime: "12 min",
        summary: "Handle view swaps and richer state transitions cleanly.",
        goal: "Build the more advanced orchestration layer.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Complete the advanced build.",
        snippets: [],
        status: "planned",
      },
      {
        slug: "final-polish-qa-and-third-reference-checkpoint",
        title: "10-04 Final Polish QA And Third Reference Checkpoint",
        runtime: "10 min",
        summary: "Use the final checkpoint to prove the learner can transfer the method.",
        goal: "Analyze, implement, and critique a third reference more independently.",
        notes: ["Detailed lesson notes and code examples are being added."],
        exercise: "Complete the capstone checkpoint.",
        snippets: [],
        status: "planned",
      },
    ],
  },
];

export const courseEntries: CourseEntry[] = [
  {
    slug: "easiest-serious-ui-motion",
    title: "The Easiest Serious UI Motion Course",
    summary:
      "A clarity-first UI motion course for frontend developers: CSS first, Motion later, with code examples, bad-vs-good comparisons, and lesson-by-lesson notes.",
    promise:
      "Learn to design and build product-quality UI motion without depending on library magic or vague taste words.",
    audience:
      "Intermediate frontend developers who know basic HTML, CSS, JavaScript, and React.",
    route: "/courses/easiest-serious-ui-motion",
    eyebrow: "Courses > Motion",
    status: "building",
    modules: [
      {
        id: "module-01",
        title: "Module 1: What Motion Is Actually For",
        outcome:
          "Explain what a motion choice is trying to communicate in product UI.",
        lessons: module01Lessons,
      },
      ...plannedModules,
    ],
  },
];

export const getCourseBySlug = (slug?: string) =>
  courseEntries.find((course) => course.slug === slug);

export const getFirstCourseLesson = (course?: CourseEntry) =>
  course?.modules[0]?.lessons[0];

export const getCourseLessonBySlug = (course: CourseEntry, lessonSlug?: string) => {
  const allLessons = course.modules.flatMap((module) => module.lessons);
  return allLessons.find((lesson) => lesson.slug === lessonSlug) ?? allLessons[0];
};
