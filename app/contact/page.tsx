import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-24 pb-24 sm:px-8 sm:pt-32 sm:pb-32 lg:px-12">
      <p className="text-label uppercase tracking-widest text-ink-muted mb-12">
        Contact
      </p>
      <p className="text-small text-ink-muted">
        You can reach me at{' '}
        <a
          href="mailto:adrianalvarezsande@gmail.com"
          className="text-ink underline underline-offset-[3px] decoration-line transition-opacity duration-150 hover:opacity-60"
        >
          adrianalvarezsande@gmail.com
        </a>
        .
      </p>
    </section>
  )
}
