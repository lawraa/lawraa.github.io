// The project cards on the home page, in order: a project id from projects.ts, a short field label
// shown as the card's tag, and the tag's tone.
export const featuredProjects: { id: string; field: string; tone: 'butter' | 'forest' | 'mint' }[] = [
  { id: 'llm-personalized-assistive-design', field: 'LLMs × Robotics', tone: 'butter' },
  { id: 'emg-imu-quadruped', field: 'Embedded systems', tone: 'forest' },
  { id: 'colm-llm-discussion', field: 'Research · COLM 2024', tone: 'mint' },
]
