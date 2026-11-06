import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#home', label: 'Overview' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [active, setActive] = useState('home')
  const [mobile, setMobile] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1000) setMobile(false) }
    addEventListener('resize', onResize)
    return () => removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      let cur = 'home'
      for (const id of ['home','about','experience','skills','projects','contact']) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < innerHeight * 0.45) cur = id
      }
      setActive(cur)
      setShowTop(scrollY > 500)
    }
    addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header>
        <div className="nav">
          <a href="#home" className="logo"><span className="logo-mark">DD</span><span className="logo-text">Dhananjay Davhale <small>/ Portfolio 2026</small></span></a>
          <nav className={`nav-links${mobile ? ' mobile' : ''}`} id="navLinks">
            {LINKS.map(l => (
              <a key={l.href} href={l.href} className={active === l.href.slice(1) ? 'on' : ''} onClick={() => setMobile(false)}>{l.label}</a>
            ))}
          </nav>
          <button className="icon-btn" onClick={onToggleTheme} title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'} aria-label="Toggle theme" style={{ marginLeft: 'auto' }}>
            {theme === 'dark' ? '☀' : '◐'}
          </button>
          <a href="#contact" className="btn btn-dark btn-sm" id="navCta">Get in touch</a>
          <button className={`menu${mobile ? ' open' : ''}`} onClick={() => setMobile(m => !m)} aria-expanded={mobile} aria-label="Toggle menu">{mobile ? '✕ Close' : '☰ Menu'}</button>
        </div>
      </header>
      <button className={`top${showTop ? ' show' : ''}`} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
    </>
  )
}
