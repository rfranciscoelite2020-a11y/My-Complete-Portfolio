"use client";

import { useEffect } from "react";

// Animates the numbers in the "proof at a glance" stat bar counting up from 0
// when they scroll into view. Built to match ScrollReveal.tsx conventions:
// respects prefers-reduced-motion, uses IntersectionObserver, cleans up on unmount.
// Parses each stat's existing text (e.g. "03", "10", "100%") so it works with
// whatever real values are in `proofStats` in page.tsx — nothing here is hardcoded.
export default function StatCounter() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".expertise-ribbon-inner > div > span"),
    );

    if (reducedMotion.matches || !("IntersectionObserver" in window) || nodes.length === 0) {
      return;
    }

    type ParsedStat = { node: HTMLElement; target: number; suffix: string; padLength: number };

    const parsed: ParsedStat[] = nodes.reduce<ParsedStat[]>((acc, node) => {
      const raw = node.textContent ?? "";
      const match = raw.match(/^(\d+)(.*)$/);
      if (!match) return acc;
      const digits = match[1];
      const suffix = match[2];
      acc.push({ node, target: parseInt(digits, 10), suffix, padLength: digits.length });
      return acc;
    }, []);

    const animated = new WeakSet<HTMLElement>();
    const duration = 900;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          if (animated.has(target)) return;
          animated.add(target);

          const item = parsed.find((p) => p.node === target);
          if (!item) return;

          const start = performance.now();

          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(eased * item!.target);
            target.textContent = `${String(value).padStart(item!.padLength, "0")}${item!.suffix}`;
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              target.textContent = `${item!.target}${item!.suffix}`;
            }
          }
          requestAnimationFrame(tick);
          observer.unobserve(target);
        });
      },
      { threshold: 0.4 },
    );

    parsed.forEach((item) => observer.observe(item.node));

    return () => observer.disconnect();
  }, []);

  return null;
}
