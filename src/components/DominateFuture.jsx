import { Heart, ArrowUpRight } from "lucide-react";

export default function DominateFuture() {
  return (
    <section className="container-wrap py-20 md:py-28">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] leading-[1.1] text-ink">
            Built to Lead, Engineered to
            <br />
            Dominate <span className="text-brand-600">the Future</span>
          </h2>
          <p className="text-ink/55 max-w-xl mt-4 text-[15px] leading-relaxed">
            With a growing footprint, we operate across India, delivering high-quality services
            for several high-profile projects.
          </p>
        </div>
        <button className="shrink-0 self-start lg:self-auto bg-navy-800 hover:bg-navy-700 text-white rounded-full px-6 py-3 text-[14.5px] font-semibold transition-colors">
          Our Journey
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <GalleryCard
          img="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80"
          tall
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <GalleryCard
            img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
            tag="Team"
            className="sm:col-span-2"
          />
          <GalleryCard img="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=700&q=80" />
          <GalleryCard img="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?auto=format&fit=crop&w=700&q=80" />
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ img, tag, tall, className = "" }) {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden group ${
        tall ? "min-h-[420px] lg:min-h-full" : "min-h-[260px]"
      } ${className}`}
    >
      <img
        src={img}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <button className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2.5 transition-colors">
        <Heart size={16} strokeWidth={2} />
      </button>
      {tag && (
        <span className="absolute bottom-4 left-4 bg-white/95 text-ink text-[13px] font-semibold rounded-full px-4 py-1.5">
          {tag}
        </span>
      )}
    </div>
  );
}
