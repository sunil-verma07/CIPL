import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FOOTER_PORTFOLIO, FOOTER_COMPANY } from "../../data/siteData";
import logo from "../../assets/footer_logo.png";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Social Icons
const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const MetaIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.003 12c0-5.522 4.476-10 9.997-10 5.522 0 9.998 4.478 9.998 10 0 4.99-3.656 9.126-8.437 9.878v-6.987H16.1l.713-4.891h-3.54V7.077c0-1.338.655-2.643 2.757-2.643h2.133V1.16S16.3.857 14.465.857c-3.614 0-5.976 2.19-5.976 6.156V10H4.9v4.891h3.588V21.88C3.659 21.128 2.003 16.99 2.003 12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  { icon: XIcon, href: "#", label: "X" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: MetaIcon, href: "#", label: "Meta" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#FAFAFA" }}>
      {/* Main Footer */}
      <div className="py-14 px-6" style={{ borderBottom: "1px solid #EEEBE8" }}>
        <motion.div
          className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* LEFT - Brand */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start gap-2"
          >
            <span
              className="text-[22px] font-bold tracking-tight"
              style={{ color: "#0047AB" }}
            >
              Crediple
            </span>
            <img src={logo} className="w-28" alt="YAKA logo" />
            <p className="text-[12px] mt-1" style={{ color: "#717171" }}>
              The Architect of Industry Evolution.
            </p>
          </motion.div>

          {/* RIGHT - Links Wrapper */}
          <div className="flex gap-16 md:gap-24 ml-auto">
            {/* Portfolio */}
            <motion.div variants={itemVariants}>
              <h4
                className="text-[17px] font-[500] mb-2"
                style={{ color: "#653C1A" }}
              >
                Our Portfolio
              </h4>
              <ul>
                {FOOTER_PORTFOLIO.map((item) => (
                  <li key={item}>
                    <Link
                      to="/brands"
                      className="text-[13px] transition-colors hover:text-[#1A3EBD]"
                      style={{ color: "#717171" }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={itemVariants}>
              <h4
                className="text-[17px] font-[500] mb-2"
                style={{ color: "#653C1A" }}
              >
                Company
              </h4>
              <ul>
                {FOOTER_COMPANY.map((item) => (
                  <li key={item}>
                    <Link
                      to="/about"
                      className="text-[13px] transition-colors hover:text-[#1A3EBD]"
                      style={{ color: "#717171" }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px]" style={{ color: "#8B6343" }}>
            © 2026 Crediple Group. All Rights Reserved. Empowering Professionals
            Through Convergent Technology.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={i}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.12, color: "#814310" }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
                className="flex items-center justify-center w-9 h-9 rounded-full"
                style={{ border: "1px solid #9B7250", color: "#9B7250" }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
