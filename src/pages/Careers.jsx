import { motion } from "framer-motion";
import { Sparkles, Users, ShieldCheck, TrendingUp, ArrowRight, MapPin, Clock } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const VALUES = [
  {
    icon: Users,
    bg: "bg-violet-50",
    fg: "text-violet-500",
    title: "Ownership Culture",
    desc: "Every individual working here is treated as an owner of the company, with the responsibility and trust that comes with it.",
  },
  {
    icon: TrendingUp,
    bg: "bg-emerald-50",
    fg: "text-emerald-500",
    title: "Room to Grow",
    desc: "We invest in people early, pairing new engineers with 15+ year veterans on live projects.",
  },
  {
    icon: ShieldCheck,
    bg: "bg-blue-50",
    fg: "text-blue-600",
    title: "Safety First",
    desc: "100 million+ safe hours and counting — safety isn't a policy here, it's how we work.",
  },
  {
    icon: Sparkles,
    bg: "bg-amber-50",
    fg: "text-amber-500",
    title: "Work-Life Balance",
    desc: "We prioritize the well-being of our people, both on site and off it.",
  },
];

const ROLES = [
  { title: "Senior MEP Engineer", dept: "Mechanical", location: "Mumbai, India", type: "Full-time" },
  { title: "Site Supervisor — Plumbing", dept: "Plumbing", location: "Thane, India", type: "Full-time" },
  { title: "Electrical Design Engineer", dept: "Electrical", location: "Mumbai, India", type: "Full-time" },
  { title: "Firefighting Systems Technician", dept: "Firefighting", location: "Navi Mumbai, India", type: "Full-time" },
  { title: "Project Coordinator", dept: "Operations", location: "Mumbai, India", type: "Full-time" },
  { title: "QA/QC Engineer", dept: "Quality", location: "Pune, India", type: "Full-time" },
];

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Career"
        highlight="With Us"
        subtitle="We're growing across Maharashtra and looking for engineers who want ownership over real work, from day one."
        img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container-wrap">
          <Reveal>
            <h2 className="font-display font-extrabold text-[30px] md:text-[40px] leading-[1.1] text-ink max-w-xl mb-14">
              Why People <span className="text-brand-600">Stay</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="bg-mist rounded-3xl p-7 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className={`${v.bg} ${v.fg} rounded-2xl p-3.5 w-fit mb-8`}>
                    <v.icon size={22} strokeWidth={2} />
                  </span>
                  <h3 className="font-display font-bold text-[18px] text-ink mb-2">{v.title}</h3>
                  <p className="text-ink/50 text-[14px] leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container-wrap">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <h2 className="font-display font-extrabold text-[30px] md:text-[40px] leading-[1.1] text-ink">
                Open <span className="text-brand-600">Positions</span>
              </h2>
              <p className="text-ink/50 text-[15px]">{ROLES.length} roles open right now</p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-3">
            {ROLES.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                  <div>
                    <span className="text-brand-600 text-[13px] font-semibold">{r.dept}</span>
                    <h3 className="font-display font-bold text-[18px] text-ink mt-1">{r.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-ink/45 text-[13.5px]">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {r.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} /> {r.type}
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white rounded-full pl-6 pr-2 py-2.5 text-[14px] font-semibold transition-colors shrink-0 w-fit">
                    Apply Now
                    <span className="bg-white/15 rounded-full p-2">
                      <ArrowRight size={15} />
                    </span>
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20 md:py-24">
        <div className="container-wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-navy-950 rounded-[28px] px-8 sm:px-14 py-14 flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-center lg:text-left"
          >
            <div>
              <h2 className="font-display font-extrabold text-white text-[26px] sm:text-[32px] leading-[1.15]">
                Don't see the right role?
              </h2>
              <p className="text-white/60 text-[15px] mt-2 max-w-md">
                Send us your resume anyway — we're always looking for good engineers.
              </p>
            </div>
            <button className="mx-auto lg:mx-0 flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white rounded-full pl-6 pr-2 py-2.5 text-[14.5px] font-semibold transition-colors shrink-0">
              Send Your Resume
              <span className="bg-white/15 rounded-full p-2">
                <ArrowRight size={16} />
              </span>
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
