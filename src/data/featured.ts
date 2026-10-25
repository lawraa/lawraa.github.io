// The project cards on the home page, in order: a project id from projects.ts, a short card title,
// a short field label shown as the card's tag, and the tag's tone.
export const featuredProjects: { id: string; title: string; field: string; tone: 'butter' | 'forest' | 'mint' }[] = [
  { id: 'llm-personalized-assistive-design', title: 'LLM-Driven Personalized Assistive Device Design', field: 'LLMs × Robotics', tone: 'butter' },
  { id: 'emg-imu-quadruped', title: 'Low-Cost EMG-IMU Controlled Quadruped', field: 'Embedded systems', tone: 'forest' },
  { id: 'colm-llm-discussion', title: 'LLM Discussion', field: 'Research · COLM 2024', tone: 'mint' },
]
