import { Star, UserCheck, Users, Settings, ArrowRight } from "lucide-react";

const SOLUTIONS_CARDS = [
  {
    icon: Star, bg: "bg-rose-50", fg: "text-rose-500",
    title: "Flagship Projects", desc: "The plumbing works in Piramal North Tower, Mahalaxmi, Mumbai",
  },
  {
    icon: UserCheck, bg: "bg-violet-50", fg: "text-violet-500",
    title: "Proven Professionals", desc: "People with 15+ years of experience in the industry.",
  },
  {
    icon: Users, bg: "bg-amber-50", fg: "text-amber-500",
    title: "Powerful Workforce", desc: "Manpower strength of 200+ people",
  },
  {
    icon: Settings, bg: "bg-emerald-50", fg: "text-emerald-500",
    title: "Optimized Solutions", desc: "We add value engineering to the project",
  },
];

export default function Solutions() {
  return (
    <section className="bg-[#F5F6F8] py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-14">
          <h2 className="font-sans font-extrabold text-[32px] md:text-[44px] leading-[1.1] text-gray-900 max-w-xl">
            Crafting Unique Solutions <span className="text-[#00AEEF]">That Stand Out</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <p className="text-gray-600 max-w-sm text-[15px] leading-relaxed lg:hidden">
              We create innovative, tailored solutions that break the mold.
            </p>
            <div className="flex gap-3">
              <button className="bg-white border border-gray-200 rounded-none px-7 py-3.5 text-[14.5px] font-semibold text-gray-900 hover:bg-gray-50 transition-colors whitespace-nowrap">
                Explore our journey
              </button>
              <button className="bg-[#00AEEF] hover:bg-[#0098d1] text-white rounded-none px-7 py-3.5 text-[14.5px] font-semibold transition-colors whitespace-nowrap">
                View All Works
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SOLUTIONS_CARDS.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-none p-7 flex flex-col min-h-[240px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group/card"
            >
              <span className={`${c.bg} ${c.fg} rounded-none p-3.5 w-fit mb-8`}>
                <c.icon size={22} strokeWidth={2} />
              </span>
              <h3 className="font-sans font-bold text-[19px] text-gray-900 mb-2">{c.title}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-8">{c.desc}</p>
              <button className="mt-auto flex items-center gap-1.5 text-gray-900 font-bold text-[14.5px] group-hover/card:text-[#00AEEF] transition-colors w-fit">
                Learn More
                <ArrowRight size={16} strokeWidth={2} className="transition-transform group-hover/card:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}