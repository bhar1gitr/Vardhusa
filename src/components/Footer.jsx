import { useState } from "react";
import { Send } from "lucide-react";
import logo from "../assets/logo.png";

const FOOTER_COLS = [
  {
    title: "Company",
    links: ["Home", "About", "Business", "Projects", "Careers", "CSR", "Contact"],
  },
  {
    title: "Policies",
    links: ["Disclaimer", "Quality Policy", "Privacy Policy", "HSE Policies"],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#F3F3F3]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* =========================================
            CTA SECTION
        ========================================== */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between

            gap-8
            lg:gap-12

            py-14
            md:py-16

            border-b
            border-[#D8D8D8]
          "
        >
          {/* CTA Content */}
          <div className="max-w-[680px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />

              <span
                className="
                  text-[11px]
                  sm:text-[12px]
                  md:text-[13px]

                  uppercase
                  tracking-[0.16em]
                  font-bold

                  text-[#777777]
                "
              >
                Let's Build Together
              </span>
            </div>

            <h2
              className="
                font-sans
                font-extrabold

                text-[30px]
                sm:text-[34px]
                md:text-[40px]
                lg:text-[42px]

                leading-[1.12]

                text-[#202020]
              "
            >
              Have a Project in{" "}
              <span className="text-[#D6A900]">
                Mind?
              </span>
              <br className="hidden sm:block" />
              {" "}Let's Build It Together.
            </h2>

            <p
              className="
                text-[#666666]

                mt-4

                text-[14px]
                md:text-[15px]

                leading-[1.75]

                max-w-[600px]
              "
            >
              From design and engineering to execution and handover,
              we're with you every step.
            </p>
          </div>

          {/* Email Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="
              flex
              items-center

              w-full
              lg:w-[460px]

              min-h-[58px]

              bg-[#202020]

              p-1.5
              pl-5

              border
              border-[#303030]

              shrink-0
            "
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Write your email here"
              className="
                flex-1
                min-w-0

                bg-transparent

                text-white
                placeholder-[#909090]

                text-[13.5px]
                sm:text-[14px]

                outline-none

                pr-4
              "
            />

            <button
              type="submit"
              className="
                h-[46px]

                flex
                items-center
                justify-center
                gap-2

                bg-[#F6C62E]
                text-[#202020]

                px-5
                sm:px-6

                text-[13px]
                sm:text-[14px]

                font-extrabold

                hover:bg-white

                transition-all
                duration-300

                shrink-0
              "
            >
              Submit
              <Send size={15} strokeWidth={2.2} />
            </button>
          </form>
        </div>

        {/* =========================================
            MIDDLE FOOTER
        ========================================== */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.4fr_1fr]

            gap-12
            lg:gap-20

            py-12
            md:py-14
          "
        >
          {/* Company Info */}
          <div className="max-w-[520px]">
            <img
              src={logo}
              alt="Vardhusa Logo"
              className="
                h-[38px]
                sm:h-[42px]

                w-auto
                object-contain

                mb-6
              "
            />

            <p
              className="
                text-[#666666]

                text-[13.5px]
                sm:text-[14px]

                leading-[1.85]

                max-w-[500px]
              "
            >
              Vardhusa Pvt. Ltd. delivers complete plumbing, firefighting,
              and MEP solutions for residential, commercial, and
              infrastructure projects. We help build safe, efficient, and
              reliable spaces—from planning to project completion.
            </p>
          </div>

          {/* Footer Links */}
          <div
            className="
              grid
              grid-cols-2

              gap-10
              sm:gap-16
              lg:gap-20

              lg:justify-self-end
              lg:min-w-[380px]
            "
          >
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h4
                  className="
                    relative
                    w-fit

                    font-sans
                    font-extrabold

                    text-[15px]
                    md:text-[16px]

                    text-[#202020]

                    mb-7
                  "
                >
                  {col.title}

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0

                      w-8
                      h-[2px]

                      bg-[#F6C62E]
                    "
                  />
                </h4>

                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="
                          inline-block

                          text-[#666666]

                          hover:text-[#D6A900]
                          hover:translate-x-1

                          text-[13.5px]
                          md:text-[14px]

                          font-medium

                          transition-all
                          duration-300
                        "
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

        {/* =========================================
            COPYRIGHT
        ========================================== */}
        <div
          className="
            border-t
            border-[#D8D8D8]

            py-6
          "
        >
          <p
            className="
              text-center

              text-[#777777]

              text-[12.5px]
              md:text-[13px]

              font-medium
            "
          >
            Copyright © 2026 Vardhusa - An EPC Company
          </p>
        </div>
      </div>
    </footer>
  );
}