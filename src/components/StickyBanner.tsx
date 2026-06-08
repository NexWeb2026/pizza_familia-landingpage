import { Link } from "@tanstack/react-router";
import { useOpenStatus } from "@/lib/hooks";
import { siteConfig } from "@/siteConfig";

export function StickyBanner() {
  if (!siteConfig.sections.banner) return null;
  const { isOpenNow, today, nextOpen } = useOpenStatus();

  return (
    <div
      className="w-full border-b text-sm py-2 px-4 text-center"
      style={{
        background: "var(--brand-primary)",
        color: "var(--brand-on-primary)",
        borderColor: "var(--brand-primary-strong)",
      }}
    >
      {isOpenNow && today ? (
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.16em] hover:underline"
          style={{ color: "var(--brand-on-primary)" }}
        >
          ★ Open now · {today.openTime}–{today.closeTime} · Come on in
        </Link>
      ) : (
        <Link
          to="/contact"
          hash="find-us"
          className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.16em] hover:underline"
          style={{ color: "var(--brand-on-primary)" }}
        >
          ◑{" "}
          {today?.isOpen
            ? `Closed right now · Open today ${today.openTime}–${today.closeTime}`
            : `Closed today · Back ${nextOpen?.day ?? "soon"}`}{" "}
          · Check hours
        </Link>
      )}
    </div>
  );
}