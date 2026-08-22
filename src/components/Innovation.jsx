import { ArrowUpRight, Target } from "lucide-react";

export default function Innovation() {
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="container-wrap">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-12">
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] leading-[1.1] text-ink max-w-xl">
            Engineers with a Thirst
            <br />
            <span className="text-brand-600">for Innovation</span>
          </h2>
          <p className="text-ink/55 max-w-md text-[15px] leading-relaxed lg:pt-2">
            Every individual working in our company is the owner of the company. We have all
            rights to take responsibilities, accept new challenges and achieve goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-3xl overflow-hidden min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80"
              alt="Engineer at work"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <button className="absolute top-5 right-5 bg-white rounded-full p-3 hover:-translate-y-0.5 transition-transform">
              <ArrowUpRight size={18} />
            </button>
            <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white rounded-full pl-3 pr-4 py-2 shadow-lg">
              <span className="bg-brand-600 text-white rounded-full p-1.5">
                <Target size={14} />
              </span>
              <span className="text-[13.5px] font-semibold text-ink">You are one step away from your Goal</span>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
              alt="Modern workspace"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
