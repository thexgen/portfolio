import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectModal from './components/ProjectModal'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './hooks/hooks'

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [selected, setSelected] = useState(null)
  const [toast, setToast] = useState({ msg: '', show: false })

  const notify = (msg) => {
    setToast({ msg, show: true })
    setTimeout(() => setToast({ msg, show: false }), 2200)
  }

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    const observeAll = () => document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el))
    observeAll()
    const t = setTimeout(observeAll, 300)
    return () => { io.disconnect(); clearTimeout(t) }
  }, [])

  return (
    <>
      <div className="bg-orbs" aria-hidden="true"><span className="orb orb-1"></span><span className="orb orb-2"></span><span className="orb orb-3"></span><span className="orb orb-4"></span><span className="orb orb-5"></span></div>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects onOpen={setSelected} />
        <Contact notify={notify} />
      </main>
      <Footer />
      <ProjectModal project={selected} onClose={() => setSelected(null)} notify={notify} />
      <div className={`toast${toast.show ? ' show' : ''}`}>{toast.msg}</div>
    </>
  )
}
