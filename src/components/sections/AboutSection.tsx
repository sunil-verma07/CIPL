import { motion } from "framer-motion";
import { VALUES } from "../../data/siteData";
import SectionReveal from "../ui/SectionReveal";
import about_bg_vector from "../../assets/about_bg_vector.png";
import m_logo from "../../assets/m_logo.png";
import v_logo from "../../assets/v_logo.png";


export default function AboutSection() {
  return (
    // ↓ remove h-[150vh]; let content define height naturally
    <section className="flex items-center justify-center py-20">

      {/* ↓ remove h-[140vh]; use min-h with auto height */}
      <div className="w-[90vw] mx-auto relative flex items-center justify-center min-h-fit">

        <img
          src={about_bg_vector}
          alt="Background Vector"
          // ↓ use object-cover + inset-0 so it doesn't push layout
          className="w-full h-full absolute inset-0 object-cover pointer-events-none"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10">

          {/* HEADER */}
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 tracking-tight">
              About <span className="text-blue-500">Us</span>
            </h2>
          </SectionReveal>

          {/* MISSION + VISION */}
          <div className="grid grid-cols-1 md:grid-cols-2 mb-16 gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <img src={m_logo} alt="Mission Logo" className="w-20 h-20 mb-6" />
              <h3 className="text-2xl font-semibold tracking-widest text-(--text-subhead) mb-3">
                MISSION
              </h3>
              <p className="text-[15px] text-(--text-secondary) leading-relaxed max-w-xs text-left">
                To engineer the digital infrastructure of tomorrow...
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <img src={v_logo} alt="Vision Logo" className="w-20 h-20 mb-6" />
              <h3 className="text-2xl font-semibold tracking-widest text-(--text-subhead) mb-3">
                VISION
              </h3>
              <p className="text-[15px] text-(--text-secondary) leading-relaxed max-w-xs text-left">
                To become the definitive global benchmark...
              </p>
            </motion.div>
          </div>

          {/* VALUES GRID */}
          {/* ↓ grid-cols-2 on all sizes (compact) — no more invisible cards on mobile */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white border border-(--color-primary-light) rounded-xs p-4 sm:p-6 shadow-md hover:shadow-lg cursor-pointer transition"
              >
                <h4 className="text-sm font-semibold text-blue-500 mb-2">{v.title}</h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
