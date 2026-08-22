import { motion } from "framer-motion";
import { Wind, Zap, Droplets, FlameKindling, Wrench, Gauge, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const SERVICES = [
  {
    icon: Wind,
    bg: "bg-blue-50",
    fg: "text-blue-600",
    title: "Mechanical (HVAC)",
    desc: "End-to-end design and installation of heating, ventilation, and air-conditioning systems engineered for comfort and efficiency.",
  },
  {
    icon: Zap,
    bg: "bg-amber-50",
    fg: "text-amber-500",
    title: "Electrical",
    desc: "Power distribution, lighting, and low-voltage systems built to code with a focus on reliability and future scalability.",
  },
  {
    icon: Droplets,
    bg: "bg-cyan-50",
    fg: "text-cyan-600",
    title: "Plumbing",
    desc: "Water supply, drainage, and sanitary systems executed with precision across residential and commercial developments.",
  },
  {
    icon: FlameKindling,
    bg: "bg-rose-50",
    fg: "text-rose-500",
    title: "Firefighting",
    desc: "Fire detection, suppression, and life-safety systems designed to protect people and property at every stage of a build.",
  },
  {
    icon: Wrench,
    bg: "bg-violet-50",
    fg: "text-violet-500",
    title: "Value Engineering",
    desc: "We review every design decision for cost, constructability, and performance before a single pipe is laid.",
  },
  {
    icon: Gauge,
    bg: "bg-emerald-50",
    fg: "text-emerald-500",
    title: "Facility Commissioning",
    desc: "Rigorous testing and handover processes that make sure every system performs exactly as designed, from day one.",
  },
];

export default function Businesses() {
  return (
    <>
      <PageHero
        eyebrow="Our Businesses"
        title="Comprehensive MEP Services,"
        highlight="Under One Roof"
        subtitle="From first sketch to final commissioning, we design, engineer, and install the systems that keep buildings running — mechanical, electrical, plumbing, and fire safety."
        img="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Services grid */}
      <section className="py-20 md:py-28">
        <div className="container-wrap">
          <Reveal>
            <h2 className="font-display font-extrabold text-[30px] md:text-[40px] leading-[1.1] text-ink max-w-xl mb-4">
              What We <span className="text-brand-600">Deliver</span>
            </h2>
            <p className="text-ink/50 text-[15px] max-w-xl mb-14">
              Six disciplines, one accountable team — so nothing falls through the cracks between
              trades.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="bg-mist rounded-3xl p-7 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className={`${s.bg} ${s.fg} rounded-2xl p-3.5 w-fit mb-8`}>
                    <s.icon size={22} strokeWidth={2} />
                  </span>
                  <h3 className="font-display font-bold text-[19px] text-ink mb-2">{s.title}</h3>
                  <p className="text-ink/50 text-[14px] leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach split */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container-wrap grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <h2 className="font-display font-extrabold text-[30px] sm:text-[40px] leading-[1.1] text-ink mb-5">
              One Team, <span className="text-brand-600">Every Trade</span>
            </h2>
            <p className="text-ink/50 text-[15px] leading-relaxed max-w-lg mb-4">
              Most projects juggle separate contractors for mechanical, electrical, plumbing, and
              fire systems — and the coordination gaps between them cost time and money. Chazown
              runs all four under one project team, one schedule, and one point of accountability.
            </p>
            <p className="text-ink/50 text-[15px] leading-relaxed max-w-lg mb-8">
              That means fewer clashes on site, faster approvals, and a single number to call when
              something needs to change.
            </p>
            <button className="flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white rounded-full pl-6 pr-2 py-2.5 text-[14.5px] font-semibold transition-colors">
              Talk to Our Team
              <span className="bg-white/15 rounded-full p-2">
                <ArrowRight size={16} />
              </span>
            </button>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[420px]"
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
              alt="Engineers coordinating on site"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
