import { experiences } from '../data/projects'

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="label"><b>02</b> — Experience</div>
          <h2>Where I&rsquo;ve <span className="serif">worked.</span></h2>
          <p>From freelance beginnings to leading RAG platforms — the path so far.</p>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => {
            const title = exp.role.split('·')[0].trim()
            return (
              <div key={exp.id} className={`tl-item ${i % 2 === 1 ? 'right' : 'left'} reveal ${i % 2 === 1 ? 'reveal-right' : 'reveal-left'}`} style={{ '--d': `${i * 0.18}s` }}>
                <span className="tl-dot" aria-hidden="true" />
                <article className="tl-card">
                  <div className="tl-top">
                    <span className="tl-date">{exp.date}</span>
                    {exp.id === 'asset' && <span className="tl-current"><i /> Current</span>}
                  </div>
                  <h3>{title}</h3>
                  <div className="tl-co">{exp.company} · {exp.dept}</div>
                  <p>{exp.desc}</p>
                  <div className="tags">
                    {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </article>
              </div>
            )
          })}
          <span className="tl-end" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
