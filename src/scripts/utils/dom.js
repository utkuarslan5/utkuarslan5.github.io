/**
 * DOM utility functions
 */

/**
 * Update the year element with the current year
 */
export function updateYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

