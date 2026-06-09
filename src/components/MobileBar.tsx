import { Link, useNavigate } from "@tanstack/react-router";
import { BookOpen, Phone, ShoppingCart } from "lucide-react";
import { siteConfig } from "@/siteConfig";
import { useCart } from "@/hooks/useCart";

export function MobileBar() {
  const navigate = useNavigate();
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  if (!siteConfig.sections.mobileBar) return null;

  const primaryLocation = siteConfig.locations[0];
  const showMenu = siteConfig.sections.menuSpecial || siteConfig.sections.menuGrid;
  const showCall = siteConfig.sections.contactDetails && Boolean(primaryLocation?.phone);

  const handleCartClick = () => {
    if (itemCount === 0) {
      // Toast notification
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-20 left-1/2 z-50 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-5 duration-200 md:bottom-8';
      toast.innerHTML = `
        <div class="flex items-center gap-3 border-2 border-brand bg-panel px-4 py-3 shadow-lg">
          <span class="text-sm font-black uppercase tracking-wide">Your cart is empty. Browse the menu first.</span>
        </div>
      `;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2000);
      navigate({ to: '/menu' });
    } else {
      navigate({ to: '/cart' });
    }
  };

  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-30 flex"
      style={{ background: "var(--ui-panel)", borderTop: "2px solid var(--brand-primary)" }}
    >
      {/* Cart button - styled like other mobile bar buttons */}
      <button
        onClick={handleCartClick}
        className="flex min-h-[58px] flex-1 flex-col items-center gap-1 py-3 text-xs font-black uppercase tracking-[0.1em] relative"
        style={{ color: "var(--ui-text)", borderRight: "1px solid var(--ui-border-strong)" }}
      >
        <ShoppingCart size={20} style={{ color: "var(--brand-primary)" }} />
        <span>Cart</span>
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-black text-white">
            {itemCount > 99 ? '99+' : itemCount}
          </span>
        )}
      </button>

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