import { memo } from 'react';
import { useI18n } from '@/lib/i18n';
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { BaseSection } from '@/components/shared/BaseSection';
import { SECTION_IDS, SECTION_NUMBERS } from '@/constants';

export const About = memo(function About() {
  const { t } = useI18n();

  const stats = [
    { id: 'years', label: t('aboutYears'), value: '6+' },
    { id: 'systems', label: t('aboutSystemsShipped'), value: '20+' },
    { id: 'teams', label: t('aboutTeamsEnabled'), value: '8' },
  ];

  return (
    <BaseSection id={SECTION_IDS.ABOUT}>
      <div className="space-y-12">
        <SectionHeader number={SECTION_NUMBERS.ABOUT} titleKey="aboutTitle" />
        <div className="grid gap-6 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.id} className="px-6 py-8">
              <div className="flex flex-col items-center gap-4">
                <div>
                  <p className="text-small uppercase tracking-[0.1em] text-muted mb-2">
                    {stat.label}
                  </p>
                  <p className="text-h1 font-bold text-primary">{stat.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <p className="text-body text-muted max-w-3xl">
          {t('aboutDescription')}
        </p>
      </div>
    </BaseSection>
  );
});

