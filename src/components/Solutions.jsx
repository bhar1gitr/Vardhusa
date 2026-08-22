import { Star, UserCheck, Users, Settings } from "lucide-react";

const CARDS = [
  {
    icon: Star,
    bg: "bg-rose-50",
    fg: "text-rose-500",
    title: "Flagship Projects",
    desc: "The plumbing works in Piramal North Tower, Mahalaxmi, Mumbai",
  },
  {
    icon: UserCheck,
    bg: "bg-violet-50",
    fg: "text-violet-500",
    title: "Proven Professionals",
    desc: "People with 15+ years of experience in the industry.",
  },
  {
    icon: Users,
    bg: "bg-amber-50",
    fg: "text-amber-500",
    title: "Powerful Workforce",
    desc: "Manpower strength of 200+ people",
  },
  {
    icon: Settings,
    bg: "bg-emerald-50",
    fg: "text-emerald-500",
    title: "Optimized Solutions",
    desc: "We add value engineering to the project",
  },
];

export default function Solutions() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="container-wrap">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-14">
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] leading-[1.1] text-ink max-w-xl">
            Crafting Unique Solutions <span className="text-brand-600">That Stand Out</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <p className="text-ink/55 max-w-sm text-[15px] leading-relaxed lg:hidden">
              We create innovative, tailored solutions that break the mold.
            </p>
            <div className="flex gap-3">
              <button className="bg-white border border-ink/10 rounded-full px-6 py-3 text-[14.5px] font-semibold text-ink hover:bg-ink/[0.03] transition-colors whitespace-nowrap">
                Explore our journey
              </button>
              <button className="bg-navy-800 hover:bg-navy-700 text-white rounded-full px-6 py-3 text-[14.5px] font-semibold transition-colors whitespace-nowrap">
                View All Works
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-3xl p-7 flex flex-col min-h-[240px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className={`${c.bg} ${c.fg} rounded-2xl p-3.5 w-fit mb-8`}>
                <c.icon size={22} strokeWidth={2} />
              </span>
              <h3 className="font-display font-bold text-[19px] text-ink mb-2">{c.title}</h3>
              <p className="text-ink/50 text-[14px] leading-relaxed mb-8">{c.desc}</p>
              <button className="mt-auto flex items-center gap-2 text-ink font-semibold text-[14.5px] group w-fit">
                Learn More
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
