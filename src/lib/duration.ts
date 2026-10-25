// "1 year and 8 months" since `start`, for the bouldering and drawing intros.
export function durationSince(start: Date, now = new Date()): string {
  const totalMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())
  if (totalMonths < 1) return 'less than a month'
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const y = years ? `${years} year${years > 1 ? 's' : ''}` : ''
  const m = months ? `${months} month${months > 1 ? 's' : ''}` : ''
  return [y, m].filter(Boolean).join(' and ')
}
