import { useMemo, useState } from "react";
import { X, MapPin } from "lucide-react";
import { PROJECTS } from "../data/projectsData";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryProjects = useMemo(() => {
    return PROJECTS;
  }, []);

  return (
    <>
      {/* =========================================
          PAGE HERO
      ========================================== */}

      <section className="bg-[#202020]">
        <div
          className="
            max-w-[1440px]
            mx-auto
            px-4
            sm:px-6
            lg:px-12
            py-20
            md:py-28
          "
        >
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />

              <span
                className="
                  text-[#F6C62E]
                  text-[12px]
                  md:text-[13px]
                  uppercase
                  tracking-[0.16em]
                  font-bold
                "
              >
                Project Gallery
              </span>
            </div>

            <h1
              className="
                font-sans
                font-extrabold
                text-white
                text-[40px]
                sm:text-[50px]
                md:text-[62px]
                leading-[1.02]
              "
            >
              Our Work.
              <br />
              <span className="text-[#F6C62E]">
                Built to Perform.
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-[650px]
                text-[#CFCFCF]
                text-[14px]
                md:text-[16px]
                leading-[1.8]
              "
            >
              Explore selected projects delivered across residential,
              commercial, industrial and infrastructure sectors.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          GALLERY SECTION
      ========================================== */}

      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

          {/* Heading */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />

              <span
                className="
                  text-[#858585]
                  text-[12px]
                  md:text-[13px]
                  uppercase
                  tracking-[0.16em]
                  font-bold
                "
              >
                Featured Projects
              </span>
            </div>

            <h2
              className="
                font-extrabold
                text-[#202020]
                text-[30px]
                md:text-[42px]
                leading-[1.1]
              "
            >
              A Closer Look at{" "}
              <span className="text-[#D6A900]">
                What We Build
              </span>
            </h2>
          </div>

          {/* Gallery Grid */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5
            "
          >
            {galleryProjects.map((project, index) => (
              <button
                key={`${project.name}-${index}`}
                type="button"
                onClick={() => setSelectedImage(project)}
                className={`
                  relative
                  overflow-hidden
                  group
                  text-left
                  bg-[#DADADA]
                  min-h-[280px]
                  md:min-h-[330px]

                  ${
                    index === 0 || index === 7
                      ? "lg:col-span-2"
                      : ""
                  }
                `}
              >
                <img
                  src={project.img}
                  alt={project.name}
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
                    from-black/80
                    via-black/15
                    to-transparent
                  "
                />

                {/* Project Content */}
                <div
                  className="
                    absolute
                    left-5
                    right-5
                    bottom-5
                    z-10
                  "
                >
                  <span
                    className="
                      inline-block
                      bg-[#F6C62E]
                      text-[#202020]
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.08em]
                      px-3
                      py-1.5
                      mb-3
                    "
                  >
                    {project.category}
                  </span>

                  <h3
                    className="
                      text-white
                      font-bold
                      text-[18px]
                      md:text-[20px]
                      leading-snug
                    "
                  >
                    {project.name}
                  </h3>

                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-[#DDDDDD]
                      text-[13px]
                      mt-2
                    "
                  >
                    <MapPin
                      size={14}
                      className="text-[#F6C62E]"
                    />

                    {project.location}
                  </div>
                </div>

                {/* Bottom Hover Line */}
                <span
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
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          IMAGE POPUP
      ========================================== */}

      {selectedImage && (
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
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
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
              max-h-[85vh]
              bg-[#202020]
              overflow-hidden
            "
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.img}
              alt={selectedImage.name}
              className="
                w-full
                max-h-[72vh]
                object-contain
                bg-black
              "
            />

            <div className="p-5 md:p-6">
              <h3
                className="
                  text-white
                  text-[20px]
                  md:text-[24px]
                  font-bold
                "
              >
                {selectedImage.name}
              </h3>

              <p
                className="
                  text-[#F6C62E]
                  text-[13px]
                  font-semibold
                  mt-2
                "
              >
                {selectedImage.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}