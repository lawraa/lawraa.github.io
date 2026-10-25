import { useEffect, useRef, useState } from 'react'

// Copies text and reports `copied` for two seconds; repeat clicks restart the timer.
export function useCopied(): [boolean, (text: string) => Promise<void>] {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 2000)
  }

  return [copied, copy]
}
