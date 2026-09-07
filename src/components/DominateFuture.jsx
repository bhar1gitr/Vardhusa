import { useMemo } from "react";
import { PROJECTS } from "../data/projectsData";

export default function DominateFuture() {
  // Pick 8 random project images
  const galleryProjects = useMemo(() => {
    return [...PROJECTS]
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);
  }, []);

  return (
    <section className="bg-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-28">
        {/* Heading Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />
              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#8A8A8A]">
                Building What Comes Next
              </span>
            </div>

            <h2 className="font-sans font-extrabold text-[32px] md:text-[44px] leading-[1.1] text-[#202020]">
              Built to Lead, Engineered to
              <br />
              Dominate <span className="text-[#D6A900]">the Future</span>
            </h2>

            <p className="text-[#666666] max-w-xl mt-4 text-[15px] leading-relaxed">
              With a growing footprint, we operate across India,
              delivering high-quality services for several high-profile
              projects.
            </p>
          </div>

          <button
            type="button"
            className="
              shrink-0
              self-start
              lg:self-auto
              bg-[#F6C62E]
              hover:bg-[#202020]
              text-[#202020]
              hover:text-white
              px-7
              py-3.5
              text-[14.5px]
              font-bold
              transition-all
              duration-300
            "
          >
            Our Journey
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryProjects.map((project, index) => {
            const wideCard =
              index === 0 ||
              index === 5 ||
              index === 6 ||
              index === 7;

            return (
              <GalleryCard
                key={`${project.name}-${index}`}
                img={project.img}
                name={project.name}
                className={wideCard ? "lg:col-span-2" : ""}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ img, name, className = "" }) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        group
        bg-[#DADADA]
        min-h-[260px]
        md:min-h-[290px]
        ${className}
      `}
    >
      {/* Image */}
      <img
        src={img}
        alt={name || "Project"}
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
          from-black/60
          via-black/10
          to-transparent
        "
      />

      {/* Project Label */}
      <div className="absolute bottom-5 left-5 right-5 z-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-7 h-[3px] bg-[#F6C62E]" />
          <span className="text-[#F6C62E] text-[11px] uppercase tracking-[0.14em] font-bold">
            Project
          </span>
        </div>

        <h3 className="text-white font-bold text-[16px] md:text-[18px] leading-snug">
          {name}
        </h3>
      </div>

      {/* Yellow Bottom Accent */}
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
  );
}