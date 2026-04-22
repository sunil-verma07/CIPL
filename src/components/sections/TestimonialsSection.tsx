import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../data/siteData';
import SectionReveal from '../ui/SectionReveal';

const INTERVAL = 4000;
const CARD_WIDTH = 370;
const CARD_GAP = 20;
const SIDE_OFFSET = CARD_WIDTH + CARD_GAP; // 390px — center-to-center distance

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = TESTIMONIALS.length;

  const goTo = (index: number) => setCurrent((index + total) % total);
  const go = (dir: number) => goTo(current + dir);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => go(1), INTERVAL);
    return () => clearInterval(intervalRef.current!);
  }, [paused, current]);

  const getOffset = (index: number) => {
    const raw = (index - current + total) % total;
    return raw > total / 2 ? raw - total : raw;
  };

  return (
    <section className="section-py" style={{ background: '#EAF7F7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <SectionReveal className="text-center mb-14">
          <p
            className="text-xs font-display font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-primary)' }}
          >
            TESTIMONIALS
          </p>
          <h2
            className="text-3xl sm:text-4xl font-display font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            Why do people praise about{' '}
            <span style={{ color: 'var(--color-primary)' }}>Crediple?</span>
          </h2>
        </SectionReveal>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Track — height = card height (460px) + breathing room for scale(0.88) */}
          <div
            className="relative overflow-hidden"
            style={{ height: '510px' }}
          >
            {TESTIMONIALS.map((t, i) => {
              const offset = getOffset(i);
              const isActive = offset === 0;
              const isSide = offset === -1 || offset === 1;
              const isVisible = isActive || isSide;

              if (!isVisible) return null;

              const xValue =
                offset === 0
                  ? '-50%'
                  : offset === -1
                  ? `calc(-50% - ${SIDE_OFFSET}px)`
                  : `calc(-50% + ${SIDE_OFFSET}px)`;

              return (
                <motion.div
                  key={i}
                  animate={{
                    x: xValue,
                    scale: isActive ? 1 : 0.88,
                    opacity: isActive ? 1 : 0.70,
                    zIndex: isActive ? 10 : 5,
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    left: '50%',
                    position: 'absolute',
                    top: '50%',
                    translateY: '-50%',
                    width: `${CARD_WIDTH}px`,
                  }}
                  className={isActive ? '' : 'pointer-events-none '}
                >
                  <div
                    className="p-8"
                    style={{
                      width: `${CARD_WIDTH}px`,
                      height: '440px',
                      background: isActive ? `var(--card-bg)` : `#F7F0EA` ,
                      border: '1px solid var(--border-color)',
                      boxShadow: 'var(--shadow-md)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, si) => (
                        <Star key={si} size={14} fill="var(--color-accent-gold)" stroke="none" />
                      ))}
                    </div>

                    {/* Title */}
                    <p
                      className="text-sm font-display font-bold mb-3"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {t.title}
                    </p>

                    {/* Quote — grows to fill remaining space */}
                    <blockquote
                      className="text-sm leading-relaxed font-display flex-1"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {t.text}
                    </blockquote>

                    {/* Author — pinned to bottom */}
                    <div className="flex items-center gap-3 mt-6 pt-6" style={{ borderTop: '1px solid var(--border-color)' }}>
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                        style={{ border: '2px solid var(--color-primary)' }}
                      />
                      <div>
                        <p
                          className="text-xs font-display font-semibold uppercase tracking-wide"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {t.name}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                          {t.role}, {t.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
          

            <div className="flex gap-2 items-center">
              {TESTIMONIALS.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => goTo(i)}
                  animate={{
                    width: i === current ? 24 : 8,
                    background: i === current ? '#653C1A' : 'var(text-subhead)/40',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="h-2 rounded-full"
                />
              ))}
            </div>

          </div>

         
        </div>
      </div>
    </section>
  );
}