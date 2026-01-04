import { useEffect, useRef } from 'react';

/**
 * React hook for scroll progress indicator.
 * Updates a progress bar at the top of the page based on scroll position.
 * 
 * @returns A ref object to attach to the scroll indicator element
 * 
 * @example
 * ```tsx
 * const indicatorRef = useScrollIndicator();
 * return <div ref={indicatorRef} id="scroll-indicator" />;
 * ```
 * 
 * @remarks
 * - Uses passive event listeners for better performance
 * - Automatically handles resize events
 * - Cleans up event listeners on unmount
 */
export function useScrollIndicator() {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const indicator = indicatorRef.current;
    if (!indicator) return;

    const updateIndicator = () => {
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      indicator.style.transform = `scaleX(${progress})`;
    };

    // Initial update
    updateIndicator();

    window.addEventListener('scroll', updateIndicator, { passive: true });
    window.addEventListener('resize', updateIndicator);

    return () => {
      window.removeEventListener('scroll', updateIndicator);
      window.removeEventListener('resize', updateIndicator);
    };
  }, []);

  return indicatorRef;
}

