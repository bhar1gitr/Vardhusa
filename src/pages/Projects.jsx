import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const CATEGORIES = ["All", "Residential", "Commercial", "Infrastructure"];

const PROJECTS = [
  {
    name: "Piramal North Tower",
    location: "Mahalaxmi, Mumbai",
    category: "Residential",
    scope: "Plumbing & Firefighting",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Orion Business Park",
    location: "BKC, Mumbai",
    category: "Commercial",
    scope: "Full MEP",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Coastal Metro Depot",
    location: "Navi Mumbai",
    category: "Infrastructure",
    scope: "Mechanical & Electrical",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Serene Heights",
    location: "Thane, Maharashtra",
    category: "Residential",
    scope: "Plumbing",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Vertex Corporate Plaza",
    location: "Lower Parel, Mumbai",
    category: "Commercial",
    scope: "Electrical & Firefighting",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Riverfront Pumping Station",
    location: "Pune, Maharashtra",
    category: "Infrastructure",
    scope: "Mechanical",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80",
  },
];

const STATS = [
  { value: "17+", label: "Projects Delivered" },
  { value: "8+", label: "Cities Covered" },
  { value: "3", label: "Sectors Served" },
  { value: "200+", label: "People on Site" },
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Projects That Define"
        highlight="Our Expertise"
        subtitle="A growing portfolio of residential towers, commercial developments, and infrastructure works across Maharashtra."
        img="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Stats */}
      <section className="container-wrap py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="bg-mist rounded-2xl px-6 py-7 text-center">
                <p className="font-display font-extrabold text-3xl md:text-4xl text-ink">{s.value}</p>
                <p className="text-ink/55 text-[13.5px] mt-1.5 font-medium">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Filter + grid */}
      <section className="container-wrap pb-24 md:pb-32">
        <Reveal className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-colors ${
                active === cat
                  ? "bg-navy-800 text-white"
                  : "bg-mist text-ink/60 hover:text-ink"
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
                className="group rounded-3xl overflow-hidden bg-mist"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 text-ink text-[12.5px] font-semibold rounded-full px-3.5 py-1.5">
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-[18px] text-ink mb-1.5">{p.name}</h3>
                  <p className="flex items-center gap-1.5 text-ink/45 text-[13.5px] mb-3">
                    <MapPin size={14} /> {p.location}
                  </p>
                  <p className="text-brand-600 text-[13.5px] font-semibold">{p.scope}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
