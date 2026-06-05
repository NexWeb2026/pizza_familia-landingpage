import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/siteConfig";
import { useReveal } from "@/lib/hooks";
import { Flame, ChevronLeft, ChevronRight } from "lucide-react";
import { createGradientPlaceholder, isFilled, setImageFallback } from "@/lib/utils";

export function TodaysSpecial() {
  const ref = useReveal<HTMLDivElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const specials = siteConfig.specials;
  
  if (!siteConfig.sections.todaysSpecial || specials.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const canReserve =
    siteConfig.integrations.reservationsEnabled &&
    (siteConfig.sections.reservationForm ||
      siteConfig.sections.privateDining ||
      siteConfig.sections.reservations);

  return (
    <section
      id="tonights-special"
      className="px-4 py-8 md:py-12"
      style={{ background: "var(--brand-primary)" }}
    >
      <div ref={ref} className="fade-up max-w-6xl mx-auto">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p
              className="mb-1 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em]"
              style={{ color: "var(--brand-on-primary)", opacity: 0.8 }}
            >
              <Flame size={14} /> Specials
            </p>
            <h2
              className="text-3xl font-black leading-tight md:text-4xl"
              style={{ color: "var(--brand-on-primary)", fontFamily: "var(--font-heading)" }}
            >
              What's Hot
            </h2>
          </div>
          {/* Navigation arrows - visible on desktop */}
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scroll("left")}
              className="rounded-sm border-2 p-1 transition hover:bg-white/10"
              style={{ borderColor: "var(--brand-on-primary)" }}
              aria-label="Previous special"
            >
              <ChevronLeft size={20} style={{ color: "var(--brand-on-primary)" }} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="rounded-sm border-2 p-1 transition hover:bg-white/10"
              style={{ borderColor: "var(--brand-on-primary)" }}
              aria-label="Next special"
            >
              <ChevronRight size={20} style={{ color: "var(--brand-on-primary)" }} />
            </button>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scrollbar-none md:grid md:grid-cols-2 md:gap-5 md:overflow-visible lg:grid-cols-3"
          style={{ scrollbarWidth: "none" }}
        >
          {specials.map((special) => (
            <SpecialCard key={special.id} special={special} canReserve={canReserve} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecialCard({ special, canReserve }: { special: typeof siteConfig.specials[0]; canReserve: boolean }) {
  const [imageFailed, setImageFailed] = useState(!isFilled(special.image));
  const fallbackImage = createGradientPlaceholder(special.name, 400, 300);

  return (
    <div className="polaroid w-72 flex-none snap-start bg-white shadow-md md:w-auto md:flex-1">
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {special.isNew && (
          <div className="stamp-new absolute top-2 right-2 z-10">NEW!</div>
        )}
        {imageFailed ? (
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url("${fallbackImage}")` }}
          />
        ) : (
          <img
            src={special.image}
            alt={special.name}
            className="h-full w-full object-cover"
            loading="lazy"
            onError={(event) => {
              setImageFallback(event, fallbackImage);
              setImageFailed(true);
            }}
          />
        )}
      </div>

      {/* Content below polaroid */}
      <div className="mt-3 text-center">
        <h3
          className="text-base font-black uppercase tracking-wide"
          style={{ fontFamily: "var(--font-heading)", color: "#111" }}
        >
          {special.name}
        </h3>
        {special.tagline && (
          <p className="mt-0.5 text-xs font-medium italic" style={{ color: "#333" }}>
            {special.tagline}
          </p>
        )}
        <p className="mt-2 text-xs leading-relaxed" style={{ color: "#555" }}>
          {special.description}
        </p>
        {special.price && (
          <div
            className="mt-2 text-lg font-black tracking-wide"
            style={{ color: "var(--brand-primary)", fontFamily: "var(--font-heading)" }}
          >
            {special.price}
          </div>
        )}
        {special.badge && (
          <div className="exclusive-badge mt-2 text-[10px]">
            {special.badge}
          </div>
        )}
        {canReserve && (
          <Link
            to="/reservations"
            className="btn-primary mt-3 inline-block py-2 px-4 text-xs"
          >
            Get This Deal
          </Link>
        )}
      </div>
    </div>
  );
}