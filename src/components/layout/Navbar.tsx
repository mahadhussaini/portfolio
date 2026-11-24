import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "../../data/profile";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useTheme } from "../../hooks/useTheme";
import { track } from "../../lib/analytics";
import { Avatar } from "../ui/Avatar";
import { buttonClass } from "../ui/Button";

const sectionIds = navItems.map((n) => n.id);

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="relative grid size-9 place-items-center overflow-hidden rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -16, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 16, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.25 }}
          className="grid place-items-center"
        >
          {isDark ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function Navbar() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape and lock background scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent"
      />
      <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-4">
        <nav
          aria-label="Primary"
          className={`mx-auto flex h-14 max-w-5xl items-center justify-between gap-2 rounded-full pr-2 pl-4 transition-[background-color,border-color,box-shadow] duration-500 ${
            scrolled || open ? "glass" : "border border-transparent"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5 font-semibold tracking-tight" aria-label="Back to top">
            <Avatar
              src={profile.avatar}
              alt={profile.name}
              initials={profile.initials}
              className="size-8 text-xs transition-shadow group-hover:ring-2 group-hover:ring-accent"
            />
            <span className="hidden text-sm sm:inline">{profile.shortName}</span>
          </a>

          <ul className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-surface-2 ring-1 ring-line"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <a
              href={profile.resume}
              download="Syed-Mahad-Hussaini-Resume.pdf"
              onClick={() => track("resume_download", { from: "nav" })}
              className={buttonClass("primary", "sm", "hidden sm:inline-flex")}
            >
              <Download className="size-4" aria-hidden="true" />
              Résumé
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-9 place-items-center rounded-full text-fg hover:bg-surface-2 md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="glass mx-auto mt-2 max-w-5xl rounded-3xl p-2 md:hidden"
            >
              <ul className="flex flex-col">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base ${
                        active === item.id ? "bg-surface-2 text-fg" : "text-muted"
                      }`}
                    >
                      {item.label}
                      <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href={profile.resume}
                download="Syed-Mahad-Hussaini-Resume.pdf"
                onClick={() => {
                  track("resume_download", { from: "mobile-menu" });
                  setOpen(false);
                }}
                className={buttonClass("primary", "lg", "mt-2 w-full")}
              >
                <Download className="size-4" aria-hidden="true" />
                Download résumé
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
