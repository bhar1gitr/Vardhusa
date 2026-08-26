import { useState } from "react";
import { Send } from "lucide-react";

const FOOTER_COLS = [
  {
    title: "Home",
    links: ["About", "Business", "Projects", "Careers", "CSR", "Contact"],
  },
  {
    title: "Security",
    links: ["Disclaimer", "Quality Policy", "Privacy Policy", "HSE Policies"],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-mist pt-20 md:pt-28 pb-10">
      <div className="container-wrap">
        {/* CTA */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-14 border-b border-ink/10">
          <div>
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] leading-[1.1] text-ink">
              Ready To Work <span className="text-brand-600">With Us ?</span>
            </h2>
            <p className="text-ink/50 mt-3 text-[15px]">
              Experience top-notch customer service and let us guide you on your journey
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center bg-navy-950 rounded-full p-2 pl-6 w-full lg:w-[420px] shrink-0"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Write your email here"
              className="bg-transparent flex-1 outline-none text-white placeholder:text-white/40 text-[14.5px]"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white rounded-full px-6 py-3 text-[14.5px] font-semibold transition-colors shrink-0"
            >
              Submit
              <Send size={15} />
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 pt-14">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-5">
              <svg width="34" height="34" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M27 3C21 5 15 9 12 14c3-1 6-1 9 1-4 0-7 1.5-9.5 4.5C9 22 7 25.5 6 27c-1-4 .5-8 3-11-3 .5-6 2-8 4 1-5 4.5-9 9-11.5C14 5.5 20 3 27 3Z"
                  fill="#0B0E1A"
                />
              </svg>
              <div className="leading-tight">
                <p className="font-display font-extrabold text-[20px] tracking-tight text-ink">Vardhusa</p>
                <p className="text-[9px] tracking-[0.25em] text-ink/50 -mt-0.5">AN EPC COMPANY</p>
              </div>
            </div>
            <p className="text-ink/50 text-[14.5px] leading-relaxed">
              Vardhusa Pvt Ltd is dedicated to providing comprehensive Mechanical, Plumbing, and
              Firefighting services to residential, commercial, and infrastructure sectors.
            </p>
          </div>

          <div className="flex gap-16 md:gap-24">
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h4 className="font-display font-bold text-[16px] text-ink mb-4">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-ink/55 hover:text-brand-600 text-[14.5px] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-ink/40 text-[13.5px] mt-16">
          Copyright © 2024 Vardhusa - An EPC Company
        </p>
      </div>
    </footer>
  );
}
