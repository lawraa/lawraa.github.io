export interface Project {
  id: string
  title: string
  subtitle: string
  tags: string[]
  problem: string
  approach: string
  architecture: string
  results: string
  lessons: string
}

export const projects: Project[] = [
  {
    id: 'assistive-device',
    title: 'AI-Driven Personalized Assistive Device',
    subtitle: 'Closed-loop RL optimization for mechanical assistive arm design',
    tags: ['Reinforcement Learning', 'Simulation', 'PyTorch', 'MuJoCo'],
    problem:
      'Designing assistive mechanical arms requires extensive manual iteration — each design must be simulated, evaluated against task-specific criteria, and refined. This loop is slow and doesn\'t scale to new tasks.',
    approach:
      'Built a closed-loop system: design → simulate → evaluate → modify → repeat. Created an extensible task interface so new evaluation environments could be added without rewriting the optimization pipeline.',
    architecture:
      'Parameterized design generator → MuJoCo simulation → Task-specific evaluation metrics → RL-based design refinement → Automated iteration loop with convergence checks.',
    results:
      'Automated the design refinement pipeline end-to-end. The extensible task interface allowed adding new evaluation scenarios without modifying the core optimization loop.',
    lessons:
      'The real engineering challenge was the evaluation interface, not the RL algorithm. A well-designed task abstraction made the system useful beyond the original use case.',
  },
  {
    id: 'vision-fairness',
    title: 'Vision Fairness Analysis — CNN vs Vision Transformer',
    subtitle: 'Evaluation methodology for demographic robustness under distribution shift',
    tags: ['Vision Models', 'CNN', 'ViT', 'Evaluation'],
    problem:
      'Aggregate model accuracy hides demographic performance differences. Standard benchmarks don\'t surface how models behave under distribution shift across subgroups.',
    approach:
      'Built a training and evaluation pipeline comparing CNN and Vision Transformer architectures. Focused on evaluation methodology — measuring not just accuracy but consistency across demographic groups under shift.',
    architecture:
      'Data pipeline with demographic splits → Parallel training (CNN, ViT) → Multi-metric evaluation (PSNR, SSIM, classification accuracy, demographic consistency) → Comparative analysis framework.',
    results:
      'Surfaced meaningful performance gaps that aggregate metrics missed. The evaluation framework provided a structured way to compare architectural robustness beyond top-line accuracy.',
    lessons:
      'Evaluation design matters more than model selection for fairness work. The right metrics reveal problems that accuracy averages hide.',
  },
  {
    id: 'llm-text-gen',
    title: 'LLM Text Generation Workflow',
    subtitle: 'Parameterized prompting with automated evaluation loops',
    tags: ['LLMs', 'Evaluation', 'Python', 'API Integration'],
    problem:
      'Generated text was inconsistent and difficult to control. Prompt engineering alone didn\'t produce reliable quality improvements.',
    approach:
      'Built a parameterized prompting system with automated evaluation loops. Instead of rewriting prompts manually, used structured parameter sweeps with measurable quality signals to guide iteration.',
    architecture:
      'Parameterized prompt templates → LLM API integration → Automated output evaluation → Quality metric tracking → Iterative refinement pipeline.',
    results:
      'Quality improved through systematic evaluation rather than ad-hoc prompt rewriting. The evaluation loop made improvements measurable and reproducible.',
    lessons:
      'The key insight was treating prompt engineering as an optimization problem with a feedback loop, not a creative writing exercise. Evaluation infrastructure drove the real gains.',
  },
  {
    id: 'defect-detection',
    title: 'Visual Prompt Defect Detection',
    subtitle: 'In-context learning pipeline for manufacturing defect detection at Pegatron',
    tags: ['Vision', 'In-Context Learning', 'Gradio', 'Data Ingestion'],
    problem:
      'Manufacturing defect detection required labeled training data for each new defect type — slow to set up and expensive to maintain.',
    approach:
      'Built a defect detection pipeline using visual prompting and in-context learning, reducing the need for large labeled datasets. Created a Gradio-based UI demo and a backend data ingestion API.',
    architecture:
      'Data ingestion API → Image preprocessing → Visual prompt-based detection model → Gradio demo interface → Results logging.',
    results:
      '1st place in internal project competition. The system demonstrated practical defect detection with minimal labeled data setup.',
    lessons:
      'In-context learning dramatically reduced the data labeling bottleneck. The Gradio demo made it easy for non-ML stakeholders to evaluate and trust the system.',
  },
  {
    id: 'robotics-autodriving',
    title: 'Robotics Auto-Driving & Mapping',
    subtitle: 'ROS-based autonomous navigation on embedded hardware',
    tags: ['ROS', 'Raspberry Pi', 'Control Systems', 'Mapping'],
    problem:
      'Needed an autonomous driving and mapping system running on constrained embedded hardware (Raspberry Pi) with real-time requirements.',
    approach:
      'Built a ROS-based software stack handling sensor fusion, mapping, and control on Raspberry Pi hardware. Focused on reliability within the compute constraints of the target platform.',
    architecture:
      'Sensor drivers → ROS message pipeline → SLAM mapping node → Path planning → Motor control interface → All running on Raspberry Pi.',
    results:
      'Working autonomous navigation and mapping system on embedded hardware. The ROS architecture made it straightforward to swap sensor and control modules.',
    lessons:
      'Embedded constraints force good engineering decisions. Working within tight compute budgets made every architectural choice deliberate.',
  },
]
