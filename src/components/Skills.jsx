import { useEffect } from 'react'
import { skillGroups } from '../data/projects'

export default function Skills() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        e.target.classList.add('in')
        e.target.querySelectorAll('.bar i').forEach(b => { b.style.width = b.dataset.w + '%' })
        io.unobserve(e.target)
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.skill.reveal').forEach(el => {
      if (!el.classList.contains('in')) io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="label"><b>03</b> — Skills</div>
          <h2>Technical <span className="serif">expertise.</span></h2>
          <p>Core strengths across AI, backend, cloud and data.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((s, i) => (
            <div key={s.id} className="skill reveal reveal-zoom" style={{ '--d': `${i * 0.14}s` }}>
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="skill-list">
                {s.items.map(it => (
                  <li key={it.name}><span>{it.name}</span><span className={`level${it.hot ? ' hot' : ''}`}>{it.level}</span></li>
                ))}
              </ul>
              {s.bar && <div className="bar"><i data-w={s.bar}></i></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
