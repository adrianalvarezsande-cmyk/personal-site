import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageFade } from '@/components/page-fade'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Finance and technology student in Amsterdam. Interested in AI, digital markets, and how technology reshapes economic behavior.',
}

export default function AboutPage() {
  return (
    <PageFade>
    <section className="mx-auto max-w-5xl px-6 pt-24 pb-24 sm:px-8 sm:pt-32 sm:pb-32 lg:px-12">
      {/* Page label */}
      <p className="text-label uppercase tracking-widest text-ink-muted mb-12">
        About
      </p>

      {/* Photo + greeting */}
      <div className="mb-12 flex flex-col gap-6">
        <Image
          src="/images/Adrian.png"
          alt="Adrián Álvarez"
          width={300}
          height={300}
          className="rounded-full grayscale ring-1 ring-line object-cover transition-transform duration-300 hover:scale-[1.02]"
          style={{ width: 300, height: 300 }}
          priority
        />
        <p className="italic font-light text-ink-muted" style={{ fontSize: '1.1875rem', lineHeight: '1.65' }}>
          Hi, I&apos;m Adrián. It&apos;s a pleasure to meet you.
        </p>
      </div>

      {/* Essay */}
      <div className="max-w-prose space-y-6 text-base text-ink">
        <p>
          I&apos;m <span className="font-semibold">Adrián Álvarez</span>. I study finance and technology at the VU Amsterdam
          and University of Amsterdam, as part of a joint honours programme between
          the two universities. I&apos;m originally from Spain, and moving abroad has
          shaped how I see things — being surrounded by people from different
          countries and disciplines has made me more comfortable with ambiguity and
          more curious about why systems behave the way they do.
        </p>

        <p>
          Most of what I think about sits at the intersection of technology,
          economics, and artificial intelligence. Not the technical implementation
          details, but the broader questions: how new technologies change market
          structures, what they do to competition and incumbents, and how they
          reshape the way businesses create and capture value.
        </p>

        <p>
          I prefer going back to first principles. Whether I&apos;m studying a topic
          for class, reading about AI systems, or working through a problem in a
          startup context, I find the most useful thing I can do is understand
          something deeply rather than have a surface familiarity with it. That
          orientation tends to slow me down at first and make the understanding
          more durable.
        </p>

        <p>
          This summer I&apos;m doing founding GTM at Rebolt.ai, an early-stage AI
          startup. It&apos;s mostly sales, but at a company this size that means
          figuring out who to talk to, what gets someone to say yes, and how to
          do that without a playbook. It&apos;s a different kind of problem-solving
          than coursework.
        </p>

        <p>
          I&apos;m early in my career, and I try to be honest about that. This site
          reflects where I actually am — not where I&apos;m trying to appear to be.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-line my-12 max-w-prose" />

      {/* Now section */}
      <div className="max-w-prose">
        <p className="text-label uppercase tracking-widest text-ink-muted mb-6">
          Now
        </p>
        <div className="space-y-4 text-base text-ink">
          <p>
            <span className="italic">Finishing my third year at VU &amp; UvA.</span>{' '}
            This summer I&apos;m founding GTM at Rebolt.ai, an early-stage AI startup —
            mostly sales, mostly figuring things out as I go. Reading about digital
            market design and how AI changes who controls the matching layer in a market.
          </p>
          <p className="flex items-center gap-6">
            <Link
              href="/cv"
              className="group inline-flex items-center text-small text-ink-muted underline underline-offset-[3px] decoration-line transition-opacity duration-150 hover:opacity-60"
            >
              View my CV
              <span className="transition-transform duration-150 group-hover:translate-x-0.75">&nbsp;→</span>
            </Link>
            <Link
              href="/now"
              className="group inline-flex items-center text-small text-ink-muted underline underline-offset-[3px] decoration-line transition-opacity duration-150 hover:opacity-60"
            >
              See full now
              <span className="transition-transform duration-150 group-hover:translate-x-0.75">&nbsp;→</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
    </PageFade>
  )
}
