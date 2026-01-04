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
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { BaseSection } from '@/components/shared/BaseSection';
import { skills } from '@/data/skills';
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

export const Skills = memo(function Skills() {
  const { t } = useI18n();

  return (
    <BaseSection id={SECTION_IDS.SKILLS}>
      <div className="space-y-10">
        <SectionHeader
          number={SECTION_NUMBERS.SKILLS}
          titleKey="skillsTitle"
          subtitleKey="skillsSubtitle"
          descriptionKey="skillsDescription"
          className="space-y-2"
        />
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {skills.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className={category.id === skills[skills.length - 1].id ? 'sm:col-span-2' : ''}
            >
              <Card>
              <CardHeader>
                <div>
                  <CardDescription className="text-micro uppercase tracking-[0.2em] text-muted">
                    {t(category.subtitle)}
                  </CardDescription>
                  <CardTitle className="text-h3 font-semibold">
                    {t(category.title)}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </BaseSection>
  );
});

