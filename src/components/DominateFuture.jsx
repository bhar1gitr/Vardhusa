import { Heart } from "lucide-react";

export default function DominateFuture() {
  return (
    <section className="bg-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-28">
        
        {/* Heading Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[3px] bg-[#F6C62E]" />
              <span className="text-[12px] md:text-[13px] uppercase tracking-[0.16em] font-bold text-[#8A8A8A]">
                Building What Comes Next
              </span>
            </div>

            <h2 className="font-sans font-extrabold text-[32px] md:text-[44px] leading-[1.1] text-[#202020]">
              Built to Lead, Engineered to
              <br />
              Dominate{" "}
              <span className="text-[#D6A900]">
                the Future
              </span>
            </h2>

            <p className="text-[#666666] max-w-xl mt-4 text-[15px] leading-relaxed">
              With a growing footprint, we operate across India,
              delivering high-quality services for several high-profile
              projects.
            </p>
          </div>

          <button
            type="button"
            className="
              shrink-0
              self-start
              lg:self-auto
              bg-[#F6C62E]
              hover:bg-[#202020]
              text-[#202020]
              hover:text-white
              px-7
              py-3.5
              text-[14.5px]
              font-bold
              transition-all
              duration-300
            "
          >
            Our Journey
          </button>
        </div>

        {/* Gallery Grid */}
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

            <GalleryCard
              img="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=700&q=80"
            />

            <GalleryCard
              img="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?auto=format&fit=crop&w=700&q=80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({
  img,
  tag,
  tall,
  className = "",
}) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        group
        bg-[#DADADA]
        ${
          tall
            ? "min-h-[420px] lg:min-h-full"
            : "min-h-[260px]"
        }
        ${className}
      `}
    >
      {/* Image */}
      <img
        src={img}
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/55
          via-black/10
          to-transparent
        "
      />

      {/* Heart Button */}
      <button
        type="button"
        className="
          absolute
          top-4
          right-4

          w-10
          h-10

          flex
          items-center
          justify-center

          bg-white
          text-[#D6A900]

          hover:bg-[#F6C62E]
          hover:text-[#202020]

          transition-all
          duration-300
        "
      >
        <Heart size={17} strokeWidth={2} />
      </button>

      {/* Tag */}
      {tag && (
        <span
          className="
            absolute
            bottom-4
            left-4

            bg-[#F6C62E]
            text-[#202020]

            text-[13px]
            font-bold

            px-4
            py-2
          "
        >
          {tag}
        </span>
      )}

      {/* Yellow Bottom Accent */}
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
  );
}