import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  COURSES,
  INTERNSHIP_FEATURES,
  PROCESS_OUTCOMES,
} from "../data/siteData";
import SectionReveal, {
  StaggerContainer,
  fadeUpItem,
  fadeLeftItem,
  fadeRightItem,
} from "../components/ui/SectionReveal";
import CTABanner from "../components/sections/CTABanner";
import bg_hero from "../assets/bg_solution_hero.jpg";
import Button from "../components/ui/Button";
import AnimatedInput from "../components/ui/AnimatedInput";
import Carousel from "../components/ui/Carousel.tsx";
import yaka_logo from "../assets/yaka_logo.png"; // white logo for hero

export default function SolutionsPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  // ── Logo scroll animation ─────────────────────────────────────────────────
  // Solutions hero is short (h-72 / h-96), so animation is complete by ~260px.
  // White logo fades/moves out; navbar's blue logo fades in over same range.
  const { scrollY } = useScroll();
  const logoOpacity = useTransform(scrollY, [0, 220],  [1, 0]);
  const logoScale   = useTransform(scrollY, [0, 260],  [1, 0.45]);
  const logoX       = useTransform(scrollY, [0, 260],  [0, -80]);
  const logoY       = useTransform(scrollY, [0, 260],  [0, -50]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-72 sm:h-96 overflow-hidden">
        <img src={bg_hero} alt="Solutions" className="w-full h-full object-cover" />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(80,70,80,0.82) 0%, rgba(60,50,70,0.65) 30%, rgba(20,20,50,0.25) 60%, transparent 100%)",
          }}
        />

        {/*
          ── White YAKA logo — top right ──────────────────────────────────
          Fades out + drifts toward top-left as user scrolls.
          Navbar's blue logo fades in simultaneously — creating a smooth
          color-change handoff illusion.
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
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

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xs font-display uppercase tracking-widest mb-3"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Crediple / Solutions /
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4"
          >
            <span style={{ color: "var(--color-primary)" }}>
              Integrated Solutions{" "}<br />
            </span>
            Across Industries
          </motion.h1>
        </div>
      </section>

      <Carousel />

      {/* ── Contact Form ── */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="contact-quote w-fit">
            <h1 className="text-3xl md:text-4xl font-bold font-sans leading-12 mb-6">
              Contact us for more <br />
              Information
            </h1>
            <p className="text-sm text-[var(--text-secondary)] max-w-md leading-6">
              We just need a couple of hours!
              <br /> No more than 2 working days since receiving your issue{" "}
              <br />
              ticket.
            </p>
          </div>

          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimatedInput name="name"    placeholder="Name*"  value={form.name}  onChange={handleChange} required />
              <AnimatedInput name="email"   type="email" placeholder="Email*" value={form.email} onChange={handleChange} required />
            </div>
            <AnimatedInput name="subject"  placeholder="Subject*" value={form.subject} onChange={handleChange} required />
            <AnimatedInput name="message"  placeholder="Please describe what you need..." value={form.message} onChange={handleChange} multiline rows={5} />
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button variant="dark">Send Message</Button>
            </motion.div>
          </form>
        </div>
      </section>
    </>
  );
}