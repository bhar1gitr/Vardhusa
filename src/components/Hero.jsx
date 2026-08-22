import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "3+", label: "Years of Experience", filled: false },
  { value: "17+", label: "Projects in 2021-2025", filled: true },
  { value: "200+", label: "Manpower with us", filled: false },
  { value: "8+", label: "Area we hold", filled: false },
];

export default function Hero() {
  return (
    <section id="home" className="container-wrap pt-6">
      <div className="relative rounded-[28px] overflow-hidden min-h-[640px] flex flex-col">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(6,14,38,0.55) 0%, rgba(6,14,38,0.15) 35%, rgba(6,14,38,0.75) 100%), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        {/* Text content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-10">
          <h1 className="font-display font-extrabold text-white text-[42px] sm:text-[58px] md:text-[68px] leading-[1.04] max-w-4xl">
            The Rise of Engineering
          </h1>
          <p className="text-white/85 text-[16px] md:text-[18px] max-w-2xl mt-6 leading-relaxed">
            Our Mission is to deliver superior MEP services that meet the highest standards of
            quality, safety and sustainability, ultimately enhancing the built environment
          </p>
          <button className="mt-8 flex items-center gap-2 bg-white/95 hover:bg-white text-ink font-semibold rounded-full pl-6 pr-2 py-2 text-[15px] transition-colors">
            Why Chazown
            <span className="bg-mist rounded-full p-2">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 px-4 md:px-8 pb-4 md:pb-8">
          {STATS.map((s) => (
            <div
              key={s.label}
              className={`rounded-2xl px-6 py-6 backdrop-blur-md ${
                s.filled ? "bg-navy-700/95 text-white" : "bg-white/92 text-ink"
              }`}
            >
              <p className="font-display font-extrabold text-3xl md:text-4xl">{s.value}</p>
              <p
                className={`text-[13px] md:text-[14px] mt-1.5 font-medium ${
                  s.filled ? "text-white/80" : "text-ink/60"
                }`}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
