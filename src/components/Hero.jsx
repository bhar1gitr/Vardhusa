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
  { value: "3+", label: "Years of Experience", filled: false },
  { value: "17+", label: "Projects in 2021-2025", filled: true },
  { value: "200+", label: "Manpower with us", filled: false },
  { value: "8+", label: "Area we hold", filled: false },
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
    <section id="home" className="w-full px-4 sm:px-6 lg:px-12 pt-6 pb-12">
      <div className="max-w-[1440px] mx-auto relative overflow-hidden min-h-[85vh] flex flex-col rounded-none shadow-xl">
        
        {/* Background Image Carousel Slides (Fully Centered & Responsive) */}
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

        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/85 via-[#0a1128]/65 to-[#0a1128]/95 z-0" />

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
          <h1 className="font-sans font-extrabold text-white text-[36px] sm:text-[48px] md:text-[60px] leading-[1.1] max-w-5xl tracking-tight">
            Design. Build. Deliver.
          </h1>
          <p className="text-white/90 text-[16px] md:text-[18px] max-w-3xl mt-6 leading-relaxed font-medium">
            One integrated partner for end-to-end EPC solution, from concept to completion.
          </p>
          {/* <button className="mt-10 flex items-center gap-2.5 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-none px-6 py-3.5 text-[15px] transition-colors shadow-lg group">
            Why Vardhusa
            <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
          </button> */}
        </div>

        {/* Carousel Navigation Controls (Left & Right Arrows) */}
        <div className="absolute right-6 bottom-36 z-20 flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 bg-black/40 hover:bg-[#00AEEF] text-white flex items-center justify-center backdrop-blur-md transition-colors rounded-none border border-white/10 shadow-md cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 bg-black/40 hover:bg-[#00AEEF] text-white flex items-center justify-center backdrop-blur-md transition-colors rounded-none border border-white/10 shadow-md cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 px-4 md:px-8 pb-4 md:pb-8">
          {STATS.map((s) => (
            <div
              key={s.label}
              className={`rounded-none px-6 py-8 backdrop-blur-md transition-colors ${
                s.filled ? "bg-[#00AEEF] text-white" : "bg-black/30 text-white hover:bg-black/40"
              }`}
            >
              <p className="font-sans font-extrabold text-3xl md:text-4xl">{s.value}</p>
              <p
                className={`text-[13px] md:text-[14px] mt-2 font-medium ${
                  s.filled ? "text-white/90" : "text-white/70"
                }`}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}