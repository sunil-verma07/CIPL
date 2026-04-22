import { motion } from 'framer-motion';
import { WHO_WE_SERVE } from '../../data/siteData';
import SectionReveal, { StaggerContainer, fadeUpItem } from '../ui/SectionReveal';

export default function WhoWeServeSection() {
  return (
    <section className="section-py relative overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
      
      {/* Background shape (optional like design) */}
      <div className="absolute left-0 top-20 w-[400px] h-[400px] bg-blue-100 opacity-20 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <SectionReveal className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: '#9CA3AF' }}
          >
            WHY US?
          </p>

          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            Who we{' '}
            <span style={{ color: '#3B82F6' }}>Serve</span>
          </h2>
        </SectionReveal>

        {/* Grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          staggerDelay={0.12}
        >
          {WHO_WE_SERVE.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUpItem}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="group"
            >

              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay title on image */}
                <div className="absolute inset-0 flex items-end justify-center pb-4">
                  <h3 className="text-black text-lg font-semibold text-center px-2 bg-white/60 backdrop-blur-sm rounded-md">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Heading */}
              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.heading}
              </h4>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#6B7280' }}
              >
                {item.desc}
              </p>

            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
