import { useState } from 'react'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const email = 'hello@lawrancechen.dev'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer id="contact" className="py-20 border-t" style={{ borderColor: 'var(--color-border)' }}>
      <h2 className="text-2xl font-semibold tracking-tight mb-2">Get in Touch</h2>
      <p className="text-sm mb-6" style={{ color: 'var(--color-secondary)' }}>
        Open to interesting problems and collaborations.
      </p>

      <div className="flex flex-wrap items-center gap-4 mb-8">
        <button
          onClick={copyEmail}
          className="text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
          style={{
            backgroundColor: 'var(--color-surface)',
            color: 'var(--color-text)',
          }}
        >
          {copied ? 'Copied!' : email}
        </button>
        <a href="https://github.com" className="link-underline text-sm">
          GitHub
        </a>
        <a href="https://linkedin.com" className="link-underline text-sm">
          LinkedIn
        </a>
        <a href="https://twitter.com" className="link-underline text-sm">
          Twitter
        </a>
      </div>

      <p className="text-xs" style={{ color: 'var(--color-secondary)' }}>
        Built with React + Tailwind CSS.
      </p>
    </footer>
  )
}
