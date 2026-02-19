import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Research from './components/Research'
import Resume from './components/Resume'
import Bouldering from './components/Bouldering'

function HomePage() {
  return (
    <main className="max-w-[800px] mx-auto px-6">
      <Hero />
      <Skills />
      <Footer />
    </main>
  )
}

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
    <HashRouter>
      <Header dark={dark} onToggleDark={() => setDark(!dark)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<Projects />} />
        <Route path="/publications" element={<Research />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/bouldering" element={<Bouldering />} />
      </Routes>
    </HashRouter>
  )
}

export default App
