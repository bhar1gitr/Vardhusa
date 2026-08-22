import { useRef } from "react";
import { ChevronLeft, ChevronRight, Award, ShieldCheck, TimerReset } from "lucide-react";

const ITEMS = [
  {
    icon: Award,
    tag: "Winner",
    date: "21 March 2022",
    title: "Recognized as the Best Contractor of the year 2022",
    place: "Mumbai, India",
  },
  {
    icon: ShieldCheck,
    tag: "Runner Up",
    date: "03 Apr 2024",
    title: "Received an award as the runner-up for Safety",
    place: "Mumbai, India",
  },
  {
    icon: TimerReset,
    tag: "Winner",
    date: "22 Sept 2023",
    title: "Award for achieving 100 million safe hours",
    place: "Mumbai, India",
  },
  {
    icon: Award,
    tag: "Winner",
    date: "12 Jan 2025",
    title: "Excellence Award for MEP Project Delivery",
    place: "Mumbai, India",
  },
];

export default function Achievements() {
  const scrollerRef = useRef(null);

  const scroll = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container-wrap">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] leading-[1.1] text-ink max-w-md">
            Building a Legacy of
            <br />
            <span className="text-brand-600">Achievements</span>
          </h2>
          <p className="text-ink/55 max-w-xl text-[15px] leading-relaxed">
            Our achievements reflect our commitment to excellence, innovation, and impact. Each
            milestone represents a step forward in delivering exceptional value, from
            award-winning projects to industry-leading innovations and client successes.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 rounded-full bg-white border border-ink/10 shadow-md hover:bg-mist transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 rounded-full bg-white border border-ink/10 shadow-md hover:bg-mist transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {ITEMS.map((item) => (
              <div
                key={item.title}
                className="snap-start shrink-0 w-[320px] md:w-[360px] bg-mist rounded-3xl p-7 flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="bg-white text-brand-600 rounded-xl p-3">
                    <item.icon size={20} strokeWidth={2} />
                  </span>
                  <span className="bg-white text-ink/60 text-[12.5px] font-medium rounded-full px-3.5 py-1.5">
                    {item.date}
                  </span>
                </div>
                <p className="text-brand-600 font-semibold text-[14px] mb-2">{item.tag}</p>
                <h3 className="font-display font-bold text-[20px] leading-snug text-ink mb-8">
                  {item.title}
                </h3>
                <div className="mt-auto">
                  <div className="text-ink/30 text-[13px] tracking-[0.3em] mb-3">∿∿∿</div>
                  <p className="text-ink/45 text-[13.5px] font-medium">{item.place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
