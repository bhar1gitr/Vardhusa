import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

// Business Images
import TurnjeyLogo from "../assets/business/Turn Key.jpg";
import FireLogo from "../assets/business/Fire Fighting.jpg";
import PlumbingLogo from "../assets/business/Plumbing.jpg";
import HvacLogo from "../assets/business/HVAC.jpg";
import ElectricalLogo from "../assets/business/Electrical.jpg";
import BmsLogo from "../assets/business/Bms.jpg";
import DesignLogo from "../assets/business/Design.jpg";
import FacilityLogo from "../assets/business/Facility.jpg";

// Client Images (All Included)
import imgAashima from "../assets/clients/aashima-mall.jpg";
import imgAditya from "../assets/clients/Aditya-Birla-Group.jpg";
import imgAirports from "../assets/clients/airports.jpeg";
import imgAmanora from "../assets/clients/Amanora.png";
import imgBirla from "../assets/clients/birla.jpeg";
import imgBounce from "../assets/clients/bounce.jpeg";
import imgClub from "../assets/clients/club.jpg";
import imgConscient from "../assets/clients/Conscient-Logo.jpg";
import imgCourtyard from "../assets/clients/courtyard.jpg";
import imgDhoot from "../assets/clients/Dhoot.png";
import imgExperion from "../assets/clients/Experion-Developer.png";
import imgGodrej from "../assets/clients/godrej.jpeg";
import imgGrand from "../assets/clients/Grand.png";
import imgKeystone from "../assets/clients/keystone.jpeg";
import imgKraheja from "../assets/clients/kraheja.jpeg";
import imgM3m from "../assets/clients/m3m.jpeg";
import imgRadisson from "../assets/clients/radisson.png";
import imgSchott from "../assets/clients/Schott-Kaisha.jpg";
import imgShapoorji from "../assets/clients/ShapoorjiPallonji.png";
import imgSignatureGlobal from "../assets/clients/signature-global.jpeg";
import imgTata from "../assets/clients/tata.jpeg";
import imgTcs from "../assets/clients/tcs.jpeg";

const SERVICES = [
  {
    img: TurnjeyLogo,
    title: "Turnkey Solution",
    desc: "Single point of accountability from design through handover, so every trade stays coordinated on one schedule.",
  },
  {
    img: FireLogo,
    title: "Fire Detection And Protection System",
    desc: "Fire detection, suppression, and life-safety systems designed to protect people and property at every stage.",
  },
  {
    img: PlumbingLogo,
    title: "Plumbing And Sanitation System",
    desc: "Water supply, drainage, and sanitary systems executed with precision across residential and commercial builds.",
  },
  {
    img: HvacLogo,
    title: "HVAC System",
    desc: "Heating, ventilation, and air-conditioning systems engineered for comfort, efficiency, and long service life.",
  },
  {
    img: ElectricalLogo,
    title: "Electrical System",
    desc: "Power distribution, lighting, and low-voltage systems built to code with an eye on future scalability.",
  },
  {
    img: BmsLogo,
    title: "BMS",
    desc: "Building Management Systems that monitor and control mechanical and electrical equipment from a single dashboard.",
  },
  {
    img: DesignLogo,
    title: "Design And Engineering",
    desc: "In-house design and engineering teams conversant with the latest industry practices and standards.",
  },
  {
    img: FacilityLogo,
    title: "Facility Management",
    desc: "Ongoing maintenance and operations support that keeps every system performing long after handover.",
  },
];

const SECTORS = [
  {
    name: "Commercial & Corporate",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Governments & PSU",
    img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Health Care",
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Hospitality",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Industrial",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Infrastructure",
    subtitle: "Airports & Ports",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Mall & Multiplex",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Power Plants",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Residential",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
  },
];

const CLIENTS = [
  imgAashima,
  imgAditya,
  imgAirports,
  imgAmanora,
  imgBirla,
  imgBounce,
  imgClub,
  imgConscient,
  imgCourtyard,
  imgDhoot,
  imgExperion,
  imgGodrej,
  imgGrand,
  imgKeystone,
  imgKraheja,
  imgM3m,
  imgRadisson,
  imgSchott,
  imgShapoorji,
  imgSignatureGlobal,
  imgTata,
  imgTcs,
];

