export interface Publication {
  id: string
  title: string
  authors: string[]
  venue: string
  year: string
  summary: string
  tags: string[]
  coFirstAuthors?: string[]
  imageUrl?: string
  thumbUrl?: string
  paperUrl?: string
  projectUrl?: string
  codeUrl?: string
  bibtex?: string
}

export const publications: Publication[] = [
  {
    id: 'colm-llm-discussion',
    title: 'LLM Discussion: Enhancing the Creativity of Large Language Models via Discussion Framework and Role-Play',
    authors: ['Li-Chun Lu', 'Shou-Jen Chen', 'Tsung-Min Pai', 'Chan-Hung Yu', 'Hung-Yi Lee', 'Shao-Hua Sun'],
    coFirstAuthors: ['Li-Chun Lu', 'Shou-Jen Chen'],
    venue: 'COLM',
    year: '2024',
    summary:
      'A three-phase framework where LLMs with assigned roles discuss an open-ended question before converging on an answer. It beat single-agent and existing multi-agent baselines by 20%. I also designed a creativity metric that reached 0.7 correlation with human ratings on 1,400+ responses.',
    tags: ['LLMs', 'Multi-Agent', 'Evaluation'],
    imageUrl: '/research/llm-discussion.png',
    thumbUrl: '/thumbs/llm-discussion.jpg',
    paperUrl: 'https://arxiv.org/abs/2405.06373',
    codeUrl: 'https://github.com/lawraa/LLM-Discussion',
    bibtex: `@inproceedings{lu2024discussion,
  title={LLM Discussion: Enhancing the Creativity of Large Language Models via Discussion Framework and Role-Play},
  author={Li-Chun Lu and Shou-Jen Chen and Tsung-Min Pai and Chan-Hung Yu and Hung-Yi Lee and Shao-Hua Sun},
  booktitle = {Conference on Language Modeling},
  year={2024}
}`,
  },
  {
    id: 'iclr-dynamic-superb',
    title: 'Dynamic-SUPERB Phase-2: A Collaboratively Expanding Benchmark for Measuring the Capabilities of Spoken Language Models with 180 Tasks',
    authors: ['Chien-yu Huang', 'Wei-Chih Chen', 'Shu-wen Yang', 'Shou-Jen Chen', 'et al.', 'Hung-yi Lee'],
    venue: 'ICLR',
    year: '2025',
    summary:
      'An open benchmark of 180 tasks for instruction-following speech and audio models, built from tasks contributed by the research community. I built and preprocessed its SoundEffectDetection task.',
    tags: ['Benchmarking', 'Evaluation'],
    imageUrl: '/research/dynamic-superb.png',
    thumbUrl: '/thumbs/dynamic-superb.jpg',
    paperUrl: 'https://arxiv.org/abs/2411.05361',
    codeUrl: 'https://github.com/dynamic-superb/dynamic-superb',
    bibtex: `@inproceedings{
huang2025dynamicsuperb,
title={Dynamic-{SUPERB} Phase-2: A Collaboratively Expanding Benchmark for Measuring the Capabilities of Spoken Language Models with 180 Tasks},
author={Chien-yu Huang and Wei-Chih Chen and Shu-wen Yang and Andy T. Liu and Chen-An Li and Yu-Xiang Lin and Wei-Cheng Tseng and Anuj Diwan and Yi-Jen Shih and Jiatong Shi and William Chen and Xuanjun Chen and Chi-Yuan Hsiao and Puyuan Peng and Shih-Heng Wang and Chun-Yi Kuan and Ke-Han Lu and Kai-Wei Chang and Chih-Kai Yang and Fabian Alejandro Ritter Gutierrez and Huang Kuan-Po and Siddhant Arora and You-Kuan Lin and CHUANG Ming To and Eunjung Yeo and Kalvin Chang and Chung-Ming Chien and Kwanghee Choi and Cheng-Hsiu Hsieh and Yi-Cheng Lin and Chee-En Yu and I-Hsiang Chiu and Heitor Guimar{\\~a}es and Jionghao Han and Tzu-Quan Lin and Tzu-Yuan Lin and Homu Chang and Ting-Wu Chang and Chun Wei Chen and Shou-Jen Chen and Yu-Hua Chen and Hsi-Chun Cheng and Kunal Dhawan and Jia-Lin Fang and Shi-Xin Fang and KUAN YU FANG CHIANG and Chi An Fu and Hsien-Fu Hsiao and Ching Yu Hsu and Shao-Syuan Huang and Lee Chen Wei and Hsi-Che Lin and Hsuan-Hao Lin and Hsuan-Ting Lin and Jian-Ren Lin and Ting-Chun Liu and Li-Chun Lu and Tsung-Min Pai and Ankita Pasad and Shih-Yun Shan Kuan and Suwon Shon and Yuxun Tang and Yun-Shao Tsai and Wei Jui Chiang and Tzu-Chieh Wei and Chengxi Wu and Dien-Ruei Wu and Chao-Han Huck Yang and Chieh-Chi Yang and Jia Qi Yip and Shao-Xiang Yuan and Haibin Wu and Karen Livescu and David Harwath and Shinji Watanabe and Hung-yi Lee},
booktitle={The Thirteenth International Conference on Learning Representations},
year={2025}
}`,
  },
  {
    id: 'ieee-slt-review',
    title: 'IEEE SLT Workshop - Reviewer',
    authors: ['Shou-Jen Chen'],
    venue: 'IEEE SLT',
    year: '2024',
    summary:
      'Served as reviewer for the IEEE Spoken Language Technology Workshop, evaluating submissions on speech processing and language understanding.',
    tags: ['Review', 'Speech'],
  },
]
