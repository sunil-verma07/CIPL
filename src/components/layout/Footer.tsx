import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, Globe, ExternalLink } from 'lucide-react';
import { FOOTER_PORTFOLIO, FOOTER_COMPANY } from '../../data/siteData';
import SectionReveal from '../ui/SectionReveal';
import Button from '../ui/Button';

export default function Footer() {
  return (
    <footer>
      {/* CTA Banner */}
      <SectionReveal>
        <div
          style={{ background: 'var(--bg-elevated)' }}
          className="py-16 px-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <h2
              className="text-3xl md:text-4xl font-display font-bold max-w-xl"
              style={{ color: 'var(--text-primary)' }}
            >
              We run all kinds of IT services that{' '}
              <span style={{ color: 'var(--color-primary)' }}>vow your success</span>
            </h2>
            <Button variant="primary" size="lg" icon="💬">
              Let's Talk
            </Button>
          </div>
        </div>
      </SectionReveal>

      {/* Main Footer */}
      <div
        style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-color)' }}
        className="py-12 px-6"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Portfolio */}
          <div>
            <h4
              className="text-sm font-display font-semibold uppercase tracking-wider mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Our Portfolio
            </h4>
            <ul className="space-y-2">
              {FOOTER_PORTFOLIO.map(item => (
                <li key={item}>
                  <Link
                    to="/brands"
                    className="text-sm transition-colors hover:text-[var(--color-primary)]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-sm font-display font-semibold uppercase tracking-wider mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              Company
            </h4>
            <ul className="space-y-2">
              {FOOTER_COMPANY.map(item => (
                <li key={item}>
                  <Link
                    to="/about"
                    className="text-sm transition-colors hover:text-[var(--color-primary)]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex flex-col items-start md:items-end">
              <span
                className="text-2xl font-display font-bold"
                style={{ color: 'var(--color-primary)' }}
              >
                Crediple
              </span>
              <span
                className="text-xs mt-1"
                style={{ color: 'var(--text-muted)' }}
              >
                A YAKA Enterprise
              </span>
              <span
                className="text-sm mt-2 font-medium"
                style={{ color: 'var(--text-secondary)' }}
              >
                The Architect of Industry Evolution.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          background: '#0a0700',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
        className="py-4 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2026 Crediple Group. All Rights Reserved. Empowering Professionals Through Convergent Technology.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: X, href: '#', label: 'X' },
              { icon: Globe, href: '#', label: 'Web' },
              { icon: ExternalLink, href: '#', label: 'LinkedIn' },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                whileHover={{ scale: 1.2, color: 'var(--color-primary)' }}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}