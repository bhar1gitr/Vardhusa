import { motion } from "framer-motion";
import { GraduationCap, Leaf, HeartPulse, Users2 } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const INITIATIVES = [
  {
    icon: GraduationCap,
    bg: "bg-blue-50",
    fg: "text-blue-600",
    title: "Education",
    desc: "Supporting technical education and vocational training for the next generation of tradespeople.",
  },
  {
    icon: Leaf,
    bg: "bg-emerald-50",
    fg: "text-emerald-500",
    title: "Environment",
    desc: "Reducing waste on site and advocating for energy-efficient MEP design on every project.",
  },
  {
    icon: HeartPulse,
    bg: "bg-rose-50",
    fg: "text-rose-500",
    title: "Health & Safety",
    desc: "Site health camps and safety training that extend beyond our own workforce to the wider community.",
  },
  {
    icon: Users2,
    bg: "bg-amber-50",
    fg: "text-amber-500",
    title: "Community",
    desc: "Partnering with local organizations near our project sites to fund infrastructure that benefits everyone.",
  },
];

const STATS = [
  { value: "12+", label: "CSR Programs Run" },
  { value: "5", label: "Communities Supported" },
  { value: "600+", label: "Lives Impacted" },
  { value: "100M+", label: "Safe Hours Achieved" },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1497436072909-f5e4be1713f8?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80",
];

export default function CSR() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Social Responsibility"
        title="Giving Back to"
        highlight="the Society"
        subtitle="Sustainable growth means more than delivering projects — it means investing in the people and places around them."
        img="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Stats */}
      <section className="container-wrap py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="bg-mist rounded-2xl px-6 py-7 text-center">
                <p className="font-display font-extrabold text-3xl md:text-4xl text-ink">{s.value}</p>
                <p className="text-ink/55 text-[13.5px] mt-1.5 font-medium">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-12 md:py-20">
        <div className="container-wrap">
          <Reveal>
            <h2 className="font-display font-extrabold text-[30px] md:text-[40px] leading-[1.1] text-ink max-w-xl mb-4">
              Where We <span className="text-brand-600">Focus</span>
            </h2>
            <p className="text-ink/50 text-[15px] max-w-xl mb-14">
              Four areas where we believe an engineering company can make the most lasting
              difference.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INITIATIVES.map((v, i) => (
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

      {/* Gallery */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container-wrap">
          <Reveal>
            <h2 className="font-display font-extrabold text-[30px] md:text-[40px] leading-[1.1] text-ink mb-14">
              Moments From the <span className="text-brand-600">Field</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {GALLERY.map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl overflow-hidden aspect-[3/4]"
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
