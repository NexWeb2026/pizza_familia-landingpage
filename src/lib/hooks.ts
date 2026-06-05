import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/siteConfig";
import type { WeeklyHours } from "@/siteConfig"; // or define locally

/** Cross-page hash scroll. Re-runs on hash/path change. */
export function useHashScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const scrollToCurrentHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const id = hash.replace("#", "");
      if (!id) return;

      if (timeoutId) clearTimeout(timeoutId);
      // Wait for route content/images to settle after navigation
      timeoutId = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    };

    scrollToCurrentHash();
    window.addEventListener("hashchange", scrollToCurrentHash);
    window.addEventListener("popstate", scrollToCurrentHash);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("hashchange", scrollToCurrentHash);
      window.removeEventListener("popstate", scrollToCurrentHash);
    };
  }, []);
}

/** Adds 'in' class when element enters viewport for fade-up animation. */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in");
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function timeToMinutes(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

// Use the location's hours type – same as WeeklyHours
type HoursEntry = {
  day: string;
  dayIndex: number;
  openTime: string;
  closeTime: string;
  isOpen: boolean;
  note?: string;
};

export type OpenStatus = {
  isOpenNow: boolean;
  today?: HoursEntry;
  nextOpen?: HoursEntry;
};

export function useOpenStatus(): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>(() => computeStatus());
  useEffect(() => {
    setStatus(computeStatus());
    const id = setInterval(() => setStatus(computeStatus()), 60_000);
    return () => clearInterval(id);
  }, []);
  return status;
}

function computeStatus(): OpenStatus {
  // Get hours from the primary location (fallback to empty array)
  const hours: HoursEntry[] = siteConfig.locations?.[0]?.hours ?? [];
  
  // If no hours data, return closed state
  if (hours.length === 0) {
    return { isOpenNow: false, today: undefined, nextOpen: undefined };
  }

  const now = new Date();
  const dayIndex = now.getDay(); // 0 = Sunday
  const minutes = now.getHours() * 60 + now.getMinutes();
  const today = hours.find((h) => h.dayIndex === dayIndex);
  
  let isOpenNow = false;
  if (today?.isOpen && today.openTime && today.closeTime) {
    isOpenNow =
      minutes >= timeToMinutes(today.openTime) &&
      minutes < timeToMinutes(today.closeTime);
  }
  
  let nextOpen: HoursEntry | undefined;
  for (let i = 1; i <= 7; i++) {
    const idx = (dayIndex + i) % 7;
    const day = hours.find((h) => h.dayIndex === idx);
    if (day?.isOpen) {
      nextOpen = day;
      break;
    }
  }
  
  return { isOpenNow, today, nextOpen };
}