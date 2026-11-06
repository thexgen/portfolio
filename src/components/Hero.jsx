import { useEffect } from 'react'
import { useCounter } from '../hooks/hooks'

const statsData = [
  { n: 4, suffix: '+', label: 'Years of experience', sub: '2020 — Present', Icon: BriefcaseIcon },
  { n: 2, suffix: '', label: 'Companies', sub: 'Product teams', Icon: BuildingIcon },
  { n: 3, suffix: '', label: 'AI products', sub: 'RAG · LLM · Pipelines', Icon: CpuIcon },
  { n: 45, suffix: '%', label: 'Load reduction', sub: 'Async Python', Icon: BoltIcon },
]

function BriefcaseIcon() {
  return <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="13" rx="2.5"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M2 13h20"/></svg>
}
function BuildingIcon() {
  return <svg viewBox="0 0 24 24"><path d="M3 21h18"/><path d="M5 21V5a1 1 0 0 1 1-1h8v17"/><path d="M14 9h4a1 1 0 0 1 1 1v11"/><path d="M8 8h2M8 12h2M8 16h2"/></svg>
}
function CpuIcon() {
  return <svg viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg>
}
function BoltIcon() {
  return <svg viewBox="0 0 24 24"><path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z"/></svg>
}

function StatCard({ item, i }) {
  const val = useCounter(item.n)
  const { Icon } = item
  return (
    <div className="stat reveal reveal-pop" style={{ '--d': `${0.15 + i * 0.14}s` }}>
      <div className="stat-head">
        <b><span>{val}</span><i>{item.suffix}</i></b>
        <span className="stat-icon"><Icon /></span>
      </div>
      <span>{item.label}</span>
      <small>{item.sub}</small>
    </div>
  )
}

export default function Hero() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
  return (
    <section id="home" style={{ paddingTop: 116, paddingBottom: 0 }}>
      <div className="wrap hero">
        <div className="hero-grid">
          <div>
            <h1 className="reveal" style={{ '--d': '0.05s' }}>Full Stack &amp; <span className="serif">AI Engineer</span></h1>
            <p className="lead reveal" style={{ '--d': '0.16s' }}>I build <b>RAG and LLM systems</b> that turn messy data into answers. Specialising in Python, FastAPI and AWS with 4+ years of product experience.</p>
            <div className="hero-cta reveal" style={{ '--d': '0.28s' }}>
              <a href="/resume.pdf" download className="btn btn-dark">↓&nbsp; Download Resume</a>
              <a href="#contact" className="btn btn-outline">Contact me</a>
            </div>
            <div className="hero-meta">
              <a href="mailto:dhananjaydavhale12@gmail.com">dhananjaydavhale12@gmail.com</a>
              <span className="dot-sep"></span><span>Pune · IST</span>
              <span className="dot-sep"></span><span>Python · FastAPI · RAG · AWS</span>
            </div>
          </div>
          <div className="hero-card reveal reveal-zoom" style={{ '--d': '0.22s' }}>
            <div className="top">
              <div className="avatar">DD</div>
              <div><h3>Dhananjay Davhale</h3><p>Software Engineer · Asset Vantage</p></div>
            </div>
            <div className="metric"><span>Experience</span><b>4+ Years</b></div>
            <div className="metric"><span>AI Products</span><b>3 Shipped</b></div>
            <div className="metric"><span>Performance</span><b>45% Load Reduction</b></div>
            <div className="metric"><span>Location</span><b>Pune, India</b></div>
            <div className="foot"><p><b style={{ color: 'var(--text)' }}>Currently:</b> Leading RAG platforms at Asset Vantage</p><a href="#experience">Learn more →</a></div>
          </div>
        </div>
        <div className="stack-strip reveal" style={{ '--d': '0.1s' }}>
          <span className="label">Tech stack</span>
          <span>Python</span><span>FastAPI</span><span>LLM</span><span>RAG</span><span>AWS</span><span>Qdrant</span><span>Docker</span><span>React</span><span>PostgreSQL</span><span>Redis</span>
        </div>
        <div className="stats">
          {statsData.map((s, i) => <StatCard key={s.label} item={s} i={i} />)}
        </div>
      </div>
    </section>
  )
}
