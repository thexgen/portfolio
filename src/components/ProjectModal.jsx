import { useEffect, useRef, useState } from 'react'

export default function ProjectModal({ project, onClose, notify }) {
  const scrollRef = useRef(null)
  const [hasVideo, setHasVideo] = useState(false)
  useEffect(() => {
    if (!project) return
    setHasVideo(Boolean(project.video))
    scrollRef.current?.scrollTo({ top: 0 })
    const onKey = e => { if (e.key === 'Escape') onClose() }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [project, onClose])
  if (!project) return null
  const handlePlay = () => {
    if (project.video) setHasVideo(true)
    else notify('Demo video coming soon — ask for a live walkthrough')
  }
  return (
    <div id="modal" className="open" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-box">
        <div className="modal-head">
          <div>
            <div className="cats"><span className="tag">{project.domain}</span><span className="tag">{project.status}</span></div>
            <h3>{project.title}</h3>
            <p className="sub">{project.subtitle}</p>
          </div>
          <button className="close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="modal-scroll" ref={scrollRef}>
          <div className="video-wrap">
            {hasVideo ? (
              <video src={project.video} controls playsInline autoPlay />
            ) : (
              <div className="video-placeholder">
                <button className="play" onClick={handlePlay} aria-label="Play demo">▶</button>
                <div className="video-note"><b>Demo video</b> · Drop your MP4 in <span style={{ fontFamily: 'monospace' }}>data-video</span> or ask for a live walkthrough — I’ll gladly show you the product in action.</div>
              </div>
            )}
          </div>
          <div className="basics">
            <div className="basic"><small>Role</small><b>{project.role}</b></div>
            <div className="basic"><small>Timeline</small><b>{project.time}</b></div>
            <div className="basic"><small>Status</small><b>{project.status}</b></div>
            <div className="basic"><small>Domain</small><b>{project.domain}</b></div>
          </div>
          <div className="case-sec"><h4>The Problem</h4><p>{project.problem}</p></div>
          <div className="case-sec">
            <h4>How We Solved It</h4>
            <ol>
              {project.solution.map(s => <li key={s.title}><b>{s.title}</b> — {s.text}</li>)}
            </ol>
          </div>
          <div className="case-sec"><h4>Tech Stack</h4><div className="tech-row">{project.tech.map(t => <span key={t}>{t}</span>)}</div></div>
          <div className="case-sec"><h4>Outcome</h4><p>{project.outcome}</p></div>
          <div className="modal-foot-actions">
            <a href="mailto:dhananjaydavhale12@gmail.com?subject=Demo%20request" className="btn btn-dark btn-sm">Request live demo →</a>
            <button className="btn btn-outline btn-sm" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
