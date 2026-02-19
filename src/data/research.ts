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
      'Large language models (LLMs) have shown exceptional proficiency in natural language processing but often fall short of generating creative and original responses to open-ended questions. To enhance LLM creativity, our key insight is to emulate the human process of inducing collective creativity through engaging discussions with participants from diverse backgrounds and perspectives. To this end, we propose LLM Discussion, a three-phase discussion framework that facilitates vigorous and diverging idea exchanges and ensures convergence to creative answers. Moreover, we adopt a role-playing technique by assigning distinct roles to LLMs to combat the homogeneity of LLMs. ',
    tags: ['LLMs', 'Multi-Agent', 'Evaluation'],
    imageUrl: '/research/llm-discussion.png',
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
      'Multimodal foundation models, such as Gemini and ChatGPT, have revolutionized human-machine interactions by seamlessly integrating various forms of data. Developing a universal spoken language model that comprehends a wide range of natural language instructions is critical for bridging communication gaps and facilitating intuitive interactions. However, the absence of a comprehensive evaluation benchmark poses a significant challenge. We present Dynamic-SUPERB Phase-2, an open and evolving benchmark for comprehensive evaluation of instruction-based universal speech models. Building upon the first generation, this second version incorporates 125 new tasks contributed collaboratively by the global research community, expanding the benchmark to a total of 180 tasks, making it the largest benchmark for speech and audio evaluation. Dynamic-SUPERB Phase-2 broadens its evaluation capabilities from the first generation by introducing a wide array of novel and diverse tasks, including regression and sequence generation, across speech, music, and environmental audio. ',
    tags: ['Benchmarking', 'Evaluation'],
    imageUrl: '/research/dynamic-superb.png',
    paperUrl: 'https://arxiv.org/abs/2411.05361',
    codeUrl: ' https://github.com/dynamic-superb/dynamic-superb',
    bibtex: `@inproceedings{
huang2025dynamicsuperb,
title={Dynamic-{SUPERB} Phase-2: A Collaboratively Expanding Benchmark for Measuring the Capabilities of Spoken Language Models with 180 Tasks},
author={Chien-yu Huang and Wei-Chih Chen and Shu-wen Yang and Andy T. Liu and Chen-An Li and Yu-Xiang Lin and Wei-Cheng Tseng and Anuj Diwan and Yi-Jen Shih and Jiatong Shi and William Chen and Xuanjun Chen and Chi-Yuan Hsiao and Puyuan Peng and Shih-Heng Wang and Chun-Yi Kuan and Ke-Han Lu and Kai-Wei Chang and Chih-Kai Yang and Fabian Alejandro Ritter Gutierrez and Huang Kuan-Po and Siddhant Arora and You-Kuan Lin and CHUANG Ming To and Eunjung Yeo and Kalvin Chang and Chung-Ming Chien and Kwanghee Choi and Cheng-Hsiu Hsieh and Yi-Cheng Lin and Chee-En Yu and I-Hsiang Chiu and Heitor Guimar{\~a}es and Jionghao Han and Tzu-Quan Lin and Tzu-Yuan Lin and Homu Chang and Ting-Wu Chang and Chun Wei Chen and Shou-Jen Chen and Yu-Hua Chen and Hsi-Chun Cheng and Kunal Dhawan and Jia-Lin Fang and Shi-Xin Fang and KUAN YU FANG CHIANG and Chi An Fu and Hsien-Fu Hsiao and Ching Yu Hsu and Shao-Syuan Huang and Lee Chen Wei and Hsi-Che Lin and Hsuan-Hao Lin and Hsuan-Ting Lin and Jian-Ren Lin and Ting-Chun Liu and Li-Chun Lu and Tsung-Min Pai and Ankita Pasad and Shih-Yun Shan Kuan and Suwon Shon and Yuxun Tang and Yun-Shao Tsai and Wei Jui Chiang and Tzu-Chieh Wei and Chengxi Wu and Dien-Ruei Wu and Chao-Han Huck Yang and Chieh-Chi Yang and Jia Qi Yip and Shao-Xiang Yuan and Haibin Wu and Karen Livescu and David Harwath and Shinji Watanabe and Hung-yi Lee},
booktitle={The Thirteenth International Conference on Learning Representations},
year={2025}
}`,
  },
  {
    id: 'ieee-slt-review',
    title: 'IEEE SLT Workshop — Reviewer',
    authors: ['Shou-Jen Chen'],
    venue: 'IEEE SLT',
    year: '2024',
    summary:
      'Served as reviewer for the IEEE Spoken Language Technology Workshop, evaluating submissions on speech processing and language understanding.',
    tags: ['Review', 'Speech'],
  },
]
