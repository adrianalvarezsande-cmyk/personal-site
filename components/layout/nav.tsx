'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/projects', label: 'Projects' },
  { href: '/books', label: 'Books' },
  { href: '/cv', label: 'CV' },
]

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const socialLinks = [
  { href: 'https://www.instagram.com/adriansandee_/', icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://x.com/adriansadee_', icon: TwitterIcon, label: 'Twitter / X' },
  { href: 'https://www.linkedin.com/in/adrian-alvarez-7513a4252/', icon: LinkedInIcon, label: 'LinkedIn' },
  { href: 'mailto:adrianalvarezsande@gmail.com', icon: EmailIcon, label: 'Email' },
]

export function Nav() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [rotateCount, setRotateCount] = useState(0)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 z-50 bg-surface transition-shadow duration-200',
        scrolled ? 'shadow-[0_1px_0_0_var(--color-line)]' : '',
      ].join(' ')}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-small font-medium text-ink transition-opacity duration-150 hover:opacity-60 outline-none focus-visible:ring-2 focus-visible:ring-ink/30 rounded-sm"
        >
          Adrián Álvarez Sande
        </Link>

        <div className="flex items-center gap-2 sm:gap-5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={[
                'text-small transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-ink/30 rounded-sm',
                pathname === href
                  ? 'text-ink'
                  : 'text-ink-muted hover:text-ink',
              ].join(' ')}
            >
              {label}
            </Link>
          ))}

          {/* Separator */}
          <div className="h-3 w-px bg-line shrink-0" aria-hidden="true" />

          {/* Social icons */}
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="text-ink-muted transition-opacity duration-150 hover:opacity-60 outline-none focus-visible:ring-2 focus-visible:ring-ink/30 rounded-sm"
              style={{ lineHeight: 0 }}
            >
              <Icon />
            </a>
          ))}

          {/* Separator — delineates navigation from site controls */}
          <div className="h-3 w-px bg-line shrink-0" aria-hidden="true" />

          {/* Theme toggle */}
          <motion.button
            onClick={() => {
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              setRotateCount(c => c + 1)
            }}
            animate={{ rotate: rotateCount * 180 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            aria-label="Toggle theme"
            className="text-ink-muted transition-colors duration-150 hover:text-ink outline-none focus-visible:ring-2 focus-visible:ring-ink/30 rounded-sm"
            style={{ lineHeight: 0 }}
          >
            {mounted && (
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={resolvedTheme}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  style={{ display: 'flex' }}
                >
                  {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </motion.span>
              </AnimatePresence>
            )}
          </motion.button>
        </div>
      </nav>
    </header>
  )
}
