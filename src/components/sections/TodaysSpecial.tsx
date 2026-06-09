import { useState } from "react";
import { siteConfig } from "@/siteConfig";
import { useReveal } from "@/lib/hooks";
import { Flame } from "lucide-react";
import { createGradientPlaceholder, isFilled, setImageFallback } from "@/lib/utils";
import { AddSpecialToCartButton } from "@/components/ui/AddSpecialToCartButton";

export function TodaysSpecial() {
  const ref = useReveal<HTMLDivElement>();
  const specials = siteConfig.specials;
  
  if (!siteConfig.sections.todaysSpecial || specials.length === 0) return null;

  return (
    <section
      id="tonights-special"
      className="px-4 py-8 md:py-12"
      style={{ background: "var(--brand-primary)" }}
    >
      <div ref={ref} className="fade-up max-w-7xl mx-auto">
        <div className="mb-8">
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

        {/* Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {specials.map((special) => (
            <SpecialCard key={special.id} special={special} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecialCard({ special }: { special: typeof siteConfig.specials[0] }) {
  const [imageFailed, setImageFailed] = useState(!isFilled(special.image));
  const fallbackImage = createGradientPlaceholder(special.name, 400, 300);

  return (
    <div className="polaroid relative h-full bg-white shadow-md">
      {special.isNew && (
        <div className="stamp-new absolute -top-3 -right-3 z-20">
          NEW!
        </div>
      )}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
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
      <div className="mt-3 text-center px-3 pb-4">
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
        <div className="mt-3">
          <AddSpecialToCartButton special={special} className="w-full" />
        </div>
      </div>
    </div>
  );
}