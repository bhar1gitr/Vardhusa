import { motion } from "framer-motion";
import { 
  Building2, 
  Briefcase, 
  Landmark, 
  HeartPulse, 
  Coffee, 
  Factory, 
  Plane, 
  ShoppingCart, 
  Zap, 
  Home, 
  CheckCircle2 
} from "lucide-react";
import Reveal from "../components/Reveal";

// Import all client images exactly as named in the src/assets/clients folder
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

// Use the imported variables instead of string paths
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

const QUALITY_POLICY = [
  "Establish, periodically review and achieve quality objectives within targets at all levels.",
  "Comply with ISO 9001:2008, local laws and pursuing continual improvement of its quality management system.",
  "Utilize suitably qualified and competent personnel to ensure a good standard of workmanship.",
  "Continuously monitor progress of works in order to ensure timely completion.",
  "Look for Customer feedback, to improve and provide satisfaction.",
  "Understanding and communicating quality policy effectively within the organization.",
];

const EHS_POLICY = [
  "Establish, periodically review and achieve EHS objectives within targets.",
  "Ensure compliance with applicable EHS legislations and encourage sustainable development.",
  "Identify Environmental aspects and Occupational Health & Safety risks to prevent/minimize them.",
  "Prevent pollution of Environment and injury & ill health of the employees.",
  "Communicate the policy to all employees, the public, and other stakeholders.",
  "Provide training for all employees to increase awareness and competency on EHS systems.",
];

export default function About() {
  return (
    <>
      {/* Know About Us / History split hero */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#00AEEF] text-white px-6 sm:px-10 lg:px-14 py-16 lg:py-24 flex flex-col justify-center"
        >
          <h1 className="font-sans font-extrabold text-[38px] sm:text-[48px] leading-[1.05] mb-6">
            Overview
          </h1>
          <p className="text-white/90 text-[15.5px] leading-relaxed max-w-lg font-medium">
            Vardhusa is the perfect example of an organization propelled by a vision and fueled by great resources. 
            From its humble beginnings in 2018 as a Plumbing and Fire Fighting Contractor, Vardhusa has evolved 
            into a full-fledged EPC of MEP Services. We understand that the defining factors of any organization 
            in the knowledge economy are expertise, infrastructure, and technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="px-6 sm:px-10 lg:px-14 py-16 lg:py-24 flex flex-col justify-center bg-white"
        >
          <h2 className="font-sans font-extrabold text-[38px] sm:text-[48px] leading-[1.05] text-[#0B0E1A] mb-6">
            Our Culture
          </h2>
          <p className="text-gray-500 text-[15.5px] leading-relaxed max-w-lg">
            Any organization has to ensure that its long-term goals are in sync with the individual’s 
            objectives for it to prosper. That’s why at Vardhusa, we employ professionals with the right 
            skill sets who are compatible with our ethos and ethics. We foster a multicultural environment 
            employing a handpicked team of professionals, aiding our employees’ development process through 
            carefully charted career programs and training.
          </p>
        </motion.div>
      </section>

      {/* Passion banner */}
      <Reveal y={0} className="relative overflow-hidden min-h-[380px] sm:min-h-[420px] flex items-center justify-center rounded-t-[28px] -mt-1">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11,14,26,0.55), rgba(11,14,26,0.75)), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 font-sans font-extrabold text-white text-[32px] sm:text-[48px] text-center leading-[1.1] px-6 max-w-4xl tracking-tight"
        >
          Executing High-Profile Projects All Over India
        </motion.h2>
      </Reveal>

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
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center h-full hover:-translate-y-1 transition-transform">
                  <span className="bg-[#E6F7FD] text-[#00AEEF] p-4 rounded-full mb-4">
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

      {/* Our Vision */}
      <SplitSection
        title="Our"
        highlight="Vision"
        text="To be recognized as most admired MEP solution provider in our industry because of our quality, commitment and professionalism."
        img="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80"
        imageSide="right"
        bg="bg-[#F8F9FA]"
      />

      {/* Our Mission */}
      <SplitSection
        title="Our"
        highlight="Mission"
        text="To become trusted and reliable MEP partner of our client by best international practices, commitment for quality, transparent in relationship with ace professionalism."
        img="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
        imageSide="left"
        bg="bg-white"
      />

      {/* Policies (Quality & EHS) */}
      <section className="bg-[#F8F9FA] py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Quality Policy */}
            <Reveal>
              <h2 className="font-sans font-extrabold text-[28px] sm:text-[34px] leading-[1.1] text-[#0B0E1A] mb-6">
                Quality <span className="text-[#00AEEF]">Policy</span>
              </h2>
              <p className="text-gray-500 text-[15px] mb-6 font-medium">Core objectives to achieve this policy:</p>
              <ul className="space-y-4">
                {QUALITY_POLICY.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00AEEF] shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-600 text-[14.5px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* EHS Policy */}
            <Reveal delay={0.1}>
              <h2 className="font-sans font-extrabold text-[28px] sm:text-[34px] leading-[1.1] text-[#0B0E1A] mb-6">
                EHS <span className="text-[#00AEEF]">Policy</span>
              </h2>
              <p className="text-gray-500 text-[15px] mb-6 font-medium">
                Committed to providing a safe workplace and clean environment, to achieve this we shall:
              </p>
              <ul className="space-y-4">
                {EHS_POLICY.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#00AEEF] shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-600 text-[14.5px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function SplitSection({ title, highlight, text, img, imageSide = "right", bg = "bg-white" }) {
  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[400px] shadow-sm"
    >
      <img src={img} alt="" className="w-full h-full object-cover" />
    </motion.div>
  );

  const textBlock = (
    <Reveal delay={0.1}>
      <h2 className="font-sans font-extrabold text-[32px] sm:text-[44px] leading-[1.1] text-[#0B0E1A] mb-5">
        {title} <span className="text-[#00AEEF]">{highlight}</span>
      </h2>
      <p className="text-gray-500 text-[16px] leading-relaxed max-w-lg">{text}</p>
    </Reveal>
  );

  return (
    <section className={`${bg} py-16 md:py-24`}>
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {imageSide === "left" ? (
          <>
            {imageBlock}
            <div>{textBlock}</div>
          </>
        ) : (
          <>
            <div>{textBlock}</div>
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}