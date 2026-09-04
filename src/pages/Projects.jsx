import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { CATEGORIES, PROJECTS, STATS } from "../data/projectsData";

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === active);

  return (
    <>
      {/* ========================================
          PAGE HERO
      ======================================== */}
      <PageHero
        title="Projects That Define"
        highlight="Our Expertise"
        subtitle="A growing portfolio of residential towers, commercial developments, and infrastructure works across regions."
        img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
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
          PROJECTS SECTION
      ======================================== */}
      <section className="bg-[#F5F5F5] py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

          {/* Heading */}
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
              <div>
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
                    Our Portfolio
                  </span>
                </div>

                <h2
                  className="
                    font-sans
                    font-extrabold

                    text-[32px]
                    md:text-[42px]

                    leading-[1.1]

                    text-[#202020]
                  "
                >
                  Explore Our{" "}
                  <span className="text-[#D6A900]">
                    Projects
                  </span>
                </h2>

                <p
                  className="
                    text-[#666666]
                    text-[15px]
                    leading-relaxed

                    max-w-xl

                    mt-4
                  "
                >
                  Explore projects delivered across multiple sectors,
                  locations, and engineering disciplines.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ========================================
              FILTER BUTTONS
          ======================================== */}
          <Reveal className="flex flex-wrap gap-2.5 mb-10">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`
                  px-6
                  py-2.5

                  text-[14px]
                  font-semibold

                  border

                  transition-all
                  duration-300

                  ${
                    active === category
                      ? `
                        bg-[#F6C62E]
                        text-[#202020]
                        border-[#F6C62E]
                        shadow-[0_7px_18px_rgba(0,0,0,0.08)]
                      `
                      : `
                        bg-white
                        text-[#666666]
                        border-[#E0E0E0]
                        hover:text-[#202020]
                        hover:border-[#F6C62E]
                        hover:bg-[#FFFBEF]
                      `
                  }
                `}
              >
                {category}
              </button>
            ))}
          </Reveal>

          {/* ========================================
              PROJECT GRID
          ======================================== */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    relative
                    group

                    overflow-hidden

                    bg-white

                    border
                    border-[#E5E5E5]

                    hover:-translate-y-1
                    hover:shadow-[0_18px_45px_rgba(0,0,0,0.09)]

                    transition-all
                    duration-300
                  "
                >
                  {/* Image */}
                  <div className="relative h-56 md:h-60 overflow-hidden bg-[#DDDDDD]">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="
                        w-full
                        h-full
                        object-cover

                        transition-transform
                        duration-700

                        group-hover:scale-105
                      "
                    />

                    {/* Image overlay */}
                    <div
                      className="
                        absolute
                        inset-0

                        bg-gradient-to-t
                        from-black/35
                        via-black/5
                        to-transparent
                      "
                    />

                    {/* Category */}
                    <span
                      className="
                        absolute
                        top-4
                        left-4

                        bg-[#F6C62E]
                        text-[#202020]

                        text-[12px]
                        md:text-[12.5px]

                        font-bold

                        px-4
                        py-2

                        shadow-sm
                      "
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="
                        font-sans
                        font-bold

                        text-[18px]
                        md:text-[19px]

                        text-[#202020]

                        leading-snug

                        mb-2

                        group-hover:text-[#D6A900]

                        transition-colors
                        duration-300
                      "
                    >
                      {project.name}
                    </h3>

                    <p
                      className="
                        flex
                        items-center
                        gap-1.5

                        text-[#777777]

                        text-[13.5px]

                        mb-5
                      "
                    >
                      <MapPin
                        size={14}
                        className="text-[#D6A900] shrink-0"
                      />

                      {project.location}
                    </p>

                    {/* Divider */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-7 h-[2px] bg-[#F6C62E]" />

                      <span className="flex-1 h-px bg-[#E3E3E3]" />
                    </div>

                    {/* Scope */}
                    <p
                      className="
                        text-[#C99D00]

                        text-[13px]
                        md:text-[13.5px]

                        font-bold
                      "
                    >
                      {project.scope}
                    </p>
                  </div>

                  {/* Bottom hover line */}
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
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-[#777777] text-[15px]">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}