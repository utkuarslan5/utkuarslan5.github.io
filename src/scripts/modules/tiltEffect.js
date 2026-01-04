/**
 * 3D tilt effect module
 * Applies 3D transform effects to elements with [data-tilt] attribute
 * Respects prefers-reduced-motion setting
 */

export function initTiltEffect() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const tiltElements = document.querySelectorAll("[data-tilt]");
  if (tiltElements.length === 0) return;

  tiltElements.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / rect.height) * -10;
      const rotateY = ((x - rect.width / 2) / rect.width) * 10;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

