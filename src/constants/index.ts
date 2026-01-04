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

export const REVEAL_OBSERVER_CONFIG = {
  threshold: 0.25,
  rootMargin: '0px 0px -40px 0px',
} as const;

export const SECTION_CLASSES = {
  BASE: 'section-chrome section-anchor section-spacing',
} as const;

