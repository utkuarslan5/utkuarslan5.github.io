import { Suspense, ReactNode } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';

interface SectionWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Wrapper component that combines ErrorBoundary and Suspense
 * Used to wrap lazy-loaded sections with error handling and loading states
 * 
 * @param children - The lazy-loaded component to wrap
 * @param fallback - Optional custom loading fallback (defaults to standard SectionLoader)
 * 
 * @example
 * ```tsx
 * <SectionWrapper>
 *   <Hero />
 * </SectionWrapper>
 * ```
 */
export function SectionWrapper({ children, fallback }: SectionWrapperProps) {
  return (
    <ErrorBoundary>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

