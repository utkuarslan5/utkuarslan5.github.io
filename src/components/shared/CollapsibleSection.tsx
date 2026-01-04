import { ReactNode } from 'react';
import { useI18n } from '@/lib/i18n';
import { TranslationKey } from '@/lib/i18n';

interface CollapsibleSectionProps<T> {
  /** Translation key for the summary text */
  summaryKey: TranslationKey;
  /** Translation key for the summary description */
  summaryDescriptionKey: TranslationKey;
  /** Array of items to display in the collapsible section */
  items: T[];
  /** Function to render each item */
  renderItem: (item: T, index: number) => ReactNode;
  /** Additional CSS classes for the details element */
  className?: string;
  /** Spacing between items (default: 'space-y-3') */
  itemsSpacing?: string;
}

/**
 * Reusable collapsible section component for displaying secondary items
 * Used in Projects, Experience, and Research sections to reduce code duplication
 * 
 * @template T - The type of items in the array
 * 
 * @example
 * ```tsx
 * <CollapsibleSection
 *   summaryKey="moreProjects"
 *   summaryDescriptionKey="moreProjectsSummary"
 *   items={secondaryProjects}
 *   renderItem={(project) => <ProjectItem project={project} />}
 * />
 * ```
 */
export function CollapsibleSection<T>({
  summaryKey,
  summaryDescriptionKey,
  items,
  renderItem,
  className = '',
  itemsSpacing = 'space-y-3',
}: CollapsibleSectionProps<T>) {
  const { t } = useI18n();

  if (items.length === 0) {
    return null;
  }

  return (
    <details className={`border border-border bg-white p-4 shadow-sm ${className}`}>
      <summary className="cursor-pointer text-small font-semibold text-primary">
        {t(summaryKey)}
      </summary>
      <p className="text-small text-muted mt-2">{t(summaryDescriptionKey)}</p>
      <div className={`mt-4 ${itemsSpacing}`}>
        {items.map((item, index) => {
          // Use item.id if available (for Project, ExperienceItem, ResearchItem), otherwise use index
          const key = (item as { id?: string })?.id ?? index;
          return (
            <div key={key} className="border-t border-border pt-3 first:border-t-0 first:pt-0">
              {renderItem(item, index)}
            </div>
          );
        })}
      </div>
    </details>
  );
}

