export interface Note {
  id: string
  title: string
  date: string
  summary: string
  tags: string[]
  url?: string
}

export const notes: Note[] = [
  {
    id: 'feature-stores',
    title: 'Design Patterns for Real-Time Feature Stores',
    date: '2025-12-14',
    summary:
      'Notes on architectures for low-latency feature serving — comparing point-in-time joins, streaming aggregation, and hybrid approaches. Includes latency benchmarks from a production migration.',
    tags: ['Systems', 'MLOps'],
  },
  {
    id: 'calibration',
    title: 'On Calibration in Production ML Systems',
    date: '2025-10-22',
    summary:
      'Why Platt scaling breaks down on non-stationary data, and a simple isotonic regression approach that degrades more gracefully. Practical advice for monitoring calibration drift.',
    tags: ['ML Theory', 'Monitoring'],
  },
  {
    id: 'llm-evaluation',
    title: 'Evaluating LLM Outputs Without Ground Truth',
    date: '2025-08-30',
    summary:
      'A framework for evaluating generative model outputs in domains where reference answers don\'t exist. Covers human evaluation protocol design, inter-annotator agreement, and LLM-as-judge approaches.',
    tags: ['LLMs', 'Evaluation'],
  },
  {
    id: 'data-contracts',
    title: 'Data Contracts for ML Pipelines',
    date: '2025-06-15',
    summary:
      'Schema enforcement between data producers and ML consumers. How we reduced training failures by 73% with a simple contract system built on Great Expectations.',
    tags: ['Data Engineering', 'MLOps'],
  },
]
