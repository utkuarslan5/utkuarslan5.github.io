import { useScrollIndicator } from '@/hooks/useScrollIndicator';

export function ScrollIndicator() {
  const indicatorRef = useScrollIndicator();

  return (
    <div
      id="scroll-indicator"
      ref={indicatorRef}
      className="fixed left-0 top-0 z-50 h-0.5 w-full origin-left scale-x-0 bg-primary"
    />
  );
}

