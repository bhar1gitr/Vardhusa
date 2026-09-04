import {
  Star,
  UserCheck,
  Users,
  Settings,
  ArrowRight,
} from "lucide-react";

const SOLUTIONS_CARDS = [
  {
    icon: Star,
    title: "Flagship Projects",
    desc: "The plumbing works in Piramal North Tower, Mahalaxmi, Mumbai",
  },
  {
    icon: UserCheck,
    title: "Proven Professionals",
    desc: "People with 15+ years of experience in the industry.",
  },
  {
    icon: Users,
    title: "Powerful Workforce",
    desc: "Manpower strength of 200+ people",
  },
  {
    icon: Settings,
    title: "Optimized Solutions",
    desc: "We add value engineering to the project",
  },
];

export default function Solutions() {
  return (
    <section className="bg-[#F5F5F5] py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          
          <div>
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />

              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#858585]">
                What Sets Us Apart
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-sans font-extrabold text-[32px] md:text-[44px] leading-[1.1] text-[#202020] max-w-xl">
              Crafting Unique Solutions
              <br />
              <span className="text-[#D6A900]">
                That Stand Out
              </span>
            </h2>

            {/* Mobile Description */}
            <p className="text-[#666666] max-w-md mt-4 text-[15px] leading-relaxed lg:hidden">
              We create innovative, tailored solutions that break the mold
              and deliver lasting value.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            
            {/* Secondary Button */}
            <button
              type="button"
              className="
                bg-white
                border
                border-[#D8D8D8]
                px-7
                py-3.5
                text-[14px]
                font-semibold
                text-[#303030]
                hover:border-[#F6C62E]
                hover:bg-[#FFFBEF]
                transition-all
                duration-300
                whitespace-nowrap
              "
            >
              Explore our journey
            </button>

            {/* Primary Button */}
            <button
              type="button"
              className="
                bg-[#F6C62E]
                border
                border-[#F6C62E]
                text-[#202020]
                px-7
                py-3.5
                text-[14px]
                font-bold
                hover:bg-[#202020]
                hover:border-[#202020]
                hover:text-white
                transition-all
                duration-300
                whitespace-nowrap
              "
            >
              View All Works
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SOLUTIONS_CARDS.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="
                  relative
                  overflow-hidden
                  bg-white
                  border
                  border-[#E7E7E7]
                  p-7
                  flex
                  flex-col
                  min-h-[260px]
                  group
                  hover:-translate-y-1
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-300
                "
              >
                {/* Top Hover Accent */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-[4px]
                    w-0
                    bg-[#F6C62E]
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />

                {/* Icon */}
                <span
                  className="
                    w-12
                    h-12
                    flex
                    items-center
                    justify-center
                    bg-[#FFF7D6]
                    text-[#D6A900]
                    mb-8
                    group-hover:bg-[#F6C62E]
                    group-hover:text-[#202020]
                    transition-all
                    duration-300
                  "
                >
                  <Icon size={22} strokeWidth={2} />
                </span>

                {/* Title */}
                <h3 className="font-sans font-bold text-[19px] text-[#202020] mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[#666666] text-[14px] leading-relaxed mb-8">
                  {card.desc}
                </p>

                {/* Learn More */}
                <button
                  type="button"
                  className="
                    mt-auto
                    flex
                    items-center
                    gap-2
                    text-[#303030]
                    font-bold
                    text-[14px]
                    w-fit
                    group-hover:text-[#D6A900]
                    transition-colors
                    duration-300
                  "
                >
                  Learn More

                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>

                {/* Bottom Accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    bg-[#F6C62E]
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}