import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Adds .in-view to elements with .reveal as they enter the viewport.
 * Re-scans on route change.
 */
const ScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
};

export default ScrollReveal;