export default function Businesses() {
  const navigate = useNavigate();

  return (
    <>
      <PageHero
        eyebrow="Our Solutions"
        title="Comprehensive EPC Services,"
        highlight="Under One Roof"
        subtitle="From first sketch to final commissioning, we design, engineer, and install the systems that keep buildings running."
        img="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80"
      />

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal>
            <div className="text-left mb-14">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[3px] bg-[#F6C62E]" />
                <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#858585]">
                  What We Do
                </span>
              </div>
              <h2 className="font-sans font-extrabold text-[30px] md:text-[42px] leading-[1.1] text-[#202020] max-w-xl">
                Our <span className="text-[#D6A900]">Expertise</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <div className="relative group bg-white h-full flex flex-col overflow-hidden border border-[#E7E7E7] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
                  <div className="h-48 overflow-hidden relative bg-[#EEEEEE]">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  <div className="p-7 flex flex-col flex-1 bg-white text-left">
                    <div className="w-8 h-[3px] bg-[#F6C62E] mb-5" />
                    <h3 className="font-sans font-bold text-[18px] text-[#202020] mb-3 leading-snug group-hover:text-[#D6A900] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#666666] text-[14px] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#F6C62E] group-hover:w-full transition-all duration-500" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTORAL PRESENCE ================= */}
      <section className="bg-[#F5F5F5] py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal className="text-left mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />
              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#858585]">
                Industries We Serve
              </span>
            </div>
            <h2 className="font-sans font-extrabold text-[32px] md:text-[42px] leading-[1.15] text-[#202020]">
              Sectoral <span className="text-[#D6A900]">Presence</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECTORS.map((sector, index) => (
              <Reveal key={sector.name} delay={index * 0.04}>
                <div className="relative group overflow-hidden min-h-[285px] md:min-h-[320px] bg-[#202020]">
                  <img
                    src={sector.img}
                    alt={sector.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/5 transition-all duration-500" />
                  
                  <span className="absolute top-5 right-5 text-white/60 text-[12px] tracking-[0.16em] font-bold z-10">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-7">
                    <div className="w-9 h-[3px] bg-[#F6C62E] mb-4 group-hover:w-16 transition-all duration-500" />
                    <h3 className="font-sans font-bold text-white text-[18px] md:text-[21px] leading-[1.2]">
                      {sector.name}
                    </h3>
                    {sector.subtitle && (
                      <p className="text-[#D7D7D7] text-[13px] mt-2 font-medium">
                        {sector.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#F6C62E] group-hover:w-full transition-all duration-500 z-20" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLIENTS (5 items per row on large screens) ================= */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal>
            <div className="text-left mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[3px] bg-[#F6C62E]" />
                <span className="text-[12px] uppercase tracking-[0.16em] font-bold text-[#858585]">
                  Trusted Partnerships
                </span>
              </div>
              <h2 className="font-sans font-extrabold text-[30px] md:text-[42px] leading-[1.1] text-[#202020]">
                Trusted <span className="text-[#D6A900]">By</span>
              </h2>
              <p className="text-[#666666] text-[15px] leading-relaxed max-w-xl mt-4">
                Leading organizations across industries to deliver reliable engineering and EPC solutions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-t border-l border-[#E7E7E7]">
              {CLIENTS.map((imgSrc, index) => (
                <div
                  key={index}
                  className="group border-b border-r border-[#E7E7E7] flex items-center justify-center p-6 h-[130px] md:h-[150px] bg-white hover:bg-[#FFFBEF] transition-all duration-300"
                >
                  <img
                    src={imgSrc}
                    alt={`Client logo ${index + 1}`}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= INTEGRATED DELIVERY / APPROACH ================= */}
      <section className="bg-[#F5F5F5] py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <div className="text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[3px] bg-[#F6C62E]" />
                <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#858585]">
                  Integrated Delivery
                </span>
              </div>

              <h2 className="font-sans font-extrabold text-[30px] sm:text-[40px] leading-[1.1] text-[#202020] mb-5">
                One accountable partner.
                <br />
                <span className="text-[#D6A900]">Every discipline.</span>
              </h2>

              <p className="text-[#666666] text-[15px] leading-relaxed max-w-lg mb-4">
                Most projects juggle separate contractors for mechanical, electrical, plumbing, and fire systems — and the coordination gaps between them cost time and money. Vardhusa runs all four under one project team, one schedule, and one point of accountability.
              </p>

              <p className="text-[#666666] text-[15px] leading-relaxed max-w-lg mb-8">
                That means fewer clashes on site, faster approvals, and a single number to call when something needs to change.
              </p>

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="group flex items-center gap-3 bg-[#F6C62E] text-[#202020] pl-6 pr-2 py-2 text-[14px] font-bold hover:bg-[#202020] hover:text-white transition-all duration-300"
              >
                Talk to Our Team
                <span className="w-9 h-9 flex items-center justify-center bg-white/70 text-[#202020] group-hover:bg-[#F6C62E] transition-all duration-300">
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative group overflow-hidden min-h-[340px] sm:min-h-[420px] bg-[#DDDDDD]"
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85"
              alt="Engineers coordinating on site"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-[#F6C62E] group-hover:w-full transition-all duration-500" />
          </motion.div>
        </div>
      </section>
    </>
  );
}