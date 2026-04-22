import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BRANDS } from "../../data/siteData";
import {
  StaggerContainer,
  fadeLeftItem,
  fadeRightItem,
} from "../ui/SectionReveal";
import SectionReveal from "../ui/SectionReveal";


export default function BrandsSection() {
  return (
    <section className="section-py" style={{ background: "var(--bg-base)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal className="text-center mb-14">
          <p
            className="text-xs font-display font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            OUR BRANDS
          </p>
          <h2
            className="text-3xl sm:text-4xl font-display font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            Our Brands.{" "}
            <span style={{ color: "var(--color-primary)" }}>One Vision</span>
          </h2>
        </SectionReveal>

        {/* Brands Grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.12}
        >
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand.id}
              variants={i % 2 === 0 ? fadeLeftItem : fadeRightItem}
              whileHover={{ scale: 0.95, y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              style={{
                background: "var(--card-bg)",
                boxShadow: "var(--shadow-md)",
              }}
              className="h-80 p-8 flex flex-col gap-2 text-center group cursor-pointer relative"
            >
              <img src={brand.image} className="w-40 bg-cover mx-auto" alt="" />


              <h3
                className="text-[22px] font-display font-medium leading-tight"
                style={{ color: "#5D5A88" }}
              >
                {brand.name}
              </h3>

              <p
                className="text-xs mt-2 flex-1 font-sans font-400"
                style={{ color: "var(--text-secondary)" }}
              >
                {brand.description}
              </p>

              {/* Arrow */}
              <Link
                to={brand.href || `/brands/${brand.id}`}
                aria-label={`Learn more about ${brand.name}`}
              >
                <motion.div
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 420, damping: 18 }}
                  className="absolute left-1/2 -bottom-8 w-16 h-16 rounded-full bg-(--color-primary) flex justify-center items-center text-(--bg-base) "
                  style={{
                    boxShadow: "0 4px 16px rgba(26,107,255,0.35)",
                    transform: "translateX(-50%)",
                  }}
                >
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <ArrowRight size={26} strokeWidth={2.5} />
                  </motion.div>
                </motion.div>
              </Link>

              {/* Bottom accent */}
              <motion.div
                className="h-0.5 rounded-full -mx-6 -mb-6"
                style={{ background: brand.color }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
