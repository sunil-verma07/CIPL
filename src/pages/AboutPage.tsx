import { useEffect, useRef, useState } from "react";

/* ─── Scroll reveal hook ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, className = "", delay = 0, dir = "up" }) {
  const [ref, visible] = useReveal();
  const base = "transition-all duration-700 ease-out";
  const hidden =
    dir === "up" ? "opacity-0 translate-y-10"
    : dir === "left" ? "opacity-0 -translate-x-10"
    : dir === "right" ? "opacity-0 translate-x-10"
    : "opacity-0";
  const shown = "opacity-100 translate-y-0 translate-x-0";
  const delayClass = delay ? `delay-[${delay}ms]` : "";
  return (
    <div
      ref={ref}
      className={`${base} ${visible ? shown : hidden} ${delayClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── CheckIcon ─── */
function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ══════════════════════════════════════════
   SECTION 1 — HERO
══════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative w-full h-[520px] md:h-[600px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
        alt="Crediple team"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(-89.5deg, rgba(255,255,255,0.45) 31.75%, rgba(255,255,255,0) 63.84%), linear-gradient(135deg,rgba(8,12,28,0.82) 0%,rgba(50,151,252,0.2) 100%)",
        }}
      />
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-12 lg:px-24 max-w-[900px]">
        <p
          className="text-[11px] font-bold tracking-[0.2em] uppercase mb-5 opacity-0 animate-[fadeDown_0.6s_0.1s_forwards]"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          About Us
        </p>
        <h1
          className="font-[Jost] font-semibold text-[#3297fc] leading-tight mb-4 opacity-0 animate-[fadeDown_0.7s_0.25s_forwards]"
          style={{ fontSize: "clamp(32px,5vw,56px)" }}
        >
          Building Growth Through Integration.{" "}
          <span className="text-white">Not Fragmentation</span>
        </h1>
        <p
          className="font-[Jost] font-medium text-[#484848] leading-[1.65] mb-8 max-w-[640px] opacity-0 animate-[fadeDown_0.7s_0.4s_forwards]"
          style={{ fontSize: "clamp(16px,1.4vw,22px)" }}
        >
          A multi-branded holding ecosystem building next generation businesses
          across HealthTech, FinTech, LegalTech, and DataTech
        </p>
        <div className="flex flex-wrap gap-3 opacity-0 animate-[fadeDown_0.7s_0.55s_forwards]">
          {["HealthTech", "Fintech", "LegalTech", "DataTech"].map((tag) => (
            <button
              key={tag}
              className="border border-[#333] text-[#333] font-[DM_Sans] font-bold text-[15px] px-7 py-3 rounded-[5px] hover:bg-[#333] hover:text-white transition-all duration-200"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   SECTION 2 — MORE THAN A HOLDING COMPANY
══════════════════════════════════════════ */
function Foundation() {
  return (
    <section className="bg-[#f8f8f8] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center">

          <Reveal dir="left" className="flex-shrink-0 lg:w-[42%]">
            <p className="font-[Jost] font-medium tracking-[0.24em] uppercase text-[#999] text-[16px] leading-[53px] mb-2">
              Our Foundation
            </p>
            <h2 className="font-[Jost] font-semibold text-[#333] leading-tight" style={{ fontSize: "clamp(28px,3.6vw,50px)" }}>
              More Than a{" "}
              <span className="text-[#3297fc]">Holding Company </span>
              A system builder across industries
            </h2>
          </Reveal>

          <Reveal dir="right" delay={120} className="lg:w-[58%] flex flex-col gap-8">
            <p className="font-[Jost] font-medium text-[#202020] leading-[1.6]" style={{ fontSize: "clamp(18px,1.8vw,28px)" }}>
              Crediple transforms traditional business models into scalable,
              technology-driven ecosystems. We bring structure, intelligence, and
              scalability to every industry we build in.
            </p>
            <div className="flex items-start gap-5">
              <div className="w-[115px] min-w-[115px] h-px bg-[#9795B5] mt-3" />
              <p className="font-[Jost] font-normal text-[#3297fc] text-[18px] leading-[1.7]">
                We are not just building Brands. We are building systems that power
                industries.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   SECTION 3 — OPERATING PHILOSOPHY
══════════════════════════════════════════ */
function Philosophy() {
  const principles = [
    { n: 1, text: "Can it be systemised?" },
    { n: 2, text: "Can it be scaled through technology?" },
    { n: 3, text: "Can it improve decision making or access?" },
  ];
  return (
    <section className="bg-[#f9fafb] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">

        <Reveal className="text-center mb-12">
          <h2 className="font-[Jost] font-semibold text-[#101828] text-[40px] md:text-[48px] mb-5">
            Our Operating Philosophy
          </h2>
          <p className="font-[Jost] text-[#364153] text-[18px] md:text-[20px] leading-[1.6]">
            We do not run businesses in isolation. We design interconnected
            ecosystems.
          </p>
        </Reveal>

        {/* White card */}
        <Reveal delay={100}>
          <div className="bg-white rounded-2xl shadow-[0px_10px_15px_rgba(0,0,0,0.1),0px_4px_6px_rgba(0,0,0,0.1)] overflow-hidden">
            <div className="px-8 pt-12 pb-8">
              <p className="font-[Jost] text-[#364153] text-[18px] text-center mb-10">
                Every vertical we enter is evaluated on three principles:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {principles.map(({ n, text }, i) => (
                  <Reveal key={n} dir="up" delay={i * 100} className="flex flex-col items-center gap-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#3297fc] flex items-center justify-center">
                      <span className="font-[Jost] font-bold text-white text-[30px] leading-none">{n}</span>
                    </div>
                    <p className="font-[Jost] font-medium text-[#101828] text-[18px] leading-[1.55]">{text}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="border-t border-[#e5e7eb] px-8 py-6 text-center">
              <p className="font-[Jost] font-semibold text-[#3297fc] text-[22px] md:text-[24px]">
                If the answer is yes — we build it.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   SECTION 4 — HOW WE ARE STRUCTURED
══════════════════════════════════════════ */
function Structure() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">

        <Reveal className="text-center mb-16">
          <h2 className="font-[Jost] font-semibold text-[#101828] text-[40px] md:text-[48px] mb-5">
            How We Are Structured
          </h2>
          <p className="font-[Jost] text-[#364153] text-[18px] md:text-[20px]">
            Crediple operates through a Hub &amp; Ecosystem model
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Left — Central Intelligence Layer (Blue) */}
          <Reveal dir="left" className="flex-1">
            <div
              className="rounded-2xl p-10 h-full"
              style={{
                background:
                  "linear-gradient(135deg, #3297fc 0%, #1a5fb8 100%)",
              }}
            >
              <h3 className="font-[Jost] font-semibold text-white text-[28px] md:text-[30px] mb-4">
                Central Intelligence Layer
              </h3>
              <p className="font-[Jost] text-white text-[17px] opacity-90 mb-7">
                A unified strategic and technology backbone that governs:
              </p>
              <ul className="flex flex-col gap-4">
                {["Product architecture", "Data systems", "Brand frameworks", "Growth strategy"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white flex-shrink-0" />
                    <span className="font-[Jost] text-white text-[17px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right — Independent Business Units (White + blue border) */}
          <Reveal dir="right" delay={120} className="flex-1">
            <div className="bg-white border-2 border-[#3297fc] rounded-2xl p-10 h-full">
              <h3 className="font-[Jost] font-semibold text-[#101828] text-[28px] md:text-[30px] mb-4">
                Independent Business Units
              </h3>
              <p className="font-[Jost] text-[#364153] text-[17px] mb-7">
                Each business operates as an independent brand ecosystem:
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                {["HealthTech systems", "FinTech systems", "LegalTech systems", "DataTech systems"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#3297fc] flex-shrink-0" />
                    <span className="font-[Jost] text-[#364153] text-[17px]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#e5e7eb] pt-6">
                <p className="font-[Jost] font-medium text-[#101828] text-[16px] mb-4">Each business has:</p>
                <ul className="flex flex-col gap-3">
                  {["Its own operational focus", "Its own customer journey", "Its own performance metrics"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="text-[#3297fc] font-bold text-[17px] leading-none">→</span>
                      <span className="font-[Jost] text-[#364153] text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Footer banner */}
        <Reveal delay={200}>
          <div className="bg-[#f9fafb] rounded-2xl mt-10 px-8 py-8 text-center">
            <p className="font-[Jost] text-[#364153] text-[18px] md:text-[20px]">
              But all are powered by the{" "}
              <span className="font-semibold text-[#3297fc]">same core intelligence layer</span>.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   SECTION 5 — OUR APPROACH
══════════════════════════════════════════ */
function Approach() {
  return (
    <section className="bg-[#f9fafb] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">

        <Reveal className="text-center mb-16">
          <h2 className="font-[Jost] font-semibold text-[#101828] text-[40px] md:text-[48px] mb-4">
            Our Approach
          </h2>
          <p className="font-[Jost] font-medium text-[#3297fc] text-[20px] md:text-[24px]">
            A system-first approach, not a product-first approach
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-8 mb-8 flex-wrap">
          {/* Left — Instead of asking (white card, red ×) */}
          <Reveal dir="left" className="flex-1 min-w-[260px]">
            <div className="bg-white rounded-2xl shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_2px_4px_rgba(0,0,0,0.1)] p-10 h-full flex flex-col gap-4">
              <span className="font-[Jost] text-[#fb2c36] text-[48px] leading-none">×</span>
              <h3 className="font-[Jost] font-semibold text-[#101828] text-[22px] md:text-[24px]">
                Instead of asking:
              </h3>
              <p className="font-[Jost] italic text-[#4a5565] text-[18px] md:text-[20px]">
                What service should we offer?
              </p>
            </div>
          </Reveal>

          {/* Right — We ask (blue gradient card) */}
          <Reveal dir="right" delay={120} className="flex-1 min-w-[260px]">
            <div
              className="rounded-2xl shadow-[0px_10px_15px_rgba(0,0,0,0.1),0px_4px_6px_rgba(0,0,0,0.1)] p-10 h-full flex flex-col gap-4"
              style={{ background: "linear-gradient(155deg, #3297fc 0%, #1a5fb8 100%)" }}
            >
              <span className="font-[Jost] text-white text-[48px] leading-none">✓</span>
              <h3 className="font-[Jost] font-semibold text-white text-[22px] md:text-[24px]">
                We ask:
              </h3>
              <p className="font-[Jost] italic text-white text-[18px] md:text-[20px] leading-[1.55]">
                What system needs to exist to solve this industry problem at scale?
              </p>
            </div>
          </Reveal>
        </div>

        {/* Bottom — This approach allows us to build */}
        <Reveal delay={150}>
          <div className="bg-white rounded-2xl shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_2px_4px_rgba(0,0,0,0.1)] p-10">
            <p className="font-[Jost] text-[#364153] text-[17px] text-center mb-8">
              This approach allows us to build:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Long-term infrastructure", "Repeatable models", "Scalable ecosystems"].map((tag, i) => (
                <Reveal key={tag} delay={i * 80}>
                  <span className="bg-[#3297fc] text-white font-[Jost] font-medium text-[17px] px-8 py-3 rounded-full inline-block">
                    {tag}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   SECTION 6 — WHAT MAKES CREDIPLE DIFFERENT
══════════════════════════════════════════ */
function Different() {
  const rows = [
    { left: "Most companies operate vertically", right: "We operate horizontally across industries" },
    { left: "Most brands sell services", right: "We design frameworks that deliver services at scale" },
    { left: "Most systems are disconnected", right: "We connect intelligence across domains" },
  ];
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">

        <Reveal className="text-center mb-16">
          <h2 className="font-[Jost] font-semibold text-[#101828] text-[40px] md:text-[48px]">
            What Makes Crediple Different
          </h2>
        </Reveal>

        <div className="flex flex-col gap-8">
          {rows.map(({ left, right }, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-white rounded-2xl border border-[#e5e7eb] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="bg-[#f9fafb] px-8 py-8 border-b sm:border-b-0 sm:border-r border-[#e5e7eb]">
                    <p className="font-[Jost] text-[#4a5565] text-[17px] md:text-[18px] leading-[1.6]">{left}</p>
                  </div>
                  <div
                    className="px-8 py-8"
                    style={{ background: "linear-gradient(90deg, rgba(50,151,252,0.1) 0%, #fff 100%)" }}
                  >
                    <p className="font-[Jost] font-semibold text-[#3297fc] text-[17px] md:text-[18px] leading-[1.6]">{right}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   SECTION 7 — OUR COMMITMENT
══════════════════════════════════════════ */
function Commitment() {
  const items = [
    "Transparent systems",
    "Scalable digital infrastructure",
    "Industry ready technology frameworks",
    "Long term ecosystem value",
  ];
  return (
    <section className="bg-[#f9fafb] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">

        <Reveal className="text-center mb-14">
          <h2 className="font-[Jost] font-semibold text-[#101828] text-[40px] md:text-[48px] mb-4">
            Our Commitment
          </h2>
          <p className="font-[Jost] text-[#364153] text-[18px] md:text-[20px]">
            We are committed to building:
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <Reveal key={item} delay={i * 90}>
              <div className="bg-white rounded-2xl shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_2px_4px_rgba(0,0,0,0.1)] flex items-center gap-6 px-8 py-8 hover:shadow-[0px_12px_30px_rgba(50,151,252,0.15)] transition-shadow duration-300">
                <div className="w-12 h-12 min-w-[48px] rounded-full bg-[#3297fc] flex items-center justify-center">
                  <CheckIcon />
                </div>
                <p className="font-[Jost] font-medium text-[#101828] text-[18px] md:text-[20px]">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   SECTION 8 — FUTURE DIRECTION
══════════════════════════════════════════ */
function FutureDirection() {
  const tags = ["Healthcare", "Finance", "Legal Systems", "Data Intelligence"];
  return (
    <div className="px-6 sm:px-10 lg:px-16 py-16 md:py-24">
      <div
        className="rounded-3xl px-8 sm:px-14 py-16 text-center"
        style={{
          background:
            "linear-gradient(165deg, rgba(50,151,252,0.65) 0%, rgba(26,95,184,0.65) 100%)",
        }}
      >
        <Reveal>
          <h2 className="font-[Jost] font-semibold text-[#101828] text-[40px] md:text-[48px] mb-10">
            Future Direction
          </h2>
          <p className="font-[Jost] font-semibold text-white text-[22px] md:text-[26px] leading-[1.55] max-w-[900px] mx-auto mb-6">
            Our focus is not just expansion. It is{" "}
            <span className="font-bold">ecosystem convergence</span>.
          </p>
          <p className="font-[Jost] text-white text-[18px] md:text-[20px] opacity-90 leading-[1.65] max-w-[800px] mx-auto mb-10">
            Where healthcare, finance, legal systems, and data intelligence begin to
            interact seamlessly under one unified structure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {tags.map((tag, i) => (
              <Reveal key={tag} delay={i * 80}>
                <span className="bg-white/20 text-white font-[Jost] text-[16px] px-6 py-3 rounded-full inline-block hover:bg-white/30 transition-colors duration-200">
                  {tag}
                </span>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   SECTION 9 — CLOSING
══════════════════════════════════════════ */
function Closing() {
  return (
    <section className="bg-[#101828] py-24 md:py-32 text-center px-6">
      <Reveal>
        <h1
          className="font-[Jost] font-bold text-white tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(40px,6vw,60px)" }}
        >
          CREDIPLE
        </h1>
        <div className="w-24 h-1 bg-[#3297fc] mx-auto mb-10" />
        <p className="font-[Jost] font-light text-white text-[20px] md:text-[24px] opacity-90 mb-6">
          Crediple is not a traditional holding company.
        </p>
        <p
          className="font-[Jost] font-semibold text-white leading-[1.45] max-w-[860px] mx-auto"
          style={{ fontSize: "clamp(20px,2.2vw,30px)" }}
        >
          It is a multi-domain system architecture designed to transform how
          industries operate.
        </p>
      </Reveal>
    </section>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function AboutUs() {
  return (
    <div className="w-full font-[Jost,sans-serif] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=DM+Sans:wght@400;700&display=swap');
        @keyframes fadeDown {
          from { opacity:0; transform:translateY(-18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        * { box-sizing: border-box; }
        body { margin:0; padding:0; }
      `}</style>
      <Hero />
      <Foundation />
      <Philosophy />
      <Structure />
      <Approach />
      <Different />
      <Commitment />
      <FutureDirection />
      <Closing />
    </div>
  );
}