import { siteConfig } from "@/siteConfig";
import { useReveal } from "@/lib/hooks";
import { Star } from "lucide-react";

export function Reviews() {
  const ref = useReveal<HTMLDivElement>();
  const showReviews = siteConfig.sections.reviews;
  const showPress = siteConfig.sections.pressFeatures;
  if (!showReviews && !showPress) return null;

  return (
    <>
      {showReviews && (
        <section id="reviews" className="px-4 py-16" style={{ background: "var(--ui-panel)" }}>
          <div ref={ref} className="fade-up max-w-6xl mx-auto">
            <div className="mb-10">
              <p className="section-label mb-2">Reviews</p>
              <h2
                className="text-5xl font-black leading-[0.9] md:text-7xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                What the<br />Crowd Says
              </h2>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={20} fill="var(--brand-primary)" stroke="var(--brand-primary)" />
                  ))}
                </div>
                <span
                  className="text-sm font-bold uppercase tracking-[0.08em]"
                  style={{ color: "var(--ui-text-muted)" }}
                >
                  {siteConfig.ratings.googleRating} on Google · {siteConfig.ratings.reviewCount} reviews
                </span>
              </div>
            </div>

            <div className="grid gap-0 border-2 md:grid-cols-2" style={{ borderColor: "var(--ui-border-strong)" }}>
              {siteConfig.reviews.map((r, i) => (
                <blockquote
                  key={`${r.name}-${r.location}`}
                  className="border-b-2 border-r-0 p-6 last:border-b-0 md:[&:nth-child(odd)]:border-r-2"
                  style={{ background: i % 2 === 0 ? "var(--ui-panel-alt)" : "var(--ui-panel)", borderColor: "var(--ui-border-strong)" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center text-sm font-black border-2"
                      style={{
                        background: "var(--brand-primary)",
                        color: "var(--brand-on-primary)",
                        borderColor: "var(--brand-primary-strong)",
                      }}
                    >
                      {r.name.charAt(0)}
                    </div>
                    <div className="flex">
                      {Array.from({ length: r.stars }).map((_, i) => (
                        <Star key={i} size={14} fill="var(--brand-primary)" stroke="var(--brand-primary)" />
                      ))}
                    </div>
                  </div>
                  <p
                    className="text-base font-medium leading-relaxed"
                    style={{ color: "var(--ui-text)" }}
                  >
                    &quot;{r.quote}&quot;
                  </p>
                  <footer
                    className="mt-3 text-xs font-bold uppercase tracking-[0.14em]"
                    style={{ color: "var(--brand-primary)" }}
                  >
                    — {r.name}, {r.location}
                  </footer>
                </blockquote>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={siteConfig.ratings.leaveReviewUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-primary"
              >
                Leave a Review
              </a>
              {siteConfig.ratings.tripAdvisorUrl && (
                <a
                  href={siteConfig.ratings.tripAdvisorUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-outline"
                >
                  TripAdvisor
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {showPress && (
        <section id="press-features" className="px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <p className="section-label mb-2">Press</p>
              <h2
                className="text-5xl font-black leading-[0.9] md:text-7xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                In The Press
              </h2>
            </div>
            {/* Press features — alternating solid bg blocks */}
            <div className="grid gap-0 border-2 md:grid-cols-3" style={{ borderColor: "var(--ui-border-strong)" }}>
              {siteConfig.pressFeatures.map((feature, i) => (
                <article
                  key={feature.publication}
                  className="border-b-2 p-6 last:border-b-0 md:border-b-0 md:border-r-2 md:last:border-r-0"
                  style={{
                    background: i === 1 ? "var(--brand-primary)" : "var(--ui-panel)",
                    borderColor: "var(--ui-border-strong)",
                  }}
                >
                  <h3
                    className="text-lg font-black uppercase tracking-[0.08em]"
                    style={{ color: i === 1 ? "var(--brand-on-primary)" : "var(--ui-text)" }}
                  >
                    {feature.publication}
                  </h3>
                  <p
                    className="mt-3 text-sm font-medium leading-relaxed"
                    style={{ color: i === 1 ? "rgba(255,255,255,0.8)" : "var(--ui-text-muted)" }}
                  >
                    &quot;{feature.quote}&quot;
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}