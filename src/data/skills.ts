export interface SkillCategory {
  title: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    title: 'Modeling & Algorithms',
    items: [
      'Deep learning (transformers, CNNs, sequence models)',
      'Gradient-boosted trees, ensemble methods',
      'Contextual bandits, reinforcement learning',
      'Probabilistic inference, Bayesian methods',
      'NLP, information extraction, document understanding',
    ],
  },
  {
    title: 'Systems & Infrastructure',
    items: [
      'Real-time feature stores (Redis, Feast)',
      'Model serving (Triton, TorchServe, SageMaker)',
      'Stream processing (Kafka, Flink)',
      'Distributed training (DeepSpeed, FSDP)',
      'CI/CD for ML (MLflow, Weights & Biases, DVC)',
    ],
  },
  {
    title: 'Languages & Tools',
    items: [
      'Python, SQL, Rust (learning), TypeScript',
      'PyTorch, JAX, scikit-learn, XGBoost',
      'AWS (SageMaker, Lambda, ECS, S3), GCP (Vertex AI)',
      'Docker, Kubernetes, Terraform',
      'PostgreSQL, Redis, DynamoDB, BigQuery',
    ],
  },
  {
    title: 'Practices',
    items: [
      'Experiment design and offline evaluation',
      'Data quality monitoring and contracts',
      'Model calibration and uncertainty quantification',
      'Technical writing and documentation',
      'Cross-functional collaboration with product and engineering',
    ],
  },
]
