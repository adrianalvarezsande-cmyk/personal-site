'use client'

import { Fragment, useEffect, useRef, useState } from 'react'

// STATS: Update these values
const stats = [
  { value: 20, label: 'courses' },
  { value: 4, label: 'years coaching' },
  { value: 3, label: 'countries' },
  { value: 6, label: 'years old, first serve' },
]

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

function CountUp({
  target,
  duration,
  active,
}: {
  target: number
  duration: number
  active: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    if (target === 0) { setCount(0); return }

    let startTime: number | null = null
    let rafId: number

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.round(easeOut(progress) * target))
      if (progress < 1) rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [active, target, duration])

  return <>{count}</>
}

export function StatsRow() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="flex items-center justify-center py-10"
    >
      {stats.map((stat, i) => (
        <Fragment key={stat.label}>
          {i > 0 && (
            <span className="text-small text-ink-muted mx-4" style={{ opacity: 0.3 }}>
              ·
            </span>
          )}
          <span className="text-small text-ink-muted">
            <CountUp target={stat.value} duration={800} active={active} />
            &nbsp;{stat.label}
          </span>
        </Fragment>
      ))}
    </div>
  )
}
