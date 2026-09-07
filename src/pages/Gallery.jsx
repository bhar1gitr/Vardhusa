import { useState } from "react";
import { X, MapPin } from "lucide-react";

import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { PROJECTS } from "../data/projectsData";

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      {/* ========================================
          PAGE HERO
      ======================================== */}
      <PageHero
        eyebrow="Project Gallery"
        title="A Closer Look at"
        highlight="What We Build"
        subtitle="Explore selected projects delivered across residential, commercial, industrial and infrastructure sectors."
        img={
          PROJECTS?.[0]?.img ||
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
        }
      />

      {/* ========================================
          GALLERY INTRO
      ======================================== */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal>
            <div className="text-left max-w-[720px]">
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
                  Delivered With Precision
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
                Projects That Reflect{" "}
                <span className="text-[#D6A900]">
                  Our Capability
                </span>
              </h2>

              <p
                className="
                  text-[#666666]
                  text-[15px]
                  leading-[1.8]
                  max-w-[650px]
                  mt-4
                "
              >
                Every project represents our focus on engineering quality,
                execution discipline and dependable project delivery.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================
          PROJECT GALLERY
      ======================================== */}
      <section className="bg-[#F5F5F5] py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5
            "
          >
            {PROJECTS.map((project, index) => (
              <Reveal
                key={`${project.name}-${index}`}
                delay={index * 0.04}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className={`
                    relative
                    group
                    overflow-hidden
                    w-full
                    text-left
                    bg-[#202020]

                    ${
                      index === 0 || index === 7
                        ? "lg:col-span-2"
                        : ""
                    }

                    min-h-[300px]
                    md:min-h-[340px]
                  `}
                >
                  {/* Image */}
                  <img
                    src={project.img}
                    alt={project.name}
                    loading="lazy"
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/90
                      via-black/25
                      to-transparent
                    "
                  />

                  {/* Number */}
                  <span
                    className="
                      absolute
                      top-5
                      right-5
                      z-10
                      text-white/60
                      text-[11px]
                      font-bold
                      tracking-[0.15em]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      bottom-0
                      z-10
                      p-6
                      md:p-7
                    "
                  >
                    <div
                      className="
                        w-9
                        h-[3px]
                        bg-[#F6C62E]
                        mb-4
                        group-hover:w-16
                        transition-all
                        duration-500
                      "
                    />

                    <span
                      className="
                        text-[#F6C62E]
                        text-[11px]
                        uppercase
                        tracking-[0.14em]
                        font-bold
                      "
                    >
                      {project.category}
                    </span>

                    <h3
                      className="
                        font-sans
                        font-bold
                        text-white
                        text-[19px]
                        md:text-[21px]
                        leading-snug
                        mt-2
                      "
                    >
                      {project.name}
                    </h3>

                    {project.location && (
                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                          text-[#D5D5D5]
                          text-[13px]
                          mt-3
                        "
                      >
                        <MapPin
                          size={14}
                          className="text-[#F6C62E]"
                        />

                        {project.location}
                      </div>
                    )}
                  </div>

                  {/* Hover bottom line */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      z-20
                      h-[4px]
                      w-0
                      bg-[#F6C62E]
                      group-hover:w-full
                      transition-all
                      duration-500
                    "
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          DARK CTA
      ======================================== */}
      <section className="bg-[#202020] py-16 md:py-20">
        <div
          className="
            max-w-[1440px]
            mx-auto
            px-4
            sm:px-6
            lg:px-12

            flex
            flex-col
            lg:flex-row
            lg:items-center
            justify-between
            gap-8
          "
        >
          <Reveal>
            <div className="max-w-[700px]">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[3px] bg-[#F6C62E]" />

                <span
                  className="
                    text-[#F6C62E]
                    text-[12px]
                    uppercase
                    tracking-[0.16em]
                    font-bold
                  "
                >
                  Built With Responsibility
                </span>
              </div>

              <h2
                className="
                  text-white
                  font-extrabold
                  text-[30px]
                  md:text-[40px]
                  leading-[1.1]
                "
              >
                Engineering That Moves From{" "}
                <span className="text-[#F6C62E]">
                  Plan to Performance
                </span>
              </h2>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================
          IMAGE MODAL
      ======================================== */}
      {selectedProject && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-black/90
            flex
            items-center
            justify-center
            p-4
            md:p-10
          "
          onClick={() => setSelectedProject(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedProject(null)}
            className="
              absolute
              top-5
              right-5
              md:top-8
              md:right-8
              w-11
              h-11
              flex
              items-center
              justify-center
              bg-[#F6C62E]
              text-[#202020]
              z-20
            "
          >
            <X size={22} />
          </button>

          <div
            className="
              relative
              max-w-[1100px]
              w-full
              bg-[#202020]
              overflow-hidden
            "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.img}
              alt={selectedProject.name}
              className="
                w-full
                max-h-[70vh]
                object-contain
                bg-black
              "
            />

            <div className="p-5 md:p-7">
              <div className="w-9 h-[3px] bg-[#F6C62E] mb-4" />

              <h3 className="text-white font-bold text-[21px] md:text-[26px]">
                {selectedProject.name}
              </h3>

              {selectedProject.location && (
                <p className="text-[#F6C62E] text-[13px] font-semibold mt-2">
                  {selectedProject.location}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}