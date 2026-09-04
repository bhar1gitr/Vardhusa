import { motion } from "framer-motion";
import {
  GraduationCap,
  Leaf,
  HeartPulse,
  Users2,
} from "lucide-react";

import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const INITIATIVES = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Supporting technical education and vocational training for the next generation of tradespeople.",
  },
  {
    icon: Leaf,
    title: "Environment",
    desc: "Reducing waste on site and advocating for energy-efficient MEP design on every project.",
  },
  {
    icon: HeartPulse,
    title: "Health & Safety",
    desc: "Site health camps and safety training that extend beyond our own workforce to the wider community.",
  },
  {
    icon: Users2,
    title: "Community",
    desc: "Partnering with local organizations near our project sites to fund infrastructure that benefits everyone.",
  },
];

const STATS = [
  {
    value: "12+",
    label: "CSR Programs Run",
  },
  {
    value: "5",
    label: "Communities Supported",
  },
  {
    value: "600+",
    label: "Lives Impacted",
  },
  {
    value: "100M+",
    label: "Safe Hours Achieved",
  },
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
      {/* ========================================
          PAGE HERO
      ======================================== */}
      <PageHero
        eyebrow="Corporate Social Responsibility"
        title="Giving Back to"
        highlight="the Society"
        subtitle="Sustainable growth means more than delivering projects — it means investing in the people and places around them."
        img="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80"
      />

      {/* ========================================
          STATS
      ======================================== */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {STATS.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.06}
              >
                <div
                  className="
                    relative
                    group
                    overflow-hidden

                    bg-[#F5F5F5]

                    border
                    border-[#E7E7E7]

                    px-5
                    md:px-6

                    py-7
                    md:py-8

                    text-center

                    min-h-[140px]

                    flex
                    flex-col
                    items-center
                    justify-center

                    hover:bg-white
                    hover:-translate-y-1
                    hover:shadow-[0_14px_35px_rgba(0,0,0,0.07)]

                    transition-all
                    duration-300
                  "
                >
                  <p
                    className="
                      font-sans
                      font-extrabold
                      text-3xl
                      md:text-4xl
                      text-[#D6A900]
                    "
                  >
                    {stat.value}
                  </p>

                  <p
                    className="
                      text-[#666666]
                      text-[13px]
                      md:text-[13.5px]
                      mt-2
                      font-semibold
                    "
                  >
                    {stat.label}
                  </p>

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[4px]
                      w-0
                      bg-[#F6C62E]
                      group-hover:w-full
                      transition-all
                      duration-500
                    "
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          INITIATIVES
      ======================================== */}
      <section className="bg-[#F5F5F5] py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />

              <span
                className="
                  text-[12px]
                  md:text-[13px]
                  uppercase
                  tracking-[0.16em]
                  font-bold
                  text-[#858585]
                "
              >
                Our Responsibility
              </span>
            </div>

            <h2
              className="
                font-sans
                font-extrabold
                text-[30px]
                md:text-[42px]
                leading-[1.1]
                text-[#202020]
                max-w-xl
                mb-4
              "
            >
              Where We{" "}
              <span className="text-[#D6A900]">
                Focus
              </span>
            </h2>

            <p
              className="
                text-[#666666]
                text-[15px]
                leading-relaxed
                max-w-xl
                mb-14
              "
            >
              Four areas where we believe an engineering company can make
              the most lasting difference.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INITIATIVES.map((initiative, index) => {
              const Icon = initiative.icon;

              return (
                <Reveal
                  key={initiative.title}
                  delay={index * 0.06}
                >
                  <div
                    className="
                      relative
                      group
                      overflow-hidden
                      bg-white
                      border
                      border-[#E7E7E7]
                      p-7
                      h-full
                      min-h-[270px]
                      flex
                      flex-col
                      hover:-translate-y-1
                      hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]
                      transition-all
                      duration-300
                    "
                  >
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
                      <Icon
                        size={22}
                        strokeWidth={2}
                      />
                    </span>

                    <h3
                      className="
                        font-sans
                        font-bold
                        text-[18px]
                        text-[#202020]
                        mb-3
                      "
                    >
                      {initiative.title}
                    </h3>

                    <p
                      className="
                        text-[#666666]
                        text-[14px]
                        leading-relaxed
                      "
                    >
                      {initiative.desc}
                    </p>

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[4px]
                        w-0
                        bg-[#F6C62E]
                        group-hover:w-full
                        transition-all
                        duration-500
                      "
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================
          GALLERY
      ======================================== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />

              <span
                className="
                  text-[12px]
                  md:text-[13px]
                  uppercase
                  tracking-[0.16em]
                  font-bold
                  text-[#858585]
                "
              >
                Making an Impact
              </span>
            </div>

            <h2
              className="
                font-sans
                font-extrabold
                text-[30px]
                md:text-[42px]
                leading-[1.1]
                text-[#202020]
                mb-14
              "
            >
              Moments From the{" "}
              <span className="text-[#D6A900]">
                Field
              </span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {GALLERY.map((img, index) => (
              <motion.div
                key={img}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  group
                  overflow-hidden
                  aspect-[3/4]
                  bg-[#E2E2E2]
                "
              >
                <img
                  src={img}
                  alt={`CSR activity ${index + 1}`}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Soft image overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/30
                    via-transparent
                    to-transparent
                  "
                />

                {/* Hover accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[4px]
                    w-0
                    bg-[#F6C62E]
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}