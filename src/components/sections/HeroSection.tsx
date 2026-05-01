import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { HERO_SLIDES } from "../../data/siteData";
import Button from "../ui/Button";
import yaka_logo from "../../assets/yaka_logo.png"; // white logo shown in hero

// ─── constants ─────────────────────────────────────────────────────────────
const INTERVAL = 5000; // 5 s — carousel never pauses on hover

// ─── animation variants ────────────────────────────────────────────────────
const bgVariants = {
  enter:  { opacity: 0 },
  center: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  exit:   { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const contentVariants = {
  enter:  { opacity: 0, y: 24 },
  center: { opacity: 1, y: 0,  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: -16, transition: { duration: 0.4, ease: "easeIn" } },
};

const textItem = {
  hidden:   { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.13, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── progress dots ─────────────────────────────────────────────────────────
function ProgressDots({ total, current, onSelect }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <motion.button
          key={i}
          onClick={() => onSelect(i)}
          animate={{ width: i === current ? 28 : 8, opacity: i === current ? 1 : 0.45 }}
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

  // ── Logo scroll animation ─────────────────────────────────────────────────
  // White logo fades out + moves upward as user scrolls (300–520px).
  // Navbar simultaneously fades its blue logo in over the same range —
  // together they create the illusion of the logo flying up and recoloring.
  const { scrollY } = useScroll();
  const logoOpacity = useTransform(scrollY, [0, 300],  [1, 0]);
  const logoScale   = useTransform(scrollY, [0, 520],  [1, 0.45]);
  // Moves toward the top-left (where the navbar logo will appear)
  const logoX       = useTransform(scrollY, [0, 520],  [0, -80]);
  const logoY       = useTransform(scrollY, [0, 520],  [0, -60]);

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

  // Auto-advance — never paused by mouse hover
  useEffect(() => {
    timerRef.current = setInterval(advance, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleDotClick = (i) => {
    go(i);
    resetTimer(); // clicking a dot gives that slide a full 5 s
  };

  const slide = HERO_SLIDES[current];

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }}
      aria-label="Hero carousel"
      // No onMouseEnter / onMouseLeave — carousel runs continuously
    >
      {/* ── Slide backgrounds ── */}
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
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)" }}
          />
        </motion.div>
      </AnimatePresence>

      {/*
        ── White YAKA logo — top right of hero ──────────────────────────────
        Starts fully visible. As user scrolls it fades out, scales down, and
        drifts toward the navbar (top-left). The navbar's blue logo fades in
        over the same scroll range, completing the "handoff" illusion.
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        style={{
          opacity: logoOpacity,
          scale: logoScale,
          x: logoX,
          y: logoY,
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 30,
          transformOrigin: "top right",
          // pointer-events off once faded so it doesn't block clicks
          pointerEvents: "none",
        }}
        className="p-4 md:p-6"
      >
        <img
          src={yaka_logo}
          alt="A YAKA Enterprise"
          className="h-14 w-auto object-contain md:h-20"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </motion.div>

      {/* ── Centered slide content ── */}
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
            <motion.p
              custom={0} variants={textItem} initial="hidden" animate="visible"
              className="text-xs md:text-sm font-light text-white tracking-widest mb-4 md:mb-5"
            >
              {slide.eyebrow}
            </motion.p>

            <motion.h1
              custom={1} variants={textItem} initial="hidden" animate="visible"
              className="leading-tight mb-3 text-white text-3xl md:text-4xl font-semibold"
            >
              {slide.title}{" "}
              <span style={{ color: "var(--color-primary-light)" }}>{slide.highlight}</span>
            </motion.h1>

            <motion.p
              custom={2} variants={textItem} initial="hidden" animate="visible"
              className="text-lg md:text-2xl mb-4 mt-6 md:mt-8 text-white font-light"
            >
              {slide.subtitle}
            </motion.p>

            <motion.div
              custom={4} variants={textItem} initial="hidden" animate="visible"
              className="flex flex-wrap items-center justify-center gap-3 mt-2"
            >
              <Link to={slide.cta1.href}><Button variant="white" size="lg">{slide.cta1.label}</Button></Link>
              <Link to={slide.cta2.href}><Button variant="primary" size="lg">{slide.cta2.label}</Button></Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Progress dots ── */}
      <div className="absolute bottom-8 left-1/2 z-20" style={{ transform: "translateX(-50%)" }}>
        <ProgressDots total={HERO_SLIDES.length} current={current} onSelect={handleDotClick} />
      </div>

      {/* ── Progress bar — always running at INTERVAL ms ── */}
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
            style={{ height: "100%", background: "var(--color-primary-light)", transformOrigin: "left" }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
}