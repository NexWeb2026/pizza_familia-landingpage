import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/siteConfig";
import { SocialIcons } from "@/components/SocialIcons";
import { Phone, Mail, MapPin, Check, Accessibility, Car, CreditCard, Clock3 } from "lucide-react";
import { isFilled, setImageFallback, createImagePlaceholder } from "@/lib/utils";

// Primary location is always locations[0]
const primaryLocation = siteConfig.locations[0];

export function ContactDetails() {
  if (!siteConfig.sections.contactDetails) return null;
  return (
    <section id="get-in-touch" className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="section-label mb-2">Contact</p>
          <h1
            className="text-5xl font-black md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Hit Us Up
          </h1>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.08em]" style={{ color: "var(--ui-text-muted)" }}>
            {siteConfig.contact.responseTimeNote}
          </p>
        </div>

        <div className="grid gap-0 border-2 md:grid-cols-3" style={{ borderColor: "var(--ui-border-strong)" }}>
          {/* Phone — from primary location */}
          {isFilled(primaryLocation?.phone) && (
            <a
              href={`tel:${primaryLocation.phone}`}
              className="flex items-center gap-4 border-b-2 p-6 transition-colors hover:bg-[var(--brand-primary)] hover:text-[var(--brand-on-primary)] group md:border-b-0 md:border-r-2"
              style={{ borderColor: "var(--ui-border-strong)" }}
            >
              <Phone style={{ color: "black" }} className="group-hover:text-[var(--brand-on-primary)]" />
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "var(--ui-text-muted)" }}>Phone</div>
                <div className="text-lg font-black tracking-[0.04em]">{primaryLocation.phone}</div>
              </div>
            </a>
          )}

          {/* WhatsApp — from primary location */}
          {siteConfig.integrations.whatsappEnabled &&
            isFilled(siteConfig.socials.whatsappChannelUrl) &&
            isFilled(primaryLocation?.whatsapp) && (
            <a
              href={siteConfig.socials.whatsappChannelUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-4 border-b-2 p-6 transition-colors hover:bg-[var(--brand-primary)] hover:text-[var(--brand-on-primary)] group md:border-b-0 md:border-r-2"
              style={{ borderColor: "var(--ui-border-strong)" }}
            >
              <img
                src={siteConfig.iconAssets.whatsappBlack}
                alt="WhatsApp"
                width={26}
                height={26}
                onError={(event) => setImageFallback(event, siteConfig.iconAssets.whatsappBlack)}
              />
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "var(--ui-text-muted)" }}>WhatsApp</div>
                <div className="text-lg font-black tracking-[0.04em]">{primaryLocation.whatsapp}</div>
              </div>
            </a>
          )}

          <div className="p-6">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "var(--ui-text-muted)" }}>Follow</div>
            <SocialIcons variant="black" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function EventEnquiryForm() {
  if (!siteConfig.sections.eventsForm || !siteConfig.sections.privateDining) return null;

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Private Dining",
    date: "",
    guests: "",
    message: "",
  });
  const upd =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  return (
    <section id="socials" className="scroll-mt-32 px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <p className="section-label mb-2">Socials & Private Dining</p>
          <h2
            className="text-4xl font-black md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Book Your Socials
          </h2>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.08em]" style={{ color: "var(--ui-text-muted)" }}>
            {siteConfig.contact.cateringResponseNote}
          </p>
        </div>

        {submitted ? (
          <div
            className="border-4 p-8 text-center"
            style={{ background: "var(--status-success-08)", borderColor: "var(--status-success)" }}
          >
            <Check size={36} className="mx-auto mb-3" style={{ color: "var(--status-success)" }} />
            <h3 className="text-2xl font-black tracking-[0.02em]">Locked In</h3>
            <p className="mt-2 font-bold uppercase tracking-[0.08em]" style={{ color: "var(--ui-text-muted)" }}>
              {siteConfig.contact.cateringResponseNote}
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="space-y-4 border-2 p-6 md:p-8"
            style={{ background: "var(--ui-panel)", borderColor: "var(--ui-border-strong)" }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Name" required value={form.name} onChange={upd("name")} />
              <Input label="Email" type="email" required value={form.email} onChange={upd("email")} />
              <Input label="Phone" type="tel" required value={form.phone} onChange={upd("phone")} />
              <Select label="Event Type" value={form.eventType} onChange={upd("eventType")}>
                <option>Private Dining</option>
                <option>Wedding</option>
                <option>Corporate</option>
                <option>Celebration</option>
                <option>Other</option>
              </Select>
              <Input label="Date" type="date" required value={form.date} onChange={upd("date")} />
              <Input label="Guest Count" type="number" min={1} required value={form.guests} onChange={upd("guests")} />
            </div>
            <label className="block">
              <span className="mb-1 block text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "var(--ui-text-muted)" }}>
                Message
              </span>
              <textarea
                rows={4}
                value={form.message}
                onChange={upd("message")}
                className="w-full px-3 py-3 outline-none"
                style={{
                  background: "var(--ui-panel-alt)",
                  border: "2px solid var(--ui-border-strong)",
                  color: "var(--ui-text)",
                }}
              />
            </label>
            <button type="submit" className="btn-primary w-full py-3.5">
              Send It
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export function LocationSection() {
  const showMap = siteConfig.sections.locationMap;
  const showHours = siteConfig.sections.hours;
  const showFindUs = showMap || showHours || siteConfig.sections.location;
  if (!showFindUs) return null;

  const mapPlaceholder = createImagePlaceholder("Map unavailable", 1200, 760);

  // All location data from primaryLocation
  const loc = primaryLocation;
  const currentDayIndex = new Date().getDay();

  return (
    <section
      id="find-us"
      className="scroll-mt-32 px-4 py-16"
      style={{ background: "var(--ui-panel)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="section-label mb-2">Find Us</p>
          <h2
            className="text-5xl font-black md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Find the Spot
          </h2>
        </div>

        {showMap && (
          <div className="overflow-hidden border-2 mb-8" style={{ borderColor: "var(--ui-border-strong)" }}>
            {isFilled(loc?.mapEmbedUrl) ? (
              <iframe
                title="Map"
                src={loc.mapEmbedUrl}
                className="block h-96 w-full border-0"
                loading="lazy"
                onError={(event) => {
                  const target = event.currentTarget;
                  target.src = mapPlaceholder;
                }}
              />
            ) : (
              <div
                className="w-full h-96"
                style={{
                  backgroundImage: `url("${mapPlaceholder}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}
            <div
              className="p-3 text-center border-t-2"
              style={{ background: "var(--brand-primary)", borderColor: "var(--ui-border-strong)" }}
            >
              <a
                href={loc?.googleMapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm font-bold uppercase tracking-[0.08em]"
                style={{ color: "var(--brand-on-primary)" }}
              >
                Open in Maps ↗
              </a>
            </div>
          </div>
        )}

        {/* Info grid — sharp bordered boxes */}
        <div className="grid gap-0 border-2 sm:grid-cols-2 lg:grid-cols-4" style={{ borderColor: "var(--ui-border-strong)" }}>
          <Info icon={<MapPin size={18} />} label="Address">
            {loc?.address}
          </Info>
          <Info icon={<Car size={18} />} label="Parking">
            {loc?.parkingNote}
          </Info>
          <Info icon={<Accessibility size={18} />} label="Accessibility">
            {loc?.accessibilityNote || "Level access available"}
          </Info>
          <Info icon={<CreditCard size={18} />} label="Payment">
            {loc?.paymentMethods.join(" · ")}
          </Info>
        </div>

        {showHours && loc?.hours && (
          <div
            className="mt-5 border-2 p-5"
            style={{ background: "var(--ui-panel-alt)", borderColor: "var(--ui-border-strong)" }}
          >
            <h4
              className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em]"
              style={{ color: "var(--brand-primary)" }}
            >
              <Clock3 size={16} />
              Hours
            </h4>
            <ul className="grid gap-0 text-sm sm:grid-cols-2 lg:grid-cols-4">
              {loc.hours.map((h) => {
                const isToday = h.dayIndex === currentDayIndex;

                return (
                  <li
                    key={h.day}
                    className="flex justify-between border px-3 py-2.5"
                    style={{
                      background: isToday ? "var(--brand-primary)" : "var(--ui-panel)",
                      borderColor: "var(--ui-border-strong)",
                      color: isToday ? "var(--brand-on-primary)" : "var(--ui-text-muted)",
                      fontWeight: isToday ? 800 : undefined,
                    }}
                  >
                    <span className="font-bold uppercase tracking-[0.06em]">{h.day}</span>
                    <span>{h.isOpen ? `${h.openTime}\u2013${h.closeTime}` : "Closed"}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Delivery — resolve URL from primaryLocation.delivery via platformKey */}
        {siteConfig.integrations.deliveryEnabled &&
          siteConfig.sections.delivery &&
          siteConfig.delivery.length > 0 && (
          <div className="mt-12 text-center">
            <h3
              className="mb-5 text-2xl font-black"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get Delivery
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {siteConfig.delivery.map((d) => {
                const url = loc?.delivery?.[d.platformKey as keyof typeof loc.delivery] ?? "#";
                return (
                  <a
                    key={d.name}
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn-primary flex items-center gap-3"
                  >
                    <img
                      src={d.icon}
                      alt={d.iconAlt}
                      width={22}
                      height={22}
                      onError={(event) => setImageFallback(event, d.iconBlack)}
                    />
                    {d.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Info({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex gap-3 border-r p-4 last:border-r-0"
      style={{ background: "var(--ui-panel-alt)", borderColor: "var(--ui-border-strong)" }}
    >
      <div style={{ color: "var(--brand-primary)" }}>{icon}</div>
      <div>
        <div className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "var(--ui-text-muted)" }}>
          {label}
        </div>
        <div className="mt-0.5 text-sm">{children}</div>
      </div>
    </div>
  );
}

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
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

function Select({
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