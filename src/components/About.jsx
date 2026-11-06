export default function About() {
  return (
    <section id="about" style={{ paddingTop: 64 }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="label"><b>01</b> — About</div>
          <h2>Engineering for <span className="serif">production.</span></h2>
          <p>Focus on building AI features that are fast, reliable and maintainable — not just demos.</p>
        </div>
        <div className="about-grid">
          <div className="reveal reveal-left">
            <p className="about-copy">I’ve spent <b>4+ years building full-stack and AI products</b> — from backend APIs and cloud systems to LLM pipelines that ship and scale.</p>
            <p className="about-copy">At Asset Vantage, I lead AI-powered web applications and RAG platforms. I architected the <b>SPE extraction pipeline</b> and the <b>Cortex knowledge engine</b>, and cut system load by <b>45% with async Python services</b>.</p>
            <ul className="checks">
              <li>RAG and LLM pipelines — ingestion, embeddings, retrieval and grounded answers</li>
              <li>High-performance backends in Python / FastAPI with async patterns</li>
              <li>Cloud architecture on AWS — Lambda, S3, EC2, Docker, CI/CD</li>
            </ul>
            <a href="#experience" className="btn btn-outline btn-sm">View experience →</a>
          </div>
          <div className="profile reveal reveal-right" style={{ '--d': '0.15s' }}>
            <div className="ph"><div className="avatar">DD</div><div><h3>Dhananjay Davhale</h3><p>Full Stack & AI Engineer</p></div></div>
            <div className="kv"><span>Current role</span><b>Software Engineer, Asset Vantage</b></div>
            <div className="kv"><span>Previous</span><b>Exousia · Freelance</b></div>
            <div className="kv"><span>Specialisation</span><b>RAG · LLM · FastAPI</b></div>
            <div className="kv"><span>Location</span><b>Pune, India</b></div>
            <div className="kv"><span>Contact</span><b>dhananjaydavhale12@gmail.com</b></div>
          </div>
        </div>
      </div>
    </section>
  )
}
