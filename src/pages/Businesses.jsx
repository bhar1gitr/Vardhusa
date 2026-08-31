import { motion } from "framer-motion";
import { 
  ArrowRight,
  Briefcase, 
  Landmark, 
  HeartPulse, 
  Coffee, 
  Factory, 
  Plane, 
  ShoppingCart, 
  Zap, 
  Home 
} from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Testimonials from "../components/Testimonials";

import TurnjeyLogo from "../assets/business/Turn Key.jpg";
import FireLogo from "../assets/business/Fire Fighting.jpg";
import PlumbingLogo from "../assets/business/Plumbing.jpg";
import HvacLogo from "../assets/business/HVAC.jpg";
import ElectricalLogo from "../assets/business/Electrical.jpg";
import BmsLogo from "../assets/business/Bms.jpg";
import DesignLogo from "../assets/business/Design.jpg";
import FacilityLogo from "../assets/business/Facility.jpg";

// Import client images
import imgShapoorji from "../assets/clients/ShapoorjiPallonji.png";
import imgExperion from "../assets/clients/Experion-Developer.png";
import imgConscient from "../assets/clients/Conscient-Logo.jpg";
import imgSchott from "../assets/clients/Schott-Kaisha.jpg";
import imgDhoot from "../assets/clients/Dhoot.png";
import imgAmanora from "../assets/clients/Amanora.png";
import imgCourtyard from "../assets/clients/courtyard.jpg";
import imgRadisson from "../assets/clients/radisson.png";
import imgGrand from "../assets/clients/Grand.png";
import imgClub from "../assets/clients/club.jpg";
import imgAditya from "../assets/clients/Aditya-Birla-Group.jpg";
import imgAashima from "../assets/clients/aashima-mall.jpg";

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
  { name: "Commercial & Corporate", icon: Briefcase },
  { name: "Governments & PSU", icon: Landmark },
  { name: "Health Care", icon: HeartPulse },
  { name: "Hospitality", icon: Coffee },
  { name: "Industrial", icon: Factory },
  { name: "Infrastructure (Airports, Ports)", icon: Plane },
  { name: "Mall & Multiplex", icon: ShoppingCart },
  { name: "Power Plants", icon: Zap },
  { name: "Residential", icon: Home },
];

const CLIENTS = [
  imgShapoorji,
  imgExperion,
  imgConscient,
  imgSchott,
  imgDhoot,
  imgAmanora,
  imgCourtyard,
  imgRadisson,
  imgGrand,
  imgClub,
  imgAditya,
  imgAashima,
];

export default function Businesses() {
  return (
    <>
      <PageHero
        eyebrow="Our Solutions"
        title="Comprehensive MEP Services,"
        highlight="Under One Roof"
        subtitle="From first sketch to final commissioning, we design, engineer, and install the systems that keep buildings running."
        img="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Services grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal>
            <h2 className="font-sans font-extrabold text-[30px] md:text-[40px] leading-[1.1] text-[#0B0E1A] max-w-xl mb-4">
              Our <span className="text-[#00AEEF]">Expertise</span>
            </h2>
            <p className="text-gray-500 text-[15px] max-w-xl mb-14">
              Eight disciplines, one accountable team — so nothing falls through the cracks between trades.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group bg-[#F8F9FA] rounded-none h-full flex flex-col overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                  {/* Image Header */}
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={s.img} 
                      alt={s.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1 bg-white">
                    <h3 className="font-sans font-bold text-[18px] text-[#0B0E1A] mb-2 leading-snug group-hover:text-[#00AEEF] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-[14px] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectoral Presence */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="font-sans font-extrabold text-[32px] md:text-[42px] leading-[1.15] text-[#0B0E1A]">
              Sectoral <span className="text-[#00AEEF]">Presence</span>
            </h2>
            <p className="text-gray-500 text-[15.5px] mt-4 max-w-2xl mx-auto">
              We have successfully executed and are currently executing projects across diverse sectors throughout the nation.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {SECTORS.map((sector, i) => (
              <Reveal key={sector.name} delay={i * 0.05}>
                <div className="bg-white rounded-none p-6 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center h-full hover:-translate-y-1 transition-transform">
                  <span className="bg-[#E6F7FD] text-[#00AEEF] p-4 rounded-none mb-4">
                    <sector.icon size={26} strokeWidth={1.5} />
                  </span>
                  <h4 className="font-sans font-bold text-[14.5px] text-[#0B0E1A] leading-tight">
                    {sector.name}
                  </h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <Reveal>
            <h2 className="font-sans font-extrabold text-[28px] md:text-[34px] leading-[1.1] text-[#0B0E1A] mb-8" style={{ textAlign:'center' }}>
              Our Clients
            </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-gray-100">
              {CLIENTS.map((imgSrc, idx) => (
                <div 
                  key={idx} 
                  className="border-b border-r border-gray-100 flex items-center justify-center p-8 h-[140px] md:h-[160px] bg-white hover:bg-gray-50 transition-colors"
                >
                  <img 
                    src={imgSrc} 
                    alt={`Client logo ${idx + 1}`} 
                    className="max-h-full max-w-full object-contain" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach split */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <h2 className="font-sans font-extrabold text-[30px] sm:text-[40px] leading-[1.1] text-[#0B0E1A] mb-5">
              One accountable partner. <span className="text-[#00AEEF]">Every discipline.</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg mb-4">
              Most projects juggle separate contractors for mechanical, electrical, plumbing, and
              fire systems — and the coordination gaps between them cost time and money. Vardhusa
              runs all four under one project team, one schedule, and one point of accountability.
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg mb-8">
              That means fewer clashes on site, faster approvals, and a single number to call when
              something needs to change.
            </p>
            <button className="flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0098d1] text-white rounded-none pl-6 pr-2 py-2.5 text-[14.5px] font-semibold transition-colors">
              Talk to Our Team
              <span className="bg-white/20 rounded-none p-2">
                <ArrowRight size={16} />
              </span>
            </button>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-none overflow-hidden min-h-[340px] sm:min-h-[420px] shadow-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
              alt="Engineers coordinating on site"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}