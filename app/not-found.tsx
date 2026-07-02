import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found',
}

export default function NotFound() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-24 pb-24 sm:px-8 sm:pt-32 sm:pb-32 lg:px-12">
      <p className="text-label uppercase tracking-widest text-ink-muted mb-12">
        404
      </p>
      <p className="text-base text-ink-muted max-w-intro mb-10">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-small text-ink transition-opacity duration-150 hover:opacity-60"
      >
        ← Back home
      </Link>
    </section>
  )
}
