import { useEffect, useRef } from 'react'
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
import { pages } from './pages'
import ErrorBoundary from './components/ErrorBoundary'
import { PageIntro } from './components/ui'

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Experience />
    </>
  )
}

function RouteEffects() {
  const { pathname } = useLocation()
  const prevPath = useRef(pathname)
  useEffect(() => {
    // 'instant' overrides the smooth scroll-behavior set on html.
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.title = pages.find(p => p.path === pathname)?.title ?? 'Lawrance Chen'
    // After client-side navigation, start keyboard and screen reader users at the new page.
    if (prevPath.current !== pathname) document.getElementById('main')?.focus({ preventScroll: true })
    prevPath.current = pathname
  }, [pathname])
  return null
}

// The Resume page was replaced by the PDF; send old links there.
function ResumeRedirect() {
  useEffect(() => { window.location.replace('/resume.pdf') }, [])
  return null
}

function PageError() {
  return (
    <PageIntro title="This page couldn't load">
      <p>
        <button type="button" onClick={() => location.reload()} className="link cursor-pointer">Reload</button> to try again.
      </p>
    </PageIntro>
  )
}

function Pages() {
  const { pathname } = useLocation()
  return (
    <ErrorBoundary key={pathname} fallback={<PageError />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<Projects />} />
        <Route path="/publications" element={<Research />} />
        <Route path="/bouldering" element={<Bouldering />} />
        <Route path="/drawing" element={<Drawing />} />
        <Route path="/resume" element={<ResumeRedirect />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ErrorBoundary>
  )
}

function App() {
  return (
    <HashRouter>
      <RouteEffects />
      <a
        href="#main"
        onClick={e => { e.preventDefault(); document.getElementById('main')?.focus() }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-meta focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="mx-auto w-full max-w-[1160px] px-5 outline-none sm:px-10">
        <Pages />
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
