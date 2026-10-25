import { useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Research from './components/Research'
import Bouldering from './components/Bouldering'
import Drawing from './components/Drawing'

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Experience />
    </>
  )
}

const TITLES: Record<string, string> = {
  '/work': 'Projects',
  '/publications': 'Publications',
  '/bouldering': 'Bouldering',
  '/drawing': 'Drawing',
}

function RouteEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const page = TITLES[pathname]
    document.title = page ? `${page} - Lawrance Chen` : 'Lawrance Chen'
  }, [pathname])
  return null
}

function App() {
  return (
    <HashRouter>
      <RouteEffects />
      <a
        href="#main"
        onClick={e => { e.preventDefault(); document.getElementById('main')?.focus() }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-[15px] focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="mx-auto w-full max-w-[1160px] px-5 outline-none sm:px-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/publications" element={<Research />} />
          <Route path="/bouldering" element={<Bouldering />} />
          <Route path="/drawing" element={<Drawing />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
