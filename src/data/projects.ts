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
    id: 'realtime-fraud',
    title: 'Real-Time Fraud Detection Pipeline',
    subtitle: 'Sub-50ms inference at 2M events/day with adaptive thresholds',
    tags: ['PyTorch', 'Kafka', 'Feature Store', 'MLOps'],
    problem:
      'Legacy rule-based system missed 34% of fraudulent transactions and generated excessive false positives, costing ~$2.1M annually in chargebacks.',
    approach:
      'Built an ensemble of gradient-boosted trees for fast classification and a transformer-based sequence model for behavioral anomaly detection. Designed a real-time feature store with sub-10ms lookups for user history aggregations.',
    architecture:
      'Kafka ingestion → Flink feature computation → Redis feature store → Model serving via Triton Inference Server → Decision engine with configurable thresholds → Feedback loop for online learning.',
    results:
      'Reduced fraud losses by 61%. False positive rate dropped from 8.2% to 1.7%. P99 latency held under 47ms. System processes 2.3M events/day.',
    lessons:
      'Feature freshness matters more than model complexity for fraud. The biggest win came from real-time aggregation of user session features, not from a larger model.',
  },
  {
    id: 'document-understanding',
    title: 'Document Understanding System',
    subtitle: 'Multimodal extraction from unstructured financial documents',
    tags: ['Vision Transformers', 'OCR', 'NLP', 'AWS'],
    problem:
      'Manual processing of 50K+ financial documents per month required 12 FTEs and had a 4.3% error rate on key field extraction.',
    approach:
      'Fine-tuned a LayoutLMv3 model on domain-specific documents with a custom pre-training objective. Built a confidence-calibrated pipeline that routes low-confidence extractions to human review.',
    architecture:
      'S3 ingestion → Lambda preprocessing → OCR (Textract + custom post-processing) → LayoutLMv3 inference on SageMaker → Confidence routing → Human review UI → Active learning feedback.',
    results:
      'Automated 87% of documents end-to-end. Error rate on automated extractions: 0.8%. Reduced processing team from 12 to 3 FTEs. ROI positive within 4 months.',
    lessons:
      'Confidence calibration was the key design decision. A model that knows when it doesn\'t know is far more valuable than one that\'s slightly more accurate on average.',
  },
  {
    id: 'recommendation-engine',
    title: 'Content Recommendation Engine',
    subtitle: 'Contextual bandits for personalized content ranking',
    tags: ['Contextual Bandits', 'A/B Testing', 'Spark', 'Python'],
    problem:
      'Existing collaborative filtering recommendations had a cold-start problem and couldn\'t adapt to real-time user intent signals.',
    approach:
      'Implemented a contextual bandit framework (LinUCB variant) that balances exploration/exploitation while incorporating real-time session context. Built offline evaluation infrastructure using replay methods.',
    architecture:
      'Event stream → Session context builder → Bandit policy server → Action logging → Offline replay evaluation → Policy update pipeline (daily retrain, hourly context refresh).',
    results:
      'CTR improved 23% over collaborative filtering baseline. Cold-start performance improved 41%. Exploration overhead kept under 5% of traffic.',
    lessons:
      'Offline evaluation with proper replay methods saved months of A/B testing. Invest heavily in evaluation infrastructure before optimizing the model.',
  },
]
