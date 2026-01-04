/**
 * Scroll progress indicator module
 * Updates a progress bar at the top of the page based on scroll position
 */

export function initScrollIndicator() {
  const indicator = document.getElementById("scroll-indicator");
  if (!indicator) return;

  const updateIndicator = () => {
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
    indicator.style.transform = `scaleX(${progress})`;
  };

  updateIndicator();
  window.addEventListener("scroll", updateIndicator, { passive: true });
  window.addEventListener("resize", updateIndicator);
}

