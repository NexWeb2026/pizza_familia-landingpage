import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/siteConfig";
import { useReveal } from "@/lib/hooks";
import { Calendar, MapPin, Clock, X, Ticket } from "lucide-react";
import { createGradientPlaceholder, isFilled, setImageFallback } from "@/lib/utils";

export function EventsList() {
  if (!siteConfig.sections.upcomingEvents) return null;
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="upcoming-events" className="px-4 py-16">
      <div ref={ref} className="fade-up max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="section-label mb-2">What's On</p>
          <h1
            className="text-5xl font-black leading-[0.9] md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Upcoming Events
          </h1>
        </div>
        <div className="grid gap-0 border-2 md:grid-cols-2 lg:grid-cols-3" style={{ borderColor: "var(--ui-border-strong)" }}>
          {siteConfig.events.map((ev) => {
            const eventCardPlaceholder = createGradientPlaceholder(ev.name, 600, 240);
            return (
              <article
                key={`${ev.name}-${ev.date}`}
                className="flex flex-col overflow-hidden border-b-2 border-r-0 last:border-b-0 md:[&:nth-child(3n)]:border-r-0 md:border-r-2"
                style={{ background: "var(--ui-panel)", borderColor: "var(--ui-border-strong)" }}
              >
                <div
                  className="h-28"
                  style={{
                    backgroundImage: `url("${eventCardPlaceholder}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  aria-label={`${ev.name} placeholder`}
                />
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className="self-start mb-3 border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em]"
                    style={{
                      background: "var(--brand-primary)",
                      color: "var(--brand-on-primary)",
                      borderColor: "var(--brand-primary)",
                    }}
                  >
                    {ev.type}
                  </span>
                  <h3 className="text-xl font-black">{ev.name}</h3>
                  <div className="mt-3 space-y-1.5 text-sm" style={{ color: "var(--ui-text-muted)" }}>
                    <div className="flex items-center gap-2"><Calendar size={14} /> {ev.date}</div>
                    <div className="flex items-center gap-2"><Clock size={14} /> {ev.time}</div>
                    <div className="flex items-center gap-2"><MapPin size={14} /> {ev.location}</div>
                    {ev.address && <div className="text-xs font-bold uppercase tracking-[0.06em]">{ev.address}</div>}
                    {ev.notes && <div className="text-xs font-bold uppercase tracking-[0.06em]">{ev.notes}</div>}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: "var(--ui-text-muted)" }}>
                    {ev.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {ev.ticketUrl && (
                      <a
                        href={ev.ticketUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn-primary inline-flex items-center gap-2"
                      >
                        <Ticket size={14} /> Tickets
                      </a>
                    )}
                    {ev.googleMapsUrl && (
                      <a
                        href={ev.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn-outline inline-flex items-center gap-2"
                      >
                        <MapPin size={14} /> Map
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  if (!siteConfig.sections.photoGallery) return null;
  const [active, setActive] = useState<string | null>(null);
  const galleryItems = useMemo(() => siteConfig.gallery.filter((src) => isFilled(src)), []);
  if (galleryItems.length === 0) return null;

  const tileFallback = createGradientPlaceholder("Gallery", 600, 600);

  return (
    <section id="gallery" className="px-4 py-16" style={{ background: "var(--ui-panel)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="section-label mb-2">Gallery</p>
          <h2
            className="text-5xl font-black leading-[0.9] md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Moments at<br />{siteConfig.restaurantName}
          </h2>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.08em]" style={{ color: "var(--ui-text-muted)" }}>
            Follow us {siteConfig.socials.handle} for more.
          </p>
        </div>
        {/* Gallery grid — no gaps, borderless tiles with a single outer border */}
        <div className="grid grid-cols-2 border-2 md:grid-cols-3" style={{ borderColor: "var(--ui-border-strong)" }}>
          {galleryItems.map((src, i) => (
            <button
              key={`${src}-${i}`}
              onClick={() => setActive(src)}
              className="relative aspect-square overflow-hidden border-b-2 border-r-2"
              style={{ borderColor: "var(--ui-border-strong)" }}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(event) => setImageFallback(event, tileFallback)}
              />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.9)" }}
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-4 right-4 p-3 border-2"
            style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)", background: "rgba(0,0,0,0.6)" }}
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={active}
            alt="Gallery detail"
            className="max-w-full max-h-full"
            onError={(event) => setImageFallback(event, tileFallback)}
          />
        </div>
      )}
    </section>
  );
}

export function PrivateHireCTA() {
  if (!siteConfig.sections.privateHire) return null;
  return (
    <section id="private-hire" className="px-4 py-16">
      <div
        className="mx-auto border-l-4 p-8 text-center md:p-10"
        style={{ background: "var(--ui-panel-alt)", borderColor: "var(--brand-primary)" }}
      >
        <h2 className="text-3xl font-black md:text-4xl">Host Your Event Here</h2>
        <p
          className="mx-auto mt-3 max-w-xl text-sm leading-relaxed"
          style={{ color: "var(--ui-text-muted)" }}
        >
          From intimate dinners to milestone celebrations, we'll craft a memorable evening for your guests.
        </p>
        <Link to="/contact" hash="events" className="btn-primary mt-6 inline-block">
          Book the Space
        </Link>
      </div>
    </section>
  );
}