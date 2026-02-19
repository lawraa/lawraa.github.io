export interface Experience {
  role: string
  company: string
  period: string
  description: string[]
}

export interface Education {
  degree: string
  school: string
  period?: string
  note?: string
}

export const experience: Experience[] = [
  {
    role: 'ML Engineer — Visual Prompt Defect Detection',
    company: 'Pegatron',
    period: 'Industry Project',
    description: [
      'Built defect detection pipeline using visual prompting and in-context learning for manufacturing inspection.',
      'Developed Gradio-based demo UI and backend data ingestion API.',
      '1st place in internal project competition.',
    ],
  },
  {
    role: 'ML Research — Multi-Agent LLM Systems',
    company: 'UC Berkeley',
    period: 'Research',
    description: [
      'Designed multi-agent LLM discussion framework that improved creativity scores by 20% over single-agent baselines.',
      'Built evaluation metric achieving 0.7 correlation with human judgment.',
      'Published at COLM (LLM Discussion Framework) and ICLR (Dynamic-SUPERB Benchmark).',
    ],
  },
  {
    role: 'Graduate Researcher — Robotics & Embedded Software',
    company: 'UC Berkeley',
    period: 'MEng Program',
    description: [
      'Built closed-loop RL system for automated assistive device design refinement.',
      'Developed ROS-based autonomous driving and mapping system on Raspberry Pi hardware.',
      'Coursework: Machine Learning, Deep Reinforcement Learning, Embedded Systems, Data Science.',
    ],
  },
]

export const education: Education[] = [
  {
    degree: 'Master of Engineering, EECS (Robotics & Embedded Software)',
    school: 'UC Berkeley',
    note: 'GPA: 4.0/4.0. Courses: Machine Learning, Deep RL, Embedded Systems, Data Science.',
  },
  {
    degree: 'Bachelor of Science, Electrical Engineering',
    school: 'National Taiwan University',
  note: '2023 Dean\'s List.'
  },
]
