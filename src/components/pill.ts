// Toggle chips used for the project topic filter and the map region buttons.
export const pillClass = (active: boolean) =>
  `cursor-pointer rounded-full px-3.5 py-2 text-[15px] font-semibold transition-colors ${
    active ? 'bg-forest text-white' : 'bg-paper text-mute ring-1 ring-inset ring-line hover:text-ink hover:ring-forest'
  }`

// The count inside a chip; dimmed only on the forest background, where it still passes contrast.
export const pillCountClass = (active: boolean) => `tabular ${active ? 'opacity-70' : ''}`
