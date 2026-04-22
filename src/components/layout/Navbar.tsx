import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Search, Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { NAV_LINKS } from '../../data/siteData';

// ─── animation variants ────────────────────────────────────────────────────
const navVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const desktopLinkContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.25 },
  },
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
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.45 },
  },
};

const rightActionItem = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
  },
};

const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: 8,
    scale: 0.96,
    transition: { duration: 0.15 },
  },
};

const dropdownItemVariants = {
  hidden: { x: -8, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.05, duration: 0.2 },
  }),
};

const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

const mobileLinkVariants = {
  hidden: { x: -24, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
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
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setSearchOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      style={{
        position: 'sticky',
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid var(--border-color)'
          : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition:
          'border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
      }}
      className="top-0 left-0 right-0 z-50"
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

          {/* ── Desktop Nav Links ── */}
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
                {link.children ? (
                  <div
                    onMouseEnter={() => setOpenDropdown(link.path)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <NavItem link={link} active={isActive(link.path)} hasDropdown />
                    <AnimatePresence>
                      {openDropdown === link.path && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          style={{
                            background: 'var(--card-bg)',
                            border: '1px solid var(--border-color)',
                            boxShadow: 'var(--shadow-lg)',
                          }}
                          className="absolute top-full left-0 mt-2 w-52 rounded-xl overflow-hidden z-50"
                        >
                          {link.children.map((child, i) => (
                            <motion.div
                              key={child.path}
                              custom={i}
                              variants={dropdownItemVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              <Link
                                to={child.path}
                                style={{ color: 'var(--text-secondary)' }}
                                className="flex items-center px-4 py-3 text-sm font-body hover:text-[var(--color-primary)] hover:bg-[var(--bg-surface)] transition-colors duration-150"
                              >
                                {child.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavItem link={link} active={isActive(link.path)} />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* ── Desktop Right Actions ── */}
          <motion.div
            variants={rightActionsContainer}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-2"
          >
            {/* Search */}
            <motion.div variants={rightActionItem}>
              <AnimatePresence mode="wait">
                {searchOpen ? (
                  <motion.div
                    key="search-input"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <input
                      autoFocus
                      placeholder="Search for..."
                      onBlur={() => setSearchOpen(false)}
                      style={{
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                      className="w-full px-3 py-1.5 rounded-lg text-sm outline-none focus:border-[var(--color-primary)] transition-colors"
                    />
                  </motion.div>
                ) : (
                  <motion.button
                    key="search-icon"
                    onClick={() => setSearchOpen(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ color: 'var(--text-muted)' }}
                    className="p-2 rounded-lg hover:bg-[var(--bg-surface)] transition-colors"
                    aria-label="Open search"
                  >
                    <Search size={18} />
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Theme Toggle */}
            <motion.div variants={rightActionItem}>
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                }}
                className="p-2 rounded-lg border transition-colors hover:border-[var(--color-primary)]"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.span
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: 'flex' }}
                    >
                      <Sun size={18} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: 'flex' }}
                    >
                      <Moon size={18} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
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
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              style={{ color: 'var(--text-primary)' }}
              className="p-2 rounded-lg hover:bg-[var(--bg-surface)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            <motion.button
              onClick={() => setMobileOpen((o) => !o)}
              whileTap={{ scale: 0.9 }}
              style={{ color: 'var(--text-primary)' }}
              className="p-2 rounded-lg hover:bg-[var(--bg-surface)] transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex' }}
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
                    style={{ display: 'flex' }}
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
              background: 'var(--nav-bg)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderTop: '1px solid var(--border-color)',
            }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  custom={i}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {link.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.path ? null : link.path
                          )
                        }
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-colors hover:bg-[var(--bg-elevated)]"
                        style={{
                          color: isActive(link.path)
                            ? 'var(--color-primary)'
                            : 'var(--text-secondary)',
                          fontFamily: 'DM Sans, sans-serif',
                          fontWeight: isActive(link.path) ? 600 : 400,
                        }}
                      >
                        {link.label}
                        <motion.span
                          animate={{
                            rotate: openDropdown === link.path ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          style={{ display: 'flex' }}
                        >
                          <ChevronDown size={16} />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.path && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.children.map((child, ci) => (
                              <motion.div
                                key={child.path}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: ci * 0.05 }}
                              >
                                <Link
                                  to={child.path}
                                  style={{ color: 'var(--text-secondary)' }}
                                  className="block px-4 py-2.5 rounded-xl text-sm hover:text-[var(--color-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
                                >
                                  {child.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      style={{
                        color: isActive(link.path)
                          ? 'var(--color-primary)'
                          : 'var(--text-secondary)',
                        fontWeight: isActive(link.path) ? 600 : 400,
                        fontFamily: 'DM Sans, sans-serif',
                      }}
                      className="block px-4 py-3 rounded-xl text-sm hover:bg-[var(--bg-elevated)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile Search */}
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
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.75rem',
                  }}
                  className="flex items-center gap-2 px-3 py-2"
                >
                  <Search
                    size={16}
                    style={{ color: 'var(--text-muted)', flexShrink: 0 }}
                  />
                  <input
                    placeholder="Search for..."
                    style={{
                      background: 'transparent',
                      color: 'var(--text-primary)',
                      fontFamily: 'DM Sans, sans-serif',
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

// ─── NavItem ───────────────────────────────────────────────────────────────
function NavItem({ link, active, hasDropdown }) {
  return (
    <Link
      to={link.path}
      className="relative px-4 py-2 flex items-center gap-1 group"
      style={{ fontFamily: 'DM Sans, sans-serif' }}
    >
      <span
        className="text-sm font-medium transition-colors duration-200"
        style={{
          color: active ? 'var(--color-primary)' : 'var(--text-secondary)',
        }}
      >
        {link.label}
      </span>

      {hasDropdown && (
        <motion.span
          className="transition-transform duration-200 group-hover:rotate-180"
          style={{
            color: active ? 'var(--color-primary)' : 'var(--text-muted)',
            display: 'flex',
          }}
        >
          <ChevronDown size={14} />
        </motion.span>
      )}

      {/* Animated active underline */}
      <motion.span
        layoutId="nav-underbar"
        className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full"
        style={{ background: 'var(--color-primary)' }}
        initial={false}
        animate={{ opacity: active ? 1 : 0, scaleX: active ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
      />

      {/* Hover background */}
      <motion.span
        className="absolute inset-0 rounded-lg -z-10"
        style={{ background: 'var(--bg-surface)' }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
      />
    </Link>
  );
}