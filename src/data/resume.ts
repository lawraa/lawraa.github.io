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
    'Machine learning engineer and researcher with hands-on experience building RL environments, agent evaluation frameworks, and end-to-end AI pipelines that translate research into working systems.',
    'Skilled in post-training and fine-tuning techniques including DPO and RLHF, with published research contributions and direct experience across multiple university AI labs.',
    'Strong in Python and PyTorch, with a track record of shipping rigorous implementations across applied research and client-facing engineering contexts.',
  ],

  skills: [
    'Python',
    'C++',
    'PyTorch',
    'Golang',
    'ROS',
    'Matlab',
    'Deep Learning',
    'ML Model Optimization',
    'Reinforcement Learning',
    'Simulation & Control (MuJoCo)',
  ],

  experience: [
    {
      role: 'Software Engineering Job Simulation',
      org: 'JPMorgan Chase & Co. (via Forage)',
      dates: 'Apr 2026',
      type: 'Virtual Experience',
      bullets: [
        'Integrated Kafka into a Spring Boot microservice to consume and deserialize high-volume transaction messages using a configurable topic and embedded Kafka test framework.',
        'Implemented transaction validation and persistence logic with Spring Data JPA and an H2 SQL database, including entity modeling and balance updates across relational user records.',
        'Connected the service to an external REST Incentive API using RestTemplate, processing incentive responses and incorporating them into transactional workflows.',
        'Developed a REST balance endpoint returning JSON responses through a Spring controller, maintaining clean architectural boundaries between services.',
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
        'Identified and resolved co-adaptation via gradient isolation: applied stop-gradient on actor encoder during correction update, preventing the encoder from learning latents and ensuring the base actor remains independently capable at deployment.',
        'Evaluated across 4 Meta-World manipulation tasks; improved mean final success rate by +57pp on push-v3 (32.5%→89.5%) and +27.5pp on pick-place-v3 (66.0%→93.5%), achieving full seed reliability (4/4) versus 0/4 under naive concurrent training.',
      ],
    },
    {
      role: 'Machine Learning Engineer / AI Engineer (Capstone Project)',
      org: 'AI-driven Personalized Assisted Device, UC Berkeley',
      location: 'Berkeley, CA',
      dates: 'Aug 2025 – Ongoing',
      type: 'Capstone',
      bullets: [
        'Built an AI-driven optimization loop to iteratively refine the mechanical design of a personalized assistive arm device.',
        'Designed extensible task interfaces enabling integration of new evaluation environments without changing core pipeline logic.',
      ],
    },
    {
      role: 'Machine Learning Engineer / Robotics Engineer',
      org: 'IMU-Controlled Quadruped Robot, UC Berkeley',
      location: 'Berkeley, CA',
      dates: 'Aug 2025 – Dec 2025',
      type: 'Research Project',
      bullets: [
        'Designed real-time gait generation and inverse kinematics for an 8-DoF quadruped, enabling walking, turning, and jumping at a peak forward velocity of ~17 cm/s.',
        'Integrated Raspberry Pi control with Dynamixel actuators over UART, achieving synchronized motor commands at up to 100 Hz.',
        'Prototyped a wearable EMG–IMU interface and evaluated machine-learning-based gesture recognition for robot control.',
      ],
    },
    {
      role: 'Machine Learning Engineer',
      org: 'Vision Fairness Analysis: CNN vs Vision Transformer, UC Berkeley',
      location: 'Berkeley, CA',
      dates: 'Aug 2025 – Dec 2025',
      type: 'Research Project',
      bullets: [
        'Implemented PyTorch training and evaluation pipelines comparing CNN and transformer architectures on diverse facial datasets.',
        'Evaluated image reconstruction and classification performance using PSNR, SSIM, and accuracy across multiple test conditions.',
        'Analyzed performance consistency across demographic groups under controlled distribution shift and training imbalance scenarios.',
      ],
    },
    {
      role: 'Industry/Lab Researcher',
      org: 'Industry-University Collaboration, TrendForce Corporation',
      location: 'Taipei, Taiwan',
      dates: 'Oct 2024 – Jun 2025',
      type: 'Industry Collaboration',
      bullets: [
        'Built an LLM-powered text generation workflow with controllable style parameters and automated quality evaluation loops.',
        'Iteratively refined prompts and model configurations to improve consistency and reliability of generated outputs.',
      ],
    },
    {
      role: 'Software Engineer Intern',
      org: 'Pegatron Corporation',
      location: 'Taipei, Taiwan',
      dates: 'Jul 2023 – Aug 2023',
      type: 'Industry',
      bullets: [
        'Collaborated in a team of three to develop “Visual Prompt Defect Detection” for an internal internship project competition, receiving 1st Place among four groups.',
        'Designed a Gradio UI to present a visual prompting model’s capabilities for demo and stakeholder evaluation.',
        'Built a backend data ingestion pipeline storing structured image datasets to internal storage via APIs.',
        'Completed training on Git, Docker, Kubernetes, Python, Pandas, NumPy, and MongoDB.',
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
      title: 'LLM Discussion: Enhancing the Creativity of LLMs via Discussion Framework and Role-Play',
      venue: 'COLM',
      year: '2024',
      authorship: 'Co-first author',
      note: 'Paper',
    },
    {
      title:
        'Dynamic-SUPERB Phase-2: A Collaboratively Expanding Benchmark for Measuring the Capabilities of Spoken Language Models with 180+ Tasks',
      venue: 'ICLR',
      year: '2025',
      authorship: 'Co-author',
      note: 'Paper',
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
      dates: 'Oct 2025 – May 2026 (Expected)',
      note: 'GPA: 4.0/4.0. Selected Courses: Machine Learning, Embedded Systems, Deep Reinforcement Learning, Data Science.',
    },
    {
      degree: 'B.S. in Engineering, Electrical Engineering',
      school: 'National Taiwan University',
      location: 'Taipei, Taiwan',
      dates: 'Sep 2020 – Jun 2025',
      note: "Last-60-credit GPA: 4.27/4.3. Dean’s List: 2023 Fall (Top 5%). Scholarship: NTU Admissions Scholarship for Overseas Chinese Students.",
    },
  ],
}