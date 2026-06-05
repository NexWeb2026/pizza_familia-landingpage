import React from "react";
import { useMemo, useState } from "react";
import { siteConfig, type MenuTag, type MenuEntry } from "@/siteConfig";
import { Search, UtensilsCrossed } from "lucide-react";
import { createImagePlaceholder, isFilled, setImageFallback } from "@/lib/utils";

const CATEGORY_IDS: Record<string, string> = {
  Grills: "grills",
  Combos: "combos",
  Burgers: "burgers",
  "Smash Burgers": "smash-burgers",
  Starters: "starters",
  "Light Meals": "light-meals",
  "Junior Favourites": "junior-favourites",
  Desserts: "desserts",
  Drinks: "drinks",
};

export function MenuSection() {
  const [category, setCategory] = useState<(typeof siteConfig.menuFilters.categories)[number]>("All");
  const [tags, setTags] = useState<MenuTag[]>([]);
  const [query, setQuery] = useState("");
  const showMenuGrid = siteConfig.sections.menuGrid;
  const showTastingMenu = siteConfig.sections.tastingMenu;
  const categories = siteConfig.menuFilters.categories;
  const categoryList = categories.filter((c) => c !== "All");

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return siteConfig.menu.filter((m) => {
      if (category !== "All" && m.category !== category) return false;
      if (tags.length && !tags.every((t) => m.tags.includes(t))) return false;
      if (search) {
        const haystack = `${m.name} ${m.description} ${m.pairingNote ?? ""}`.toLowerCase();
        if (!haystack.includes(search)) return false;
      }
      return true;
    });
  }, [category, tags, query]);

  const grouped = useMemo(() => {
    return categoryList
      .filter((c) => category === "All" || category === c)
      .map((c) => ({ category: c, items: filtered.filter((m) => m.category === c) }))
      .filter((g) => g.items.length > 0);
  }, [filtered, category, categoryList]);

  const toggleTag = (t: MenuTag) =>
    setTags((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  if (!showMenuGrid && !showTastingMenu) return null;

  return (
    <section id="menu-grid" className="px-4 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="section-label mb-2">Our Menu</p>
          <h1
            className="text-5xl font-black leading-[0.9] md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What's on<br />the Grill
          </h1>
        </div>

        {/* {showTastingMenu && (
          <div
            className="mb-8 flex flex-col items-start gap-4 border-l-4 p-6 md:flex-row md:items-center"
            style={{ background: "var(--ui-panel)", borderColor: "var(--brand-primary)" }}
          >
            <div className="flex-1">
              <p className="section-label mb-1">{siteConfig.tastingMenu.courses}-Course Experience</p>
              <h3 className="text-2xl font-black">{siteConfig.tastingMenu.name}</h3>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--ui-text-muted)" }}>
                {siteConfig.tastingMenu.note}
              </p>
            </div>
            <div>
              <div
                className="text-2xl font-black tracking-[0.04em]"
                style={{ color: "var(--brand-primary)", fontFamily: "var(--font-heading)" }}
              >
                {siteConfig.tastingMenu.price}
              </div>
              {siteConfig.tastingMenu.winePairing && (
                <div className="text-xs font-bold uppercase tracking-[0.08em]" style={{ color: "var(--ui-text-muted)" }}>
                  + {siteConfig.tastingMenu.winePairing}
                </div>
              )}
            </div>
          </div>
        )} */}

        {showMenuGrid && (
          <>
            {/* Filters */}
            <div className="mb-8 space-y-4">
              {/* Category filter — sharp tab buttons */}
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    type="button"
                    className="min-h-10 px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] transition-colors"
                    style={{
                      background: category === c ? "var(--brand-primary)" : "var(--ui-panel)",
                      color: category === c ? "var(--brand-on-primary)" : "var(--ui-text-muted)",
                      border: "2px solid var(--ui-border-strong)",
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {/* Tag filter */}
              <div className="flex flex-wrap gap-2">
                {siteConfig.menuFilters.tags.map((t) => {
                  const active = tags.includes(t);
                  return (
                    <button
                      key={t}
                      onClick={() => toggleTag(t)}
                      type="button"
                      className="min-h-9 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] transition-colors"
                      style={{
                        background: active ? "var(--brand-primary-strong)" : "transparent",
                        color: active ? "var(--brand-on-primary)" : "var(--ui-text-muted)",
                        border: `2px solid ${active ? "var(--brand-primary)" : "var(--ui-border)"}`,
                      }}
                    >
                      {t}
                    </button>
                  );
                })}
                {tags.length > 0 && (
                  <button
                    onClick={() => setTags([])}
                    type="button"
                    className="text-xs font-bold uppercase tracking-[0.08em] underline"
                    style={{ color: "var(--ui-text-subtle)" }}
                  >
                    Clear tags
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="relative max-w-md">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search the menu..."
                  className="w-full py-3 pl-10 pr-3 text-sm outline-none"
                  style={{
                    background: "var(--ui-panel)",
                    border: "2px solid var(--ui-border-strong)",
                    color: "var(--ui-text)",
                  }}
                />
              </div>
            </div>

            {grouped.length === 0 && (
              <p
                className="py-12 text-center font-bold uppercase tracking-[0.08em]"
                style={{ color: "var(--ui-text-muted)" }}
              >
                Nothing matches those filters.
              </p>
            )}

            {grouped.map((g) => (
              <div key={g.category} id={CATEGORY_IDS[g.category]} className="mb-12 scroll-mt-32">
                {/* Category divider */}
                <div className="mb-5 flex items-center gap-4">
                  <h2
                    className="text-3xl font-black uppercase tracking-[0.06em] md:text-4xl"
                    style={{ color: "var(--brand-primary)", fontFamily: "var(--font-heading)" }}
                  >
                    {g.category}
                  </h2>
                  <div className="flex-1 h-0.5" style={{ background: "var(--brand-primary)", opacity: 0.25 }} />
                </div>
                <div className="grid md:grid-cols-2 gap-0 border-2" style={{ borderColor: "var(--ui-border-strong)" }}>
                  {g.items.map((m, i) => <MenuCard key={m.name} m={m} index={i} />)}
                </div>
              </div>
            ))}

            <div className="mt-16">
              <p
                className="mx-auto max-w-2xl text-xs font-medium uppercase tracking-[0.06em]"
                style={{ color: "var(--ui-text-subtle)" }}
              >
                Please inform your server of any allergies or dietary requirements. Our kitchen handles nuts,
                dairy, gluten, shellfish and eggs and cannot guarantee complete absence of trace allergens.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function MenuCard({ m, index }: { m: MenuEntry; index: number }) {
  const imageFallback = createImagePlaceholder(m.name, 420, 320);
  const [imageFailed, setImageFailed] = useState(!isFilled(m.image));

  return (
    <article
      className="flex flex-col gap-0 overflow-hidden border-b-2 border-r-0 last:border-b-0 sm:flex-row md:[&:nth-child(odd)]:border-r-2"
      style={{ background: "var(--ui-panel)", borderColor: "var(--ui-border-strong)" }}
    >
      {imageFailed ? (
        <div
          className="flex h-36 w-full items-center justify-center sm:h-auto sm:w-28"
          style={{ background: "var(--ui-panel-alt)" }}
        >
          <div className="text-center px-2">
            <UtensilsCrossed size={18} className="mx-auto mb-1" style={{ color: "var(--brand-primary)" }} />
            <span
              className="text-[10px] font-bold uppercase leading-tight tracking-[0.08em]"
              style={{ color: "var(--ui-text-muted)" }}
            >
              {m.name}
            </span>
          </div>
        </div>
      ) : (
        <img
          src={m.image}
          alt={m.name}
          className="h-36 w-full object-cover sm:h-auto sm:w-28"
          loading="lazy"
          onError={(event) => {
            setImageFallback(event, imageFallback);
            setImageFailed(true);
          }}
        />
      )}
      <div className="p-4 flex-1">
        <div className="flex justify-between items-start gap-3">
          <h3
            className="text-base font-black uppercase tracking-[0.06em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {m.name}
          </h3>
          <span
            className="whitespace-nowrap text-base font-black tracking-[0.06em]"
            style={{ color: "var(--brand-primary)", fontFamily: "var(--font-heading)" }}
          >
            {m.price}
          </span>
        </div>
        <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--ui-text-muted)" }}>
          {m.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {m.tags.map((t) => (
            <span
              key={t}
              className="border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em]"
              style={{
                background: "var(--brand-primary-opaque-12)",
                color: "var(--brand-primary-soft)",
                borderColor: "var(--brand-primary-strong)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        {m.pairingNote && (
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.06em]" style={{ color: "var(--ui-text-subtle)" }}>
            Pairing note: {m.pairingNote}
          </p>
        )}
      </div>
    </article>
  );
}