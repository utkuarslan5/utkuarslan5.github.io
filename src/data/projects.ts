export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  links?: { label: string; url: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'immune-system',
    title: 'projectImmuneTitle',
    subtitle: 'projectImmuneSubtitle',
    description: 'projectImmuneDesc',
    featured: true,
  },
  {
    id: 'genomic-analysis',
    title: 'projectGenomicTitle',
    subtitle: 'projectGenomicSubtitle',
    description: 'projectGenomicDesc',
  },
  {
    id: 'llm-applications',
    title: 'projectLLMTitle',
    subtitle: 'projectLLMSubtitle',
    description: 'projectLLMDesc',
    links: [
      { label: 'LangChain', url: 'https://github.com/utkuarslan5/langchain-experiments' },
      { label: 'hands-on-llms', url: 'https://github.com/utkuarslan5/hands-on-llms' },
      { label: 'llm_websocket', url: 'https://github.com/utkuarslan5/llm_websocket' },
    ],
  },
  {
    id: 'housescrape',
    title: 'projectHouseScrapeTitle',
    subtitle: 'projectHouseScrapeSubtitle',
    description: 'projectHouseScrapeDesc',
    links: [
      { label: 'Frontend', url: 'https://github.com/utkuarslan5/housescrape' },
      { label: 'Backend', url: 'https://github.com/utkuarslan5/housescrape-backend' },
      { label: 'Funda', url: 'https://github.com/utkuarslan5/funda-scraper' },
    ],
  },
  {
    id: 'recommenders',
    title: 'projectRecommendersTitle',
    subtitle: 'projectRecommendersSubtitle',
    description: 'projectRecommendersDesc',
    links: [{ label: 'GitHub', url: 'https://github.com/utkuarslan5/the_recommenders' }],
  },
  {
    id: 'swarmbee',
    title: 'projectSwarmBeeTitle',
    subtitle: 'projectSwarmBeeSubtitle',
    description: 'projectSwarmBeeDesc',
    links: [{ label: 'GitHub', url: 'https://github.com/utkuarslan5/SwarmBee' }],
  },
];

