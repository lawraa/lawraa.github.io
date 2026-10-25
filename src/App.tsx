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

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Header />
      <main className="mx-auto w-full max-w-[1160px] px-5 sm:px-10">
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
