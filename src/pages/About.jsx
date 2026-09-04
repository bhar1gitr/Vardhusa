import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";

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
      {/* ========================================
          OVERVIEW / CULTURE
      ======================================== */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            bg-[#202020]
            text-white

            px-6
            sm:px-10
            lg:px-14

            py-16
            lg:py-24

            flex
            flex-col
            justify-center
          "
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-[3px] bg-[#F6C62E]" />

            <span
              className="
                text-[#F6C62E]
                text-[12px]
                sm:text-[13px]
                uppercase
                tracking-[0.16em]
                font-bold
              "
            >
              Know About Us
            </span>
          </div>

          <h1
            className="
              font-sans
              font-extrabold

              text-[38px]
              sm:text-[48px]

              leading-[1.05]

              mb-6
            "
          >
            Overview
          </h1>

          <p
            className="
              text-[#D8D8D8]
              text-[15.5px]
              leading-relaxed
              max-w-lg
              font-medium
            "
          >
            Vardhusa is the perfect example of an organization propelled by
            a vision and fueled by great resources. From its humble
            beginnings in 2018 as a Plumbing and Fire Fighting Contractor,
            Vardhusa has evolved into a full-fledged EPC of MEP Services.
            We understand that the defining factors of any organization in
            the knowledge economy are expertise, infrastructure, and
            technology.
          </p>
        </motion.div>

        {/* Culture */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            px-6
            sm:px-10
            lg:px-14

            py-16
            lg:py-24

            flex
            flex-col
            justify-center

            bg-[#F5F5F5]
          "
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-[3px] bg-[#F6C62E]" />

            <span
              className="
                text-[#888888]
                text-[12px]
                sm:text-[13px]
                uppercase
                tracking-[0.16em]
                font-bold
              "
            >
              People & Purpose
            </span>
          </div>

          <h2
            className="
              font-sans
              font-extrabold

              text-[38px]
              sm:text-[48px]

              leading-[1.05]

              text-[#202020]

              mb-6
            "
          >
            Our <span className="text-[#D6A900]">Culture</span>
          </h2>

          <p
            className="
              text-[#666666]
              text-[15.5px]
              leading-relaxed
              max-w-lg
            "
          >
            Any organization has to ensure that its long-term goals are in
            sync with the individual’s objectives for it to prosper. That’s
            why at Vardhusa, we employ professionals with the right skill
            sets who are compatible with our ethos and ethics. We foster a
            multicultural environment employing a handpicked team of
            professionals, aiding our employees’ development process through
            carefully charted career programs and training.
          </p>
        </motion.div>
      </section>

      {/* ========================================
          PASSION BANNER
      ======================================== */}
      <Reveal
        y={0}
        className="
          relative
          overflow-hidden

          min-h-[380px]
          sm:min-h-[420px]

          flex
          items-center
          justify-center

          -mt-1
        "
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(32,32,32,0.50), rgba(32,32,32,0.72)), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-10
            text-center
            px-6
            max-w-4xl
          "
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-[3px] bg-[#F6C62E]" />

            <span
              className="
                text-[#F6C62E]
                text-[12px]
                sm:text-[13px]
                uppercase
                tracking-[0.16em]
                font-bold
              "
            >
              Nationwide Excellence
            </span>

            <span className="w-10 h-[3px] bg-[#F6C62E]" />
          </div>

          <h2
            className="
              font-sans
              font-extrabold

              text-white

              text-[32px]
              sm:text-[48px]

              text-center

              leading-[1.1]
              tracking-tight
            "
          >
            Executing High-Profile Projects
            <br className="hidden sm:block" />
            <span className="text-[#F6C62E]"> All Over India</span>
          </h2>
        </motion.div>
      </Reveal>

      {/* ========================================
          VISION
      ======================================== */}
      <SplitSection
        title="Our"
        highlight="Vision"
        text="To be recognized as most admired MEP solution provider in our industry because of our quality, commitment and professionalism."
        img="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80"
        imageSide="right"
        bg="bg-[#F5F5F5]"
        label="Where We Are Going"
      />

      {/* ========================================
          MISSION
      ======================================== */}
      <SplitSection
        title="Our"
        highlight="Mission"
        text="To become trusted and reliable MEP partner of our client by best international practices, commitment for quality, transparent in relationship with ace professionalism."
        img="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
        imageSide="left"
        bg="bg-white"
        label="What Drives Us"
      />

      {/* ========================================
          POLICIES
      ======================================== */}
      <section className="bg-[#F5F5F5] py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Quality Policy */}
            <Reveal>
              <div
                className="
                  bg-white
                  border
                  border-[#E7E7E7]
                  p-7
                  md:p-9
                  h-full
                "
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-[3px] bg-[#F6C62E]" />

                  <span
                    className="
                      text-[#888888]
                      text-[12px]
                      uppercase
                      tracking-[0.15em]
                      font-bold
                    "
                  >
                    Excellence Standards
                  </span>
                </div>

                <h2
                  className="
                    font-sans
                    font-extrabold

                    text-[28px]
                    sm:text-[34px]

                    leading-[1.1]

                    text-[#202020]

                    mb-6
                  "
                >
                  Quality{" "}
                  <span className="text-[#D6A900]">
                    Policy
                  </span>
                </h2>

                <p
                  className="
                    text-[#666666]
                    text-[15px]
                    mb-6
                    font-medium
                  "
                >
                  Core objectives to achieve this policy:
                </p>

                <ul className="space-y-4">
                  {QUALITY_POLICY.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="
                          shrink-0
                          mt-0.5

                          w-7
                          h-7

                          flex
                          items-center
                          justify-center

                          bg-[#FFF7D6]
                        "
                      >
                        <CheckCircle2
                          className="text-[#D6A900]"
                          size={18}
                        />
                      </span>

                      <span
                        className="
                          text-[#5F5F5F]
                          text-[14.5px]
                          leading-relaxed
                        "
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* EHS Policy */}
            <Reveal delay={0.1}>
              <div
                className="
                  bg-[#202020]
                  p-7
                  md:p-9
                  h-full
                "
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-[3px] bg-[#F6C62E]" />

                  <span
                    className="
                      text-[#A5A5A5]
                      text-[12px]
                      uppercase
                      tracking-[0.15em]
                      font-bold
                    "
                  >
                    Health & Safety
                  </span>
                </div>

                <h2
                  className="
                    font-sans
                    font-extrabold

                    text-[28px]
                    sm:text-[34px]

                    leading-[1.1]

                    text-white

                    mb-6
                  "
                >
                  EHS{" "}
                  <span className="text-[#F6C62E]">
                    Policy
                  </span>
                </h2>

                <p
                  className="
                    text-[#CFCFCF]
                    text-[15px]
                    mb-6
                    font-medium
                    leading-relaxed
                  "
                >
                  Committed to providing a safe workplace and clean
                  environment, to achieve this we shall:
                </p>

                <ul className="space-y-4">
                  {EHS_POLICY.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="
                          shrink-0
                          mt-0.5

                          w-7
                          h-7

                          flex
                          items-center
                          justify-center

                          bg-[#F6C62E]
                        "
                      >
                        <CheckCircle2
                          className="text-[#202020]"
                          size={18}
                        />
                      </span>

                      <span
                        className="
                          text-[#D6D6D6]
                          text-[14.5px]
                          leading-relaxed
                        "
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function SplitSection({
  title,
  highlight,
  text,
  img,
  imageSide = "right",
  bg = "bg-white",
  label,
}) {
  const imageBlock = (
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
        overflow-hidden
        min-h-[320px]
        sm:min-h-[400px]
        group
      "
    >
      <img
        src={img}
        alt={`${title} ${highlight}`}
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

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Hover Accent */}
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
  );

  const textBlock = (
    <Reveal delay={0.1}>
      <div className="flex items-center gap-3 mb-4">
        <span className="w-10 h-[3px] bg-[#F6C62E]" />

        <span
          className="
            text-[#888888]
            text-[12px]
            sm:text-[13px]
            uppercase
            tracking-[0.16em]
            font-bold
          "
        >
          {label}
        </span>
      </div>

      <h2
        className="
          font-sans
          font-extrabold

          text-[32px]
          sm:text-[44px]

          leading-[1.1]

          text-[#202020]

          mb-5
        "
      >
        {title}{" "}
        <span className="text-[#D6A900]">
          {highlight}
        </span>
      </h2>

      <p
        className="
          text-[#666666]
          text-[16px]
          leading-relaxed
          max-w-lg
        "
      >
        {text}
      </p>
    </Reveal>
  );

  return (
    <section className={`${bg} py-16 md:py-24`}>
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