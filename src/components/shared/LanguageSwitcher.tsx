import { useI18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  return (
    <div className="language-switcher flex items-center gap-1 border-l border-border pl-8">
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'px-2 py-1 text-xs font-medium uppercase tracking-wide transition hover:text-highlight',
          language === 'en' && 'text-highlight font-semibold'
        )}
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
      >
        EN
      </button>
      <span className="text-muted">|</span>
      <button
        onClick={() => setLanguage('tr')}
        className={cn(
          'px-2 py-1 text-xs font-medium uppercase tracking-wide transition hover:text-highlight',
          language === 'tr' && 'text-highlight font-semibold'
        )}
        aria-label="Switch to Turkish"
        aria-pressed={language === 'tr'}
      >
        TR
      </button>
    </div>
  );
}

