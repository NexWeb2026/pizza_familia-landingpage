import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/siteConfig";
import { useReveal } from "@/lib/hooks";
import { createGradientPlaceholder, isFilled, setImageFallback } from "@/lib/utils";

export function Hero() {
  const ref = useReveal<HTMLDivElement>();
  const [heroFailed, setHeroFailed] = useState(!isFilled(siteConfig.heroImage));
  const heroFallback = createGradientPlaceholder(siteConfig.restaurantName, 1600, 900);
  const showReservationsCta =
    siteConfig.integrations.reservationsEnabled &&
    (siteConfig.sections.reservationForm ||
      siteConfig.sections.privateDining ||
      siteConfig.sections.reservations);
  const showMenuCta = siteConfig.sections.menuSpecial || siteConfig.sections.menuGrid;
  if (!siteConfig.sections.hero) return null;

  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      {heroFailed ? (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url("${heroFallback}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ) : (
        <img
          src={siteConfig.heroImage}
          alt={`${siteConfig.restaurantName} ambiance`}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(event) => {
            setImageFallback(event, heroFallback);
            setHeroFailed(true);
          }}
        />
      )}

      {/* Dark overlay — no gradient, flat darkening */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.62)" }}
      />

      {/* Thick brand-color bottom bar — replaces gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2"
        style={{ background: "var(--brand-primary)" }}
      />

      <div ref={ref} className="fade-up relative z-10 max-w-4xl px-4 text-center">
        {/* Cuisine type label — sharp box, no pill */}
        <span
          className="mb-5 inline-block px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em]"
          style={{
            background: "var(--brand-primary)",
            color: "var(--brand-on-primary)",
          }}
        >
          {siteConfig.cuisineType}
        </span>

        {/* Main headline — condensed, massive, all-caps */}
        <h1
          className="text-6xl font-black leading-[0.88] tracking-[0.02em] md:text-8xl lg:text-9xl"
          style={{
            color: "#fff",
            fontFamily: "var(--font-heading)",
            textShadow: "4px 4px 0 rgba(0,0,0,0.4)",
          }}
        >
          {siteConfig.restaurantName}
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-base font-bold uppercase tracking-[0.18em] md:text-lg"
          style={{ color: "rgba(255,255,255,0.80)" }}
        >
          {siteConfig.tagline}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          {showReservationsCta && (
            <Link
              to="/reservations"
              className="btn-primary"
            >
              Book a Table
            </Link>
          )}
          {showMenuCta && (
            <Link
              to="/menu"
              className="btn-outline"
              style={{
                borderColor: "#fff",
                color: "#fff",
              }}
            >
              See the Menu
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}