import { memo } from 'react';
import { useI18n } from '@/lib/i18n';
import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { sections } from '@/config/sections';

export const Header = memo(function Header() {
  const { t } = useI18n();

  const navItems = sections.map((section) => ({
    id: section.id,
    key: section.titleKey,
  }));

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-secondary/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-4">
          <div>
            <p className="text-sm font-semibold">UTKU ARSLAN</p>
            <p className="text-xs text-muted">SYSTEMS · AI</p>
          </div>
          <nav className="flex gap-8 text-sm font-medium text-primary" aria-label="Primary navigation">
            <TooltipProvider>
              {navItems.map((item) => (
                <Tooltip key={item.id}>
                  <TooltipTrigger asChild>
                    <a
                      href={`#${item.id}`}
                      className="transition hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight focus-visible:rounded"
                      aria-label={`Navigate to ${t(item.key)} section`}
                    >
                      {t(item.key)}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t(item.key)}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>
    </>
  );
});

