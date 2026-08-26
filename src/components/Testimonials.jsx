import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const CLIENTS = [
  "Grand Hyatt",
  "Club Mahindra",
  "Aditya Birla Group",
  "Aashima Mall",
  "Shapoorji Pallonji",
  "Experion",
];

const TESTIMONIALS = [
  {
    quote:
      "Vardhusa is a very dependable contractor. They have successfully completed our firefighting works within our scheduled time frame, maintaining all the quality parameters.",
    name: "Sibasisb Bhattacharya",
    org: "Dhoot Infrastructure Project Ltd.",
    dark: false,
  },
  {
    quote:
      "We are doing two projects with Vardhusa over the past years, both were complex and time bound. On every occasion Vardhusa rose to the occasion and provided professional service above and beyond the scope of their contract. Their design expertise and subject knowledge is commendable — definitely recommend Vardhusa for your complex and time-bound projects.",
    name: "Ramanuj Mishra",
    org: "Dhoot Infrastructure Project Ltd.",
    dark: true,
  },
  {
    quote:
      "Vardhusa is our primary MEP partner since 2018. They have successfully completed our projects. They are very knowledgeable, competent, responsive and very owner-oriented in every phase of the project. We highly recommend Vardhusa for your engineering needs.",
    name: "M Ramachandran",
    org: "Experion Developers Private Limited",
    dark: false,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-wrap">
        {/* Client logos */}
        <Reveal>
          <p className="text-center text-ink/40 text-[13px] font-semibold tracking-[0.2em] uppercase mb-8">
            Trusted by leading names
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
            {CLIENTS.map((c) => (
              <div
                key={c}
                className="bg-mist rounded-2xl h-20 flex items-center justify-center px-3 hover:bg-navy-800 hover:text-white group transition-colors"
              >
                <span className="text-ink/60 group-hover:text-white text-[13.5px] font-display font-bold text-center leading-tight transition-colors">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-3xl p-8 flex flex-col ${
                t.dark ? "bg-navy-950 text-white lg:-translate-y-4" : "bg-mist text-ink"
              }`}
            >
              <Quote
                size={28}
                className={t.dark ? "text-brand-600" : "text-brand-600/70"}
                fill="currentColor"
              />
              <p
                className={`text-[14.5px] leading-relaxed mt-6 mb-8 flex-1 ${
                  t.dark ? "text-white/80" : "text-ink/60"
                }`}
              >
                {t.quote}
              </p>
              <div>
                <p className="font-display font-bold text-[16px]">{t.name}</p>
                <p className={`text-[13px] mt-0.5 ${t.dark ? "text-white/50" : "text-ink/40"}`}>
                  {t.org}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
