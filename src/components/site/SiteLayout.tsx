import { Menu, MoveUpRight, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { contactLinks, navItems, profile } from "../../content/portfolio";

const primaryLinks = contactLinks.filter((link) => link.type === "primary");
const secondaryLinks = contactLinks.filter((link) => link.type === "secondary");

export default function SiteLayout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)]">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-96 bg-[radial-gradient(circle_at_top_left,rgba(17,17,17,0.08),transparent_36%),radial-gradient(circle_at_top_right,rgba(110,110,110,0.08),transparent_28%),linear-gradient(180deg,rgba(243,243,241,0.88),rgba(243,243,241,0))]" />
      <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[rgba(243,243,241,0.86)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[var(--color-line-strong)] bg-white shadow-[var(--shadow-soft)]">
              <img
                src="/yash-hegde-mark.svg"
                alt={`${profile.name} mark`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col pr-2">
              <span className="font-display text-xl leading-none tracking-tight">
                {profile.name}
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-[var(--color-line)] bg-white/82 p-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-[var(--color-ink)] text-white shadow-[0_10px_24px_rgba(25,22,20,0.18)]"
                      : "text-[var(--color-muted)] hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-ink)]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={profile.resumeUrl}
              download
              className="rounded-full border border-[var(--color-line)] px-4 py-2 text-sm text-[var(--color-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-ink)]"
            >
              Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm text-white transition hover:bg-[var(--color-accent)]"
            >
              Contact <MoveUpRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/90 text-[var(--color-ink)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Open navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.25 }}
              className="border-t border-[var(--color-line)] bg-[var(--color-bg)] px-5 py-4 lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `rounded-2xl border px-4 py-3 text-sm transition ${
                        isActive
                          ? "border-[var(--color-line-strong)] bg-white text-[var(--color-ink)]"
                          : "border-transparent bg-white/75 text-[var(--color-muted)]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={profile.resumeUrl}
                    download
                    className="rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 text-center text-sm"
                  >
                    Resume
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl bg-[var(--color-ink)] px-4 py-3 text-center text-sm text-white"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main key={pathname} className="relative z-10">
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:px-8">
          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr_1fr]">
            <div className="space-y-4">
              <span className="inline-flex rounded-full border border-[var(--color-line)] bg-white px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Recruiter Friendly
              </span>
              <h3 className="font-display text-3xl text-[var(--color-ink)]">
                A portfolio built to show product depth, motion craft, and engineering range quickly.
              </h3>
              <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
                This site is intentionally structured so someone scanning in a few seconds can understand my positioning, then dive deeper into work experience, projects, and labs.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Primary Links
              </h4>
              <div className="flex flex-wrap gap-3">
                {primaryLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm text-[var(--color-ink)] transition hover:border-[var(--color-accent)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Convenience
              </h4>
              <div className="flex flex-wrap gap-3">
                {secondaryLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="rounded-full border border-[var(--color-line)] bg-white/70 px-4 py-2 text-sm text-[var(--color-muted)] transition hover:border-[var(--color-line-strong)] hover:text-[var(--color-ink)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-muted)] md:flex-row md:items-center md:justify-between">
            <span>{profile.name} / {profile.location}</span>
            <span>{profile.availability}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
