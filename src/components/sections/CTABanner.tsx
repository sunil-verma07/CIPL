import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionReveal from '../ui/SectionReveal';
import Button from '../ui/Button';

export default function CTABanner() {
  return (
    <SectionReveal>
      <section className="relative overflow-hidden py-20 px-6">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(8,11,20,0.93) 0%, rgba(26,107,255,0.35) 100%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              Build,{' '}
              <span style={{ color: 'var(--color-primary-light)' }}>Scale,</span>
              {' '}and Solve.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-sm leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.7)' }}>
              Whether it's Healthcare, Finance, Legal, or Data Intelligence or IT infrastructure Credible delivers the sharpest digital solutions that drive real-world outcomes.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}>
            <Link to="/contact">
              <Button variant="primary" size="lg">Start Your Journey</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </SectionReveal>
  );
}