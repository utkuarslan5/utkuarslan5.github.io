import { useI18n } from '@/lib/i18n';

interface SectionHeaderProps {
  number: string;
  titleKey: string;
  subtitleKey?: string;
  descriptionKey?: string;
  className?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  number,
  titleKey,
  subtitleKey,
  descriptionKey,
  className = '',
  descriptionClassName = '',
}: SectionHeaderProps) {
  const { t } = useI18n();

  return (
    <div className={className}>
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-small text-muted">{number.padStart(2, '0')}</span>
        <h2 className="text-h2 font-semibold text-primary">{t(titleKey)}</h2>
      </div>
      {subtitleKey && (
        <p className="text-body text-muted mt-2">{t(subtitleKey)}</p>
      )}
      {descriptionKey && (
        <p className={`text-body text-muted mt-4 ${descriptionClassName}`}>
          {t(descriptionKey)}
        </p>
      )}
    </div>
  );
}

