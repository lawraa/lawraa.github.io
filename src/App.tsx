import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Notes from './components/Notes'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Footer from './components/Footer'

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <>
      <Header dark={dark} onToggleDark={() => setDark(!dark)} />
      <main className="max-w-[680px] mx-auto px-6">
        <Hero />
        <Projects />
        <Notes />
        <Skills />
        <Resume />
        <Footer />
      </main>
    </>
  )
}

export default App
