export interface ExperienceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  period: string;
  location: string;
  items: string[];
  logo?: string;
  logoAlt?: string;
  logoUrl?: string;
}

export const experience: ExperienceItem[] = [
  {
    id: 'eurosis-2024',
    category: '',
    title: 'expEurosisTitle',
    description: 'expEurosisDesc',
    period: 'Sep 2024 – Present',
    location: 'Remote',
    items: ['experienceItem1', 'experienceItem2', 'experienceItem3'],
  },
  {
    id: 'poiesy-2023',
    category: 'expPoiesyCategory',
    title: 'expPoiesyTitle',
    description: 'expPoiesyDesc',
    period: 'Oct 2023 – Jan 2024',
    location: 'Netherlands · Hybrid',
    items: ['expPoiesyItem1', 'expPoiesyItem2', 'expPoiesyItem3'],
  },
  {
    id: 'jnj-2022',
    category: 'expJNJCategory',
    title: 'expJNJTitle',
    description: 'expJNJDesc',
    period: 'Aug 2022 – Jul 2023',
    location: 'Leiden, NL',
    items: ['expJNJItem1', 'expJNJItem2', 'expJNJItem3'],
  },
  {
    id: 'swarmlab-2021',
    category: 'expSwarmLabCategory',
    title: 'expSwarmLabTitle',
    description: 'expSwarmLabDesc',
    period: 'Aug 2021 – Mar 2022',
    location: 'Maastricht, NL',
    items: ['expSwarmLabItem1', 'expSwarmLabItem2', 'expSwarmLabItem3'],
  },
  {
    id: 'unumerit-2021',
    category: 'expUNUMERITCategory',
    title: 'expUNUMERITTitle',
    description: 'expUNUMERITDesc',
    period: 'Sep 2021 – Feb 2022',
    location: 'Maastricht, NL',
    items: ['expUNUMERITItem1', 'expUNUMERITItem2', 'expUNUMERITItem3'],
  },
];

