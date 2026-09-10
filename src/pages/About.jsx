import { motion } from "framer-motion";
import {
  CheckCircle2,
  Target,
  Eye,
  Users,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
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
      {/* =========================================================
          ABOUT HERO
      ========================================================== */}
      <section className="bg-[#F5F5F5]">
        <div
          className="
            max-w-[1440px]
            mx-auto
            px-4
            sm:px-6
            lg:px-12
            py-10
            md:py-14
          "
        >
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[0.9fr_1.1fr]
              min-h-[620px]
              overflow-hidden
            "
          >
            {/* LEFT CONTENT */}
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

                px-7
                sm:px-10
                lg:px-14

                py-14
                lg:py-16

                flex
                flex-col
                justify-center

                relative
                overflow-hidden
              "
            >
              {/* Decorative Number */}
              <div
                className="
                  absolute
                  -right-4
                  -bottom-12

                  text-[180px]
                  lg:text-[230px]

                  font-extrabold
                  leading-none

                  text-white/[0.025]

                  pointer-events-none
                "
              >
                18
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
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

                    text-[42px]
                    sm:text-[52px]
                    lg:text-[64px]

                    leading-[1]
                    tracking-[-0.03em]

                    mb-7
                  "
                >
                  Built on
                  <br />

                  <span className="text-[#F6C62E]">
                    Expertise.
                  </span>

                  <br />

                  Driven by
                  <br />

                  <span className="text-[#F6C62E]">
                    Purpose.
                  </span>
                </h1>

                <p
                  className="
                    text-[#D2D2D2]
                    text-[15px]
                    md:text-[16px]
                    leading-[1.8]
                    max-w-[520px]
                  "
                >
                  Vardhusa is the perfect example of an organization
                  propelled by a vision and fueled by great resources.
                  From its humble beginnings in 2018 as a Plumbing and
                  Fire Fighting Contractor, Vardhusa has evolved into a
                  full-fledged EPC of MEP Services.
                </p>

                {/* Small Highlights */}
                <div
                  className="
                    grid
                    grid-cols-2
                    gap-px

                    bg-white/10

                    mt-10
                    max-w-[470px]
                  "
                >
                  <div className="bg-[#292929] px-5 py-5">
                    <p className="text-[#F6C62E] text-[26px] font-extrabold">
                      2018
                    </p>

                    <p className="text-[#AAAAAA] text-[12px] mt-1">
                      Our Beginning
                    </p>
                  </div>

                  <div className="bg-[#292929] px-5 py-5">
                    <p className="text-[#F6C62E] text-[26px] font-extrabold">
                      EPC
                    </p>

                    <p className="text-[#AAAAAA] text-[12px] mt-1">
                      MEP Solutions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                min-h-[420px]
                lg:min-h-full
                overflow-hidden
                group
              "
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1500&q=85"
                alt="Vardhusa engineering"
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover

                  transition-transform
                  duration-[1200ms]

                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/65
                  via-black/5
                  to-transparent
                "
              />

              {/* Image Card */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0

                  bg-[#F6C62E]
                  text-[#202020]

                  p-6
                  md:p-8

                  max-w-[390px]
                "
              >
                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.15em]
                    font-extrabold
                    opacity-70
                  "
                >
                  Our Foundation
                </span>

                <p
                  className="
                    text-[19px]
                    md:text-[22px]

                    font-extrabold
                    leading-[1.25]

                    mt-2
                  "
                >
                  Expertise, infrastructure and technology define how we
                  move forward.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CULTURE SECTION
      ========================================================== */}
      <section className="bg-white py-20 md:py-28">
        <div
          className="
            max-w-[1440px]
            mx-auto
            px-4
            sm:px-6
            lg:px-12

            grid
            grid-cols-1
            lg:grid-cols-[0.7fr_1.3fr]

            gap-12
            lg:gap-20

            items-center
          "
        >
          {/* SIDE TITLE */}
          <Reveal>
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-[3px] bg-[#F6C62E]" />

                <span
                  className="
                    text-[#888888]
                    text-[12px]
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
                  text-[#202020]
                  font-extrabold

                  text-[34px]
                  sm:text-[42px]
                  lg:text-[50px]

                  leading-[1.05]
                "
              >
                Our people
                <br />
                shape our{" "}
                <span className="text-[#D6A900]">
                  Culture.
                </span>
              </h2>
            </div>
          </Reveal>

          {/* CULTURE CARD */}
          <Reveal delay={0.1}>
            <div
              className="
                relative
                bg-[#F5F5F5]

                p-7
                sm:p-10
                lg:p-12

                border-l-[5px]
                border-[#F6C62E]
              "
            >
              <Users
                size={38}
                strokeWidth={1.6}
                className="
                  text-[#D6A900]
                  mb-7
                "
              />

              <p
                className="
                  text-[#555555]

                  text-[16px]
                  md:text-[17px]

                  leading-[1.9]
                "
              >
                Any organization has to ensure that its long-term goals
                are in sync with the individual’s objectives for it to
                prosper. That’s why at Vardhusa, we employ professionals
                with the right skill sets who are compatible with our
                ethos and ethics.
              </p>

              <p
                className="
                  text-[#666666]

                  text-[15px]
                  md:text-[16px]

                  leading-[1.9]

                  mt-5
                "
              >
                We foster a multicultural environment employing a
                handpicked team of professionals, aiding our employees’
                development process through carefully charted career
                programs and training.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          INDIA BANNER
      ========================================================== */}
      {/* <section
        className="
          relative
          min-h-[430px]
          md:min-h-[500px]

          flex
          items-center
          justify-center

          overflow-hidden
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
          "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85')",
          }}
        />

        <div
          className="
            absolute
            inset-0
            bg-[#202020]/75
          "
        />

        <Reveal
          y={24}
          className="
            relative
            z-10

            max-w-[980px]

            mx-auto
            px-5

            text-center
          "
        >
          <div className="flex items-center justify-center gap-3 mb-6">
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
              Nationwide Excellence
            </span>

            <span className="w-10 h-[3px] bg-[#F6C62E]" />
          </div>

          <h2
            className="
              text-white

              text-[34px]
              sm:text-[45px]
              md:text-[58px]

              font-extrabold

              leading-[1.08]
              tracking-[-0.025em]
            "
          >
            Executing High-Profile
            <br />

            Projects{" "}

            <span className="text-[#F6C62E]">
              Across India.
            </span>
          </h2>
        </Reveal>
      </section> */}

      {/* =========================================================
          VISION + MISSION
      ========================================================== */}
      <section className="bg-[#F5F5F5] py-10 md:py-18">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Heading */}
          <Reveal>
            <div
              className="
                flex
                flex-col
                md:flex-row
                md:items-end
                justify-between

                gap-5

                mb-10
              "
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-[3px] bg-[#F6C62E]" />

                  <span
                    className="
                      text-[#888888]
                      text-[12px]
                      uppercase
                      tracking-[0.16em]
                      font-bold
                    "
                  >
                    Purpose & Direction
                  </span>
                </div>

                <h2
                  className="
                    text-[#202020]
                    font-extrabold
                    text-[34px]
                    md:text-[44px]
                    leading-[1.1]
                  "
                >
                  What Guides{" "}

                  <span className="text-[#D6A900]">
                    Vardhusa
                  </span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2

              gap-5
            "
          >
            {/* Vision */}
            <Reveal>
              <ValueCard
                icon={Eye}
                number="01"
                label="Where We Are Going"
                title="Our"
                highlight="Vision"
                text="To be recognized as most admired MEP solution provider in our industry because of our quality, commitment and professionalism."
                dark
              />
            </Reveal>

            {/* Mission */}
            <Reveal delay={0.1}>
              <ValueCard
                icon={Target}
                number="02"
                label="What Drives Us"
                title="Our"
                highlight="Mission"
                text="To become trusted and reliable MEP partner of our client by best international practices, commitment for quality, transparent in relationship with ace professionalism."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          POLICIES INTRO
      ========================================================== */}
      <section className="bg-white pt-10 md:pt-18">
        <div
          className="
            max-w-[1440px]
            mx-auto
            px-4
            sm:px-6
            lg:px-12
          "
        >
          <Reveal>
            <div
              className="
                max-w-[760px]
                mb-12
              "
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[3px] bg-[#F6C62E]" />

                <span
                  className="
                    text-[#888888]
                    text-[12px]
                    uppercase
                    tracking-[0.16em]
                    font-bold
                  "
                >
                  How We Work
                </span>
              </div>

              <h2
                className="
                  text-[#202020]
                  font-extrabold

                  text-[34px]
                  md:text-[44px]

                  leading-[1.1]
                "
              >
                Standards That Define{" "}

                <span className="text-[#D6A900]">
                  Every Project
                </span>
              </h2>

              <p
                className="
                  mt-4
                  text-[#666666]
                  text-[15px]
                  leading-[1.8]
                "
              >
                Quality, safety and environmental responsibility remain
                central to the way we plan, execute and deliver our work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          POLICIES
      ========================================================== */}
      <section className="bg-white pb-20 md:pb-28">
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
            gap-6
          "
        >
          {/* QUALITY */}
          <Reveal>
            <PolicyCard
              icon={CheckCircle2}
              number="01"
              eyebrow="Excellence Standards"
              title="Quality"
              highlight="Policy"
              intro="Core objectives to achieve this policy:"
              items={QUALITY_POLICY}
            />
          </Reveal>

          {/* EHS */}
          <Reveal delay={0.1}>
            <PolicyCard
              icon={ShieldCheck}
              number="02"
              eyebrow="Health & Safety"
              title="EHS"
              highlight="Policy"
              intro="Committed to providing a safe workplace and clean environment, to achieve this we shall:"
              items={EHS_POLICY}
              dark
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   VISION / MISSION CARD
========================================================= */

function ValueCard({
  icon: Icon,
  number,
  label,
  title,
  highlight,
  text,
  dark = false,
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden

        min-h-[390px]

        p-7
        sm:p-9
        md:p-11

        flex
        flex-col
        justify-between

        group

        ${
          dark
            ? "bg-[#202020] text-white"
            : "bg-white text-[#202020] border border-[#E3E3E3]"
        }
      `}
    >
      {/* Number */}
      <span
        className={`
          absolute
          -right-1
          -top-7

          text-[130px]
          md:text-[160px]

          font-extrabold
          leading-none

          ${
            dark
              ? "text-white/[0.035]"
              : "text-[#202020]/[0.035]"
          }
        `}
      >
        {number}
      </span>

      <div className="relative z-10">
        <div
          className="
            w-14
            h-14

            flex
            items-center
            justify-center

            bg-[#F6C62E]
            text-[#202020]

            mb-8
          "
        >
          <Icon size={25} strokeWidth={1.8} />
        </div>

        <span
          className={`
            text-[11px]
            uppercase
            tracking-[0.15em]
            font-bold

            ${
              dark ? "text-[#AAAAAA]" : "text-[#888888]"
            }
          `}
        >
          {label}
        </span>

        <h3
          className="
            text-[30px]
            md:text-[36px]

            font-extrabold

            mt-3
          "
        >
          {title}{" "}

          <span className="text-[#D6A900]">
            {highlight}
          </span>
        </h3>

        <p
          className={`
            text-[15px]
            leading-[1.8]

            mt-6
            max-w-[520px]

            ${
              dark ? "text-[#D0D0D0]" : "text-[#666666]"
            }
          `}
        >
          {text}
        </p>
      </div>

      <div
        className="
          relative
          z-10

          flex
          items-center
          gap-2

          mt-10

          text-[#D6A900]
          font-bold
          text-[13px]
        "
      >
        Vardhusa

        <ArrowUpRight
          size={16}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </div>

      <div
        className="
          absolute
          bottom-0
          left-0

          h-[5px]
          w-0

          bg-[#F6C62E]

          group-hover:w-full

          transition-all
          duration-500
        "
      />
    </div>
  );
}

/* =========================================================
   POLICY CARD
========================================================= */

function PolicyCard({
  icon: Icon,
  number,
  eyebrow,
  title,
  highlight,
  intro,
  items,
  dark = false,
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden

        h-full

        p-7
        md:p-9
        lg:p-10

        ${
          dark
            ? "bg-[#202020]"
            : "bg-[#F5F5F5] border border-[#E3E3E3]"
        }
      `}
    >
      {/* Big Number */}
      <span
        className={`
          absolute
          top-0
          right-3

          text-[100px]
          font-extrabold
          leading-none

          ${
            dark
              ? "text-white/[0.035]"
              : "text-black/[0.035]"
          }
        `}
      >
        {number}
      </span>

      <div className="relative z-10">
        <div
          className="
            flex
            items-center
            justify-between
            gap-5

            mb-8
          "
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[3px] bg-[#F6C62E]" />

              <span
                className={`
                  text-[11px]
                  uppercase
                  tracking-[0.15em]
                  font-bold

                  ${
                    dark
                      ? "text-[#AAAAAA]"
                      : "text-[#888888]"
                  }
                `}
              >
                {eyebrow}
              </span>
            </div>

            <h3
              className={`
                font-extrabold

                text-[29px]
                md:text-[34px]

                ${
                  dark
                    ? "text-white"
                    : "text-[#202020]"
                }
              `}
            >
              {title}{" "}

              <span
                className={
                  dark
                    ? "text-[#F6C62E]"
                    : "text-[#D6A900]"
                }
              >
                {highlight}
              </span>
            </h3>
          </div>

          <div
            className="
              shrink-0

              w-12
              h-12

              flex
              items-center
              justify-center

              bg-[#F6C62E]
              text-[#202020]
            "
          >
            <Icon size={23} />
          </div>
        </div>

        <p
          className={`
            text-[14.5px]
            leading-relaxed
            font-medium

            mb-7

            ${
              dark
                ? "text-[#CFCFCF]"
                : "text-[#666666]"
            }
          `}
        >
          {intro}
        </p>

        <ul className="space-y-4">
          {items.map((item, index) => (
            <li
              key={index}
              className="
                flex
                items-start
                gap-3
              "
            >
              <span
                className="
                  shrink-0

                  mt-[3px]

                  w-6
                  h-6

                  flex
                  items-center
                  justify-center

                  bg-[#F6C62E]
                  text-[#202020]
                "
              >
                <CheckCircle2 size={15} strokeWidth={2.2} />
              </span>

              <span
                className={`
                  text-[14px]
                  md:text-[14.5px]

                  leading-[1.65]

                  ${
                    dark
                      ? "text-[#D2D2D2]"
                      : "text-[#5F5F5F]"
                  }
                `}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}