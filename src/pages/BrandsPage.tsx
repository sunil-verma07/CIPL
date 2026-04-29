import { motion } from "framer-motion";
import { BRANDS_PAGE_DATA, UNIFIED_ADVANTAGE } from "../data/siteData";
import brand_bg_vector from "../assets/brand_hero.png";
import dotted_bg from "../assets/dotted_bg.png";

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Graduation Cap SVG Icon ─────────────────────────────────────────────────

const GradCapIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="#9B6B3A"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
  </svg>
);

// ─── Component ───────────────────────────────────────────────────────────────

export default function BrandsPage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-16  px-6"
        style={{ backgroundColor: "#EDE8DF" }}
      >
        {/* Dotted background texture */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${dotted_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
          }}
        />

        {/* Right illustration / vector */}
        <img
          src={brand_bg_vector}
          alt=""
          aria-hidden="true"
          className="absolute top-0 right-0 h-full w-auto max-w-[55%] object-contain object-right z-10 pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "rgba(23, 128, 234, 1)" }}
            >
              Crediple/ Brands
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl mb-4 sm:text-5xl font-[600] text-gray-800 tracking-tight"
              style={{ color: "rgba(66, 66, 66,1)" }}
            >
              Our Ecosystem of <br className="hidden sm:block" />
              Specialized Brands
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.6 }}
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "rgba(141, 139, 167, 1)" }}
            >
              Crediple operates through a portfolio of focused,
              <br /> high-performance brands designed for specific
              <br /> industry impact
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── BRAND SECTIONS ────────────────────────────────────────────────── */}
      {BRANDS_PAGE_DATA.map((brand, index) => {
        const isLast = index === BRANDS_PAGE_DATA.length - 1;
        const imageRight = index % 2 === 0;

        return (
          <div key={brand.id}>
            {/* ── Brand Hero Content + Image ─────────────────────────────── */}
            <section className="bg-white py-14 sm:py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  className={`flex flex-col gap-10 items-start md:items-center ${
                    imageRight ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Text Content */}
                  <motion.div
                    variants={imageRight ? fadeLeft : fadeRight}
                    className="w-full md:w-1/2 flex flex-col justify-center"
                  >
                    <h2
                      className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5"
                      style={{ color: "#1A1A2E" }}
                    >
                      {brand.name}
                    </h2>

                    <div className="mb-5 space-y-1">
                      {brand.taglines.map((line) => (
                        <p
                          key={line}
                          className="text-[11px] font-semibold uppercase tracking-[0.16rem]"
                          style={{ color: "#AAAAAA" }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>

                    <div
                      className="w-10 h-px mb-6"
                      style={{ background: "#D1D1D1" }}
                    />

                    <div className="space-y-4">
                      {brand.description.map((para, i) => (
                        <p
                          key={i}
                          className="text-sm leading-relaxed"
                          style={{ color: "#666666" }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    variants={imageRight ? fadeRight : fadeLeft}
                    className="w-full md:w-1/2"
                  >
                    <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>

            {/* ── What We Build ─────────────────────────────────────────── */}
            <section
              className="py-14 sm:py-16 px-4"
              style={{ background: "#EAF2FB" }}
            >
              <div className="max-w-6xl mx-auto">
                <motion.h2
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10"
                  style={{ color: "#1A1A2E" }}
                >
                  What We Build
                </motion.h2>

                {/* Row 1 — first 3 */}
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  className="flex flex-col sm:flex-row gap-4 mb-4"
                >
                  {brand.whatWeBuild.slice(0, 3).map((item) => (
                    <motion.div
                      key={item}
                      variants={cardVariant}
                      whileHover={{
                        y: -3,
                        boxShadow: "0 6px 20px rgba(26,79,156,0.12)",
                      }}
                      className="flex-1 bg-white rounded-sm shadow-sm px-6 py-4 flex items-center justify-center cursor-default transition-shadow"
                    >
                      <span
                        className="text-sm sm:text-base font-semibold text-center"
                        style={{ color: "#1A4F9C" }}
                      >
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Row 2 — remaining, centered */}
                {brand.whatWeBuild.length > 3 && (
                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                  >
                    {brand.whatWeBuild.slice(3).map((item) => (
                      <motion.div
                        key={item}
                        variants={cardVariant}
                        whileHover={{
                          y: -3,
                          boxShadow: "0 6px 20px rgba(26,79,156,0.12)",
                        }}
                        className="sm:w-[calc(33.333%-0.5rem)] bg-white rounded-sm shadow-sm px-6 py-4 flex items-center justify-center cursor-default transition-shadow"
                      >
                        <span
                          className="text-sm sm:text-base font-semibold text-center"
                          style={{ color: "#1A4F9C" }}
                        >
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </section>

            {/* ── Core Focus ────────────────────────────────────────────── */}
            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="bg-white py-12 px-4"
              style={{ borderBottom: isLast ? "none" : "1px solid #F0F0F0" }}
            >
              <div className="max-w-3xl mx-auto text-center">
                <p
                  className="text-xs font-bold uppercase tracking-[0.18rem] mb-4"
                  style={{ color: "#1A4F9C" }}
                >
                  Core Focus
                </p>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ color: "#555555" }}
                >
                  {brand.coreFocus}
                </p>
              </div>
            </motion.section>
          </div>
        );
      })}

      {/* ── UNIFIED ADVANTAGE ─────────────────────────────────────────────── */}
      <section className="relative bg-white py-20 px-4 overflow-hidden">
      

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-14"
            style={{ color: "#2D2D3A" }}
          >
            Unified Advantage
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-0"
          >
            {/* Left column */}
            <div className="flex flex-col">
              {UNIFIED_ADVANTAGE.filter((_, i) => i % 2 === 0).map((item) => (
                <motion.div
                  key={item.label}
                  variants={cardVariant}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="flex items-center gap-4 rounded-sm py-5 cursor-default shadow-md"
                >
                  <GradCapIcon />
                  <span
                    className="text-base font-semibold"
                    style={{ color: "#1A4F9C" }}
                  >
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Right column */}
            <div className="flex flex-col">
              {UNIFIED_ADVANTAGE.filter((_, i) => i % 2 !== 0).map((item) => (
                <motion.div
                  key={item.label}
                  variants={cardVariant}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="flex items-center gap-4 rounded-sm py-5 cursor-default shadow-md"
                >
                  <GradCapIcon />
                  <span
                    className="text-base font-semibold"
                    style={{ color: "#1A4F9C" }}
                  >
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
