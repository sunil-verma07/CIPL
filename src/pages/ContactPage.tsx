import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import AnimatedInput from "../components/ui/AnimatedInput";
import SectionReveal from "../components/ui/SectionReveal";
import mapBg from "../assets/contact_banner_bg.jpg";
import pinIcon from "../assets/map_pin.png";

// ─── Variants ────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white font-sans overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#F7F0EA', minHeight: '220px' }}
      >
        {/* Map bg — right half only */}
        <div
          className="absolute inset-0 bg-no-repeat bg-right bg-cover"
          style={{
            backgroundImage: `url(${mapBg})`,
            opacity: 0.48,
          }}
        />

        {/* Dotted grid overlay — right portion */}
        <div
          className="absolute inset-y-0 right-0 w-full pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, #B8A99A 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            opacity: 0.45,
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 30%, transparent 70%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 30%, transparent 70%)',
          }}
        />

        {/* Animated Pin */}
        <div className="absolute left-[60%] top-10 hidden md:flex flex-col items-center" style={{ transform: 'translateX(80px)' }}>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src={pinIcon} alt="location pin" className="w-10 h-12 drop-shadow-md" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 0.65, 1], opacity: [0.5, 0.25, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-1 w-8 h-2 rounded-full blur-sm"
            style={{ background: '#9B8070' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 sm:py-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xs mb-4"
            style={{ color: '#999999' }}
          >
            Contact Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: '#1A1A2E' }}
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm max-w-xs sm:max-w-sm leading-relaxed"
            style={{ color: '#888888' }}
          >
            Support is provided Monday – Friday, we aim to reply within 1 business
            day, but occasionally it may take longer.
          </motion.p>
        </div>
      </section>

      {/* ── FORM SECTION ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left — heading with left accent bar */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Accent bar + heading block */}
            <div
              className="pl-5 mb-8"
              style={{ borderLeft: '3px solid #B9CCE1' }}
            >
              <h2
                className="text-2xl sm:text-3xl font-bold leading-tight mb-5"
                style={{ color: '#1A1A2E' }}
              >
                Contact us for more{' '}
                <br className="hidden sm:block" />
                Information
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#888888' }}
              >
                We just need a couple of hours!
                <br />
                No more than 2 working days since receiving your issue ticket.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <AnimatedInput
                  name="name"
                  placeholder="Name*"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <AnimatedInput
                  name="email"
                  type="email"
                  placeholder="Email*"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <AnimatedInput
                  name="subject"
                  placeholder="Subject*"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <AnimatedInput
                  name="message"
                  placeholder="Please describe what you need..."
                  value={form.message}
                  onChange={handleChange}
                  multiline
                  rows={5}
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-fit"
              >
                <Button variant="dark">Send Message</Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* ── ADDRESS SECTION ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-lg mx-auto px-6 relative"
        >
          {/* Left vertical bar */}
          <span
            className="absolute left-0 top-0 h-full w-[2px]"
            style={{ background: '#B9CCE1' }}
          />
          {/* Right vertical bar */}
          <span
            className="absolute right-0 top-0 h-full w-[2px]"
            style={{ background: '#B9CCE1' }}
          />

          {/* Content */}
          <div className="text-center py-10 px-8">
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: '#3B4F9C' }}
            >
              Hyderabad
            </h3>
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: '#666666' }}
            >
              Sattva Knowledge City, Hi-Tech City - 500081,
              <br />
              Hyderabad, Telangana, India
            </p>
            
              <a href="mailto:hello@crediple.com"
              className="text-sm transition-opacity hover:opacity-75"
              style={{ color: 'var(--color-primary)' }}
            >
              hello@crediple.com
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <SectionReveal>
        <div
          className="py-14 px-6"
          style={{ background: '#F7F0EA' }}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <motion.h2
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold leading-snug"
              style={{ color: '#1A1A2E' }}
            >
              We run all kinds of IT services that vow
              <br className="hidden sm:block" />
              your success
            </motion.h2>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Button variant="dark" icon="💬">Let's Talk</Button>
            </motion.div>
          </div>
        </div>
      </SectionReveal>

    </div>
  );
}