export interface ResearchItem {
  id: string;
  title: string;
  description: string;
  type: string;
  date: string;
  url?: string;
  featured?: boolean;
}

export const research: ResearchItem[] = [
  {
    id: 'observer-pattern',
    title: 'researchObserverTitle',
    description: 'researchObserverDesc',
    type: 'conceptualArticle',
    date: '',
    featured: true,
  },
  {
    id: 'recommenders-paper',
    title: 'projectRecommendersTitle',
    description: 'researchRecommendersDesc',
    type: 'projectPaper',
    date: 'Conference paper · 2023',
    url: 'https://www.researchgate.net/publication/378262857_The_Recommenders_Recommendations_based_on_Music_Playlists',
  },
  {
    id: 'swarm-drones',
    title: 'An Interactive Swarm of Drones',
    description: 'researchSwarmDesc',
    type: 'findings',
    date: 'SwarmLab · 2022',
    url: 'https://www.researchgate.net/publication/378262867_An_Interactive_Swarm_of_Drones',
  },
  {
    id: 'multi-agent-surveillance',
    title: 'Multi-Agent Surveillance',
    description: 'researchSurveillanceDesc',
    type: 'researchType',
    date: 'Patrol coordination · 2021',
    url: 'https://www.researchgate.net/publication/378262947_Multi-Agent_Surveillance',
  },
  {
    id: 'abalone-strategy',
    title: 'Play It!: Abalone Strategy',
    description: 'researchAbaloneDesc',
    type: 'preprint',
    date: 'Computational analysis · 2020',
    url: 'https://www.researchgate.net/publication/378262865_Play_it_An_investigation_into_strategy_game_Abalone',
  },
];

