import { Link } from "@tanstack/react-router";
import { BookOpen, Phone, Tag, ShoppingCart } from "lucide-react"; // 👈 ADDED ShoppingCart
import { siteConfig } from "@/siteConfig";
import { CartButton } from "@/components/ui/CartButton"; // 👈 ADDED

export function MobileBar() {
  if (!siteConfig.sections.mobileBar) return null;

  const primaryLocation = siteConfig.locations[0];
  const showReservations =
    siteConfig.integrations.reservationsEnabled &&
    (siteConfig.sections.reservationForm ||
      siteConfig.sections.privateDining ||
      siteConfig.sections.reservations ||
      siteConfig.sections.gifts);
  const showMenu = siteConfig.sections.menuSpecial || siteConfig.sections.menuGrid;
  const showCall = siteConfig.sections.contactDetails && Boolean(primaryLocation?.phone);
  const showSpecials = siteConfig.sections.specials;

  if (!showReservations && !showMenu && !showCall && !showSpecials) return null;

  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-30 flex"
      style={{ background: "var(--ui-panel)", borderTop: "2px solid var(--brand-primary)" }}
    >
      {/* Cart button - always visible */}  {/* 👈 ADDED */}
      <div className="flex min-h-[58px] flex-1 flex-col items-center justify-center border-r border-ui-border-strong">
        <CartButton />
      </div>

      {/* {showSpecials && (
        <Link
          to="/"
          hash="specials"
          className="flex min-h-[58px] flex-1 flex-col items-center gap-1 py-3 text-xs font-black uppercase tracking-[0.1em]"
          style={{ color: "var(--brand-primary)", borderRight: "1px solid var(--ui-border-strong)" }}
        >
          <Tag size={20} />
          Specials
        </Link>
      )} */}
      {showMenu && (
        <Link
          to="/menu"
          className="flex min-h-[58px] flex-1 flex-col items-center gap-1 py-3 text-xs font-black uppercase tracking-[0.1em]"
          style={{ color: "var(--ui-text)", borderRight: "1px solid var(--ui-border-strong)" }}
        >
          <BookOpen size={20} style={{ color: "var(--brand-primary)" }} />
          Menu
        </Link>
      )}
      {showCall && (
        <a
          href={`tel:${primaryLocation?.phone}`}
          className="flex min-h-[58px] flex-1 flex-col items-center gap-1 py-3 text-xs font-black uppercase tracking-[0.1em]"
          style={{ color: "var(--ui-text)" }}
        >
          <Phone size={20} style={{ color: "var(--brand-primary)" }} />
          Call
        </a>
      )}
    </nav>
  );
}