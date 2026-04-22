import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import AnimatedInput from '../components/ui/AnimatedInput';
import Button from '../components/ui/Button';
import SectionReveal, { StaggerContainer, fadeLeftItem, fadeRightItem } from '../components/ui/SectionReveal';
import CTABanner from '../components/sections/CTABanner';

function validate(fields) {
  const errs = {};
  if (!fields.name.trim()) errs.name = 'Name is required';
  if (!fields.email.trim()) errs.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = 'Enter a valid email';
  if (!fields.subject.trim()) errs.subject = 'Subject is required';
  if (!fields.message.trim()) errs.message = 'Message is required';
  else if (fields.message.trim().length < 20) errs.message = 'Message must be at least 20 characters';
  return errs;
}

export default function ContactPage() {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' });
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const errors = validate(fields);

  const handleChange = (e) => setFields(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleBlur = (e) => setTouched(t => ({ ...t, [e.target.name]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(errors).length > 0) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1800));
    setLoading(false);
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 px-6 overflow-hidden"
        style={{ background: 'var(--bg-elevated)' }}>
        {/* Map-like grid bg */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, var(--color-primary) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <motion.div className="absolute right-1/3 top-6 text-3xl"
          animate={{ y: [0, -8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          📍
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="text-xs font-display uppercase tracking-widest mb-4"
            style={{ color: 'var(--text-muted)' }}>Contact Us</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl sm:text-5xl font-display font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}>Contact Us</motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Support is provided Monday – Friday, we aim to reply within 1 business day,<br className="hidden sm:block" />
            but occasionally it may take longer.
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-py" style={{ background: 'var(--bg-base)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Quote */}
            <SectionReveal direction="left">
              <div className="contact-quote">
                <h2 className="text-2xl sm:text-3xl font-display font-bold leading-tight mb-6"
                  style={{ color: 'var(--text-primary)' }}>
                  To make requests for further information,{' '}
                  <span style={{ color: 'var(--color-primary)' }}>contact us</span>{' '}
                  via our social channels.
                </h2>
                <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                  We just need a couple of hours!
                </p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  No more than 2 working days since receiving your issue ticket.
                </p>
              </div>
            </SectionReveal>

            {/* Right: Form */}
            <SectionReveal direction="right">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center gap-4 py-16 text-center rounded-2xl"
                    style={{ background: 'var(--card-bg)', border: '1px solid var(--color-accent-teal)' }}>
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 16 }}>
                      <CheckCircle size={56} style={{ color: 'var(--color-accent-teal)' }} />
                    </motion.div>
                    <h3 className="text-xl font-display font-bold" style={{ color: 'var(--text-primary)' }}>
                      Message Sent!
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      We'll get back to you within 1 business day.
                    </p>
                    <Button variant="secondary" onClick={() => { setSent(false); setFields({ name:'',email:'',subject:'',message:'' }); setTouched({}); }}>
                      Send Another
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} noValidate
                    className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <AnimatedInput name="name" placeholder="Name*" value={fields.name}
                        onChange={handleChange} onBlur={handleBlur} required
                        error={touched.name && errors.name} success={touched.name && !errors.name && fields.name} />
                      <AnimatedInput name="email" type="email" placeholder="Email*" value={fields.email}
                        onChange={handleChange} onBlur={handleBlur} required
                        error={touched.email && errors.email} success={touched.email && !errors.email && fields.email} />
                    </div>
                    <AnimatedInput name="subject" placeholder="Subject*" value={fields.subject}
                      onChange={handleChange} onBlur={handleBlur} required
                      error={touched.subject && errors.subject} success={touched.subject && !errors.subject && fields.subject} />
                    <AnimatedInput name="message" placeholder="Please describe what you need..." value={fields.message}
                      onChange={handleChange} onBlur={handleBlur} multiline rows={5} required
                      error={touched.message && errors.message} success={touched.message && !errors.message && fields.message} />
                    <Button type="submit" variant="primary" size="lg" loading={loading} fullWidth>
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Office info */}
      <section className="section-py" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-x divide-[var(--border-color)]">
            {[
              { city: 'Bengaluru', address: '374 Street 5 Canning Blvd, Bangalore - 560 001, India', phone: '+91 999 9999 999', email: 'info.bengaluru@bigdoor.com' },
              { city: 'Mumbai', address: '12 BKC Complex, Bandra, Mumbai - 400 051, India', phone: '+91 888 8888 888', email: 'info.mumbai@crediple.com' },
              { city: 'Delhi', address: '45 Connaught Place, New Delhi - 110 001, India', phone: '+91 777 7777 777', email: 'info.delhi@crediple.com' },
            ].map((office, i) => (
              <motion.div key={i} variants={fadeLeftItem}
                className="pl-6 first:pl-0">
                <h3 className="text-xl font-display font-bold mb-3"
                  style={{ color: 'var(--color-accent-gold)' }}>{office.city}</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--text-muted)' }} />
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{office.address}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Phone size={15} style={{ color: 'var(--text-muted)' }} />
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{office.phone}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Mail size={15} style={{ color: 'var(--text-muted)' }} />
                    <a href={`mailto:${office.email}`}
                      className="text-sm hover:underline"
                      style={{ color: 'var(--color-primary)' }}>{office.email}</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner />
    </>
  );
}