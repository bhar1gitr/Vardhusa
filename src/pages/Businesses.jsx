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
  Home,
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

// Client images
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
      {/* ================================
          PAGE HERO
      ================================= */}
      <PageHero
        eyebrow="Our Solutions"
        title="Comprehensive MEP Services,"
        highlight="Under One Roof"
        subtitle="From first sketch to final commissioning, we design, engineer, and install the systems that keep buildings running."
        img="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80"
      />

      {/* ================================
          OUR EXPERTISE
      ================================= */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />

              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#858585]">
                What We Do
              </span>
            </div>

            <h2 className="font-sans font-extrabold text-[30px] md:text-[42px] leading-[1.1] text-[#202020] max-w-xl mb-4">
              Our{" "}
              <span className="text-[#D6A900]">
                Expertise
              </span>
            </h2>

            <p className="text-[#666666] text-[15px] leading-relaxed max-w-xl mb-14">
              Eight disciplines, one accountable team — so nothing falls
              through the cracks between trades.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 0.05}
              >
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

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1 bg-white">
                    <div className="w-8 h-[3px] bg-[#F6C62E] mb-5" />

                    <h3
                      className="
                        font-sans
                        font-bold
                        text-[18px]
                        text-[#202020]
                        mb-3
                        leading-snug
                        group-hover:text-[#D6A900]
                        transition-colors
                        duration-300
                      "
                    >
                      {service.title}
                    </h3>

                    <p className="text-[#666666] text-[14px] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Hover line */}
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

      {/* ================================
          SECTORAL PRESENCE
      ================================= */}
      <section className="bg-[#F5F5F5] py-20 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[3px] bg-[#F6C62E]" />

              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#858585]">
                Industries We Serve
              </span>

              <span className="w-8 h-[3px] bg-[#F6C62E]" />
            </div>

            <h2 className="font-sans font-extrabold text-[32px] md:text-[42px] leading-[1.15] text-[#202020]">
              Sectoral{" "}
              <span className="text-[#D6A900]">
                Presence
              </span>
            </h2>

            <p className="text-[#666666] text-[15px] md:text-[15.5px] mt-4 max-w-2xl mx-auto leading-relaxed">
              We have successfully executed and are currently executing
              projects across diverse sectors throughout the nation.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 max-w-6xl mx-auto">
            {SECTORS.map((sector, index) => {
              const Icon = sector.icon;

              return (
                <Reveal
                  key={sector.name}
                  delay={index * 0.05}
                >
                  <div
                    className="
                      group
                      relative
                      overflow-hidden
                      bg-white
                      p-6
                      text-center
                      border
                      border-[#E5E5E5]
                      flex
                      flex-col
                      items-center
                      justify-center
                      min-h-[180px]
                      h-full
                      hover:-translate-y-1
                      hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)]
                      transition-all
                      duration-300
                    "
                  >
                    <span
                      className="
                        w-14
                        h-14
                        flex
                        items-center
                        justify-center
                        bg-[#FFF7D6]
                        text-[#D6A900]
                        mb-5
                        group-hover:bg-[#F6C62E]
                        group-hover:text-[#202020]
                        transition-all
                        duration-300
                      "
                    >
                      <Icon
                        size={25}
                        strokeWidth={1.7}
                      />
                    </span>

                    <h4 className="font-sans font-bold text-[14.5px] text-[#202020] leading-tight">
                      {sector.name}
                    </h4>

                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[3px]
                        w-0
                        bg-[#F6C62E]
                        group-hover:w-full
                        transition-all
                        duration-500
                      "
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================
          OUR CLIENTS
      ================================= */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-[3px] bg-[#F6C62E]" />

                <span className="text-[12px] uppercase tracking-[0.16em] font-bold text-[#858585]">
                  Trusted Partnerships
                </span>

                <span className="w-8 h-[3px] bg-[#F6C62E]" />
              </div>

              <h2 className="font-sans font-extrabold text-[28px] md:text-[36px] leading-[1.1] text-[#202020]">
                Our{" "}
                <span className="text-[#D6A900]">
                  Clients
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l border-[#E7E7E7]">
              {CLIENTS.map((imgSrc, index) => (
                <div
                  key={index}
                  className="
                    group
                    border-b
                    border-r
                    border-[#E7E7E7]
                    flex
                    items-center
                    justify-center
                    p-8
                    h-[140px]
                    md:h-[160px]
                    bg-white
                    hover:bg-[#FFFBEF]
                    transition-all
                    duration-300
                  "
                >
                  <img
                    src={imgSrc}
                    alt={`Client logo ${index + 1}`}
                    className="
                      max-h-full
                      max-w-full
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-[1.04]
                    "
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================
          OUR APPROACH
      ================================= */}
      <section className="bg-[#F5F5F5] py-20 md:py-28">
        <div
          className="
            max-w-[1440px]
            mx-auto
            px-4
            sm:px-6
            lg:px-12
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            lg:gap-16
            items-center
          "
        >
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />

              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#858585]">
                Integrated Delivery
              </span>
            </div>

            <h2 className="font-sans font-extrabold text-[30px] sm:text-[40px] leading-[1.1] text-[#202020] mb-5">
              One accountable partner.
              <br />
              <span className="text-[#D6A900]">
                Every discipline.
              </span>
            </h2>

            <p className="text-[#666666] text-[15px] leading-relaxed max-w-lg mb-4">
              Most projects juggle separate contractors for mechanical,
              electrical, plumbing, and fire systems — and the coordination
              gaps between them cost time and money. Vardhusa runs all four
              under one project team, one schedule, and one point of
              accountability.
            </p>

            <p className="text-[#666666] text-[15px] leading-relaxed max-w-lg mb-8">
              That means fewer clashes on site, faster approvals, and a
              single number to call when something needs to change.
            </p>

            <button
              type="button"
              className="
                group
                flex
                items-center
                gap-3
                bg-[#F6C62E]
                text-[#202020]
                pl-6
                pr-2
                py-2
                text-[14px]
                font-bold
                hover:bg-[#202020]
                hover:text-white
                transition-all
                duration-300
              "
            >
              Talk to Our Team

              <span
                className="
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  bg-white/70
                  text-[#202020]
                  group-hover:bg-[#F6C62E]
                  transition-all
                  duration-300
                "
              >
                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </span>
            </button>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              group
              overflow-hidden
              min-h-[340px]
              sm:min-h-[420px]
              bg-[#DDDDDD]
            "
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
              alt="Engineers coordinating on site"
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

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

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
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}