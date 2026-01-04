/**
 * Main entry point for portfolio website
 * Initializes all modules and sets up the page
 */

import { updateYear } from "./utils/dom.js";
import { initScrollIndicator } from "./modules/scrollIndicator.js";
import { initRevealObserver } from "./modules/revealObserver.js";
import { initTiltEffect } from "./modules/tiltEffect.js";

// Initialize all modules when DOM is ready
function init() {
  updateYear();
  initScrollIndicator();
  initRevealObserver();
  initTiltEffect();
}

// Initialize when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

