import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { CATEGORIES, PROJECTS, STATS } from "../data/projectsData";

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        title="Projects That Define"
        highlight="Our Expertise"
        subtitle="A growing portfolio of residential towers, commercial developments, and infrastructure works across regions."
        img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Stats */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="bg-[#F8F9FA] rounded-none px-6 py-7 text-center shadow-sm border border-gray-100">
                <p className="font-sans font-extrabold text-3xl md:text-4xl text-[#0B0E1A]">{s.value}</p>
                <p className="text-gray-500 text-[13.5px] mt-1.5 font-medium">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Filter + grid */}
      <section className="container mx-auto px-4 lg:px-8 pb-24 md:pb-32">
        <Reveal className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-none text-[14px] font-semibold transition-colors ${
                active === cat
                  ? "bg-[#00AEEF] text-white shadow-md"
                  : "bg-[#F8F9FA] text-gray-500 hover:text-[#0B0E1A] border border-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-none overflow-hidden bg-[#F8F9FA] shadow-sm border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 text-[#0B0E1A] text-[12.5px] font-semibold rounded-none px-4 py-1.5 shadow-sm">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-sans font-bold text-[18px] text-[#0B0E1A] mb-1.5">{p.name}</h3>
                  <p className="flex items-center gap-1.5 text-gray-500 text-[13.5px] mb-4">
                    <MapPin size={14} /> {p.location}
                  </p>
                  <p className="text-[#00AEEF] text-[13.5px] font-bold">{p.scope}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}