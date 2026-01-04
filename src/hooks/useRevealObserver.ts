import { useEffect, useRef, RefObject } from 'react';
import { REVEAL_OBSERVER_CONFIG } from '@/constants';

/**
 * React hook for reveal animations using Intersection Observer API.
 * Adds 'visible' class to elements when they enter the viewport.
 * 
 * @template T - The HTML element type (defaults to HTMLDivElement)
 * @returns A ref object to attach to the target element
 * 
 * @example
 * ```tsx
 * const ref = useRevealObserver<HTMLElement>();
 * return <section ref={ref} data-reveal>Content</section>;
 * ```
 * 
 * @remarks
 * - Falls back to immediately showing the element if IntersectionObserver is not supported
 * - Automatically cleans up the observer on unmount
 * - Uses configuration from constants for consistent behavior
 */
export function useRevealObserver<T extends HTMLElement = HTMLDivElement>(): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
      // Fallback: immediately show element for older browsers
      element.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      REVEAL_OBSERVER_CONFIG
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}

