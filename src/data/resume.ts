export interface Experience {
  role: string
  org: string
  location?: string
  dates: string
  type?: string // e.g., "Industry", "Research", "Capstone"
  bullets: string[]
}

export interface Education {
  degree: string
  school: string
  location?: string
  dates?: string
  note?: string
}

export interface Publication {
  title: string
  venue: string
  year: string
  authorship?: string // e.g., "Co-first author", "Co-author"
  note?: string // e.g., "Paper", "Reviewer"
  links?: {
    paper?: string
    project?: string
    bibtex?: string
  }
}

export interface ResumeData {
  summary: string[]
  skills: string[]
  experience: Experience[]
  research: Experience[]
  publications: Publication[]
  education: Education[]
}

export const resumeData: ResumeData = {
  summary: [
    'AI engineer with experience building end-to-end intelligent systems, LLM-driven workflows, and practical machine learning applications for real-world use cases.',
    'Strong in Python, PyTorch, and rapid prototyping, with a track record of translating technical ideas into usable systems through iteration, evaluation, and strong engineering execution.',
    'Motivated by building ambitious AI-powered products that combine technical depth, product intuition, and high craft.',
  ],

  skills: [
    'Python',
    'C++',
    'PyTorch',
    'Machine Learning',
    'Data Structures & Algorithms',
    'Reinforcement Learning',
    'MuJoCo',
    'ROS',
  ],

  experience: [
    {
      role: 'Software Engineering Job Simulation',
      org: 'JPMorgan Chase & Co. (via Forage)',
      dates: 'Apr 2026',
      type: 'Virtual Experience',
      bullets: [
        'Integrated Kafka into a Spring Boot microservice to consume and deserialize high-volume transaction messages using a configurable topic and embedded Kafka test framework.',
        'Implemented transaction validation and persistence logic with Spring Data JPA and an H2 SQL database, including entity modeling and balance updates across relational User records.',
        'Connected the service to an external REST Incentive API using RestTemplate and exposed a balance-query endpoint via a Spring controller, returning JSON responses while maintaining clean architectural boundaries.',
        'Verified system behavior using Maven test suites and debugger-driven inspection, ensuring reliability across message ingestion, database operations, and external API interactions.',
      ],
    },
    {
      role: 'Reinforcement Learning Researcher',
      org: 'Risk-Triggered Latent-Space Corrections for Near-Failure Recovery, UC Berkeley',
      location: 'Berkeley, CA',
      dates: 'Feb 2026 – May 2026',
      type: 'Research Project',
      bullets: [
        'Designed a concurrent decoupled correction architecture for SAC where a lightweight MLP applies additive latent corrections Δz to the actor\'s hidden representation; a geometric near-failure trigger gates corrections to only 2–12% of steps at convergence.',
        'Identified and resolved co-adaptation via gradient isolation: applied stop-gradient on actor encoder during correction update, preventing encoder from learning latents and ensuring the base actor remains independently capable at deployment.',
        'Evaluated across 4 Meta-World manipulation tasks; improved mean final success rate by +57pp on push-v3 (32.5%→89.5%) and +27.5pp on pick-place-v3 (66.0%→93.5%), achieving full seed reliability (4/4) versus 0/4 under naive concurrent training.',
      ],
    },
    {
      role: 'Machine Learning Engineer / AI Engineer (Capstone Project)',
      org: 'AI-driven Personalized Assisted Device, UC Berkeley',
      location: 'Berkeley, CA',
      dates: 'Aug 2025 – May 2026',
      type: 'Capstone',
      bullets: [
        'Built a 3-phase LLM-guided optimization pipeline over a 15-dimensional design space, converging to a personalized assistive device design in as few as 2 iterations and achieving 83% overall convergence rate across 12 runs and 4 participants.',
        'Designed task interfaces across 8 simulated grasping environments, enabling evaluation of grip force and task success rates.',
        'Optimized designs reduced required grip force to a mean of 2.5 Nm, with 7 of 8 tasks achievable at or below 1.7 Nm.',
      ],
    },
    {
      role: 'Machine Learning Engineer',
      org: 'LangGraph ML Research Buddy',
      location: 'Personal Project',
      dates: '2026',
      type: 'Personal Project',
      bullets: [
        'Built a stateful six-agent LangGraph pipeline (planner, log analyzer, claim checker, reward-hacking auditor, critic, writer) with conditional edges, bounded retry/reflection loops, and a human-in-the-loop checkpoint for ML experiment review.',
        'Implemented SqliteSaver-backed durable execution enabling mid-run resume, Pydantic structured outputs per node, a custom BaseCallbackHandler tracing every LLM call to per-run artifacts, and a FastAPI/SSE streaming service; provider-agnostic across Anthropic, OpenAI, and Ollama.',
      ],
    },
    {
      role: 'Machine Learning Engineer',
      org: 'RAG-Forge: Modular RAG Pipeline Framework',
      location: 'Personal Project',
      dates: '2026',
      type: 'Personal Project',
      bullets: [
        'Designed and implemented five end-to-end RAG pipelines from naive dense retrieval to graph-based, agentic, and LangChain LCEL architectures, with a provider-agnostic interface supporting Anthropic API, OpenAI API, and Ollama.',
        'Implemented hybrid retrieval (BM25+dense search, RRF fusion, cross-encoder reranking, HyDE), knowledge graph construction, and agentic reasoning (Self-RAG, CRAG).',
      ],
    },
    {
      role: 'Machine Learning Engineer / Robotics Engineer',
      org: 'IMU-Controlled Quadruped Robot, UC Berkeley',
      location: 'Berkeley, CA',
      dates: 'Aug 2025 – Dec 2025',
      type: 'Research Project',
      bullets: [
        'Implemented a modular 4-stage locomotion pipeline — sinusoidal foot trajectory generation, closed-form planar IK (two-link law-of-cosines solver with workspace clamping), phase-offset gait coordination, and synchronized motor dispatch — supporting 5 gaits with stride up to 50 mm and maximum forward velocity of 17 cm/s (>1 body length/s).',
        'Designed and calibrated trot (50% diagonal phase offset) and walk (25% per-leg offset) gaits; implemented asymmetric stride-length scaling for skid-steer differential turning and a single-cycle jump maneuver with automatic return to neutral stance.',
        'Debugged and established Raspberry Pi 4 to Dynamixel RX-24F communication over U2D2 UART; synchronized all 8 joints at 100 Hz with 0.29° per-tick resolution over a 1 Mbps daisy-chained Dynamixel bus.',
        'Built a finite-state-machine command dispatcher routing IMU/EMG gesture outputs to joint trajectories; evaluated SVM and DNN classifiers on 8-channel sEMG at 250 Hz, reaching up to 40% gesture accuracy and deploying IMU-threshold control for the final demo.',
      ],
    },
    {
      role: 'Machine Learning Engineer',
      org: 'Vision Fairness Analysis: CNN vs Vision Transformer, UC Berkeley',
      location: 'Berkeley, CA',
      dates: 'Aug 2025 – Dec 2025',
      type: 'Research Project',
      bullets: [
        'Designed a controlled fairness study comparing U-Net encoders (ResNet50 vs. FastViT, both ImageNet-1k pretrained) on 4× super-resolution and racial classification across a 7-group FairFace dataset (108k images) and 4-group RFW dataset, with a 1:20 minority-to-majority imbalance simulation per race.',
        'Fine-tuned backbones via staged layer unfreezing using VGG19-based perceptual loss for upscaling and cross-entropy for classification; ResNet50 achieved +5.79 dB higher PSNR than FastViT, while both models showed ≤0.05 dB per-race PSNR variance across all imbalance settings, confirming super-resolution is race-agnostic.',
        'Quantified classification fairness via a per-group representation ratio; identified Indian and Caucasian groups as most sensitive to underrepresentation (−18% and −16% accuracy drops), while African faces remained robust (−3% drop) under heavy downsampling.',
        'Found FastViT more resilient to demographic imbalance (10.37% avg. accuracy drop vs. ResNet50\'s 14.13%); near-identical per-race trends across architectures indicate fairness degradation is driven primarily by training data distribution rather than model architecture.',
      ],
    },
    {
      role: 'Industry/Lab Researcher',
      org: 'Industry-University Collaboration, TrendForce Corporation',
      location: 'Taipei, Taiwan',
      dates: 'Oct 2024 – Jun 2025',
      type: 'Industry Collaboration',
      bullets: [
        'Developed automated content generation service integrating LLM APIs with structured prompt templates.',
        'Built LLM-powered text generation workflow with controllable style parameters and automated quality evaluation loops.',
        'Iteratively refined prompts and model configurations to improve consistency and reliability of generated outputs.',
        'Implemented style-controlled generation via parameterized prompts and evaluation loops for TrendForce newsletter.',
      ],
    },
    {
      role: 'Software Engineer Intern',
      org: 'Pegatron Corporation',
      location: 'Taipei, Taiwan',
      dates: 'Jul 2023 – Aug 2023',
      type: 'Industry',
      bullets: [
        'Collaborated in a team of three to develop "Visual Prompt Defect Detection" for an internal internship project competition, receiving 1st Place among four groups.',
        'Designed UI using Gradio for project demo and built backend data ingestion pipeline storing image datasets to storage via APIs.',
        'Completed training on Git, Docker, Kubernetes, Python, Pandas, NumPy, and MongoDB.',
      ],
    },
    {
      role: 'Robotics Engineer',
      org: 'Smart Parking, NTU',
      location: 'Taipei, Taiwan',
      dates: 'Aug 2023 – Jan 2024',
      type: 'Research Project',
      bullets: [
        'Collaborated with a teammate to develop a smart driving system featuring real-time notifications and auto-parking.',
        'Integrated PiRacer Pro and STM32 board to boost system capabilities with analytics and imitation learning.',
      ],
    },
    {
      role: 'Software Engineer Intern & Web Developer',
      org: 'IADIY Photonics',
      location: 'Taipei, Taiwan',
      dates: 'Jul 2020 – Aug 2020 / Jul 2021 – Aug 2021',
      type: 'Industry',
      bullets: [
        'Designed software enabling auto-driving and basic sensor mapping using ROS on Linux.',
        'Assembled robotic devices (hardware frame + wiring) running on Raspberry Pi.',
        'Initiated a Kickstarter campaign (team of 5) for Genix Lite and built the company website using HTML/CSS.',
      ],
    },
  ],

  research: [
    {
      role: 'Research Assistant / Undergraduate Researcher',
      org: 'Robot Learning Laboratory (RLL), National Taiwan University',
      location: 'Taipei, Taiwan',
      dates: 'Oct 2023 – Jun 2025',
      type: 'Research',
      bullets: [
        'Introduced an LLM discussion framework that improves creativity via multi-agent discussion and role-playing, outperforming single-agent and existing multi-agent baselines by 20%.',
        'Designed a creativity-focused LLM evaluation metric achieving 0.7 correlation with human evaluations on 1,400+ responses.',
        'Developed a decision-making agent that optimizes selection between in-context learning with RAG, supervised fine-tuning, and RLHF in a streamlined learning process.',
        'Investigated test-time compute scaling by measuring the correlation between algorithmic time complexity (Big-O) and the number of tokens required for LLMs to solve algorithmic problems.',
      ],
    },
    {
      role: 'Undergraduate Researcher',
      org: 'Speech Processing and Machine Learning Lab (SPMLLab), National Taiwan University',
      location: 'Taipei, Taiwan',
      dates: 'Jul 2023 – Jun 2025',
      type: 'Research',
      bullets: [
        'Devised and preprocessed a SoundEffectDetection dataset/task for Dynamic-SUPERB.',
        'Used DPO (RLHF) to train a text-instruction-guided voice conversion model to improve performance.',
      ],
    },
    {
      role: 'Undergraduate Researcher',
      org: 'Wireless and Mobile Networking Laboratory (WMNLab), National Taiwan University',
      location: 'Taipei, Taiwan',
      dates: 'Jan 2023 – Jan 2024',
      type: 'Research',
      bullets: [
        'Conducted mobile phone experiments on the MRT using UDP to evaluate network handover behavior.',
        'Analyzed data and presented findings on experiments across a 25-km route to professors and graduate students.',
      ],
    },
  ],

  publications: [
    {
      title: 'LLM Discussion: Enhancing the Creativity of Large Language Models via Discussion Framework and Role-Play',
      venue: 'COLM',
      year: '2024',
      authorship: 'Co-first author',
      note: 'Paper',
      links: {
        paper: 'https://arxiv.org/abs/2405.06373',
      },
    },
    {
      title:
        'Dynamic-SUPERB Phase-2: An Open Benchmark Evolving through Collaborative Expansion for Comprehensive Evaluation of Spoken Language Models with 180+ Tasks',
      venue: 'ICLR',
      year: '2025',
      authorship: 'Co-author',
      note: 'Paper',
      links: {
        paper: 'https://arxiv.org/abs/2411.05361',
      },
    },
    {
      title: 'IEEE Spoken Language Technology Workshop (SLT) - Reviewer',
      venue: 'IEEE SLT',
      year: '2024',
      note: 'Reviewer',
    },
  ],

  education: [
    {
      degree: 'Master of Engineering, EECS (Robotics & Embedded Software)',
      school: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      dates: 'Oct 2025 – May 2026',
      note: 'GPA: 3.873/4.0. Selected Courses: Machine Learning, Embedded Systems, Deep Reinforcement Learning, Data Science.',
    },
    {
      degree: 'B.S. in Engineering, Electrical Engineering',
      school: 'National Taiwan University',
      location: 'Taipei, Taiwan',
      dates: 'Sep 2020 – Jun 2025',
      note: "Dean's List: 2023 Fall (Top 5%). NTU Admissions Scholarship for Overseas Chinese Students.",
    },
  ],
}
