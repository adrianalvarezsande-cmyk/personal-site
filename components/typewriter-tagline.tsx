'use client'

import { useEffect, useState } from 'react'

const LINES = [
  'Studying finance and technology in Amsterdam.',
  'Tennis coach. Competitive since age ten.',
  'Currently figuring things out at Rebolt.ai.',
  'From A Coruña, Galicia.',
]

// Longest line — used as invisible spacer to prevent layout shift
const LONGEST = LINES.reduce((a, b) => (a.length >= b.length ? a : b))

const CHAR_DELAY_MS = 45
const HOLD_MS = 2500
const FADE_MS = 380

type Phase = 'typing' | 'holding' | 'fading'

export function TypewriterTagline() {
  const [lineIdx, setLineIdx] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [phase, setPhase] = useState<Phase>('typing')
  const [opacity, setOpacity] = useState(1)

  // Typing phase: add one character at a time
  useEffect(() => {
    if (phase !== 'typing') return
    const line = LINES[lineIdx]
    if (charCount >= line.length) {
      setPhase('holding')
      return
    }
    const t = setTimeout(() => setCharCount(c => c + 1), CHAR_DELAY_MS)
    return () => clearTimeout(t)
  }, [phase, charCount, lineIdx])

  // Holding phase: wait, then start fade
  useEffect(() => {
    if (phase !== 'holding') return
    const t = setTimeout(() => setPhase('fading'), HOLD_MS)
    return () => clearTimeout(t)
  }, [phase])

  // Fading phase: fade out, then advance to next line
  useEffect(() => {
    if (phase !== 'fading') return
    setOpacity(0)
    const t = setTimeout(() => {
      setLineIdx(i => (i + 1) % LINES.length)
      setCharCount(0)
      setOpacity(1)
      setPhase('typing')
    }, FADE_MS)
    return () => clearTimeout(t)
  }, [phase])

  const displayText = LINES[lineIdx].slice(0, charCount)
  const showCursor = phase === 'typing' || phase === 'holding'

  return (
    <div className="relative mt-3 text-center">
      {/* Invisible spacer — reserves height for the longest line, prevents layout shift */}
      <p
        aria-hidden
        className="text-base text-ink-muted italic invisible select-none pointer-events-none whitespace-nowrap"
      >
        {LONGEST}
      </p>

      {/* Typed text — absolutely positioned over the spacer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          className="text-base text-ink-muted italic whitespace-nowrap"
          style={{
            opacity,
            transition: phase === 'fading' ? `opacity ${FADE_MS}ms ease` : 'none',
          }}
        >
          {displayText}
          {showCursor && (
            <span className="cursor-blink ml-px select-none" aria-hidden>
              |
            </span>
          )}
        </p>
      </div>
    </div>
  )
}
