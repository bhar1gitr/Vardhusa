import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "3+", label: "Years of Experience", filled: false },
  { value: "17+", label: "Projects in 2021-2025", filled: true },
  { value: "200+", label: "Manpower with us", filled: false },
  { value: "8+", label: "Area we hold", filled: false },
];

export default function Hero() {
  return (
    <section id="home" className="container mx-auto px-4 lg:px-8 pt-6 pb-12">
      <div className="relative rounded-[28px] overflow-hidden min-h-[680px] flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/80 via-[#0a1128]/60 to-[#0a1128]/95" />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
          <h1 className="font-sans font-extrabold text-white text-[48px] sm:text-[64px] md:text-[76px] leading-[1.1] max-w-5xl tracking-tight">
            The Rise of Engineering
          </h1>
          <p className="text-white/90 text-[16px] md:text-[18px] max-w-3xl mt-6 leading-relaxed font-medium">
            Our Mission is to deliver superior MEP services that meet the highest standards of
            quality, safety and sustainability, ultimately enhancing the built environment
          </p>
          <button className="mt-10 flex items-center gap-2.5 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-full px-6 py-3.5 text-[15px] transition-colors shadow-lg group">
            Why Vardhusa
            <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 px-4 md:px-8 pb-4 md:pb-8">
          {STATS.map((s) => (
            <div
              key={s.label}
              className={`rounded-[20px] px-6 py-8 backdrop-blur-md transition-colors ${
                s.filled ? "bg-[#00AEEF] text-white" : "bg-black/30 text-white hover:bg-black/40"
              }`}
            >
              <p className="font-sans font-extrabold text-3xl md:text-4xl">{s.value}</p>
              <p
                className={`text-[13px] md:text-[14px] mt-2 font-medium ${
                  s.filled ? "text-white/90" : "text-white/70"
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