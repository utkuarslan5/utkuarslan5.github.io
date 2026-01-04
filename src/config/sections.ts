/**
 * Section configuration
 * Centralized configuration for all page sections
 */

import { SECTION_IDS, SECTION_NUMBERS } from '@/constants';

export interface SectionConfig {
  id: string;
  number: string;
  componentName: string;
  titleKey: string;
}

export const sections: SectionConfig[] = [
  {
    id: SECTION_IDS.ABOUT,
    number: SECTION_NUMBERS.ABOUT,
    componentName: 'About',
    titleKey: 'navAbout',
  },
  {
    id: SECTION_IDS.EXPERIENCE,
    number: SECTION_NUMBERS.EXPERIENCE,
    componentName: 'Experience',
    titleKey: 'navExperience',
  },
  {
    id: SECTION_IDS.PROJECTS,
    number: SECTION_NUMBERS.PROJECTS,
    componentName: 'Projects',
    titleKey: 'navProjects',
  },
  {
    id: SECTION_IDS.RESEARCH,
    number: SECTION_NUMBERS.RESEARCH,
    componentName: 'Research',
    titleKey: 'navResearch',
  },
  {
    id: SECTION_IDS.SKILLS,
    number: SECTION_NUMBERS.SKILLS,
    componentName: 'Skills',
    titleKey: 'navSkills',
  },
  {
    id: SECTION_IDS.CONTACT,
    number: SECTION_NUMBERS.CONTACT,
    componentName: 'Contact',
    titleKey: 'navContact',
  },
] as const;

