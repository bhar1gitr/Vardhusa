import { PROJECTS } from "../data/projectsData";

export default function DominateFuture() {
  // Only these projects will be shown on the homepage
  // Fixed/static order — no random projects
  const selectedProjectNames = [
    "Leh Airport",
    "Conscient One",
    "Time Arcade",
    "Indospace Badli",
    "Aisat Jewar Airport",
    "Birla Navya",
    "TCS Pune",
    "Bounce Gurgaon",
    "M3M Capital",
  ];

  const galleryProjects = selectedProjectNames
    .map((projectName) =>
      PROJECTS.find((project) => project.name === projectName)
    )
    .filter(Boolean);

  return (
    <section className="bg-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 md:py-28">
        
        {/* ================= HEADING ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />

              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#8A8A8A]">
                Projects Delivered
              </span>
            </div>
          </div>
        </div>

        {/* ================= PROJECT GALLERY ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryProjects.map((project, index) => {
            
            // Larger cards for selected positions
            const wideCard =
              index === 0 ||
              index === 5 ||
              index === 8;

            return (
              <GalleryCard
                key={project.name}
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


/* =========================================================
   GALLERY CARD
========================================================= */

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
      
      {/* ================= IMAGE ================= */}
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

      {/* ================= DARK OVERLAY ================= */}
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

      {/* ================= PROJECT NAME ================= */}
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

      {/* ================= YELLOW HOVER LINE ================= */}
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