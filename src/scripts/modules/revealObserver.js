/**
 * Intersection Observer module for reveal animations
 * Adds 'visible' class to elements with [data-reveal] attribute when they enter viewport
 */

export function initRevealObserver() {
  const revealElements = document.querySelectorAll("[data-reveal]");
  if (revealElements.length === 0) return;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

