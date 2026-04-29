import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";
import { Sun, Moon, Search, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { NAV_LINKS } from "../../data/siteData";

// ─── animation variants ────────────────────────────────────────────────────
const desktopLinkContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

const desktopLinkItem = {
  hidden: { y: -12, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const rightActionsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.45 } },
};

const rightActionItem = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
  },
};

const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const mobileLinkVariants = {
  hidden: { x: -24, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: (i) => ({
    x: -16,
    opacity: 0,
    transition: { delay: i * 0.03, duration: 0.2 },
  }),
};

// ─── main component ────────────────────────────────────────────────────────
export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true); // hide/show on scroll

  const lastScrollY = useRef(0);
  const NAVBAR_H = 64; // matches h-16

  // ── scroll logic ──────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 20);

      // At the very top → always show
      if (y < NAVBAR_H) {
        setVisible(true);
        lastScrollY.current = y;
        return;
      }

      const delta = y - lastScrollY.current;
      if (delta > 6)
        setVisible(false); // scrolling down  → hide
      else if (delta < -6) setVisible(true); // scrolling up    → show

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close everything on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav
      // ── initial slide-in on mount ──
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: visible ? 0 : -NAVBAR_H - 4,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        y: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.2 },
      }}
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "var(--nav-bg)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid var(--border-color)"
          : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        transition:
          "border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ── Logo ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <Link to="/">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="text-3xl font-bold text-[#003c82] inline-block"
              >
                Crediple
              </motion.span>
            </Link>
          </motion.div>

          {/* ── Desktop Nav Links (no dropdowns) ── */}
          <motion.div
            variants={desktopLinkContainer}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-0.5"
          >
            {NAV_LINKS.map((link) => (
              <motion.div
                key={link.path}
                variants={desktopLinkItem}
                className="relative"
              >
                {/* All links are plain — no dropdown */}
                <NavItem link={link} active={isActive(link.path)} />
              </motion.div>
            ))}
          </motion.div>

          {/* ── Desktop Right: always-visible search + theme ── */}
          <motion.div
            variants={rightActionsContainer}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-2"
          >
            {/* Always-open search */}
            <motion.div
              variants={rightActionItem}
              style={{
                background: "rgba(249, 246, 242, 1)",
                borderRadius: "2rem",
              }}
              className="flex items-center gap-2 px-4 py-1.5"
              whileFocusWithin={{ boxShadow: "0 0 0 2px var(--color-primary)" }}
              transition={{ duration: 0.15 }}
            >
              
              <input
                placeholder="Search for..."
                style={{
                  background: "transparent",
                  color: "rgba(188, 156, 129, 1)",
                  width: 180,
                }}
                className="text-xs outline-none placeholder:text-[rgba(188, 156, 129, 1)]"
              />
              <Search
                size={15}
                style={{ color: "rgba(188, 156, 129, 1)", flexShrink: 0 }}
              />
            </motion.div>

           
          </motion.div>

          {/* ── Mobile Controls ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="md:hidden flex items-center gap-1"
          >
            

            <motion.button
              onClick={() => setMobileOpen((o) => !o)}
              whileTap={{ scale: 0.9 }}
              style={{ color: "var(--text-primary)" }}
              className="p-2 rounded-lg hover:bg-[var(--bg-surface)] transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "flex" }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "flex" }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              background: "var(--nav-bg)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderTop: "1px solid var(--border-color)",
            }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {/* Nav links — no dropdowns */}
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  custom={i}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    to={link.path}
                    style={{
                      color: isActive(link.path)
                        ? "var(--color-primary)"
                        : "var(--text-secondary)",
                      fontWeight: isActive(link.path) ? 600 : 400,
                      fontFamily: "DM Sans, sans-serif",
                    }}
                    className="block px-4 py-3 rounded-xl text-sm hover:bg-[var(--bg-elevated)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Always-visible mobile search */}
              <motion.div
                custom={NAV_LINKS.length}
                variants={mobileLinkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-2 px-1"
              >
                <div
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "0.75rem",
                  }}
                  className="flex items-center gap-2 px-3 py-2"
                >
                  <Search
                    size={16}
                    style={{ color: "var(--text-muted)", flexShrink: 0 }}
                  />
                  <input
                    placeholder="Search for..."
                    style={{
                      background: "transparent",
                      color: "var(--text-primary)",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                    className="flex-1 text-sm outline-none placeholder:text-[var(--text-muted)]"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── NavItem — plain link, no dropdown ────────────────────────────────────
function NavItem({ link, active }) {
  return (
    <Link
      to={link.path}
      className="relative px-4 py-2 flex items-center gap-1 group"
      style={{ fontFamily: "DM Sans, sans-serif" }}
    >
      <span
        className="text-sm font-medium transition-colors duration-200"
        style={{
          color: active ? "var(--color-primary)" : "var(--text-secondary)",
        }}
      >
        {link.label}
      </span>

      {/* Animated active underline */}
      <motion.span
        layoutId="nav-underbar"
        className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
        style={{ background: "var(--color-primary)" }}
        initial={false}
        animate={{ opacity: active ? 1 : 0, scaleX: active ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
      />

      {/* Hover background */}
      <motion.span
        className="absolute inset-0 rounded-lg -z-10"
        style={{ background: "var(--bg-surface)" }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
    </Link>
  );
}
