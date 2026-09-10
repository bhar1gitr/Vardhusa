import Reveal from "./Reveal";

// Business Images
import TurnjeyLogo from "../assets/business/Turn Key.jpg";
import FireLogo from "../assets/business/Fire Fighting.jpg";
import PlumbingLogo from "../assets/business/Plumbing.jpg";
import HvacLogo from "../assets/business/HVAC.jpg";
import ElectricalLogo from "../assets/business/Electrical.jpg";
import BmsLogo from "../assets/business/Bms.jpg";
import DesignLogo from "../assets/business/Design.jpg";
import FacilityLogo from "../assets/business/Facility.jpg";

const SERVICES = [
  {
    img: TurnjeyLogo,
    title: "Turnkey Solution",
  },
  {
    img: FireLogo,
    title: "Fire Detection And Protection System",
  },
  {
    img: PlumbingLogo,
    title: "Plumbing And Sanitation System",
  },
  {
    img: HvacLogo,
    title: "HVAC System",
  },
  {
    img: ElectricalLogo,
    title: "Electrical System",
  },
  {
    img: BmsLogo,
    title: "BMS",
  },
  {
    img: DesignLogo,
    title: "Design And Engineering",
  },
  {
    img: FacilityLogo,
    title: "Facility Management",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Heading */}
        <Reveal>
          <div className="text-left mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />

              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#858585]">
                What <span className="text-[#D6A900]">We Do</span>
              </span>
            </div>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <div
                className="
                  relative
                  group
                  bg-white
                  h-full
                  flex
                  flex-col
                  overflow-hidden
                  border
                  border-[#E7E7E7]
                  hover:-translate-y-1
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-300
                "
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative bg-[#EEEEEE]">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-7 flex flex-col flex-1 bg-white text-left">
                  <div className="w-8 h-[3px] bg-[#F6C62E] mb-5" />

                  <h3
                    className="
                      font-sans
                      font-bold
                      text-[18px]
                      text-[#202020]
                      leading-snug
                      group-hover:text-[#D6A900]
                      transition-colors
                      duration-300
                    "
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Bottom Hover Line */}
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
  );
}