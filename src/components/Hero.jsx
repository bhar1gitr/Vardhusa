import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Import your project images correctly
import project1 from "../assets/projects/1 LEH Airport.png";
import project2 from "../assets/projects/2 Conscient One.jpg";
import project3 from "../assets/projects/3 Dhoot Time Arcade 1.jpg";
import project4 from "../assets/projects/4 Indospace Warehouse.jpeg";
import project5 from "../assets/projects/5 schott kaisha.jpeg";
import project6 from "../assets/projects/6 Godrej Boulevard.jpeg";
import project7 from "../assets/projects/7 Golf Green.jpeg";
import project8 from "../assets/projects/8 Experion Capital.jpg";

const STATS = [
  { value: "3+", label: "Years of Experience" },
  { value: "17+", label: "Projects in 2021-2025" },
  { value: "200+", label: "Manpower with us" },
  { value: "8+", label: "Area we hold" },
];

// Array of background images for the carousel
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

  // Automatically cycle through background images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Handlers for manual arrow clicks
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? BACKGROUND_IMAGES.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
  };

  return (
    <section id="home" className="w-full px-4 sm:px-6 lg:px-12 pt-4 pb-8">
      <div className="max-w-[1440px] mx-auto relative overflow-hidden min-h-[65vh] flex flex-col justify-between rounded-none shadow-xl">
        
        {/* Background Image Carousel Slides */}
        {BACKGROUND_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url('${img}')`,
              transition: "opacity 1s ease-in-out, transform 6s ease-out",
            }}
          />
        ))}

        {/* Lighter Transparent Overlay for sync and high image visibility */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Carousel Navigation Controls (Left & Right Arrows) */}
        <div className="absolute right-6 top-6 z-20 flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-9 h-9 bg-black/40 hover:bg-[#00AEEF] text-white flex items-center justify-center backdrop-blur-md transition-colors rounded-none border border-white/10 shadow-md cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 bg-black/40 hover:bg-[#00AEEF] text-white flex items-center justify-center backdrop-blur-md transition-colors rounded-none border border-white/10 shadow-md cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-16 pb-10">
          <h1 className="font-sans font-extrabold text-white text-[32px] sm:text-[44px] md:text-[56px] leading-[1.1] max-w-5xl tracking-tight drop-shadow-md">
            Design. Build. Deliver.
          </h1>
          <p className="text-white/95 text-[15px] md:text-[17px] max-w-2xl mt-4 leading-relaxed font-medium drop-shadow">
            One integrated partner for end-to-end EPC solutions, from concept to completion.
          </p>
        </div>

        {/* Stats Grid - Box format removed, layout streamlined for maximum background exposure */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 px-6 md:px-10 py-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px]">
          {STATS.map((s, idx) => (
            <div key={s.label} className={`text-white ${idx !== 0 ? "md:border-l md:border-white/15 md:pl-4" : ""}`}>
              <p className="font-sans font-extrabold text-2xl md:text-3xl text-[#00AEEF] drop-shadow">{s.value}</p>
              <p className="text-[12.5px] md:text-[13.5px] mt-1 font-medium text-white/90 drop-shadow">
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}