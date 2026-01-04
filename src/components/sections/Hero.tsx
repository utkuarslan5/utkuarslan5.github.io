import { memo } from 'react';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { BaseSection } from '@/components/shared/BaseSection';
import { Mail, Download } from 'lucide-react';

export const Hero = memo(function Hero() {
  const { t } = useI18n();

  return (
    <BaseSection id="hero" enableReveal={false}>
      <div className="grid gap-16 lg:grid-cols-[7fr,5fr]">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="font-mono text-micro text-highlight tracking-widest uppercase">
                AI Developer
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-highlight to-transparent" />
            </div>
            <h1 className="text-display font-semibold text-primary">
              {t('heroTitle')}
            </h1>
          </div>
          <p className="text-body text-muted max-w-2xl">
            {t('heroDescription')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="book-call-btn">
              <a href="mailto:utkuvonarslan@gmail.com" aria-label={t('emailMe')}>
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>{t('emailMe')}</span>
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/Utku Arslan Resume.pdf" aria-label={t('downloadCV')} target="_blank" rel="noopener">
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>{t('downloadCV')}</span>
              </a>
            </Button>
          </div>
        </div>
        <div className="space-y-8 border-l border-border pl-12">
          <div>
            <p className="text-small font-medium text-muted mb-4">
              {t('currently')}
            </p>
            <p className="text-h2 font-semibold text-primary mb-2">
              {t('currentJob')}
            </p>
            <p className="text-body text-muted">{t('currentJobDesc')}</p>
          </div>
          <div className="h-px bg-border" />
          <div>
            <p className="text-small font-medium text-muted mb-4">
              {t('focus')}
            </p>
            <p className="text-body text-muted mb-6">{t('focusDesc')}</p>
            <p className="text-body text-muted">{t('location')}</p>
          </div>
        </div>
      </div>
    </BaseSection>
  );
});

