import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HERO_SLIDES } from "../../data/siteData";
import Button from "../ui/Button";
import logo from "../../assets/yaka_logo.png";
// ─── constants ─────────────────────────────────────────────────────────────
const INTERVAL = 5000; // 5 s auto-advance

// ─── animation variants ────────────────────────────────────────────────────
const bgVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const contentVariants = {
  enter: { opacity: 0, y: 24 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -16, transition: { duration: 0.4, ease: "easeIn" } },
};

const textItem = {
  hidden: { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

const yakaVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.8, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
};

// ─── progress bar ──────────────────────────────────────────────────────────
function ProgressDots({ total, current, onSelect }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <motion.button
          key={i}
          onClick={() => onSelect(i)}
          animate={{
            width: i === current ? 28 : 8,
            opacity: i === current ? 1 : 0.45,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="h-2 rounded-full bg-white focus:outline-none"
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

// ─── main component ────────────────────────────────────────────────────────
export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const go = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const advance = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % HERO_SLIDES.length);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, INTERVAL);
  };

  useEffect(() => {
    timerRef.current = setInterval(advance, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleDotClick = (i) => {
    go(i);
    resetTimer();
  };

  const slide = HERO_SLIDES[current];

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }} // ← svh handles mobile browser chrome
      aria-label="Hero carousel"
    >
      {/* ── Background images ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${current}`}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
          style={{ zIndex: 0 }}
        >
          <img
            src={slide.bg}
            alt=""
            className="w-full h-full object-cover"
            draggable="false"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--hero-overlay)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── YAKA Logo — top right, responsive, non-overlapping ── */}
      <motion.div
        variants={yakaVariants}
        initial="hidden"
        animate="visible"
        // ↓ smaller on mobile (h-14), larger on md+; safe margin so it never bleeds into heading
        className="absolute top-4 right-4 z-30 md:top-6 md:right-6"
      >
        <img
          src={logo}
          alt="A YAKA Enterprise"
          className="h-14 w-auto object-contain md:h-20" // ← h-14 mobile, h-20 desktop
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </motion.div>

      {/* ── Centered content ── */}
      {/* ↓ add horizontal padding so content never touches logo on mobile */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 pt-20 pb-16">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`content-${current}`}
            custom={direction}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full max-w-4xl text-center"
          >
            {/* Eyebrow */}
            <motion.p
              custom={0}
              variants={textItem}
              initial="hidden"
              animate="visible"
              className="text-xs md:text-sm font-light text-white tracking-widest mb-4 md:mb-5"
            >
              {slide.eyebrow}
            </motion.p>

            {/* Title */}
            <motion.h1
              custom={1}
              variants={textItem}
              initial="hidden"
              animate="visible"
              // ↓ text-3xl mobile → text-4xl desktop
              className="leading-tight mb-3 text-white text-3xl md:text-4xl font-semibold"
            >
              {slide.title}{" "}
              <span style={{ color: "var(--color-primary-light)" }}>
                {slide.highlight}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              variants={textItem}
              initial="hidden"
              animate="visible"
              // ↓ text-lg mobile → text-2xl desktop
              className="text-lg md:text-2xl mb-4 mt-6 md:mt-8 text-white font-light"
            >
              {slide.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={4}
              variants={textItem}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center gap-3 mt-2"
            >
              <Link to={slide.cta1.href}>
                <Button variant="white" size="lg">
                  {slide.cta1.label}
                </Button>
              </Link>
              <Link to={slide.cta2.href}>
                <Button variant="primary" size="lg">
                  {slide.cta2.label}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Progress dots ── */}
      <div
        className="absolute bottom-8 left-1/2 z-20"
        style={{ transform: "translateX(-50%)" }}
      >
        <ProgressDots
          total={HERO_SLIDES.length}
          current={current}
          onSelect={handleDotClick}
        />
      </div>

      {/* ── Auto-progress bar ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20"
        style={{ height: 3, background: "rgba(255,255,255,0.1)" }}
      >
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 1 }}
            transition={{ duration: INTERVAL / 1000, ease: "linear" }}
            style={{
              height: "100%",
              background: "var(--color-primary-light)",
              transformOrigin: "left",
            }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
}
