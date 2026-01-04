/**
 * Application-wide constants
 * Centralized configuration values to prevent magic numbers/strings
 */

export const SECTION_IDS = {
  ABOUT: 'about',
  EXPERIENCE: 'experience',
  PROJECTS: 'projects',
  RESEARCH: 'research',
  SKILLS: 'skills',
  CONTACT: 'contact',
} as const;

export const SECTION_NUMBERS = {
  ABOUT: '01',
  EXPERIENCE: '02',
  PROJECTS: '03',
  RESEARCH: '04',
  SKILLS: '05',
  CONTACT: '06',
} as const;

export const SECTION_CLASSES = {
  BASE: 'section-chrome section-anchor section-spacing',
} as const;

export const CONTACT = {
  EMAIL: 'utkuvonarslan@gmail.com',
  RESUME_PATH: '/Utku Arslan Resume.pdf',
  LINKEDIN_URL: 'https://www.linkedin.com/in/utkuarslan5',
} as const;

