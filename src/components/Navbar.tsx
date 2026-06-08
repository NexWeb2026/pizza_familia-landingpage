import { useMemo, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/siteConfig";
import { SocialIcons } from "./SocialIcons";
import { CartButton } from "@/components/ui/CartButton"; // 👈 ADDED
import { createImagePlaceholder, setImageFallback } from "@/lib/utils";

type SubLink = { label: string; to: string; hash?: string };
type NavItem = { label: string; to: string; subs: SubLink[] };

function getNavItems() {
  const homeSubs: SubLink[] = [
    siteConfig.sections.about && { label: "Our Story", to: "/", hash: "our-story" },
    siteConfig.sections.specials && { label: "Specials", to: "/", hash: "specials" },
    siteConfig.sections.reviews && { label: "Reviews", to: "/", hash: "reviews" },
    siteConfig.sections.pressFeatures && { label: "Press", to: "/", hash: "press-features" },
    siteConfig.sections.newsletter && { label: "Get Updates", to: "/", hash: "stay-updated" },
  ].filter(Boolean) as SubLink[];

  const menuSubs: SubLink[] = [
    siteConfig.sections.menuGrid && { label: "Burgers", to: "/menu", hash: "burgers" },
    siteConfig.sections.menuGrid && { label: "Pizzas", to: "/menu", hash: "pizzas" },
    siteConfig.sections.menuGrid && { label: "Grills", to: "/menu", hash: "grills" },
    siteConfig.sections.menuGrid && { label: "Combos", to: "/menu", hash: "combos" },
    siteConfig.sections.menuGrid && { label: "Starters", to: "/menu", hash: "starters" },
    siteConfig.sections.menuGrid && { label: "Light Meals", to: "/menu", hash: "light-meals" },
    siteConfig.sections.menuGrid && { label: "Extras", to: "/menu", hash: "extras" },
  ].filter(Boolean) as SubLink[];

  const socialsSubs: SubLink[] = [
    siteConfig.sections.upcomingEvents && { label: "Upcoming Events", to: "/socials", hash: "upcoming-events" },
    siteConfig.sections.photoGallery && { label: "Gallery", to: "/socials", hash: "gallery" },
    siteConfig.sections.privateHire && { label: "Private Hire", to: "/socials", hash: "private-hire" },
  ].filter(Boolean) as SubLink[];

  const hasFindUsContent = siteConfig.sections.locationMap || siteConfig.sections.hours || siteConfig.sections.location;
  const contactSubs: SubLink[] = [
    siteConfig.sections.contactDetails && { label: "Hit Us Up", to: "/contact", hash: "get-in-touch" },
    siteConfig.sections.eventsForm && { label: "Group Booking", to: "/contact", hash: "socials" },
    hasFindUsContent && { label: "Find Us", to: "/contact", hash: "find-us" },
  ].filter(Boolean) as SubLink[];

  const navItems: NavItem[] = [];
  if (homeSubs.length > 0) navItems.push({ label: "Home", to: "/", subs: homeSubs });
  if (menuSubs.length > 0) navItems.push({ label: "Menu", to: "/menu", subs: menuSubs });
  if (siteConfig.sections.socials && socialsSubs.length > 0) navItems.push({ label: "Socials", to: "/socials", subs: socialsSubs });
  if (contactSubs.length > 0) navItems.push({ label: "Contact", to: "/contact", subs: contactSubs });
  return navItems;
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accordion, setAccordion] = useState<string | null>(null);
  const location = useLocation();
  const navItems = useMemo(() => getNavItems(), []);
  const logoFallback = createImagePlaceholder(siteConfig.restaurantName, 300, 96);

  return (
    <header
      className="sticky top-0 z-40"
      style={{
        background: "var(--ui-panel)",
        borderBottom: "2px solid var(--ui-border-strong)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
        {/* Logo — square crop */}
        <Link
          to="/"
          className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src={siteConfig.branding.logo}
            alt={siteConfig.branding.logoAlt}
            className="block h-full w-full object-cover"
            onError={(event) => setImageFallback(event, logoFallback)}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-0 lg:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <div key={item.label} className="relative group">
                <Link
                  to={item.to}
                  className="inline-flex h-10 items-center gap-1 px-4 text-sm font-bold uppercase tracking-[0.18em] transition-colors"
                  style={{
                    color: isActive ? "var(--brand-primary)" : "var(--ui-text)",
                    borderBottom: isActive ? "2px solid var(--brand-primary)" : "2px solid transparent",
                  }}
                >
                  {item.label}
                  <ChevronDown size={13} className="opacity-50 transition-transform group-hover:rotate-180" />
                </Link>

                {/* Dropdown */}
                <div className="absolute left-0 top-full min-w-52 invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 z-50">
                  <div
                    style={{
                      background: "var(--ui-panel)",
                      border: "2px solid var(--ui-border-strong)",
                      boxShadow: "4px 4px 0 var(--brand-primary)",
                    }}
                  >
                    {item.subs.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        hash={s.hash}
                        className="block px-4 py-2.5 text-sm font-bold uppercase tracking-[0.1em] transition-colors"
                        style={{ color: "var(--ui-text-muted)", borderBottom: "1px solid var(--ui-border)" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "var(--brand-primary)";
                          (e.currentTarget as HTMLElement).style.color = "var(--brand-on-primary)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                          (e.currentTarget as HTMLElement).style.color = "var(--ui-text-muted)";
                        }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Desktop socials + cart button */}  {/* 👈 UPDATED */}
        <div className="hidden h-9 shrink-0 items-center gap-3 lg:flex">
          <SocialIcons variant="black" size={18} />
          <CartButton />  {/* 👈 ADDED */}
        </div>

        {/* Mobile toggle — square */}
        <button
          className="flex min-h-10 min-w-10 shrink-0 items-center justify-center border-2 lg:hidden"
          style={{ borderColor: "var(--ui-border-strong)", color: "var(--ui-text)" }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          type="button"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer (unchanged, but CartButton is not needed inside because MobileBar handles it) */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t-2"
          style={{ borderColor: "var(--ui-border-strong)", background: "var(--ui-panel)" }}
        >
          <div className="max-h-[80vh] overflow-y-auto px-4 py-2">
            {navItems.map((item) => {
              const open = accordion === item.label;
              return (
                <div key={item.label} className="border-b" style={{ borderColor: "var(--ui-border-strong)" }}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 py-3 text-sm font-black uppercase tracking-[0.14em]"
                      style={{ color: location.pathname === item.to ? "var(--brand-primary)" : "var(--ui-text)" }}
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() => setAccordion(open ? null : item.label)}
                      className="min-h-11 min-w-11 p-3"
                      aria-label={`Toggle ${item.label} sub-menu`}
                      type="button"
                    >
                      <ChevronDown
                        size={18}
                        style={{ color: "var(--ui-text)" }}
                        className={open ? "rotate-180 transition-transform" : "transition-transform"}
                      />
                    </button>
                  </div>
                  {open && (
                    <div className="pb-2 pl-3">
                      {item.subs.map((s) => (
                        <Link
                          key={s.label}
                          to={s.to}
                          hash={s.hash}
                          onClick={() => { setMobileOpen(false); setAccordion(null); }}
                          className="block py-2.5 text-sm font-bold uppercase tracking-[0.1em]"
                          style={{ color: "var(--ui-text-muted)" }}
                        >
                          — {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Socials block */}
            <div
              className="my-4 border-2 p-4"
              style={{ borderColor: "var(--ui-border-strong)", background: "var(--ui-panel-alt)" }}
            >
              <p
                className="mb-3 text-xs font-black uppercase tracking-[0.2em]"
                style={{ color: "var(--ui-text-muted)" }}
              >
                Follow Us
              </p>
              <SocialIcons variant="black" size={20} />
              <p
                className="mt-3 text-xs font-bold uppercase tracking-[0.1em]"
                style={{ color: "var(--ui-text-subtle)" }}
              >
                {siteConfig.socials.handle}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}