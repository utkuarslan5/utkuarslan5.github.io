export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    id: 'ml-ai',
    title: 'machineLearningAI',
    subtitle: 'modeling',
    skills: [
      'PyTorch',
      'scikit-learn',
      'AutoGluon',
      'LightGBM',
      'Optuna',
      'RNNs',
      'Recsys',
    ],
  },
  {
    id: 'applied-research',
    title: 'appliedResearch',
    subtitle: 'domains',
    skills: ['Genomics', 'Bioprocess', 'Multi-agent robotics', 'Vision', 'LLM apps'],
  },
  {
    id: 'software-data',
    title: 'softwareData',
    subtitle: 'delivery',
    skills: [
      'Python',
      'TypeScript',
      'React',
      'React Flow',
      'Docker',
      'Git',
      'Linux/WSL2',
      'REST APIs',
      'EDA',
      'Visualization',
      'Automation',
    ],
  },
];

