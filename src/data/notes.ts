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
    id: 'colm-llm-discussion',
    title: 'Multi-Agent LLM Discussion Framework',
    date: 'COLM',
    summary:
      'Multi-agent discussion framework where LLM agents debate and refine outputs. Improved creativity scores by 20% compared to single-agent baselines. Designed evaluation metric achieving 0.7 correlation with human judgment.',
    tags: ['LLMs', 'Multi-Agent', 'Evaluation'],
  },
  {
    id: 'iclr-dynamic-superb',
    title: 'Dynamic-SUPERB Benchmark',
    date: 'ICLR',
    summary:
      'Contributed to a dynamic benchmarking framework for evaluating speech and language models across evolving task distributions.',
    tags: ['Benchmarking', 'Evaluation'],
  },
  {
    id: 'ieee-slt-review',
    title: 'IEEE SLT Workshop — Reviewer',
    date: 'IEEE',
    summary:
      'Served as reviewer for the IEEE Spoken Language Technology Workshop, evaluating submissions on speech processing and language understanding.',
    tags: ['Review', 'Speech'],
  },
]
