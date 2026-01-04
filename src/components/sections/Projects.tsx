import { memo } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { BaseSection } from '@/components/shared/BaseSection';
import { CollapsibleSection } from '@/components/shared/CollapsibleSection';
import { projects } from '@/data/projects';
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

export const Projects = memo(function Projects() {
  const { t } = useI18n();
  const primary = projects.slice(0, 3);
  const secondary = projects.slice(3);

  return (
    <BaseSection id={SECTION_IDS.PROJECTS}>
      <div className="space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeader
            number={SECTION_NUMBERS.PROJECTS}
            titleKey="projectsTitle"
            descriptionKey="projectsDescription"
            descriptionClassName="text-small"
          />
        </div>
        <motion.div
          className="grid gap-8 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {primary.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={project.featured ? 'lg:col-span-2' : ''}
            >
              <Card>
              <CardHeader>
                <div>
                  <CardTitle className="text-h3 font-semibold text-primary">
                    {t(project.title)}
                  </CardTitle>
                  <CardDescription className="text-small text-muted">
                    {t(project.subtitle)}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body text-muted">{t(project.description)}</p>
                {project.links && (
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener"
                        className="text-accent hover:underline text-small"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </motion.div>

        <CollapsibleSection
          summaryKey="moreProjects"
          summaryDescriptionKey="moreProjectsSummary"
          items={secondary}
          renderItem={(project) => (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <CardTitle className="text-body font-semibold text-primary">
                  {t(project.title)}
                </CardTitle>
                <CardDescription className="text-small text-muted">
                  {t(project.subtitle)}
                </CardDescription>
              </div>
              <p className="text-small text-muted mt-1">{t(project.description)}</p>
              {project.links && (
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener"
                      className="text-accent hover:underline text-small"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </>
          )}
        />
      </div>
    </BaseSection>
  );
});

