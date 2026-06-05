import { useState } from "react";
import { siteConfig } from "@/siteConfig";
import { useReveal } from "@/lib/hooks";
import { Quote } from "lucide-react";
import { createGradientPlaceholder, isFilled, setImageFallback } from "@/lib/utils";

export function About() {
  const ref = useReveal<HTMLDivElement>();
  const [interiorFailed, setInteriorFailed] = useState(!isFilled(siteConfig.interiorImage));
  const [chefFailed, setChefFailed] = useState(!isFilled(siteConfig.chef.image));
  const interiorFallback = createGradientPlaceholder("Harbour Dining Room", 1200, 720);
  const chefFallback = createGradientPlaceholder(siteConfig.chef.name, 640, 760);
  if (!siteConfig.sections.about) return null;

  return (
    <section id="our-story" className="px-4 py-16">
      <div ref={ref} className="fade-up max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-10">
          <p className="section-label mb-2">Our Story</p>
          <h2
            className="text-5xl font-black leading-[0.9] md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Where the Grill<br />Does the Talking
          </h2>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <p className="text-base leading-relaxed md:text-lg" style={{ color: "var(--ui-text-muted)" }}>
            {siteConfig.story}
          </p>
          {/* Interior image — sharp border, no radius */}
          <div
            className="overflow-hidden border-2"
            style={{ borderColor: "var(--brand-primary)" }}
          >
            {interiorFailed ? (
              <div
                className="h-80 w-full"
                style={{
                  backgroundImage: `url("${interiorFallback}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-label="Interior placeholder"
              />
            ) : (
              <img
                src={siteConfig.interiorImage}
                alt="Restaurant interior"
                className="h-80 w-full object-cover"
                loading="lazy"
                onError={(event) => {
                  setImageFallback(event, interiorFallback);
                  setInteriorFailed(true);
                }}
              />
            )}
          </div>
        </div>

        {/* Chef card — solid panel, sharp edges */}
        {/* <div
          className="mt-12 grid gap-6 border-l-4 p-6 md:grid-cols-[260px_1fr] md:p-8"
          style={{
            background: "var(--ui-panel)",
            borderColor: "var(--brand-primary)",
            borderLeft: "6px solid var(--brand-primary)",
          }}
        >
          {chefFailed ? (
            <div
              className="h-64 w-full md:h-full"
              style={{
                backgroundImage: `url("${chefFallback}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-label={`${siteConfig.chef.name} placeholder`}
            />
          ) : (
            <img
              src={siteConfig.chef.image}
              alt={siteConfig.chef.name}
              className="h-64 w-full object-cover md:h-full"
              loading="lazy"
              onError={(event) => {
                setImageFallback(event, chefFallback);
                setChefFailed(true);
              }}
            />
          )}
          <div>
            <p className="section-label mb-2">{siteConfig.chef.title}</p>
            <h3
              className="text-4xl font-black"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {siteConfig.chef.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed md:text-base" style={{ color: "var(--ui-text-muted)" }}>
              {siteConfig.chef.bio}
            </p>
            <blockquote
              className="mt-5 border-l-4 pl-4 text-base font-bold uppercase tracking-[0.08em]"
              style={{ borderColor: "var(--brand-primary)", color: "var(--ui-text)" }}
            >
              <Quote size={16} className="inline mr-1 opacity-60" />
              {siteConfig.chef.quote}
            </blockquote>
            <p className="mt-4 text-sm" style={{ color: "var(--ui-text-subtle)" }}>
              Signature dish:{" "}
              <span style={{ color: "var(--brand-primary-soft)" }}>{siteConfig.chef.signatureDish}</span>
            </p>
          </div>
        </div> */}

        {/* Stats — solid background blocks */}
        <div className="mt-10 grid grid-cols-1 gap-0 border-2 sm:grid-cols-3" style={{ borderColor: "var(--ui-border-strong)" }}>
          {siteConfig.stats.map((s, i) => (
            <div
              key={s.label}
              className="p-6 text-center"
              style={{
                background: i % 2 === 0 ? "var(--brand-primary)" : "var(--ui-panel)",
                borderRight: i < siteConfig.stats.length - 1 ? "2px solid var(--ui-border-strong)" : "none",
              }}
            >
              <div
                className="text-3xl font-black tracking-[0.04em] md:text-4xl"
                style={{ color: i % 2 === 0 ? "var(--brand-on-primary)" : "var(--brand-primary)" }}
              >
                {s.value}
              </div>
              <div
                className="mt-1 text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: i % 2 === 0 ? "rgba(255,255,255,0.7)" : "var(--ui-text-muted)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}