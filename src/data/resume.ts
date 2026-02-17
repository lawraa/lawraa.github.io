export interface Experience {
  role: string
  company: string
  period: string
  description: string[]
}

export interface Education {
  degree: string
  school: string
  period: string
  note?: string
}

export const experience: Experience[] = [
  {
    role: 'Senior ML Engineer',
    company: 'Acme Corp',
    period: '2023 — Present',
    description: [
      'Lead ML platform team (4 engineers) building real-time inference infrastructure serving 50M+ predictions/day.',
      'Designed and deployed fraud detection system that reduced losses by 61% ($1.3M annually).',
      'Built internal feature store with sub-10ms p99 latency, adopted by 6 product teams.',
    ],
  },
  {
    role: 'ML Engineer',
    company: 'DataCo',
    period: '2021 — 2023',
    description: [
      'Built document understanding pipeline processing 50K+ financial documents/month with 99.2% accuracy.',
      'Developed A/B testing framework for ML models with proper offline evaluation via replay methods.',
      'Reduced model training costs by 40% through spot instance orchestration and checkpoint optimization.',
    ],
  },
  {
    role: 'Data Scientist',
    company: 'StartupXYZ',
    period: '2019 — 2021',
    description: [
      'First ML hire. Built recommendation engine that improved content CTR by 23%.',
      'Established MLOps practices: CI/CD for models, experiment tracking, data versioning.',
      'Shipped 5 production models across search, recommendations, and content moderation.',
    ],
  },
]

export const education: Education[] = [
  {
    degree: 'M.S. Computer Science (Machine Learning)',
    school: 'Stanford University',
    period: '2017 — 2019',
    note: 'Research focus: probabilistic inference, approximate Bayesian methods.',
  },
  {
    degree: 'B.S. Mathematics & Computer Science',
    school: 'UC Berkeley',
    period: '2013 — 2017',
  },
]
