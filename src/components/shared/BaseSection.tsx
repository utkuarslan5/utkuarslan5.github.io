import { ReactNode } from 'react';
import { useRevealObserver } from '@/hooks/useRevealObserver';
import { cn } from '@/lib/utils';
import { SECTION_CLASSES } from '@/constants';

interface BaseSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  enableReveal?: boolean;
}

/**
 * Base section component that provides consistent styling and reveal animation.
 * Wraps content in a section with standard classes and Intersection Observer.
 * 
 * @param id - Unique identifier for the section (used for navigation)
 * @param children - Content to render inside the section
 * @param className - Additional CSS classes to apply
 * @param enableReveal - Whether to enable reveal animation (default: true)
 * 
 * @example
 * ```tsx
 * <BaseSection id="about" className="custom-class">
 *   <h2>About Me</h2>
 * </BaseSection>
 * ```
 */
export function BaseSection({
  id,
  children,
  className = '',
  enableReveal = true,
}: BaseSectionProps) {
  const revealRef = useRevealObserver<HTMLElement>();

  return (
    <section
      id={id}
      ref={enableReveal ? revealRef : undefined}
      data-reveal={enableReveal ? '' : undefined}
      className={cn(SECTION_CLASSES.BASE, className)}
    >
      {children}
    </section>
  );
}

