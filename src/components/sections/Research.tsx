import { memo } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { BaseSection } from '@/components/shared/BaseSection';
import { research } from '@/data/research';
import { SECTION_IDS, SECTION_NUMBERS } from '@/constants';

export const Research = memo(function Research() {
  const { t } = useI18n();
  const primary = research.slice(0, 2);
  const secondary = research.slice(2);

  return (
    <BaseSection id={SECTION_IDS.RESEARCH}>
      <div className="space-y-10">
        <SectionHeader
          number={SECTION_NUMBERS.RESEARCH}
          titleKey="researchTitle"
          descriptionKey="researchDescription"
          className="space-y-2"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {primary.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <div>
                  <CardTitle className="text-h3 font-semibold text-primary">
                    {t(item.title)}
                  </CardTitle>
                  {item.date && (
                    <CardDescription className="text-small text-muted">
                      {item.date}
                    </CardDescription>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body text-muted">{t(item.description)}</p>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 text-accent hover:underline text-small"
                  >
                    {t('viewPublication')}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        {secondary.length > 0 && (
          <details className="border border-border bg-white p-4 shadow-sm">
            <summary className="cursor-pointer text-small font-semibold text-primary">
              {t('morePublications')}
            </summary>
            <p className="text-small text-muted mt-2">{t('morePublicationsSummary')}</p>
            <div className="mt-4 space-y-3">
              {secondary.map((item) => (
                <div key={item.id} className="border-t border-border pt-3 first:border-t-0 first:pt-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <CardTitle className="text-body font-semibold text-primary">
                      {t(item.title)}
                    </CardTitle>
                    {item.date && (
                      <CardDescription className="text-small text-muted">
                        {item.date}
                      </CardDescription>
                    )}
                  </div>
                  <p className="text-small text-muted mt-1">{t(item.description)}</p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-2 text-accent hover:underline text-small"
                    >
                      {t('viewPublication')}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </details>
        )}
      </div>
    </BaseSection>
  );
});

