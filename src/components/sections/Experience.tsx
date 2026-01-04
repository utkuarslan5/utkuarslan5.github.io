import { memo } from 'react';
import { useI18n } from '@/lib/i18n';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { BaseSection } from '@/components/shared/BaseSection';
import { experience } from '@/data/experience';
import { SECTION_IDS, SECTION_NUMBERS } from '@/constants';

export const Experience = memo(function Experience() {
  const { t } = useI18n();
  const primary = experience.slice(0, 3);
  const secondary = experience.slice(3);

  return (
    <BaseSection id={SECTION_IDS.EXPERIENCE}>
      <div className="space-y-10">
        <SectionHeader
          number={SECTION_NUMBERS.EXPERIENCE}
          titleKey="experienceTitle"
          descriptionKey="experienceDescription"
          className="space-y-3 text-center"
        />
        <div className="space-y-6">
          {primary.map((exp) => (
            <Card key={exp.id}>
              <CardHeader>
                <div>
                  <CardTitle className="text-h3 font-semibold text-primary">
                    {t(exp.title)}
                  </CardTitle>
                  <CardDescription className="text-small text-muted">
                    {exp.period} · {exp.location}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body text-muted">{t(exp.description)}</p>
                <ul className="list-disc space-y-1 pl-5 text-body text-muted">
                  {exp.items.map((item) => (
                    <li key={`${exp.id}-${item}`}>{t(item)}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          {secondary.length > 0 && (
            <details className="mt-4 rounded-md border border-border bg-white/80 p-4 shadow-sm">
              <summary className="cursor-pointer text-small font-semibold text-primary">
                {t('earlierRoles')}
              </summary>
              <p className="text-small text-muted mt-2">{t('earlierSummary')}</p>
              <div className="mt-4 space-y-4">
                {secondary.map((exp) => (
                  <div key={exp.id} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <CardTitle className="text-body font-semibold text-primary">
                        {t(exp.title)}
                      </CardTitle>
                      <CardDescription className="text-small text-muted">
                        {exp.period} · {exp.location}
                      </CardDescription>
                    </div>
                    <p className="text-small text-muted mt-1">{t(exp.description)}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-small text-muted">
                      {exp.items.map((item) => (
                        <li key={`${exp.id}-${item}`}>{t(item)}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          )}
        </div>
      </div>
    </BaseSection>
  );
});

