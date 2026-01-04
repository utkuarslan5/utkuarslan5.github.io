import { ReactNode } from 'react';
import { motion } from 'framer-motion';
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
 * Wraps content in a section with standard classes and Framer Motion animations.
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
  if (enableReveal) {
    return (
      <motion.section
        id={id}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -40px 0px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className={cn(SECTION_CLASSES.BASE, className)}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <section
      id={id}
      className={cn(SECTION_CLASSES.BASE, className)}
    >
      {children}
    </section>
  );
}

