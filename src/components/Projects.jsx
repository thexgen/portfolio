import { useEffect, useState } from 'react'
import { projects } from '../data/projects'

const FILTERS = [
  { id: 'all', label: 'All projects' },
  { id: 'ai', label: 'AI / RAG' },
  { id: 'fintech', label: 'Fintech' },
  { id: 'product', label: 'Product' },
]

export default function Projects({ onOpen }) {
  const [filter, setFilter] = useState('all')
  const visible = projects.filter(p => filter === 'all' || p.filters.includes(filter))
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.12 })
    document.querySelectorAll('#projects .proj.reveal:not(.in)').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [filter])
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head-row reveal">
          <div>
            <div className="label"><b>04</b> — Selected work</div>
            <h2>Projects that <span className="serif">matter.</span></h2>
          </div>
          <div className="filters">
            {FILTERS.map(f => (
              <button key={f.id} className={`f-btn${filter === f.id ? ' on' : ''}`} onClick={() => setFilter(f.id)}>{f.label}</button>
            ))}
          </div>
        </div>
        <p className="reveal" style={{ color: 'var(--muted)', fontSize: 14.5, margin: '-18px 0 22px' }}>
          Click any project for a full case study — demo video, problem, solution and tech stack.
        </p>
        <div className="projs">
          {visible.map((p, i) => (
            <article key={p.id} className={`proj reveal reveal-zoom${p.featured ? ' featured' : ''} ${p.visual}`} style={{ '--d': `${i * 0.14}s` }} onClick={() => onOpen(p)}>
              <div className={`proj-visual ${p.visual}`}>
                <span className="fname">{p.name}</span>
                <span className="fcat">{p.category}</span>
              </div>
              <div className="proj-body">
                <h3>{p.title}</h3>
                <p>{p.short}</p>
                {p.impact && (
                  <div className="impact">
                    {p.impact.map(i => <div key={i.label}><b>{i.value}</b><span>{i.label}</span></div>)}
                  </div>
                )}
                <div className="proj-foot">
                  <div className="stacks">{p.stacks.map(s => <span key={s}>{s}</span>)}</div>
                  <span className="open">{p.featured ? 'View case study →' : 'Details →'}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
