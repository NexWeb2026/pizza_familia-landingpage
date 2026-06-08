import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/siteConfig";
import { SocialIcons } from "./SocialIcons";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { createImagePlaceholder, setImageFallback } from "@/lib/utils";

export function Footer() {
  if (!siteConfig.sections.footer) return null;

  const logoFallback = createImagePlaceholder(siteConfig.restaurantName, 340, 110);
  const showMenuLink = siteConfig.sections.menuSpecial || siteConfig.sections.menuGrid;
  const showSocialsLink =
    siteConfig.sections.socials &&
    (siteConfig.sections.upcomingEvents || siteConfig.sections.photoGallery || siteConfig.sections.privateHire);

  const loc = siteConfig.locations[0];

  // Resolve per-location delivery URLs using each platform's platformKey
  const deliveryLinks = siteConfig.integrations.deliveryEnabled
    ? siteConfig.delivery
        .map((d) => ({ ...d, url: loc?.delivery?.[d.platformKey] }))
        .filter((d): d is typeof d & { url: string } => Boolean(d.url))
    : [];

  return (
    <footer
      className="mt-16"
      style={{ background: "var(--ui-text)", color: "var(--ui-page)", borderTop: "4px solid var(--brand-primary)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">

        {/* Brand */}
        <div className="space-y-4">
          <img
            src={siteConfig.branding.logo}
            alt={siteConfig.branding.logoAlt}
            className="h-14 w-14 object-cover"
            style={{ border: "2px solid var(--brand-primary)" }}
            onError={(e) => setImageFallback(e, logoFallback)}
          />
          <p className="text-sm leading-relaxed" style={{ color: "rgba(253,248,242,0.65)" }}>
            {siteConfig.tagline}
          </p>
          <p className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: "var(--brand-primary)" }}>
            {siteConfig.cuisineType} · Est. {siteConfig.foundedYear}
          </p>
          {siteConfig.contact.email && (
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 text-xs hover:underline"
              style={{ color: "rgba(253,248,242,0.5)" }}
            >
              <Mail size={12} style={{ color: "var(--brand-primary)" }} />
              {siteConfig.contact.email}
            </a>
          )}
        </div>

        {/* Location */}
        <div>
          <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em]" style={{ color: "var(--brand-primary)" }}>
            Find Us
          </h4>
          {loc && (
            <div className="space-y-2">
              <p className="text-sm font-black uppercase tracking-[0.1em]" style={{ color: "var(--ui-page)" }}>
                {loc.name}
              </p>
              {loc.address && (
                <p className="flex items-start gap-2 text-xs" style={{ color: "rgba(253,248,242,0.6)" }}>
                  <MapPin size={12} className="mt-0.5 shrink-0" style={{ color: "var(--brand-primary)" }} />
                  {loc.address}
                </p>
              )}
              {loc.phone && (
                <a
                  href={`tel:${loc.phone}`}
                  className="flex items-center gap-2 text-xs hover:underline"
                  style={{ color: "rgba(253,248,242,0.6)" }}
                >
                  <Phone size={12} style={{ color: "var(--brand-primary)" }} />
                  {loc.phone}
                </a>
              )}
              {loc.parkingNote && (
                <p className="text-xs" style={{ color: "rgba(253,248,242,0.4)" }}>
                  {loc.parkingNote}
                </p>
              )}
            </div>
          )}

          {/* Delivery links */}
          {deliveryLinks.length > 0 && (
            <div className="mt-5">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.16em]" style={{ color: "var(--brand-primary)" }}>
                Order Online
              </p>
              <div className="flex flex-col gap-2">
                {deliveryLinks.map((d) => (
                  <a
                    key={d.name}
                    href={d.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] hover:underline"
                    style={{ color: "rgba(253,248,242,0.7)" }}
                  >
                    <img
                      src={d.icon}
                      alt={d.iconAlt}
                      width={14}
                      height={14}
                      onError={(e) => setImageFallback(e, d.iconBlack)}
                    />
                    {d.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Hours */}
        <div>
          <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em]" style={{ color: "var(--brand-primary)" }}>
            <Clock size={12} className="inline mr-1" />
            Trading Hours
          </h4>
          {siteConfig.sections.hours && loc?.hours && loc.hours.length > 0 ? (
            <ul className="space-y-1">
              {loc.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between gap-3 text-xs"
                  style={{
                    color: h.isOpen ? "rgba(253,248,242,0.75)" : "rgba(253,248,242,0.3)",
                    fontWeight: h.isOpen ? 600 : 400,
                  }}
                >
                  <span>{h.day}</span>
                  <span>{h.isOpen ? `${h.openTime}–${h.closeTime}` : "Closed"}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs" style={{ color: "rgba(253,248,242,0.4)" }}>Hours hidden.</p>
          )}
        </div>

        {/* Socials & nav */}
        <div>
          <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em]" style={{ color: "var(--brand-primary)" }}>
            Follow Us
          </h4>
          <SocialIcons variant="color" size={22} />
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.1em]" style={{ color: "rgba(253,248,242,0.45)" }}>
            {siteConfig.socials.handle}
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {showMenuLink && (
              <Link to="/menu" className="text-sm font-black uppercase tracking-[0.1em] hover:underline" style={{ color: "var(--ui-page)" }}>
                → See the Menu
              </Link>
            )}
            {showSocialsLink && (
              <Link to="/socials" className="text-sm font-black uppercase tracking-[0.1em] hover:underline" style={{ color: "var(--ui-page)" }}>
                → Gallery
              </Link>
            )}
            <Link to="/contact" className="text-sm font-black uppercase tracking-[0.1em] hover:underline" style={{ color: "var(--ui-page)" }}>
              → Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-4 text-center text-xs font-bold uppercase tracking-[0.14em]"
        style={{ borderColor: "rgba(253,248,242,0.1)", color: "rgba(253,248,242,0.35)" }}
      >
        © {new Date().getFullYear()} {siteConfig.restaurantName}. All rights reserved.
      </div>
    </footer>
  );
}