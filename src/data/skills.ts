export interface SkillCategory {
  title: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    title: 'Machine Learning',
    items: [
      'Reinforcement learning systems',
      'LLM prompting & evaluation',
      'Vision models (CNN & ViT)',
      'RLHF / DPO',
      'Metric design and evaluation methodology',
    ],
  },
  {
    title: 'Systems & Infrastructure',
    items: [
      'PyTorch training pipelines',
      'Automated evaluation loops',
      'Modular task environments',
      'Data ingestion pipelines',
      'API integration',
    ],
  },
  {
    title: 'Simulation & Robotics',
    items: [
      'MuJoCo simulation',
      'ROS',
      'Control systems',
      'Mapping & navigation',
      'Hardware integration',
    ],
  },
  {
    title: 'Languages & Tools',
    items: [
      'Python, C++, Golang, Matlab',
      'PyTorch',
      'Docker, Kubernetes',
      'MongoDB',
      'Gradio',
    ],
  },
]
