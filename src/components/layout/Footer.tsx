import { memo } from 'react';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { socialLinks } from '@/data/socialLinks';
import { ExternalLink } from 'lucide-react';

export const Footer = memo(function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary" role="contentinfo">
      <div className="mx-auto max-w-7xl px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-semibold text-primary">Utku Arslan</p>
            <p className="text-small text-muted">AI Developer</p>
          </div>
          <div>
            <p className="text-small font-medium text-primary mb-2">{t('connect')}</p>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-small text-muted hover:text-primary transition inline-flex items-center gap-2"
                  aria-label={link.ariaLabel}
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="sm:text-right">
            <Button asChild variant="outline" size="sm">
              <a href="#contact">{t('bookCall')}</a>
            </Button>
          </div>
        </div>
        <Separator className="my-6" />
        <p className="text-center text-micro text-muted">
          © {year} · {t('footerRights')}
        </p>
      </div>
    </footer>
  );
});

