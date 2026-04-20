import { useEffect } from 'react'

export default function useScrollReveal(selector = '.reveal, .reveal-left, .reveal-right') {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    const targets = document.querySelectorAll(selector)
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [selector])
}
