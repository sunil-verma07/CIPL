import { motion } from 'framer-motion';
import { VALUES } from '../../data/siteData';
import SectionReveal from '../ui/SectionReveal';
import about_bg_vector from '../../assets/about_bg_vector.png';
import m_logo from '../../assets/m_logo.png';
import v_logo from '../../assets/v_logo.png';
export default function AboutSection() {
  return (
    <section className="flex items-center justify-center h-[150vh]  bg-(--bg-base) ">

      <div className="w-[90vw] overflow-hidden mx-auto h-[140vh]  relative flex items-center justify-center">

      <img src={about_bg_vector} alt="Background Vector" className="w-full h-full absolute -bottom-40 bg-cover" />


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">


        {/* HEADER */}
        <SectionReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 tracking-tight">
            About <span className="text-blue-500">Us</span>
          </h2>
        </SectionReveal>

        {/* MISSION + VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-20 text-center">

          {/* MISSION */}
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
              To engineer the digital infrastructure of tomorrow. Crediple exists to bridge the gap between
complex industry challenges and streamlined technological solutions. By nurturing a powerhouse
portfolio of fintech, healthtech and legal platforms, we dismantle barriers to efficiency and
empower professionals to operate at their absolute peak
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* ICON */}
            <img src={v_logo} alt="Vision Logo" className="w-20 h-20 mb-6" />

            <h3 className="text-2xl font-semibold tracking-widest text-(--text-subhead) mb-3">
              VISION
            </h3>

            <p className="text-[15px] text-(--text-secondary) leading-relaxed max-w-xs text-left">
             To become the definitive global benchmark for multi sector digital transformation. Our vision is a
future where the Crediple ecosystem is the invisible engine driving professional success across
every major industry, turning high level complexity into accessible, high performance growth.
            </p>
          </motion.div>
        </div>


        {/* VALUES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-white border border-(--color-primary-light) rounded-xs p-6 shadow-md hover:shadow-lg cursor-pointer transition"
            >
              <h4 className="text-sm font-semibold text-blue-500 mb-2">
                {v.title}
              </h4>

              <p className="text-sm text-gray-500 leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
      </div>
    </section>
  );
}
