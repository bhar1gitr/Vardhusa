import { Link } from "react-router-dom";

export default function PolicyLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-white text-[#202020]">
      {/* Page Header / Hero Banner */}
      <div className="bg-[#F3F3F3] border-b border-[#D8D8D8] py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[3px] bg-[#F6C62E]" />
            <span className="text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#777777]">
              Vardhusa Corporate
            </span>
          </div>
          <h1 className="font-sans font-extrabold text-[32px] sm:text-[40px] lg:text-[48px] text-[#202020] leading-[1.15]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[#666666] mt-3 text-[15px] md:text-[16px] max-w-[700px] leading-[1.7]">
              {subtitle}
            </p>
          )}
          <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#777777]">
            <Link to="/" className="hover:text-[#D6A900] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#202020]">{title}</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="prose prose-lg max-w-none text-[#555555] space-y-8 leading-[1.8]">
          {children}
        </div>
      </div>
    </div>
  );
}