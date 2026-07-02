import type { Metadata } from 'next'
import { PageFade } from '@/components/page-fade'

export const metadata: Metadata = {
  title: 'Now',
  description: "What Adrián Álvarez is doing right now — updated periodically.",
}

export default function NowPage() {
  return (
    <PageFade>
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-24 sm:px-8 sm:pt-32 sm:pb-32 lg:px-12">
        {/* Page label */}
        <p className="text-label uppercase tracking-widest text-ink-muted mb-4">
          Now
        </p>

        {/* Date stamp */}
        <p className="text-label text-ink-muted italic mb-12">July 2026</p>

        {/* Content — Adrián to fill in */}
        <div className="max-w-prose space-y-6 text-base text-ink">
          {/* NOW PAGE CONTENT — Adrián to fill in */}

          {/* Paragraph 1: What I'm working on this summer */}
          <p>
            This summer I&apos;m doing founding GTM at Rebolt.ai, an early-stage AI startup.
            {/* Replace with real content */}
          </p>

          {/* Paragraph 2: What I'm focused on academically / Capstone */}
          <p>
            Thinking about my Capstone project, which I want to focus on the detection side of algorithmic collusion.
            {/* Replace with real content */}
          </p>

          {/* Paragraph 3: What I'm reading or thinking about */}
          <p>
            Reading about digital market design and how AI changes who controls the matching layer in a market.
            {/* Replace with real content */}
          </p>

          {/* Paragraph 4: Anything else current */}
          <p>
            Coaching tennis and padel in Amsterdam, switching between English and Spanish depending on who I&apos;m working with.
            {/* Replace with real content */}
          </p>
        </div>
      </section>
    </PageFade>
  )
}
