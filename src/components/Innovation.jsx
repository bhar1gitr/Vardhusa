import { ArrowUpRight, Target } from "lucide-react";

export default function Innovation() {
  return (
    <section className="bg-[#F5F5F5] py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12">
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />
              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#858585]">
                Driven by Innovation
              </span>
            </div>

            {/* <h2 className="font-sans font-extrabold text-[32px] md:text-[44px] leading-[1.1] text-[#202020] max-w-xl">
              Engineers with a Thirst
              <br />
              <span className="text-[#D6A900]">
                for Innovation
              </span>
            </h2> */}
          </div>

          {/* <p className="text-[#666666] max-w-md text-[15px] leading-relaxed lg:pt-8">
            Every individual working in our company is the owner of the
            company. We have all rights to take responsibilities, accept
            new challenges and achieve goals.
          </p> */}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Card */}
          <div className="relative overflow-hidden min-h-[420px] group bg-[#DADADA]">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80"
              alt="Engineer at work"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

            {/* Arrow Button */}
            <button
              type="button"
              className="
                absolute
                top-5
                right-5

                w-11
                h-11

                flex
                items-center
                justify-center

                bg-white
                text-[#202020]

                hover:bg-[#F6C62E]

                transition-all
                duration-300

                shadow-md
              "
            >
              <ArrowUpRight
                size={19}
                strokeWidth={2.4}
              />
            </button>

            {/* Bottom Message */}
            <div
              className="
                absolute
                bottom-5
                left-5
                right-5
                sm:right-auto

                flex
                items-center
                gap-3

                bg-white

                pl-3
                pr-5
                py-2.5

                shadow-lg
              "
            >
              <span
                className="
                  w-9
                  h-9

                  flex
                  items-center
                  justify-center

                  bg-[#F6C62E]
                  text-[#202020]
                "
              >
                <Target size={16} strokeWidth={2.2} />
              </span>

              <span className="text-[13.5px] font-semibold text-[#303030]">
                You are one step away from your Goal
              </span>
            </div>

            {/* Bottom Yellow Accent */}
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
          </div>

          {/* Right Card */}
          <div className="relative overflow-hidden min-h-[420px] group bg-[#DADADA]">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
              alt="Modern workspace"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Very light overlay */}
            <div className="absolute inset-0 bg-black/5" />

            {/* Yellow corner label */}
            <div
              className="
                absolute
                bottom-5
                right-5

                bg-[#F6C62E]
                text-[#202020]

                px-5
                py-3

                text-[13px]
                font-bold
                uppercase
                tracking-[0.08em]
              "
            >
              Innovation
            </div>

            {/* Hover accent */}
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
          </div>
        </div>
      </div>
    </section>
  );
}