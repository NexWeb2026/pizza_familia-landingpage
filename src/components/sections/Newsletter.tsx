import { useState } from "react";
import { siteConfig } from "@/siteConfig";
import { useReveal } from "@/lib/hooks";
import { Check } from "lucide-react";

export function Newsletter() {
  const ref = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  if (!siteConfig.sections.newsletter) return null;

  return (
    <section
      id="stay-updated"
      className="px-4 py-16"
      style={{ background: "var(--brand-primary)" }}
    >
      <div ref={ref} className="fade-up mx-auto max-w-2xl">
        <p
          className="mb-2 text-xs font-bold uppercase tracking-[0.28em]"
          style={{ color: "var(--brand-on-primary)", opacity: 0.75 }}
        >
          Stay in the loop
        </p>
        <h2
          className="text-5xl font-black leading-[0.9] md:text-7xl"
          style={{ color: "var(--brand-on-primary)", fontFamily: "var(--font-heading)" }}
        >
          Get the Drop
        </h2>
        <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
          Be the first to know about seasonal menus, events and exclusive evenings.
        </p>

        {submitted ? (
          <div
            className="mt-8 flex items-center gap-3 border-2 p-6"
            style={{ background: "rgba(0,0,0,0.2)", borderColor: "var(--brand-on-primary)" }}
          >
            <Check style={{ color: "var(--brand-on-primary)" }} />
            <span
              className="font-bold uppercase tracking-[0.08em]"
              style={{ color: "var(--brand-on-primary)" }}
            >
              Thanks. You're on the list.
            </span>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="mt-8 flex flex-col gap-0 border-2 sm:flex-row"
            style={{ borderColor: "var(--brand-on-primary)" }}
          >
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@burgerjoint.co.za"
              className="flex-1 px-4 py-3 outline-none"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                border: "none",
              }}
            />
            <button
              type="submit"
              className="px-6 py-3 font-bold uppercase tracking-[0.12em] transition-colors"
              style={{
                background: "var(--brand-on-primary)",
                color: "var(--brand-primary)",
                border: "none",
                fontFamily: "var(--font-heading)",
              }}
            >
              Join the List
            </button>
          </form>
        )}
      </div>
    </section>
  );
}