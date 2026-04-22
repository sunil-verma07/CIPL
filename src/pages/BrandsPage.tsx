import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { BRAND_ARTICLES } from '../data/siteData';
import SectionReveal, { StaggerContainer, fadeLeftItem, fadeRightItem, fadeUpItem } from '../components/ui/SectionReveal';
import CTABanner from '../components/sections/CTABanner';

const PER_PAGE = 6;

export default function BrandsPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(BRAND_ARTICLES.length / PER_PAGE);
  const visible = BRAND_ARTICLES.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 px-6"
        style={{ background: 'var(--bg-elevated)' }}>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none">
          <div className="w-full h-full flex flex-wrap gap-4 justify-center items-center text-5xl">
            {['📱','💻','🎨','🔧','📊','💡','🌐','⚙️','🚀','📋'].map((e, i) => (
              <motion.span key={i}
                animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}>
                {e}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="text-xs font-display uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-primary)' }}>Crediple / Brands</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl sm:text-5xl font-display font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}>
            Our Most Renowned<br />
            <span style={{ color: 'var(--color-primary)' }}>Brands</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="max-w-md text-sm leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}>
            At Crediple Technologies you can be agile as the only constant in our Business is innovation with well crafted courses and to scale your impact with a flexible and organized tool.
          </motion.p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-py" style={{ background: 'var(--bg-base)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer
            key={page}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}>
            {visible.map((article, i) => (
              <motion.article key={article.id}
                variants={i % 2 === 0 ? fadeLeftItem : fadeRightItem}
                whileHover={{ scale: 1.015, y: -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="rounded-2xl overflow-hidden cursor-pointer"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                <div className="relative overflow-hidden h-52">
                  <img src={article.image} alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-display font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--color-primary)' }}>{article.category}</span>
                  {article.date && (
                    <div className="flex items-center gap-1.5 mt-2 mb-3">
                      <Calendar size={12} style={{ color: 'var(--text-muted)' }} />
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{article.date}</span>
                    </div>
                  )}
                  <h3 className="font-display font-bold mb-3 leading-snug"
                    style={{ color: 'var(--text-primary)' }}>{article.title}</h3>
                  <p className="text-sm leading-relaxed mb-4"
                    style={{ color: 'var(--text-secondary)' }}>{article.excerpt}</p>
                  <motion.div whileHover={{ x: 4 }}
                    className="flex items-center gap-1.5 text-sm font-medium"
                    style={{ color: 'var(--color-primary)' }}>
                    Read More <ArrowRight size={14} />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </StaggerContainer>

          {/* Pagination */}
          <SectionReveal className="flex items-center justify-center gap-2 mt-12">
            {[...Array(totalPages)].map((_, i) => (
              <motion.button key={i}
                onClick={() => setPage(i + 1)}
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-lg text-sm font-display font-semibold transition-colors"
                style={{
                  background: page === i + 1 ? 'var(--color-primary)' : 'var(--bg-elevated)',
                  color: page === i + 1 ? 'white' : 'var(--text-secondary)',
                  border: '1px solid var(--border-color)',
                }}>
                {i + 1}
              </motion.button>
            ))}
            <motion.button
              onClick={() => setPage(p => Math.min(p + 1, totalPages))}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="px-4 h-9 rounded-lg text-sm font-display font-semibold"
              style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)' }}>
              NEXT
            </motion.button>
          </SectionReveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}