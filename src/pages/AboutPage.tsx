import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";
import about_hero_bg from "../assets/about_hero_bg.jpg";
import Button from "../components/ui/Button.tsx";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function AboutUs() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[380px] sm:h-[440px] md:h-[520px] flex items-center overflow-hidden">
        <img
          src={about_hero_bg}
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt=""
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(80,70,80,0.82) 0%, rgba(60,50,70,0.65) 30%, rgba(20,20,50,0.25) 60%, transparent 100%)",
          }}
        />

        {/* Extra dark vignette on far left edge */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.45) 0%, transparent 45%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6 ml-6 sm:ml-12 lg:ml-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] tracking-[0.22em] uppercase mb-4 text-white/50"
          >
            About Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-3xl sm:text-4xl font-semibold text-gray-800 tracking-tight"
          >
            <span style={{ color: "#38BDF8" }}>Building Growth Through</span>
            <br />
            <span style={{ color: "#38BDF8" }}>Integration.</span>{" "}
            <span className="text-white">Not Fragmentation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-sm md:text-base text-white/60 max-w-xl mb-7 leading-relaxed mt-8"
          >
            A multi-branded holding ecosystem building next generation
            businesses across HealthTech, FinTech, LegalTech, and DataTech
          </motion.p>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-2 sm:gap-3"
          >
            {["HealthTech", "Fintech", "LegalTech", "DataTech"].map(
              (text, i) => (
                <motion.div key={text} variants={fadeUp} custom={i}>
                  <span
                    className="inline-block px-4 py-2 text-sm font-medium text-white border border-white/40 rounded-sm cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {text}
                  </span>
                </motion.div>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDATION ───────────────────────────────────────────────────── */}
      <section
        className="py-16 md:py-20"
        style={{ background: "var(--bg-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-sm font-light text-[#999] uppercase tracking-[0.25rem] mb-5">
              Our Foundation
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-black leading-tight mb-3">
              More Than a{" "}
              <span style={{ color: "var(--color-primary-light)" }}>
                Holding <br /> Company
              </span>{" "}
              — A system builder across industries
            </h2>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl text-[#202020] leading-relaxed mb-4 font-medium">
              Crediple transforms traditional business models into scalable,
              technology driven ecosystems. We bring structure, intelligence,
              and scalability to every industry we build in.
            </p>
            <p
              className="text-sm font-light text-center"
              style={{ color: "var(--color-primary-light)" }}
            >
              We are not just building Brands. We are building systems that
              power industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#F8F8F8" }}>
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl text-center mb-4 sm:text-4xl font-semibold text-gray-800 tracking-tight"
          >
            Our Operating Philosophy
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="text-center text-gray-500 text-sm md:text-base mb-12"
          >
            We do not run businesses in isolation. We design interconnected
            ecosystems.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="bg-white rounded-2xl shadow-lg px-6 sm:px-8 py-8"
          >
            <p className="text-center text-gray-500 text-sm mb-12">
              Every vertical we enter is evaluated on three principles:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-6">
              {[
                "Can it be systemised?",
                "Can it be scaled through technology?",
                "Can it improve decision making or access?",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#3b9eff] flex items-center justify-center text-white text-xl font-bold shadow-md">
                    {i + 1}
                  </div>
                  <p className="text-sm font-semibold text-[#1a1f36] leading-snug max-w-[160px]">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-gray-100 mb-4" />
            <p className="text-center text-[#3b9eff] font-bold text-base md:text-lg">
              If the answer is yes — we build it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── APPROACH ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl text-center mb-4 sm:text-4xl font-semibold text-gray-800 tracking-tight">
              Our Approach
            </h2>
            <p className="text-blue-500 font-medium text-lg">
              A system-first approach, not a product-first approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl shadow-md"
            >
              <span className="text-red-500 text-2xl font-bold mb-4 block">
                ✕
              </span>
              <h3 className="text-base font-bold text-gray-900 mb-3">
                Instead of asking:
              </h3>
              <p className="text-sm text-gray-600 italic">
                What service should we offer?
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 rounded-2xl text-white shadow-md"
              style={{
                background: "linear-gradient(135deg, #3297FC 0%, #1A5FB8 100%)",
              }}
            >
              <span className="text-white text-2xl font-bold mb-4 block">
                ✓
              </span>
              <h3 className="text-base font-bold mb-3">We ask:</h3>
              <p className="text-sm italic">
                What system needs to exist to solve this industry problem at
                scale?
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="bg-white rounded-2xl shadow-md px-8 py-8 flex flex-col items-center gap-5"
          >
            <p className="text-gray-700 text-sm">
              This approach allows us to build:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Long-term infrastructure",
                "Repeatable models",
                "Scalable ecosystems",
              ].map((label) => (
                <span
                  key={label}
                  className="px-6 py-3 rounded-full bg-[#3297FC] text-white text-sm font-medium"
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DIFFERENT ────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl text-center mb-4 sm:text-4xl font-semibold text-gray-800 tracking-tight">
              What Makes Crediple Different
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {[
              {
                left: "Most companies operate vertically",
                right: "We operate horizontally across industries",
              },
              {
                left: "Most brands sell services",
                right: "We design frameworks that deliver services at scale",
              },
              {
                left: "Most systems are disconnected",
                right: "We connect intelligence across domains",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="grid grid-cols-2 rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white"
              >
                {/* Left — plain white */}
                <div className="px-6 sm:px-8 py-6 bg-white flex items-center">
                  <p className="text-gray-500 text-sm">{item.left}</p>
                </div>

                {/* Right — blue-tinted with radial glow */}
                <div className="relative overflow-hidden flex items-center">
                  {/* Thin divider */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gray-200 z-10" />

            
                  {/* Bottom-left secondary glow for depth */}
                  <div
                    className="absolute -bottom-8 left-4 w-32 h-32 rounded-full pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(96, 146, 196, 0.45) 0%, transparent 70%)",
                      filter: "blur(14px)",
                    }}
                  />

                  <div className="px-6 sm:px-8 py-6 bg-blue-50/60 h-full w-full flex items-center relative z-10">
                    <p className="text-(--color-primary) font-semibold text-sm">
                      {item.right}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRUCTURE ────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl text-center mb-4 sm:text-4xl font-semibold text-gray-800 tracking-tight">
              How We Are Structured
            </h2>
            <p className="text-gray-500 text-sm">
              Crediple operates through a Hub & Ecosystem model
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6 max-w-4xl mx-auto">
            {/* Left card — blue gradient */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 rounded-2xl text-white"
              style={{
                background:
                  "linear-gradient(145deg, #3297FC 0%, #277FDE 60%, #1A5FB8 100%)",
              }}
            >
              <h3 className="text-xl font-bold text-white mb-3">
                Central Intelligence Layer
              </h3>
              <p className="text-white/80 text-sm mb-6">
                A unified strategic and technology backbone that governs:
              </p>
              <ul className="space-y-4">
                {[
                  "Product architecture",
                  "Data systems",
                  "Brand frameworks",
                  "Growth strategy",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-white text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-white/80 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right card — white with blue border */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border-2 border-[#3297FC]"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Independent Business Units
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                Each business operates as an independent brand ecosystem:
              </p>
              <ul className="space-y-3 mb-6 text-[#364153]">
                {[
                  "HealthTech systems",
                  "FinTech systems",
                  "LegalTech systems",
                  "DataTech systems",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#3297FC] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-semibold text-black mb-2">
                  Each business has:
                </p>
                <ul className="space-y-1">
                  {[
                    "Its own operational focus",
                    "Its own customer journey",
                    "Its own performance metrics",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-1 my-2 text-[#364153] text-xs"
                    >
                      <span className="text-blue-400">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="p-5 rounded-2xl bg-[#F9FAFB] text-center"
          >
            <p className="text-gray-600 text-sm">
              But all are powered by the{" "}
              <span className="text-[#3297FC] font-semibold">
                same core intelligence layer
              </span>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── COMMITMENT ───────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 tracking-tight mb-4">
              Our Commitment
            </h2>
            <p className="text-gray-500 text-sm">
              We are committed to building:
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              "Transparent systems",
              "Scalable digital infrastructure",
              "Industry ready technology frameworks",
              "Long term ecosystem value",
            ].map((item, i) => (
              <motion.div
                key={item}
                variants={fadeUp}
                custom={i}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-sm text-gray-700">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FUTURE DIRECTION ─────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-3xl px-8 sm:px-14 py-8 text-center"
            style={{
              background:
                "linear-gradient(160deg, rgb(131, 193, 255) 0%, #6da8e7 50%, #4a8adf 100%)",
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 tracking-tight mb-4">
              Future Direction
            </h2>
            <p className="text-white/90 text-md sm:text-lg mb-4">
              Our focus is not just expansion. It is{" "}
              <strong className="text-white font-bold">
                ecosystem convergence
              </strong>
              .
            </p>
            <p className="text-white/65 text-sm mb-10 mx-auto leading-relaxed">
              Where healthcare, finance, legal systems, and data intelligence
              begin to interact seamlessly under one <br />
              unified structure.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Healthcare",
                "Finance",
                "Legal Systems",
                "Data Intelligence",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2.5 rounded-4xl text-sm text-white/75"
                  style={{
                    background: "rgba(255,255,255,0.22)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER SIGN-OFF ───────────────────────────────────────────────── */}
      <section
        className="py-20 text-center text-white"
        style={{
          background: "linear-gradient(180deg, #0d1b2e 0%, #0a1628 100%)",
        }}
      >
        <div className="max-w-xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-black tracking-widest text-white mb-4"
          >
            CREDIPLE
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={1}
            className="w-12 h-0.5 bg-blue-500 mx-auto mb-8"
          />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="text-white/60 text-sm mb-4"
          >
            Crediple is not a traditional holding company.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={3}
            className="text-white font-bold text-lg leading-snug mb-12"
          >
            It is a multi-domain system architecture designed to transform how
            industries operate.
          </motion.p>
          <div className="border-t border-white/10 pt-6">
            <p className="text-white/40 text-xs">
              © 2026 Crediple. Building systems that power industries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
