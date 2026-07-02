'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

const MAX_RING = 36 // outer container fixed at max ring size, centered via negative margin

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isPointerFine, setIsPointerFine] = useState(false)

  // ── Position ──────────────────────────────────────────────────────
  const dotX = useMotionValue(-200)
  const dotY = useMotionValue(-200)

  // Ring trails dot with spring lag
  const ringX = useSpring(dotX, { stiffness: 260, damping: 28, mass: 0.4 })
  const ringY = useSpring(dotY, { stiffness: 260, damping: 28, mass: 0.4 })

  // ── Ring size + opacity as motion values — no React re-render ─────
  // Changing these goes directly through Motion's RAF loop, bypassing React.
  const ringSizeRaw    = useMotionValue(14)
  const ringOpacityRaw = useMotionValue(0.12)
  const ringSize    = useSpring(ringSizeRaw,    { stiffness: 300, damping: 25, mass: 0.3 })
  const ringOpacity = useSpring(ringOpacityRaw, { stiffness: 300, damping: 25, mass: 0.3 })

  useEffect(() => {
    setMounted(true)
    const mq = window.matchMedia('(pointer: fine)')
    setIsPointerFine(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setIsPointerFine(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!isPointerFine) return

    function onMouseMove(e: MouseEvent) {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }

    function onMouseOver(e: MouseEvent) {
      const el = e.target as Element | null
      if (!el) return
      if (el.closest('[data-cursor="photo"]')) {
        ringSizeRaw.set(36); ringOpacityRaw.set(0.22)
      } else if (el.closest('a, button, [role="button"]')) {
        ringSizeRaw.set(24); ringOpacityRaw.set(0.22)
      } else {
        ringSizeRaw.set(14); ringOpacityRaw.set(0.12)
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseover', onMouseOver, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
    }
  }, [isPointerFine, dotX, dotY, ringSizeRaw, ringOpacityRaw])

  if (!mounted || !isPointerFine) return null

  return (
    <>
      {/* Dot — 4px, zero lag, GPU-composited */}
      <motion.div
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          width: 4,
          height: 4,
          marginLeft: -2,
          marginTop: -2,
          borderRadius: '50%',
          backgroundColor: 'var(--ink)',
          zIndex: 10000,
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />

      {/* Ring — spring-lagged, size/opacity animated without re-renders */}
      <motion.div
        aria-hidden
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          width: MAX_RING,
          height: MAX_RING,
          marginLeft: -(MAX_RING / 2),
          marginTop: -(MAX_RING / 2),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      >
        <motion.div
          style={{
            width: ringSize,
            height: ringSize,
            opacity: ringOpacity,
            borderRadius: '50%',
            border: '1px solid var(--ink)',
            flexShrink: 0,
          }}
        />
      </motion.div>
    </>
  )
}
