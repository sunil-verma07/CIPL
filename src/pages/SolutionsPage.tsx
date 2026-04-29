import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Search } from "lucide-react";
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
import Carousel from '../components/ui/Carousel.tsx'

export default function SolutionsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden">
        <img
          src={bg_hero}
          alt="Solutions"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(80,70,80,0.82) 0%, rgba(60,50,70,0.65) 30%, rgba(20,20,50,0.25) 60%, transparent 100%)",
          }}
        />
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
            Integrated Solutions{" "} <br/>
             </span>
            Across Industries
          </motion.h1>
        </div>
      </section>


     <Carousel/>
      {/* ================= FORM SECTION ================= */}
      <section className="section-py ">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ">
          {/* Left Content */}
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

          {/* Form */}
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            </div>

            <AnimatedInput
              name="subject"
              placeholder="Subject*"
              value={form.subject}
              onChange={handleChange}
              required
            />

            <AnimatedInput
              name="message"
              placeholder="Please describe what you need..."
              value={form.message}
              onChange={handleChange}
              multiline
              rows={5}
            />

            <motion.div whileTap={{ scale: 0.95 }}>
              <Button variant="dark">Send Message</Button>
            </motion.div>
          </form>
        </div>
      </section>
    </>
  );
}
