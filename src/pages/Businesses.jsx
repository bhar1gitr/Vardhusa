import { motion } from "framer-motion";
import {
  Wrench,
  FlameKindling,
  Droplets,
  Wind,
  Zap,
  MonitorCog,
  Compass,
  HardHat,
  ArrowRight,
} from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Testimonials from "../components/Testimonials";

const SERVICES = [
  {
    icon: Wrench,
    bg: "bg-orange-50",
    fg: "text-orange-500",
    title: "Turnkey Solution",
    desc: "Single point of accountability from design through handover, so every trade stays coordinated on one schedule.",
  },
  {
    icon: FlameKindling,
    bg: "bg-rose-50",
    fg: "text-rose-500",
    title: "Fire Detection And Protection System",
    desc: "Fire detection, suppression, and life-safety systems designed to protect people and property at every stage.",
  },
  {
    icon: Droplets,
    bg: "bg-cyan-50",
    fg: "text-cyan-600",
    title: "Plumbing And Sanitation System",
    desc: "Water supply, drainage, and sanitary systems executed with precision across residential and commercial builds.",
  },
  {
    icon: Wind,
    bg: "bg-blue-50",
    fg: "text-blue-600",
    title: "HVAC System",
    desc: "Heating, ventilation, and air-conditioning systems engineered for comfort, efficiency, and long service life.",
  },
  {
    icon: Zap,
    bg: "bg-amber-50",
    fg: "text-amber-500",
    title: "Electrical System",
    desc: "Power distribution, lighting, and low-voltage systems built to code with an eye on future scalability.",
  },
  {
    icon: MonitorCog,
    bg: "bg-indigo-50",
    fg: "text-indigo-500",
    title: "BMS",
    desc: "Building Management Systems that monitor and control mechanical and electrical equipment from a single dashboard.",
  },
  {
    icon: Compass,
    bg: "bg-sky-50",
    fg: "text-sky-600",
    title: "Design And Engineering",
    desc: "In-house design and engineering teams conversant with the latest industry practices and standards.",
  },
  {
    icon: HardHat,
    bg: "bg-emerald-50",
    fg: "text-emerald-500",
    title: "Facility Management",
    desc: "Ongoing maintenance and operations support that keeps every system performing long after handover.",
  },
];

export default function Businesses() {
  return (
    <>
      <PageHero
        eyebrow="Our Businesses"
        title="Comprehensive MEP Services,"
        highlight="Under One Roof"
        subtitle="From first sketch to final commissioning, we design, engineer, and install the systems that keep buildings running."
        img="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Services grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal>
            <h2 className="font-sans font-extrabold text-[30px] md:text-[40px] leading-[1.1] text-[#0B0E1A] max-w-xl mb-4">
              What We <span className="text-[#00AEEF]">Deliver</span>
            </h2>
            <p className="text-gray-500 text-[15px] max-w-xl mb-14">
              Eight disciplines, one accountable team — so nothing falls through the cracks
              between trades.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="bg-[#F8F9FA] rounded-3xl p-7 h-full flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <span className={`${s.bg} ${s.fg} rounded-2xl p-3.5 w-fit mb-8 shadow-sm`}>
                    <s.icon size={22} strokeWidth={2} />
                  </span>
                  <h3 className="font-sans font-bold text-[17px] text-[#0B0E1A] mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-[13.5px] leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach split */}
      <section className="bg-[#F8F9FA] py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <h2 className="font-sans font-extrabold text-[30px] sm:text-[40px] leading-[1.1] text-[#0B0E1A] mb-5">
              One Team, <span className="text-[#00AEEF]">Every Trade</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg mb-4">
              Most projects juggle separate contractors for mechanical, electrical, plumbing, and
              fire systems — and the coordination gaps between them cost time and money. Vardhusa
              runs all four under one project team, one schedule, and one point of accountability.
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg mb-8">
              That means fewer clashes on site, faster approvals, and a single number to call when
              something needs to change.
            </p>
            <button className="flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0098d1] text-white rounded-full pl-6 pr-2 py-2.5 text-[14.5px] font-semibold transition-colors">
              Talk to Our Team
              <span className="bg-white/20 rounded-full p-2">
                <ArrowRight size={16} />
              </span>
            </button>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[420px] shadow-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
              alt="Engineers coordinating on site"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}