import { memo } from 'react';
import { useI18n } from '@/lib/i18n';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { BaseSection } from '@/components/shared/BaseSection';
import { projects } from '@/data/projects';
import { SECTION_IDS, SECTION_NUMBERS } from '@/constants';

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
        <div className="grid gap-8 lg:grid-cols-2">
          {primary.map((project) => (
            <Card
              key={project.id}
              className={project.featured ? 'lg:col-span-2' : ''}
            >
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
          ))}
        </div>

        {secondary.length > 0 && (
          <details className="border border-border bg-white p-4 shadow-sm">
            <summary className="cursor-pointer text-small font-semibold text-primary">
              {t('moreProjects')}
            </summary>
            <p className="text-small text-muted mt-2">{t('moreProjectsSummary')}</p>
            <div className="mt-4 space-y-3">
              {secondary.map((project) => (
                <div key={project.id} className="border-t border-border pt-3 first:border-t-0 first:pt-0">
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
                </div>
              ))}
            </div>
          </details>
        )}
      </div>
    </BaseSection>
  );
});

