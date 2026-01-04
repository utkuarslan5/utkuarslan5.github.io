import { memo } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { BaseSection } from '@/components/shared/BaseSection';
import { CollapsibleSection } from '@/components/shared/CollapsibleSection';
import { experience } from '@/data/experience';
import { SECTION_IDS, SECTION_NUMBERS } from '@/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

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
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {primary.map((exp) => (
            <motion.div key={exp.id} variants={itemVariants}>
              <Card>
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
            </motion.div>
          ))}

          <CollapsibleSection
            summaryKey="earlierRoles"
            summaryDescriptionKey="earlierSummary"
            items={secondary}
            className="mt-4 rounded-md bg-white/80"
            itemsSpacing="space-y-4"
            renderItem={(exp, index) => (
              <div>
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
            )}
          />
        </motion.div>
      </div>
    </BaseSection>
  );
});

