import { memo } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { BaseSection } from '@/components/shared/BaseSection';
import { Mail, ExternalLink } from 'lucide-react';
import { SECTION_IDS, SECTION_NUMBERS } from '@/constants';

export const Contact = memo(function Contact() {
  const { t } = useI18n();

  return (
    <BaseSection id={SECTION_IDS.CONTACT}>
      <div className="space-y-10">
        <SectionHeader
          number={SECTION_NUMBERS.CONTACT}
          titleKey="contactTitle"
          subtitleKey="contactSubtitle"
          descriptionKey="contactDescription"
          className="space-y-2"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <div>
                <CardDescription className="text-micro uppercase tracking-[0.2em] text-muted">
                  {t('availability')}
                </CardDescription>
                <CardTitle className="text-h3 font-semibold">
                  {t('consultingAdvisory')}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-body text-muted">{t('consultingDescription')}</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <a href="mailto:utkuvonarslan@gmail.com">
                    <Mail className="w-4 h-4" />
                    {t('emailMe')}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://www.linkedin.com/in/utkuarslan5" target="_blank" rel="noopener">
                    <ExternalLink className="w-4 h-4" />
                    {t('connectLinkedIn')}
                  </a>
                </Button>
              </div>
              <p className="text-small text-muted">{t('responseTime')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </BaseSection>
  );
});

