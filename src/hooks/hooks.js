import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('dd-theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('dd-theme', theme)
  }, [theme])
  return [theme, () => setTheme(t => t === 'dark' ? 'light' : 'dark')]
}

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        e.target.classList.add('in')
        io.unobserve(e.target)
      })
    }, { threshold: 0.12 })
    const els = document.querySelectorAll('.reveal:not(.in)')
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  })
}

export function useCounter(target, visible = true) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!visible) return
    let i = 0
    const t = setInterval(() => {
      i += 1
      setVal(i)
      if (i >= target) clearInterval(t)
    }, 30)
    return () => clearInterval(t)
  }, [target, visible])
  return val
}
