export interface Project {
  id: string
  title: string
  subtitle: string
  tags: string[]
  imageUrl?: string
  detailImages?: (string | { src: string; rows?: number })[]
  codeUrl?: string
  videoUrl?: string
  pdfUrl?: string
  affiliation?: string
  description: string[]
  problem: string
  approach: string
  architecture: string
  results: string
  reflection: string
}

export const projects: Project[] = [
  {
    id: 'llm-personalized-assistive-design',
    title: 'LLM-Driven Personalized Assistive Device Design (Ongoing)',
    affiliation: 'UC Berkeley · MEng Capstone Project',
    subtitle: 'Closed-loop simulation-in-the-loop optimization for adaptive wearable robotics',
    tags: ['Machine Learning', 'Reinforcement Learning', 'Simulation', 'MuJoCo', 'Human-in-the-Loop', 'LLMs'],
    imageUrl: '/projects/capstone_dorsal-grasper.jpg',
    codeUrl: undefined,
    videoUrl: undefined,
    pdfUrl: undefined,

    description: [
      'Designed a closed-loop framework that automatically personalizes an assistive wearable device based on individual physical ability.',
      'Combines physics-based simulation, task performance metrics, and LLM reasoning to iteratively refine mechanical parameters.',
      'Transforms device design from manual expert tuning into an automated optimization process guided by measurable outcomes.'
    ],

    problem:
      'Assistive devices are typically designed using population averages and manual tuning, resulting in poor usability across users with different strength, mobility, and anatomical constraints. Personalization currently requires repeated expert-driven prototyping.',

    approach:
      'Represent human variability (hand dimensions, ROM, strength) as constraints, evaluate parameterized designs in MuJoCo tasks, extract performance metrics (success, effort, robustness), and use an LLM reasoning agent to propose parameter updates in a closed-loop optimization cycle.',

    architecture:
      'Human profile → parameterized device generator → MuJoCo simulation → performance metric abstraction → LLM reasoning agent proposes delta parameters → updated design → repeat until convergence.',

    results:
      '(Ongoing) Built a working simulation-in-the-loop personalization pipeline capable of iteratively improving device usability without manual redesign. The framework generalizes across users and task variations.',
  
    reflection:
      'This is still an ongoing project. The main insight so far is that the bottleneck is not the optimization algorithm but the interface between simulation, metrics, and reasoning. MuJoCo cannot perfectly represent real-world interaction, so the quality of evaluation metrics heavily affects learning outcomes. Likewise, translating a mechanical design into a representation an LLM can reason about requires careful abstraction — most of the engineering effort lies in designing that information bridge rather than the learning model itself.'
  },
  {
    id: 'emg-imu-quadruped',
    title: 'Low-Cost EMG-IMU Controlled Quadruped (EMG-Quad)',
    affiliation: 'UC Berkeley · EECS 249',
    subtitle: 'Wearable IMU/EMG teleoperation with a reproducible 3D-printed quadruped platform',
    tags: ['Machine Learning', 'Embedded Systems', 'Robotics', 'Raspberry Pi', 'ROS'],
    imageUrl: '/projects/quad_quadruped.jpg', 
    codeUrl: 'https://github.com/lawraa/WristControlledQuadruped',
    pdfUrl: '/projects/149_final_quadruped.pdf', 
    description: [
      'Built a low-cost, mechanically simplified quadruped platform for educational and maker settings using 3D-printed parts and off-the-shelf components, requiring no machining or custom PCBs.',
      'Developed a wrist-worn controller combining IMU motion sensing and surface EMG to map user intent into real-time locomotion commands, executed on a Raspberry Pi with synchronized Dynamixel motor control.',
    ],
    problem:
      'Legged robots are often expensive and hard to replicate, and intuitive control interfaces typically require specialized hardware. We wanted a reproducible quadruped plus a wearable controller that could translate wrist gestures and muscle activity into reliable real-time locomotion commands.',
    approach:
      'Adopted a cost-conscious quadruped architecture that reduces actuation from 12 to 8 motors while preserving locomotion via differential turning. Built a wearable IMU/EMG wristband pipeline: OpenBCI Cyton digitizes biosignals and IMU data, Raspberry Pi performs processing and command mapping, and a gait table + trajectory generator produces synchronized motor commands.',
    architecture:
      'Wearable (EMG electrodes + IMU) → OpenBCI Cyton sampling/packetization → Bluetooth/USB transport → Raspberry Pi 4 processing + gesture mapping → gait manager + foot trajectory generation + IK → U2D2 USB-to-serial → Dynamixel bus synchronized writes → 8 RX-24F actuators at fixed control rate.',
    results:
      'Achieved synchronized position control at 100 Hz with ~0.29° resolution per tick over a 1 Mbps Dynamixel bus. Implemented 5 gaits with stride lengths up to 50 mm, foot clearance up to 20 mm, and a jump push up to 40 mm. Reached a peak forward velocity of ~17 cm/s (>1 body length/s). Total prototype cost was about $442 USD (excluding shared lab tools).',
    reflection:
      'The biggest engineering wins came from system integration and reliability: stable real-time scheduling, clean sensor/serial interfaces, and modular gait orchestration mattered more than fancy models. EMG decoding was limited mainly by electrode contact consistency; IMU provided robust low-latency intent while EMG offered higher-resolution cues when signal quality allowed.',
    detailImages: [
      '/projects/quad_system-architecture.jpg',
      { src: '/projects/quad_control.mp4', rows: 2 },
      '/projects/quad_wristband.jpg',
      '/projects/quad_quadruped.jpg',
    ],
  },
  {
    id: 'cnn-vit-fairness',
    title: 'CNN–ViT Showdown for Racial Equality in Upscaling and Racial Recognition',
    affiliation: 'UC Berkeley · CS 289',
    subtitle: 'ResNet50 vs FastViT robustness under intentional racial imbalance (upscaling + race classification)',
    tags: ['Computer Vision', 'Model Evaluation', 'Fairness', 'ResNet50', 'Vision Transformer', 'PyTorch'],
    imageUrl: '/projects/cnnvit_architecture.jpg', 
    codeUrl: 'https://github.com/Maltomatic/RaceComp',
    pdfUrl: '/projects/CNN_ViT_Showdown_for_Racial_Equality.pdf',
    videoUrl: 'https://youtu.be/KG4sqW_j5PE',
    description: [
      'Facial ML systems can exhibit racial performance disparities when training data is imbalanced. We studied whether CNN or ViT backbones are more stable under biased training distributions.',
      'We compared U-Net models with ResNet50 vs FastViT encoders on two tasks: super-resolution (FairFace) and racial classification (RFW), using PSNR/SSIM and per-race accuracy under 1:20 minority downsampling.',
    ],
    problem:
      'It is unclear whether convolutional or transformer-based vision backbones are intrinsically more resilient to racially imbalanced training data, especially across different task types like pixel-level reconstruction vs semantic classification.',
    approach:
      'We trained comparable U-Net architectures with ResNet50 or FastViT encoders using transfer learning. For super-resolution, we evaluated per-race PSNR/SSIM on FairFace. For classification, we used RFW race subsets and measured per-race accuracy. We intentionally simulated imbalance by downsampling one minority race to 5% of the majority (1:20) and compared stability across races and architectures.',
    architecture:
      'Super-resolution: FairFace preprocessing (crop/resize) → U-Net (ResNet50 or FastViT encoder) → decoder for upscaling → evaluate PSNR/SSIM per race. '
      + 'Classification: RFW race subsets → backbone (ResNet50 or FastViT, decoder removed) → classifier head → evaluate per-race accuracy. '
      + 'Training: staged unfreezing of later backbone layers for stability; loss = VGG19 perceptual loss for upscaling and cross-entropy for classification.',
    results:
      'Super-resolution quality was largely race-agnostic for both architectures under heavy imbalance, with minimal variation across races. ResNet50 achieved much higher absolute reconstruction quality than FastViT (about +5.79 dB PSNR). '
      + 'In contrast, classification exhibited clear race-dependent sensitivity to imbalance: Caucasian and Indian groups showed the largest accuracy drops when downsampled (around 16–18%), Asian showed moderate drop (~11.5%), and African remained the most stable (~3%). '
      + 'FastViT had a smaller average relative performance drop under downsampling than ResNet50, suggesting slightly better robustness depending on fairness metric.',
    reflection:
      'Fairness behavior differed strongly by task: reconstruction metrics stayed stable across races, while classification accuracy was sensitive to imbalance. Across both backbones, the dominant driver of unfairness was the training data distribution rather than architecture alone, so evaluation design and subgroup reporting are essential.',
  },
  {
    id: 'trendforce-news-translation',
    title: 'Automating Technology News Translation & Style Adaptation',
    affiliation: 'NTU RLL Lab x TrendForce · Industry-University Research Collaboration',
    subtitle: 'Two-stage RAG pipeline for domain translation and editorial style alignment',
    tags: ['LLM', 'RAG', 'NLP', 'Evaluation', 'Embeddings'],
    imageUrl: '/projects/trendforce_pipeline.jpg',

    description: [
      'TrendForce writters manually rewrite English tech news into Traditional Chinese, which is slow, expensive, and difficult to scale.',
      'This project builds an automated pipeline that first translates articles accurately, then rewrites them to match TrendForce’s editorial writing style.'
    ],

    problem:
      'Machine translation systems produce grammatically correct text but fail at domain terminology and editorial tone. The goal was to preserve factual accuracy while matching a specific professional industry writing style.',

    approach:
      'Designed a two-stage pipeline. Stage 1 retrieves similar bilingual examples and performs retrieval-augmented translation. Stage 2 retrieves stylistically similar articles and rewrites the translation to match TrendForce editorial tone without altering meaning.',

    architecture:
      'Web-crawled bilingual dataset → embedding retrieval (bge-large) → few-shot LLM translation → style retrieval RAG → LLM rewriting → multi-method evaluation (COMET, similarity metrics, human & LLM judging, pairwise comparison).',

    results:
      'Retrieval-based few-shot prompting significantly improved translation quality over zero-shot. The style-adaptation stage produced consistently preferred articles in pairwise evaluation while preserving semantic correctness.',

    reflection:
      'Accuracy and style are separate problems. Translation quality comes from semantic grounding, while writing quality comes from contextual reference retrieval. Treating them as two independent stages produced far more reliable results.'
  },
  {
    id: 'smart-driving-assistance',
    title: 'Smart Driving Assistance System',
    affiliation: 'National Taiwan University · EE3021',
    subtitle: 'Embedded perception, safety control, and behavioral cloning for autonomous parking',
    tags: ['Embedded Systems', 'Computer Vision', 'Raspberry Pi', 'STM32', 'Behavioral Cloning'],
    imageUrl: '/projects/smart-driving.png',
    codeUrl: 'https://github.com/lawraa/ESLab_SmartParking/',
    pdfUrl: '/projects/smart-driving.pdf',
    detailImages: [
      '/projects/smart-driving_display.png',
      '/projects/smart-driving_architecture.png',
      '/projects/smart-driving_car.png',
    ],
    description: [
      'Built a real-time smart driving assistant integrating sensors, perception, and control on embedded hardware.',
      'The system detects nearby obstacles, warns the driver, and attempts autonomous parking using imitation learning trained from human driving behavior.',
    ],
    problem:
      'Low-cost RC vehicles lack safety awareness and autonomous capability. Manual driving provides no real-time distance feedback and parking requires precise control difficult for human operators.',

    approach:
      'Designed a multi-device architecture combining STM32 sensor acquisition and Raspberry Pi decision making. Implemented real-time obstacle detection, safety braking, visual UI streaming, and behavioral cloning for autonomous parking.',

    architecture:
      'ToF sensors → BLE communication → Raspberry Pi processing → safety logic & UI → motor control via PWM. Camera → CNN behavioral cloning → steering & throttle prediction → autonomous parking.',

    results:
      'System successfully detected obstacles, triggered emergency stops, and provided real-time driving feedback. Autonomous parking learned initial maneuvers but struggled in complex reverse scenarios due to dataset limitations.',

    reflection:
      'Data collection matters more than model complexity in imitation learning. Imitation learning fails due to distribution shift: the policy is trained only on expert states, but during execution, small mistakes lead it into unseen states where it does not know how to act, causing compounding errors. Methods such as DAgger fix this by repeatedly letting the learner act and querying the expert on the learner’s visited states, so the model learns how to recover from its own mistakes. Embedded latency, communication protocols, and real-world edge cases dominate system performance more than the ML model itself.',
  },
  {
    id: 'visual-prompt-defect-detection',
    title: 'Visual Prompt Defect Detection (Gradio + SegGPT)',
    affiliation: 'Pegatron · Software Engineer Internship',
    subtitle: 'In-context visual prompting demo with dataset evaluation and prompt versioning',
    tags: ['Computer Vision', 'In-Context Learning', 'Gradio', 'SegGPT', 'HDF5', 'APIs'],
    imageUrl: '/projects/visual-prompt-defect-detection.jpg', // put a UI screenshot or pipeline diagram here
    codeUrl: undefined,
    videoUrl: undefined,
    pdfUrl: undefined,
    description: [
      'Built a Gradio-based interface to showcase visual prompting for defect detection, enabling prompt-based segmentation, prediction, and evaluation.',
      'Implemented dataset-level evaluation workflows and prompt versioning so users could save, reload, edit, and benchmark prompts consistently.',
      'Created backend data ingestion that stores structured image datasets via internal APIs for repeatable demos and stakeholder review.',
    ],

    problem:
      'Manufacturing defect inspection changes frequently, but conventional vision pipelines require huge amount of new labeled training data for each defect type. The team needed a fast way to demonstrate defect detection capabilities with minimal setup and a workflow that non-ML stakeholders could use.',

    approach:
      'Used an existing SegGPT-based visual prompting model (not our contribution) as the inference engine, then focused engineering effort on productizing it: building a Gradio UI, adding prompt and dataset management, and adding evaluation tools (Dice/IoU/Precision) for measurable performance.',

    architecture:
      'User uploads prompt images + prompt masks and a target image → preprocessing/resize → SegGPT inference returns predicted mask + overlay → (optional) user uploads ground-truth mask → evaluation computes Dice/IoU/Precision. A dataset pipeline packages prompt/prediction/ground-truth into HDF5, syncs to internal storage via APIs, and supports reload/edit/versioning for repeatable testing.',

    results:
      'Won 1st place in an internal internship project competition (team of three). Delivered an end-to-end demo workflow including interactive prompting, dataset evaluation, and prompt version control for reliable stakeholder testing.',
    
    reflection:
      'Model choice matters, but demo reliability matters more: the biggest lift was building a clean data contract (HDF5 structure), predictable evaluation, and UI flows that make results reproducible and easy to trust. The competition was competitive, but I believe the winning edge was productizing the demo with a focus on reliability and user experience rather than just model performance.',
  },
  {
    id: 'isolated-flyback-power-supply',
    title: 'Isolated Flyback Converter ±15V Power Supply',
    affiliation: 'National Taiwan University · EE3022',
    subtitle: 'Design, build, and validate a closed-loop regulated offline SMPS',

    tags: ['Power Electronics', 'Analog Circuits', 'Control Systems', 'PCB Design', 'Hardware Testing'],

    imageUrl: '/projects/flyback-converter.png',
    codeUrl: undefined,
    videoUrl: undefined,
    pdfUrl: '/projects/flyback-converter.pdf',
    detailImages: [
      '/projects/flyback-converter_soft-start.png',
      '/projects/flyback-converter_burn-in.png',

    ],
    description: [
    'Designed and built an isolated flyback switching power supply generating ±15V outputs from AC mains.',
    'Implemented closed-loop feedback control and verified operation through oscilloscope waveform analysis.',
    'Validated stability using load transient, startup, efficiency, burn-in, and frequency response testing.'
    ],

    problem:
    'Linear regulators waste significant power and cannot efficiently step down high AC input voltage while providing isolated dual outputs. The goal was to design a compact, efficient, and regulated ±15V supply suitable for real electronics systems.',

    approach:
    'Designed a flyback topology with transformer isolation, PWM control (UC3845), feedback compensation network, snubber protection, and rectification filtering. Built the PCB, wound the transformer, and iteratively debugged switching behavior using oscilloscope measurements.',

    architecture:
    'AC mains → rectifier → high-voltage DC bus → PWM switch (MOSFET) → flyback transformer → secondary rectifiers → LC filters → ±15V outputs → feedback control loop → PWM duty adjustment',

    results:
    'Achieved regulated ±15V outputs across wide input range with stable closed-loop control. Efficiency measured around ~87–91% across load conditions. Converter remained thermally stable (~45°C with cooling) and recovered from load transients within ~175–207µs.',

    reflection:
    'Unlike simulation-only circuits, real hardware required debugging parasitics, noise, and measurement mistakes. The key learning was that stability and protection design (snubber, compensation, layout) matter as much as topology — the circuit worked only after understanding real switching behavior rather than ideal equations.'
  },
  {
    id: '5g-handoff-simulator',
    title: '5G Handoff Decision Simulator',
    affiliation: 'National Taiwan University · EE4027',
    subtitle: 'Network-level simulation comparing hard vs soft handoff using distance and SINR policies',
    tags: ['Networking', 'Simulation', 'Wireless Communication', 'Python', 'Systems Modeling'],
    imageUrl: '/projects/5g-handoff-simulator.jpg',
    codeUrl: 'https://github.com/lawraa/WMN_intro/tree/main/Final_Project',
    videoUrl: undefined,
    pdfUrl: '/projects/5g-handoff-simulator.pdf',

    description: [
      'Built a Python simulator modeling mobile device handoff behavior in a multi–base station 5G cellular network.',
      'Implemented signal propagation, interference, and SINR calculations to evaluate realistic connection quality.',
      'Compared distance-based and SINR-based handoff strategies under both hard and soft handoff policies.'
    ],

    problem:
      'In cellular networks, switching a device between base stations too aggressively causes instability, while switching too late causes poor signal quality. We wanted to understand how handoff strategy affects overall network performance and user experience.',

    approach:
      'Simulated a 45×45 grid cellular environment where a mobile device performs a random walk. At each step, the system ranks candidate base stations using either distance or SINR, then applies hard or soft handoff logic to determine connection transitions.',

    architecture:
      'Mobile device movement → compute distance & path loss → compute interference → calculate SINR → rank top base stations → apply handoff policy (hard or soft) → update allocation metrics → repeat thousands of trials → aggregate performance statistics.',

    results:
      'Soft handoff consistently improved average allocation (~6% higher) and reduced unstable switching compared to hard handoff across both distance-based and SINR-based strategies.',

    reflection:
      'This project showed me networking systems are not only about formulas — policy decisions matter. The same physical model produced very different performance depending on the decision rule, and careful simulation was necessary to understand tradeoffs between stability and responsiveness.'
  },
  
  
]
