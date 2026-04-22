import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../../data/siteData';
import Button from '../ui/Button';

// ─── constants ─────────────────────────────────────────────────────────────
const INTERVAL = 5000; // 5 s auto-advance

// ─── animation variants ────────────────────────────────────────────────────
const bgVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
  exit:  { opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const contentVariants = {
  enter:  { opacity: 0, y: 24 },
  center: { opacity: 1, y: 0,  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: -16, transition: { duration: 0.4, ease: 'easeIn' } },
};

const textItem = {
  hidden:  { opacity: 0, y: 22 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.13, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

const yakaVariants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } },
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
            width:   i === current ? 28 : 8,
            opacity: i === current ? 1  : 0.45,
          }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          className="h-2 rounded-full bg-white focus:outline-none"
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

// ─── main component ────────────────────────────────────────────────────────
export default function HeroSection() {
  const [current, setCurrent]     = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef                  = useRef(null);

  const go = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const advance = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % HERO_SLIDES.length);
  };

  // restart timer whenever slide changes
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
      style={{ height: '90vh', minHeight: '560px' }}
      aria-label="Hero carousel"
    >
      {/* ── Background images (cross-fade) ── */}
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
          {/* dark + brand-tinted overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'var(--hero-overlay)' }}
          />
          {/* extra subtle vignette for readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── YAKA Logo — top right ── */}
      <motion.div
        variants={yakaVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-6 right-6 z-30 flex flex-col items-center gap-1"
      >
        {/* Wing / Y icon placeholder — replace src with actual logo */}
        <img
          src="/assets/yaka-logo.png"
          alt="A YAKA Enterprise"
          className="h-12 w-auto object-contain"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <span
          className="text-white text-[10px] font-semibold tracking-widest uppercase opacity-80"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          A <span style={{ color: 'var(--color-primary-light)' }}>YAKA</span> Enterprise
        </span>
      </motion.div>

      {/* ── Centered content ── */}
      <div
        className="relative z-10 h-full flex items-center justify-center"
        style={{ padding: '0 1.5rem' }}
      >
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
              className="text-sm font-medium tracking-widest uppercase mb-5"
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontFamily: 'DM Sans, sans-serif',
                letterSpacing: '0.12em',
              }}
            >
              {slide.eyebrow}
            </motion.p>

            {/* Title row — white + primary-light highlight inline */}
            <motion.h1
              custom={1}
              variants={textItem}
              initial="hidden"
              animate="visible"
              className="font-bold leading-tight mb-3"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#ffffff',
              }}
            >
              {slide.title}{' '}
              <span style={{ color: 'var(--color-primary-light)' }}>
                {slide.highlight}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              variants={textItem}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg font-medium mb-2"
              style={{
                color: 'rgba(255,255,255,0.82)',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              {slide.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              custom={3}
              variants={textItem}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base leading-relaxed mb-8 mx-auto"
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontFamily: 'DM Sans, sans-serif',
                maxWidth: '38rem',
              }}
            >
              {slide.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={4}
              variants={textItem}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center gap-3"
            >
              <Link to={slide.cta1.href}>
                <Button variant="white" size="lg">{slide.cta1.label}</Button>
              </Link>
              <Link to={slide.cta2.href}>
                <Button variant="primary" size="lg">{slide.cta2.label}</Button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Progress dots — bottom center ── */}
      <div
        className="absolute bottom-8 left-1/2 z-20"
        style={{ transform: 'translateX(-50%)' }}
      >
        <ProgressDots
          total={HERO_SLIDES.length}
          current={current}
          onSelect={handleDotClick}
        />
      </div>

      {/* ── Auto-progress bar along very bottom edge ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20"
        style={{ height: 3, background: 'rgba(255,255,255,0.1)' }}
      >
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 1 }}
            transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
            style={{
              height: '100%',
              background: 'var(--color-primary-light)',
              transformOrigin: 'left',
            }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
}