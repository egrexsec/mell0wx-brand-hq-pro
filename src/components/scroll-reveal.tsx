"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".hero, .section .glass, .section h2, .section .sub"
      )
    );

    if (!targets.length) return;

    const isCalmerPage = pathname.startsWith("/blog") || pathname.startsWith("/case-studies");
    const stepDelay = isCalmerPage ? 42 : 28;

    targets.forEach((el, index) => {
      el.classList.add("reveal-base");
      el.style.setProperty("--reveal-delay", `${index * stepDelay}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
