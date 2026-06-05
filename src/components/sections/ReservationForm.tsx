import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/siteConfig";
import { useReveal } from "@/lib/hooks";
import { Check, Users, Sparkles, Gift } from "lucide-react";

export function ReservationForm() {
  const showReservationForm = siteConfig.sections.reservationForm;
  const showPrivateDining = siteConfig.sections.privateDining;
  const showLargeGroups = siteConfig.sections.reservations;
  const showGifts = siteConfig.sections.gifts;

  if (!showReservationForm && !showPrivateDining && !showLargeGroups && !showGifts) return null;
  const ref = useReveal<HTMLDivElement>();

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: siteConfig.reservations.timeslots[0] ?? "",
    guests: "2",
    requests: "",
  });

  const upd =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  return (
    <>
      {showReservationForm && (
        <section id="book-a-table" className="px-4 py-16">
          <div ref={ref} className="fade-up max-w-2xl mx-auto">
            <div className="mb-8">
              <p className="section-label mb-2">Reservations</p>
              <h1
                className="text-5xl font-black leading-[0.9] md:text-7xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Book a Table
              </h1>
              <p
                className="mt-3 text-sm font-bold uppercase tracking-[0.08em]"
                style={{ color: "var(--ui-text-muted)" }}
              >
                {siteConfig.reservations.note}
              </p>
            </div>

            {submitted ? (
              <div
                className="border-4 p-8 text-center"
                style={{ background: "var(--status-success-08)", borderColor: "var(--status-success)" }}
              >
                <Check size={36} className="mx-auto mb-3" style={{ color: "var(--status-success)" }} />
                <h3 className="text-2xl font-black">Request Sent</h3>
                <p
                  className="mt-2 font-bold uppercase tracking-[0.08em]"
                  style={{ color: "var(--ui-text-muted)" }}
                >
                  {siteConfig.contact.responseTimeNote}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-4 border-2 p-6 md:p-8"
                style={{ background: "var(--ui-panel)", borderColor: "var(--ui-border-strong)" }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Name" required value={form.name} onChange={upd("name")} />
                  <Field label="Email" type="email" required value={form.email} onChange={upd("email")} />
                  <Field label="Phone" type="tel" required value={form.phone} onChange={upd("phone")} />
                  <Field label="Date" type="date" required value={form.date} onChange={upd("date")} />
                  <SelectField label="Time" required value={form.time} onChange={upd("time")}>
                    {siteConfig.reservations.timeslots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </SelectField>
                  <SelectField label="Guests" required value={form.guests} onChange={upd("guests")}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                    ))}
                  </SelectField>
                </div>
                <div>
                  <label
                    className="mb-1 block text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: "var(--ui-text-muted)" }}
                  >
                    Special Requests
                  </label>
                  <textarea
                    rows={3}
                    value={form.requests}
                    onChange={upd("requests")}
                    className="w-full px-3 py-3 outline-none"
                    style={{
                      background: "var(--ui-panel-alt)",
                      border: "2px solid var(--ui-border-strong)",
                      color: "var(--ui-text)",
                    }}
                  />
                </div>
                <button type="submit" className="btn-primary w-full py-3.5">
                  Lock It In
                </button>
              </form>
            )}
          </div>
        </section>
      )}

      {showPrivateDining && (
        <section id="private-dining" className="px-4 py-12">
          <div
            className="mx-auto flex max-w-4xl flex-col items-start gap-6 border-l-4 p-8 md:flex-row"
            style={{ background: "var(--ui-panel-alt)", borderColor: "var(--brand-primary)" }}
          >
            <Sparkles size={28} style={{ color: "var(--brand-primary)" }} />
            <div className="flex-1">
              <h2 className="text-2xl font-black">Private Dining</h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ui-text-muted)" }}>
                {siteConfig.reservations.privateDiningNote}
              </p>
              <p
                className="mt-2 text-sm font-bold uppercase tracking-[0.08em]"
                style={{ color: "var(--ui-text-subtle)" }}
              >
                {siteConfig.contact.cateringResponseNote}
              </p>
            </div>
            <Link to="/contact" hash="events" className="btn-primary whitespace-nowrap">
              Hit Us Up
            </Link>
          </div>
        </section>
      )}

      {showLargeGroups && (
        <section id="large-groups" className="px-4 py-12">
          <div
            className="mx-auto flex max-w-4xl items-center gap-4 border-2 p-6"
            style={{ background: "var(--ui-panel)", borderColor: "var(--ui-border-strong)" }}
          >
            <Users size={24} style={{ color: "var(--brand-primary)" }} />
            <p
              className="flex-1 text-sm font-bold uppercase tracking-[0.08em]"
              style={{ color: "var(--ui-text-muted)" }}
            >
              {siteConfig.reservations.largeGroupNote}
            </p>
            <Link
              to="/contact"
              hash="events"
              className="text-sm font-bold uppercase tracking-[0.08em] underline"
              style={{ color: "var(--brand-primary)" }}
            >
              Event form
            </Link>
          </div>
        </section>
      )}

      {showGifts && (
        <section id="gifts" className="px-4 py-12">
          <div
            className="mx-auto border-2 p-6"
            style={{ background: "var(--ui-panel)", borderColor: "var(--ui-border-strong)" }}
          >
            <div className="flex items-center gap-3">
              <Gift size={22} style={{ color: "var(--brand-primary)" }} />
              <h2 className="text-2xl font-black">Gifts & Loyalty</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ui-text-muted)" }}>
              {siteConfig.gifts.voucherNote}
            </p>
            {siteConfig.gifts.voucherUrl && (
              <a
                href={siteConfig.gifts.voucherUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 inline-block text-sm font-bold uppercase tracking-[0.08em] underline"
                style={{ color: "var(--brand-primary)" }}
              >
                Grab a voucher
              </a>
            )}
            <p
              className="mt-4 text-sm font-bold uppercase tracking-[0.08em]"
              style={{ color: "var(--ui-text-subtle)" }}
            >
              {siteConfig.gifts.loyaltyNote}
            </p>
          </div>
        </section>
      )}
    </>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span
        className="mb-1 block text-xs font-bold uppercase tracking-[0.18em]"
        style={{ color: "var(--ui-text-muted)" }}
      >
        {label}
      </span>
      <input
        {...props}
        className="w-full px-3 py-3 outline-none"
        style={{
          background: "var(--ui-panel-alt)",
          border: "2px solid var(--ui-border-strong)",
          color: "var(--ui-text)",
        }}
      />
    </label>
  );
}

function SelectField({
  label,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string }) {
  return (
    <label className="block">
      <span
        className="mb-1 block text-xs font-bold uppercase tracking-[0.18em]"
        style={{ color: "var(--ui-text-muted)" }}
      >
        {label}
      </span>
      <select
        {...props}
        className="w-full px-3 py-3 outline-none"
        style={{
          background: "var(--ui-panel-alt)",
          border: "2px solid var(--ui-border-strong)",
          color: "var(--ui-text)",
        }}
      >
        {children}
      </select>
    </label>
  );
}