const NBSP = ' '

// Presentation-only spacing for long data text, so phone-width wraps don't strand pieces:
// numbers stay with their units, "Phase 2" stays whole, and arrows and middle dots end a line
// instead of starting the next one.
export function typeset(text: string): string {
  return text
    .replace(/(\d) (N|Nm|mm|cm\/s|cm|Hz|dB|Mbps|V|µs|°C)(?![\w/])/g, `$1${NBSP}$2`)
    .replace(/\bPhase (\d)/g, `Phase${NBSP}$1`)
    .replace(/ (→|·) /g, `${NBSP}$1 `)
}
