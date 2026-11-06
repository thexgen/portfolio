import { useState } from 'react'

export default function Contact({ notify }) {
  const [form, setForm] = useState({ name: '', email: '', role: 'Full Stack / Backend Engineer', message: '' })
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText('dhananjaydavhale12@gmail.com'); notify('Email copied to clipboard') }
    catch { notify('dhananjaydavhale12@gmail.com') }
  }
  const submit = e => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return notify('Please fill in all required fields')
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return notify('Please enter a valid email address')
    notify(`Thank you, ${form.name.split(' ')[0]}. Message sent successfully.`)
    setForm({ name: '', email: '', role: form.role, message: '' })
  }
  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="label"><b>05</b> — Contact</div>
          <h2>Get in <span className="serif">touch.</span></h2>
          <p>Open to full-stack and AI/LLM engineering roles. I’ll reply within one business day.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal reveal-left">
            <p>I’m currently open to opportunities where I can build AI products end-to-end — from RAG architecture to production APIs. If you’re hiring for a role that needs backend depth and AI experience, I’d love to hear from you.</p>
            <div className="c-rows">
              <div className="c-row"><span className="ic">✉</span><div><small>Email</small><b>dhananjaydavhale12@gmail.com</b></div><button className="copy" onClick={copyEmail}>Copy</button></div>
              <div className="c-row"><span className="ic">◉</span><div><small>Location</small><b>Pune, India · Working across timezones</b></div></div>
              <a className="c-row" href="mailto:dhananjaydavhale12@gmail.com"><span className="ic">→</span><div><small>Next step</small><b>Send an email or use the form</b></div></a>
            </div>
          </div>
          <form className="form reveal reveal-right" style={{ '--d': '0.15s' }} onSubmit={submit} noValidate>
            <h3>Send a message</h3><p>Fields marked * are required.</p>
            <div className="f-grid">
              <div className="f"><label>Your name <span>*</span></label><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Full name" /></div>
              <div className="f"><label>Email <span>*</span></label><input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" /></div>
            </div>
            <div className="f"><label>Role type</label>
              <select value={form.role} onChange={e => setForm({ ...form, role: e.target.value })}>
                <option>Full Stack / Backend Engineer</option><option>AI / LLM Engineer</option><option>Freelance / Contract</option><option>Other</option>
              </select>
            </div>
            <div className="f"><label>Message <span>*</span></label><textarea rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me about the role, timeline and expectations…" /></div>
            <button className="btn btn-dark" style={{ width: '100%', justifyContent: 'center' }}>Send message</button>
            <p style={{ textAlign: 'center', fontSize: 12.5, color: 'var(--faint)', marginTop: 12 }}>Your information is only used to respond to your enquiry.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
