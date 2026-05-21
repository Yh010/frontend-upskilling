import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";

const buttonClass =
  "inline-flex shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-3 py-2 text-xs font-medium text-[var(--color-ink)] shadow-[var(--shadow-soft)] transition";

function DemoSurface({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-[200px] overflow-hidden rounded-[1.15rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(235,233,230,0.85))] p-3 sm:min-h-[220px] sm:rounded-[1.25rem] sm:p-4">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_top,rgba(17,17,17,0.05),transparent_68%)]" />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

function PanelShell({
  open,
  animated,
  placement = "center",
  transformOrigin = "top center",
}: {
  open: boolean;
  animated?: boolean;
  placement?: "center" | "trigger";
  transformOrigin?: string;
}) {
  const panelClass =
    placement === "trigger"
      ? "absolute right-3 top-3 w-40 max-w-[calc(100%-1rem)] rounded-[1rem] border border-[var(--color-line)] bg-white p-3 shadow-[var(--shadow-panel)] sm:right-4 sm:top-4 sm:w-44"
      : "absolute left-1/2 top-1/2 w-40 max-w-[calc(100%-1rem)] -translate-x-1/2 -translate-y-1/2 rounded-[1rem] border border-[var(--color-line)] bg-white p-3 shadow-[var(--shadow-panel)] sm:w-44";

  const panel = (
    <div
      className={panelClass}
      style={{ transformOrigin }}
    >
      <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
        Filters
      </p>
      <div className="mt-3 space-y-2">
        {["Recent", "Popular", "Unread"].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-ink)]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );

  if (!animated) {
    return open ? panel : null;
  }

  return (
    <AnimatePresence initial={false}>
      {open ? (
        <motion.div
          className="absolute inset-0"
          initial={
            placement === "trigger"
              ? { opacity: 0, x: 8, y: -6, scale: 0.97 }
              : { opacity: 0, y: 8, scale: 0.98 }
          }
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          exit={
            placement === "trigger"
              ? { opacity: 0, x: 6, y: -4, scale: 0.985 }
              : { opacity: 0, y: 6, scale: 0.985 }
          }
          transition={
            placement === "trigger"
              ? { duration: 0.26, ease: [0.42, 0, 0.58, 1] }
              : { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
          }
        >
          {panel}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function PanelInstantDemo() {
  const [open, setOpen] = useState(true);
  return (
    <DemoSurface>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-[14rem] space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Instant state swap
          </p>
          <p className="text-sm leading-6 text-[var(--color-ink)]">
            The state changes, but the interface gives the user no visual bridge.
          </p>
        </div>
        <button type="button" className={buttonClass} onClick={() => setOpen((value) => !value)}>
          Toggle panel
        </button>
      </div>
      <div className="relative mt-5 h-44 rounded-[1rem] border border-dashed border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.65)] p-3 sm:mt-6 sm:h-48 sm:rounded-[1.2rem] sm:p-4">
        <PanelShell open={open} />
      </div>
    </DemoSurface>
  );
}

export function PanelLoudDemo() {
  const [open, setOpen] = useState(true);
  return (
    <DemoSurface>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-[14rem] space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Loud but weak
          </p>
          <p className="text-sm leading-6 text-[var(--color-ink)]">
            Big movement creates drama, but it does not explain cause and effect.
          </p>
        </div>
        <button type="button" className={buttonClass} onClick={() => setOpen((value) => !value)}>
          Toggle panel
        </button>
      </div>
      <div className="relative mt-5 h-44 rounded-[1rem] border border-dashed border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.65)] p-3 sm:mt-6 sm:h-48 sm:rounded-[1.2rem] sm:p-4">
        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.55, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 7 }}
              transition={{ duration: 0.38, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <PanelShell open={open} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </DemoSurface>
  );
}

export function PanelTriggerLinkedDemo() {
  const [open, setOpen] = useState(true);
  return (
    <DemoSurface>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-[14rem] space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Trigger-linked reveal
          </p>
          <p className="text-sm leading-6 text-[var(--color-ink)]">
            The smaller movement feels more useful because it hints at where the panel came from.
          </p>
        </div>
        <button type="button" className={buttonClass} onClick={() => setOpen((value) => !value)}>
          Toggle panel
        </button>
      </div>
      <div className="relative mt-5 h-44 rounded-[1rem] border border-dashed border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.65)] p-3 sm:mt-6 sm:h-48 sm:rounded-[1.2rem] sm:p-4">
        <div className="pointer-events-none absolute right-3 top-3 rounded-full border border-[var(--color-line)] bg-white px-3 py-2 text-[0.7rem] font-medium text-[var(--color-muted)] shadow-[var(--shadow-soft)] sm:right-4 sm:top-4">
          Trigger
        </div>
        <PanelShell
          open={open}
          animated
          placement="trigger"
          transformOrigin="top right"
        />
      </div>
    </DemoSurface>
  );
}

function SegmentedBase({
  active,
  onChange,
  smooth,
}: {
  active: "Overview" | "Details";
  onChange: (value: "Overview" | "Details") => void;
  smooth?: boolean;
}) {
  const tabs: Array<"Overview" | "Details"> = ["Overview", "Details"];

  return (
      <div className="space-y-4">
        <div className="inline-flex rounded-full border border-[var(--color-line)] bg-white p-1 shadow-[var(--shadow-soft)]">
        {smooth ? (
          <LayoutGroup>
            <div className="relative flex">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className="relative z-10 rounded-full px-4 py-2 text-sm text-[var(--color-ink)]"
                  onClick={() => onChange(tab)}
                >
                  {active === tab ? (
                    <motion.span
                      layoutId="segment-pill"
                      className="absolute inset-0 rounded-full bg-[var(--color-ink)]"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                  <span className={`relative ${active === tab ? "text-white" : ""}`}>{tab}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>
        ) : (
          tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`rounded-full px-4 py-2 text-sm transition ${
                active === tab
                  ? "bg-[var(--color-ink)] text-white"
                  : "text-[var(--color-ink)]"
              }`}
              onClick={() => onChange(tab)}
            >
              {tab}
            </button>
          ))
        )}
      </div>

      <div className="rounded-[1rem] border border-[var(--color-line)] bg-white p-4">
        <AnimatePresence mode={smooth ? "sync" : "wait"} initial={false}>
          <motion.div
            key={smooth ? "shared-" + active : "teleport-" + active}
            initial={smooth ? { opacity: 0, y: 8 } : { opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={smooth ? { opacity: 0, y: -6 } : { opacity: 0 }}
            transition={{ duration: smooth ? 0.18 : 0.05 }}
            className="space-y-2"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {active}
            </p>
            <p className="text-sm leading-6 text-[var(--color-ink)]">
              {active === "Overview"
                ? "The user should feel like the same control changed state."
                : "The state change should feel connected, not replaced."}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function SegmentedTeleportDemo() {
  const [active, setActive] = useState<"Overview" | "Details">("Overview");
  return (
    <DemoSurface>
      <p className="mb-3 text-sm leading-6 text-[var(--color-ink)]">
        The selected state switches, but the control does not preserve one stable surface.
      </p>
      <SegmentedBase active={active} onChange={setActive} />
    </DemoSurface>
  );
}

export function SegmentedSharedDemo() {
  const [active, setActive] = useState<"Overview" | "Details">("Overview");
  return (
    <DemoSurface>
      <p className="mb-3 text-sm leading-6 text-[var(--color-ink)]">
        One moving pill preserves identity across the transition, so the state change feels trackable.
      </p>
      <SegmentedBase active={active} onChange={setActive} smooth />
    </DemoSurface>
  );
}

function CardPreview({
  expanded,
  onToggle,
  smooth,
}: {
  expanded: boolean;
  onToggle: () => void;
  smooth?: boolean;
}) {
  const collapsed = (
    <button
      type="button"
      className="w-full rounded-[1.1rem] border border-[var(--color-line)] bg-white p-4 text-left shadow-[var(--shadow-soft)]"
      onClick={onToggle}
    >
      <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">Card</p>
      <p className="mt-2 text-sm leading-6 text-[var(--color-ink)]">
        Tap to open a richer detail surface.
      </p>
    </button>
  );

  const expandedCard = (
    <button
      type="button"
      className="w-full rounded-[1.2rem] border border-[var(--color-line)] bg-white p-4 sm:p-5 text-left shadow-[var(--shadow-panel)]"
      onClick={onToggle}
    >
      <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">Expanded detail</p>
      <p className="mt-2 text-sm leading-6 text-[var(--color-ink)]">
        This state should still feel attached to the original card, not like a brand-new screen.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-[var(--color-surface)] p-3 text-xs text-[var(--color-ink)]">
          Signals
        </div>
        <div className="rounded-xl bg-[var(--color-surface)] p-3 text-xs text-[var(--color-ink)]">
          Context
        </div>
      </div>
    </button>
  );

  if (!smooth) {
    return expanded ? expandedCard : collapsed;
  }

  return (
    <LayoutGroup>
      <AnimatePresence mode="popLayout" initial={false}>
        {expanded ? (
          <motion.div
            key="expanded"
            layoutId="shared-card"
            initial={{ opacity: 0.5, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.4, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 360, damping: 32 }}
          >
            {expandedCard}
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            layoutId="shared-card"
            initial={{ opacity: 0.6, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.5, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 360, damping: 32 }}
          >
            {collapsed}
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

export function CardHardCutDemo() {
  const [expanded, setExpanded] = useState(false);
  return (
    <DemoSurface>
      <p className="mb-3 text-sm leading-6 text-[var(--color-ink)]">
        The state is understandable, but the relationship between the small card and the large surface is weak.
      </p>
      <CardPreview expanded={expanded} onToggle={() => setExpanded((value) => !value)} />
    </DemoSurface>
  );
}

export function CardExpandDemo() {
  const [expanded, setExpanded] = useState(false);
  return (
    <DemoSurface>
      <p className="mb-3 text-sm leading-6 text-[var(--color-ink)]">
        Shared motion keeps the same card identity visible while the UI changes density.
      </p>
      <CardPreview
        expanded={expanded}
        onToggle={() => setExpanded((value) => !value)}
        smooth
      />
    </DemoSurface>
  );
}

export function SuccessNoiseDemo() {
  const [done, setDone] = useState(false);
  return (
    <DemoSurface>
      <div className="space-y-4">
        <button type="button" className={buttonClass} onClick={() => setDone((value) => !value)}>
          Trigger success
        </button>
        <div className="relative flex h-32 items-center justify-center overflow-hidden rounded-[1.1rem] border border-[var(--color-line)] bg-white sm:h-36">
          <motion.div
            animate={done ? { scale: [1, 1.18, 0.96, 1], rotate: [0, 10, -8, 0] } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-6 rounded-[1.1rem] bg-[radial-gradient(circle_at_center,rgba(22,22,22,0.16),transparent_70%)]"
          />
          <button className="relative rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm font-medium text-[var(--color-ink)]">
            {done ? "Saved" : "Save changes"}
          </button>
        </div>
      </div>
    </DemoSurface>
  );
}

export function SuccessLocalDemo() {
  const [done, setDone] = useState(false);
  return (
    <DemoSurface>
      <div className="space-y-4">
        <button type="button" className={buttonClass} onClick={() => setDone((value) => !value)}>
          Trigger success
        </button>
        <div className="flex h-32 items-center justify-center rounded-[1.1rem] border border-[var(--color-line)] bg-white sm:h-36">
          <motion.button
            animate={
              done
                ? {
                    scale: [1, 1.04, 1],
                    backgroundColor: "#0f8a5f",
                    color: "#ffffff",
                  }
                : {
                    scale: 1,
                    backgroundColor: "#ffffff",
                    color: "#161616",
                  }
            }
            transition={{ duration: 0.24 }}
            className="rounded-full border border-[var(--color-line)] px-5 py-3 text-sm font-medium shadow-[var(--shadow-soft)]"
          >
            {done ? "Saved" : "Save changes"}
          </motion.button>
        </div>
      </div>
    </DemoSurface>
  );
}

function ValidationDemo({ subtle }: { subtle?: boolean }) {
  const [invalid, setInvalid] = useState(true);

  return (
    <DemoSurface>
      <div className="space-y-4">
        <button type="button" className={buttonClass} onClick={() => setInvalid((value) => !value)}>
          Toggle invalid state
        </button>
        <div className="space-y-3 rounded-[1.1rem] border border-[var(--color-line)] bg-white p-4">
          <label className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Email
          </label>
          <motion.div
            animate={
              subtle
                ? {
                    borderColor: invalid ? "rgba(197,58,47,0.22)" : "rgba(22,22,22,0.11)",
                    opacity: invalid ? 0.78 : 1,
                  }
                : {
                    borderColor: invalid ? "#c53a2f" : "rgba(22,22,22,0.11)",
                    y: invalid ? [0, -1, 0] : 0,
                  }
            }
            transition={{ duration: 0.22 }}
            className="rounded-2xl border bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-ink)]"
          >
            name@example.com
          </motion.div>
          <motion.p
            animate={
              subtle
                ? { opacity: invalid ? 0.72 : 0 }
                : { opacity: invalid ? 1 : 0, y: invalid ? 0 : -4 }
            }
            transition={{ duration: 0.2 }}
            className={`text-xs leading-6 ${subtle ? "text-[var(--color-muted)]" : "text-[#9c3028]"}`}
          >
            {subtle
              ? "This error state is too soft for a blocked form."
              : "Please enter a valid work email to continue."}
          </motion.p>
        </div>
      </div>
    </DemoSurface>
  );
}

export function ErrorTooSoftDemo() {
  return <ValidationDemo subtle />;
}

export function ErrorLocalClarityDemo() {
  return <ValidationDemo />;
}

function TabsDemo({ queued }: { queued?: boolean }) {
  const tabs = ["Inbox", "Files", "Alerts"] as const;
  const [active, setActive] = useState<(typeof tabs)[number]>("Inbox");
  const [visible, setVisible] = useState<(typeof tabs)[number]>("Inbox");

  const content = useMemo(
    () => ({
      Inbox: "Latest updates and primary communication.",
      Files: "Recent documents and shared uploads.",
      Alerts: "Important changes that need attention now.",
    }),
    [],
  );

  const handleChange = (next: (typeof tabs)[number]) => {
    setActive(next);

    if (!queued) {
      setVisible(next);
      return;
    }

    window.setTimeout(() => {
      setVisible(next);
    }, 320);
  };

  return (
    <DemoSurface>
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`${buttonClass} ${active === tab ? "border-[var(--color-line-strong)]" : ""}`}
              onClick={() => handleChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="rounded-[1.1rem] border border-[var(--color-line)] bg-white p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">{visible}</p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-ink)]">{content[visible]}</p>
          <p className="mt-4 text-xs leading-6 text-[var(--color-muted)]">
            {queued
              ? "Click multiple tabs quickly. The view lags behind the latest intent."
              : "The visible state updates to the latest truth immediately, which makes fast interaction easier to follow."}
          </p>
        </div>
      </div>
    </DemoSurface>
  );
}

export function QueuedTabsDemo() {
  return <TabsDemo queued />;
}

export function ImmediateTabsDemo() {
  return <TabsDemo />;
}

function ModalBase({ clean }: { clean?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <DemoSurface>
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-[14rem] space-y-2">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {clean ? "Clear handoff" : "Competing states"}
            </p>
            <p className="text-sm leading-6 text-[var(--color-ink)]">
              {clean
                ? "The trigger and modal hand off more cleanly when the state changes quickly."
                : "Fast toggling can produce overlapping states that compete for attention."}
            </p>
          </div>
          <button type="button" className={buttonClass} onClick={() => setOpen((value) => !value)}>
            {open ? "Close" : "Open"} modal
          </button>
        </div>

        <div className="relative mt-4 flex h-32 items-center justify-center rounded-[1.1rem] border border-[var(--color-line)] bg-white sm:mt-5 sm:h-36">
          <AnimatePresence initial={false} mode={clean ? "wait" : "sync"}>
            {open ? (
              <motion.div
                key="modal"
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: clean ? 0.2 : 0.32 }}
                className="absolute inset-4 rounded-[1.2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-soft)]"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Confirm action
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-ink)]">
                  This modal should feel like a focused continuation of the interaction.
                </p>
              </motion.div>
            ) : (
              <motion.button
                key="trigger"
                initial={{ opacity: 0.6, scale: clean ? 0.98 : 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: clean ? 0.6 : 0.2, scale: clean ? 0.98 : 0.92 }}
                transition={{ duration: clean ? 0.18 : 0.32 }}
                className="rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm font-medium text-[var(--color-ink)] shadow-[var(--shadow-soft)]"
                onClick={() => setOpen(true)}
              >
                Open modal
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </DemoSurface>
  );
}

export function ModalOverlapDemo() {
  return <ModalBase />;
}

export function ModalClearHandoffDemo() {
  return <ModalBase clean />;
}
