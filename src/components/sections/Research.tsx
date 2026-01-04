import { memo } from 'react';
import { motion } from 'framer-motion';
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
import { CollapsibleSection } from '@/components/shared/CollapsibleSection';
import { research } from '@/data/research';
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
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

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
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {primary.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Card>
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
            </motion.div>
          ))}
        </motion.div>
        <CollapsibleSection
          summaryKey="morePublications"
          summaryDescriptionKey="morePublicationsSummary"
          items={secondary}
          renderItem={(item, index) => (
            <>
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
            </>
          )}
        />
      </div>
    </BaseSection>
  );
});

