import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Search } from 'lucide-react';
import { COURSES, INTERNSHIP_FEATURES, PROCESS_OUTCOMES } from '../data/siteData';
import SectionReveal, { StaggerContainer, fadeUpItem, fadeLeftItem, fadeRightItem } from '../components/ui/SectionReveal';
import CTABanner from '../components/sections/CTABanner';

function CourseCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const visible = 3;

  const go = (dir) => {
    setDirection(dir);
    setCurrent(c => (c + dir + COURSES.length) % COURSES.length);
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 3500);
    return () => clearInterval(id);
  }, [paused, current]);

  const getVisible = () => {
    return [...Array(visible)].map((_, i) => COURSES[(current + i) % COURSES.length]);
  };

  const slideVariants = {
    enter: d => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: d => ({ opacity: 0, x: d > 0 ? -80 : 80, transition: { duration: 0.3 } }),
  };

  return (
    <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div key={current} custom={direction}
            variants={slideVariants} initial="enter" animate="center" exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisible().map((course) => (
              <motion.div key={course.id}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="rounded-2xl p-6 flex flex-col gap-3 cursor-pointer"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                {course.tag && (
                  <span className="w-fit text-xs font-display font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--color-primary)', color: 'white' }}>{course.tag}</span>
                )}
                <h3 className="font-display font-bold leading-snug"
                  style={{ color: 'var(--text-primary)' }}>{course.title}</h3>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{course.info1}</p>
                <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{course.info2}</p>
                <div className="flex items-center justify-between mt-auto pt-3"
                  style={{ borderTop: '1px solid var(--border-color)' }}>
                  <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{course.duration}</span>
                  <div className="flex gap-0.5">
                    {[...Array(course.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="var(--color-accent-gold)" stroke="none" />
                    ))}
                  </div>
                  <span className="text-2xl">{course.icon}</span>
                </div>
                <motion.div whileHover={{ x: 4 }}
                  className="text-sm font-medium" style={{ color: 'var(--color-primary)' }}>
                  Start Learning →
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => go(-1)}
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
          <ChevronLeft size={18} />
        </motion.button>
        <div className="flex gap-2">
          {COURSES.map((_, i) => (
            <motion.button key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              animate={{ width: i === current ? 24 : 8, background: i === current ? 'var(--color-primary)' : 'var(--border-color)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="h-2 rounded-full" />
          ))}
        </div>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => go(1)}
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
          <ChevronRight size={18} />
        </motion.button>
      </div>

      <div className="text-center mt-6">
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-display font-semibold"
          style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
          <Search size={14} /> Explore Courses
        </motion.button>
      </div>

      {paused && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="absolute top-2 right-2 text-xs px-2 py-1 rounded-lg"
          style={{ background: 'var(--bg-elevated)', color: 'var(--text-muted)' }}>
          ⏸ Paused
        </motion.div>
      )}
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
          alt="Solutions" className="w-full h-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg,rgba(8,11,20,0.82) 0%,rgba(26,107,255,0.22) 100%)' }} />
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="text-xs font-display uppercase tracking-widest mb-3"
            style={{ color: 'rgba(255,255,255,0.6)' }}>Crediple / Solutions /</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight mb-3">
            Learn the latest{' '}
            <span style={{ color: 'var(--color-primary-light)' }}>Digital<br />Skills</span>
            {' '}for tomorrow's jobs
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
            The fastest, most effective training to create a better tomorrow!!
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-display font-semibold"
              style={{ background: 'white', color: 'var(--color-primary)' }}>
              <Search size={14} /> Explore Courses
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Process Outcomes */}
      <section className="section-py" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <SectionReveal direction="left">
              <p className="text-xs font-display font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--text-muted)' }}>PROCESS OUTCOMES</p>
              <h2 className="text-3xl font-display font-bold"
                style={{ color: 'var(--text-primary)' }}>
                Some <span style={{ color: 'var(--color-primary)' }}>Heading</span> goes here!
              </h2>
            </SectionReveal>
            <SectionReveal direction="right">
              <ul className="flex flex-col gap-2">
                {PROCESS_OUTCOMES.map((item, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--color-primary)' }} className="mt-0.5">›</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.div whileHover={{ x: 4 }}
                className="flex items-center gap-1.5 text-sm font-medium mt-4"
                style={{ color: 'var(--color-primary)' }}>
                Read More →
              </motion.div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Courses Carousel */}
      <section className="section-py" style={{ background: 'var(--bg-base)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold"
              style={{ color: 'var(--text-primary)' }}>
              Discover our <span style={{ color: 'var(--color-primary)' }}>in-demand</span> Features
            </h2>
          </SectionReveal>
          <CourseCarousel />
        </div>
      </section>

      {/* Internship */}
      <section className="section-py" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-12">
            <p className="text-xs font-display font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--color-primary)' }}>INTERNSHIP</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold"
              style={{ color: 'var(--text-primary)' }}>
              Unique <span style={{ color: 'var(--color-primary)' }}>Internship</span> Program
            </h2>
          </SectionReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
            {INTERNSHIP_FEATURES.map((feat, i) => (
              <motion.div key={i}
                variants={i % 2 === 0 ? fadeLeftItem : fadeRightItem}
                whileHover={{ scale: 1.01, x: i % 2 === 0 ? 4 : -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="rounded-xl p-5"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">{feat.icon}</span>
                  <h4 className="font-display font-semibold text-sm"
                    style={{ color: 'var(--color-primary)' }}>{feat.title}</h4>
                </div>
                <ul className="flex flex-col gap-1">
                  {feat.items.map((item, j) => (
                    <li key={j} className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner />
    </>
  );
}