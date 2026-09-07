import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { STATS } from "../data/projectsData";

// Project Images
import project1 from "../assets/projects/1 LEH Airport.png";
import project2 from "../assets/projects/2 Conscient One.jpg";
import project3 from "../assets/projects/3 Dhoot Time Arcade 1.jpg";
import project4 from "../assets/projects/4 Indospace Warehouse.jpeg";
import project5 from "../assets/projects/5 schott kaisha.jpeg";
import project6 from "../assets/projects/6 Godrej Boulevard.jpeg";
import project7 from "../assets/projects/7 Golf Green.jpeg";
import project8 from "../assets/projects/8 Experion Capital.jpg";

const BACKGROUND_IMAGES = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Previous Slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? BACKGROUND_IMAGES.length - 1
        : prevIndex - 1
    );
  };

  // Next Slide
  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length
    );
  };

  return (
    <section
      id="home"
      className="
        w-full
        bg-[#F3F3F3]
        px-4
        sm:px-6
        lg:px-12
        pt-4
        pb-8
      "
    >
      <div
        className="
          relative
          max-w-[1440px]
          mx-auto
          overflow-hidden
          bg-[#202020]
          min-h-[620px]
          lg:min-h-[680px]
        "
      >
        {/* =========================================
            BACKGROUND IMAGE CAROUSEL
        ========================================== */}

        {BACKGROUND_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`
              absolute
              inset-0
              bg-cover
              bg-center
              bg-no-repeat
              transition-all
              duration-1000
              ease-in-out

              ${
                index === currentIndex
                  ? "opacity-100 scale-105"
                  : "opacity-0 scale-100"
              }
            `}
            style={{
              backgroundImage: `url('${img}')`,
              transition:
                "opacity 1s ease-in-out, transform 6s ease-out",
            }}
          />
        ))}

        {/* =========================================
            DARK OVERLAY
        ========================================== */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#1c1c1c]/95
            via-[#2a2a2a]/70
            to-[#2c2c2c]/30
            z-[1]
          "
        />

        {/* Bottom Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/60
            via-transparent
            to-black/10
            z-[2]
          "
        />

        {/* =========================================
            CAROUSEL ARROWS
        ========================================== */}

        <div
          className="
            absolute
            right-5
            sm:right-6
            top-5
            sm:top-6
            z-20
            flex
            items-center
            gap-2
          "
        >
          {/* Previous */}

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="
              w-10
              h-10
              sm:w-11
              sm:h-11
              flex
              items-center
              justify-center
              bg-white
              text-[#202020]
              border
              border-white/40
              hover:bg-[#F6C62E]
              hover:border-[#F6C62E]
              transition-all
              duration-300
              cursor-pointer
            "
          >
            <ChevronLeft size={20} strokeWidth={2.3} />
          </button>

          {/* Next */}

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="
              w-10
              h-10
              sm:w-11
              sm:h-11
              flex
              items-center
              justify-center
              bg-[#F6C62E]
              text-[#202020]
              border
              border-[#F6C62E]
              hover:bg-white
              hover:border-white
              transition-all
              duration-300
              cursor-pointer
            "
          >
            <ChevronRight size={20} strokeWidth={2.3} />
          </button>
        </div>

        {/* =========================================
            HERO CONTENT
        ========================================== */}

        <div
          className="
            relative
            z-10
            min-h-[480px]
            lg:min-h-[510px]
            flex
            items-center
          "
        >
          <div
            className="
              w-full
              max-w-[760px]
              px-7
              sm:px-10
              md:px-14
              lg:px-20
              pt-20
              sm:pt-24
              pb-12
              lg:pb-14
            "
          >
            {/* Small Heading */}

            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />

              <p
                className="
                  text-[#F6C62E]
                  uppercase
                  tracking-[0.16em]
                  text-[12px]
                  sm:text-[13px]
                  font-bold
                "
              >
                End-to-End EPC Solutions
              </p>
            </div>

            {/* Main Heading */}

            <h1
              className="
                font-sans
                font-extrabold
                text-[42px]
                sm:text-[54px]
                md:text-[64px]
                lg:text-[76px]
                leading-[0.98]
                tracking-[-0.035em]
                max-w-[760px]
              "
            >
              <span className="text-[#F6C62E]">
                Design.
              </span>

              <br />

              <span className="text-[#F6C62E]">
                Build.
              </span>

              <br />

              <span className="text-white">
                Deliver.
              </span>
            </h1>
          </div>
        </div>

        {/* =========================================
            STATS SECTION
        ========================================== */}

        <div
          className="
            relative
            z-20
            mx-0
            md:mx-10
            lg:mx-16
            bg-white
            grid
            grid-cols-2
            md:grid-cols-4
            shadow-xl
          "
        >
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                relative
                px-5
                sm:px-6
                md:px-7
                py-6
                lg:py-7
                transition-all
                duration-300
                hover:bg-[#F6C62E]
                group

                ${
                  index !== STATS.length - 1
                    ? "md:border-r md:border-[#DFDFDF]"
                    : ""
                }

                ${
                  index < 2
                    ? "border-b border-[#DFDFDF] md:border-b-0"
                    : ""
                }
              `}
            >
              {/* Number */}

              <p
                className="
                  text-[#F6C62E]
                  group-hover:text-[#202020]
                  font-extrabold
                  text-[28px]
                  sm:text-[34px]
                  md:text-[38px]
                  leading-none
                  transition-colors
                  duration-300
                "
              >
                {stat.value}
              </p>

              {/* Label */}

              <p
                className="
                  mt-2
                  text-[#5F5F5F]
                  group-hover:text-[#202020]
                  text-[12px]
                  sm:text-[12.5px]
                  md:text-[13.5px]
                  font-semibold
                  transition-colors
                  duration-300
                "
              >
                {stat.label}
              </p>

              {/* Hover Bottom Line */}

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
                  duration-300
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}