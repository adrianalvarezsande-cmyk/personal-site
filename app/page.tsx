'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { TypewriterTagline } from '@/components/typewriter-tagline'
import { AmsterdamWidget } from '@/components/amsterdam-widget'

const entries = [
  {
    href: '/about',
    label: 'About',
    description: 'Who I am and how I think.',
  },
  {
    href: '/writing',
    label: 'Writing',
    description: "Essays and notes on ideas I'm working through.",
  },
  {
    href: '/projects',
    label: 'Projects',
    description: "Things I've made and written for university.",
  },
  {
    href: '/books',
    label: 'Books',
    description: "Things I've read that stuck with me.",
  },
  {
    href: '/cv',
    label: 'CV',
    description: "Experience, education, and what I've been up to.",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero — centered */}
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-8 sm:px-8 sm:pt-32 sm:pb-10 lg:px-12 lg:pt-40 flex flex-col items-center text-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          data-cursor="photo"
        >
          <Image
            src="/images/Adrian.png"
            alt="Adrián Álvarez"
            width={200}
            height={200}
            className="rounded-3xl object-cover object-top ring-1 ring-ink/8"
            style={{
              width: 200,
              height: 200,
              filter: 'saturate(0.82)',
              boxShadow: '0 4px 20px 0 rgba(0,0,0,0.10)',
            }}
            priority
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="mt-7 text-display-sm sm:text-display text-ink font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
        >
          Adrián Álvarez
        </motion.h1>

        {/* Typewriter tagline — cycling, fixed height, blinking cursor */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2, ease: 'easeOut' }}
        >
          <TypewriterTagline />
        </motion.div>

        {/* Amsterdam live clock + weather */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28, ease: 'easeOut' }}
        >
          <AmsterdamWidget />
        </motion.div>
      </section>

      {/* Entry points — left-aligned */}
      <section className="mx-auto max-w-5xl px-6 pb-24 sm:px-8 sm:pb-32 lg:px-12">
        <div className="border-t border-line">
          {entries.map(({ href, label, description }, index) => (
            <motion.div
              key={href}
              className="border-b border-line"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.4 + index * 0.08,
                ease: 'easeOut',
              }}
            >
              <Link
                href={href}
                className="entry-row group flex items-baseline gap-4 sm:gap-8 py-5"
              >
                <span className="w-16 sm:w-20 shrink-0 text-small font-medium text-ink">
                  {label}
                </span>
                <span className="flex-1 text-small text-ink-muted">
                  {description}
                </span>
                <span className="text-small text-ink-muted transition-transform duration-150 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
