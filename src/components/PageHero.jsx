import { motion } from "framer-motion";

/**
 * Full-bleed rounded hero banner used on interior pages (Businesses,
 * Projects, Careers, CSR). Mirrors the Home hero's visual language at a
 * smaller scale so every page feels like the same site.
 */
export default function PageHero({ eyebrow, title, highlight, subtitle, img, minH = "min-h-[420px]" }) {
  return (
    <section className="container-wrap pt-6">
      <div className={`relative rounded-[28px] overflow-hidden ${minH} flex flex-col items-center justify-center text-center px-6`}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(6,14,38,0.6) 0%, rgba(6,14,38,0.35) 45%, rgba(6,14,38,0.72) 100%), url('${img}')`,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-3xl"
        >
          {eyebrow && (
            <span className="inline-block bg-white/15 text-white text-[13px] font-semibold tracking-wide rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
              {eyebrow}
            </span>
          )}
          <h1 className="font-display font-extrabold text-white text-[36px] sm:text-[50px] leading-[1.06]">
            {title} {highlight && <span className="text-white/70">{highlight}</span>}
          </h1>
          {subtitle && (
            <p className="text-white/85 text-[15.5px] md:text-[17px] max-w-xl mx-auto mt-5 leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
