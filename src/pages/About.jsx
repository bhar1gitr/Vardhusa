import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import Reveal from "../components/Reveal";

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
            Know About Us!
          </h1>
          <p className="text-white/90 text-[15.5px] leading-relaxed max-w-lg font-medium">
            Discover the story behind Vardhusa Private Limited, a pioneering force in the EPC
            industry and a trusted leader in MEP solutions across India's residential,
            commercial, and infrastructure sectors. Guided by innovation and quality, we deliver
            tailored design, engineering, and installation services that achieve exceptional
            results. At Vardhusa, we are dedicated to building strong relationships and providing
            sustainable solutions that set new industry benchmarks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="px-6 sm:px-10 lg:px-14 py-16 lg:py-24 flex flex-col justify-center bg-white"
        >
          <h2 className="font-sans font-extrabold text-[38px] sm:text-[48px] leading-[1.05] text-[#0B0E1A] mb-6">
            History
          </h2>
          <p className="text-gray-500 text-[15.5px] leading-relaxed max-w-lg">
            Welcome to Vardhusa Private Limited (pronounced khaw-ZONE), a name derived from the
            Hebrew word meaning a dream, revelation, or vision. Our journey began with a clear
            purpose: transforming the MEP industry with innovative and reliable solutions. Since
            our inception, we have stayed true to this vision, combining expertise, precision,
            and a deep understanding of client needs to create exceptional outcomes.
          </p>
        </motion.div>
      </section>

      {/* Passion banner */}
      <Reveal y={0} className="relative overflow-hidden min-h-[420px] sm:min-h-[480px] flex items-center justify-center rounded-t-[28px] -mt-1">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,14,38,0.45), rgba(6,14,38,0.55)), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 font-sans font-extrabold text-white text-[32px] sm:text-[48px] text-center leading-[1.1] px-6 max-w-4xl tracking-tight"
        >
          A Company Born out of Passion and Inspiration
        </motion.h2>
      </Reveal>

      {/* Founded as MEP */}
      <section className="bg-[#F8F9FA] py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center flex flex-col items-center">
          <Reveal>
            <h2 className="font-sans font-extrabold text-[28px] sm:text-[38px] leading-[1.15] text-[#0B0E1A]">
              Founded as a Company Specializing in MEP
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#00AEEF] font-sans font-bold text-[17px] mt-2">
              (Mechanical, Electrical, and Plumbing)
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-500 text-[15px] leading-relaxed mt-6">
              We operate across India, delivering high-quality services for several high-profile
              projects. Vardhusa Pvt Ltd is dedicated to providing comprehensive Mechanical,
              Plumbing, and Firefighting services to residential, commercial, and infrastructure
              sectors.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-gray-500 text-[15px] leading-relaxed mt-4">
              Transitioning from calling ourselves contractors to establishing our identity as an
              engineering company marks a significant evolution in our journey. We believe in the
              power of value engineering. Our approach goes beyond traditional contracting; we
              meticulously analyze and optimize every aspect of our projects to deliver superior
              outcomes.
            </p>
          </Reveal>
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 160 }}
            className="text-[#00AEEF] mt-10"
          >
            <Building2 size={44} strokeWidth={1.8} />
          </motion.span>
        </div>
      </section>

      {/* Our Vision */}
      <SplitSection
        title="Our"
        highlight="Vision"
        text="Our Vision is to establish ourselves as a leading MEP firm, celebrated for groundbreaking solutions, exceptional craftsmanship, and a relentless focus on client delight. We aim to create a future where every project reflects our dedication to innovation, reliability, and positive impact. Rooted in integrity and driven by a passion for excellence, we aspire to leave a lasting legacy that inspires trust and transforms the industry for generations."
        img="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80"
        imageSide="right"
      />

      {/* Our Mission */}
      <SplitSection
        title="Our"
        highlight="Mission"
        text="Our mission is to lead the way in MEP contracting by delivering innovative, reliable, and high-quality solutions. We are dedicated to building lasting relationships with our clients, creating meaningful impact through every project, and setting new standards of excellence in the industry."
        img="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
        imageSide="left"
        bg="bg-white"
      />

      {/* CSR */}
      <section className="bg-[#F8F9FA] pt-20 md:pt-28 pb-6">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="bg-white rounded-[28px] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center shadow-sm border border-gray-100">
              <div>
                <h2 className="font-sans font-extrabold text-[30px] sm:text-[38px] leading-[1.15] text-[#0B0E1A] mb-5">
                  We believe in giving back to <span className="text-[#00AEEF]">the Society</span>
                </h2>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-lg">
                  Corporate Social Responsibility (CSR) promotes sustainable growth by addressing
                  social and environmental issues. It enhances a company's reputation and builds
                  trust with stakeholders. CSR also ensures businesses give back to society,
                  fostering positive community impact.
                </p>
                <button className="flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0098d1] text-white rounded-full pl-6 pr-2 py-2.5 text-[14.5px] font-semibold transition-colors">
                  Corporate Social Responsibility
                  <span className="bg-white/20 rounded-full p-2">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl overflow-hidden min-h-[300px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80"
                  alt="Hands holding a small plant"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What makes us different */}
      <SplitSection
        title="What make us Different"
        highlight="From Others"
        text="We believe in the growth of every individual working with us. We share knowledge and new technologies with each other and strive to implement them in our future projects. We prioritize a healthy work-life balance for our employees, ensuring their well-being and satisfaction both personally and professionally."
        img="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=900&q=80"
        imageSide="left"
        bg="bg-[#F8F9FA]"
        cta="Learn More"
      />
    </>
  );
}

function SplitSection({ title, highlight, text, img, imageSide = "right", bg = "bg-white", cta }) {
  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[420px] shadow-sm"
    >
      <img src={img} alt="" className="w-full h-full object-cover" />
    </motion.div>
  );

  const textBlock = (
    <Reveal delay={0.1}>
      <h2 className="font-sans font-extrabold text-[30px] sm:text-[42px] leading-[1.1] text-[#0B0E1A] mb-5">
        {title} <span className="text-[#00AEEF]">{highlight}</span>
      </h2>
      <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg">{text}</p>
      {cta && (
        <button className="mt-8 flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0098d1] text-white rounded-full pl-6 pr-2 py-2.5 text-[14.5px] font-semibold transition-colors">
          {cta}
          <span className="bg-white/20 rounded-full p-2">
            <ArrowRight size={16} />
          </span>
        </button>
      )}
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