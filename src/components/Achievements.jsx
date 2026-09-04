import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  ShieldCheck,
  TimerReset,
} from "lucide-react";

const ACHIEVEMENTS_ITEMS = [
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
    scrollerRef.current?.scrollBy({
      left: dir * 380,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* ========================================
            TOP CONTENT
        ======================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          
          {/* Heading */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />

              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#858585]">
                Recognition & Excellence
              </span>
            </div>

            <h2 className="font-sans font-extrabold text-[32px] md:text-[44px] leading-[1.1] text-[#202020] max-w-md">
              Building a Legacy of
              <br />

              <span className="text-[#D6A900]">
                Achievements
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-[#666666] max-w-xl text-[15px] leading-relaxed">
            Our achievements reflect our commitment to excellence,
            innovation, and impact. Each milestone represents a step
            forward in delivering exceptional value, from award-winning
            projects to industry-leading innovations and client successes.
          </p>
        </div>

        {/* ========================================
            CARDS + NAVIGATION
        ======================================== */}
        <div className="relative">

          {/* Previous Button */}
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="
              hidden
              md:flex

              absolute
              -left-5
              top-1/2
              -translate-y-1/2
              z-20

              items-center
              justify-center

              w-11
              h-11

              bg-white
              text-[#202020]

              border
              border-[#E0E0E0]

              shadow-md

              hover:bg-[#F6C62E]
              hover:border-[#F6C62E]

              transition-all
              duration-300
            "
          >
            <ChevronLeft size={20} strokeWidth={2.2} />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Next"
            className="
              hidden
              md:flex

              absolute
              -right-5
              top-1/2
              -translate-y-1/2
              z-20

              items-center
              justify-center

              w-11
              h-11

              bg-[#F6C62E]
              text-[#202020]

              border
              border-[#F6C62E]

              shadow-md

              hover:bg-[#202020]
              hover:border-[#202020]
              hover:text-white

              transition-all
              duration-300
            "
          >
            <ChevronRight size={20} strokeWidth={2.2} />
          </button>

          {/* ========================================
              HORIZONTAL SCROLLER
          ======================================== */}
          <div
            ref={scrollerRef}
            className="
              flex
              gap-6
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              pb-3
              [&::-webkit-scrollbar]:hidden
            "
            style={{ scrollbarWidth: "none" }}
          >
            {ACHIEVEMENTS_ITEMS.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    relative
                    group

                    snap-start
                    shrink-0

                    w-[300px]
                    sm:w-[320px]
                    md:w-[360px]

                    min-h-[330px]

                    bg-[#F5F5F5]

                    border
                    border-[#EBEBEB]

                    p-7

                    flex
                    flex-col

                    overflow-hidden

                    hover:bg-white
                    hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]

                    transition-all
                    duration-300
                  "
                >

                  {/* Top Yellow Accent */}
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

                  {/* Icon + Date */}
                  <div className="flex items-center justify-between mb-8">

                    {/* Icon */}
                    <span
                      className="
                        w-12
                        h-12

                        flex
                        items-center
                        justify-center

                        bg-[#F6C62E]
                        text-[#202020]

                        transition-all
                        duration-300

                        group-hover:bg-[#202020]
                        group-hover:text-[#F6C62E]
                      "
                    >
                      <Icon
                        size={21}
                        strokeWidth={2}
                      />
                    </span>

                    {/* Date */}
                    <span
                      className="
                        bg-white
                        text-[#777777]

                        border
                        border-[#E8E8E8]

                        text-[12px]
                        font-semibold

                        px-3.5
                        py-1.5
                      "
                    >
                      {item.date}
                    </span>
                  </div>

                  {/* Award Tag */}
                  <p
                    className="
                      text-[#C99D00]
                      font-extrabold
                      uppercase
                      tracking-[0.08em]
                      text-[12px]
                      mb-3
                    "
                  >
                    {item.tag}
                  </p>

                  {/* Title */}
                  <h3
                    className="
                      font-sans
                      font-bold

                      text-[19px]
                      md:text-[20px]

                      leading-[1.4]

                      text-[#202020]

                      mb-8
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Bottom */}
                  <div className="mt-auto">

                    {/* Divider */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-[2px] bg-[#F6C62E]" />
                      <span className="flex-1 h-px bg-[#DDDDDD]" />
                    </div>

                    {/* Location */}
                    <p
                      className="
                        text-[#777777]
                        text-[13.5px]
                        font-semibold
                      "
                    >
                      {item.place}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}