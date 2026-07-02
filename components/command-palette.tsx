'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'

// ─── Icons ────────────────────────────────────────────────────────────────────

function HomeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function PenIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  )
}

function FolderIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function FileIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  )
}

function ZapIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

// ─── Types ─────────────────────────────────────────────────────────────────────

type CommandItem = {
  id: string
  label: string
  icon: React.ReactNode
  shortcut?: string
  group: 'navigate' | 'connect'
  action: (router: ReturnType<typeof useRouter>, close: () => void) => void
}

// ─── Commands ──────────────────────────────────────────────────────────────────

const COMMANDS: CommandItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon />,
    shortcut: '⌘H',
    group: 'navigate',
    action: (router, close) => { close(); router.push('/') },
  },
  {
    id: 'about',
    label: 'About',
    icon: <PersonIcon />,
    group: 'navigate',
    action: (router, close) => { close(); router.push('/about') },
  },
  {
    id: 'writing',
    label: 'Writing',
    icon: <PenIcon />,
    group: 'navigate',
    action: (router, close) => { close(); router.push('/writing') },
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: <FolderIcon />,
    group: 'navigate',
    action: (router, close) => { close(); router.push('/projects') },
  },
  {
    id: 'books',
    label: 'Books',
    icon: <BookIcon />,
    group: 'navigate',
    action: (router, close) => { close(); router.push('/books') },
  },
  {
    id: 'cv',
    label: 'CV',
    icon: <FileIcon />,
    group: 'navigate',
    action: (router, close) => { close(); router.push('/cv') },
  },
  {
    id: 'now',
    label: 'Now',
    icon: <ZapIcon />,
    group: 'navigate',
    action: (router, close) => { close(); router.push('/now') },
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: <InstagramIcon />,
    group: 'connect',
    action: (_, close) => { close(); window.open('https://instagram.com/adriansandee_', '_blank', 'noopener') },
  },
  {
    id: 'twitter',
    label: 'Twitter / X',
    icon: <TwitterIcon />,
    group: 'connect',
    action: (_, close) => { close(); window.open('https://x.com/adriansadee_', '_blank', 'noopener') },
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: <LinkedInIcon />,
    group: 'connect',
    action: (_, close) => { close(); window.open('https://linkedin.com/in/adrian-alvarez-7513a4252', '_blank', 'noopener') },
  },
  {
    id: 'email',
    label: 'Email',
    icon: <EmailIcon />,
    group: 'connect',
    action: (_, close) => { close(); window.location.href = 'mailto:adrianalvarezsande@gmail.com' },
  },
]

// ─── Component ─────────────────────────────────────────────────────────────────

export function CommandPalette() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIdx, setSelectedIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    setQuery('')
    setSelectedIdx(0)
  }, [])

  const open = useCallback(() => {
    setIsOpen(true)
    setQuery('')
    setSelectedIdx(0)
    setTimeout(() => inputRef.current?.focus(), 50)
  }, [])

  // Global Cmd+K / Ctrl+K listener — skip when focus is in input/textarea
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        const tag = (document.activeElement as HTMLElement)?.tagName
        if (tag === 'INPUT' || tag === 'TEXTAREA') return
        e.preventDefault()
        if (isOpen) { close() } else { open() }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, close, open])

  // Filter commands by query — memoised so the array reference is stable for useEffect deps
  const allFiltered = useMemo(() => {
    const q = query.trim().toLowerCase()
    const filtered = q
      ? COMMANDS.filter(c => c.label.toLowerCase().includes(q))
      : COMMANDS
    return [
      ...filtered.filter(c => c.group === 'navigate'),
      ...filtered.filter(c => c.group === 'connect'),
    ]
  }, [query])

  const navigateGroup = allFiltered.filter(c => c.group === 'navigate')
  const connectGroup = allFiltered.filter(c => c.group === 'connect')

  // Keyboard navigation inside palette
  useEffect(() => {
    if (!isOpen) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') { e.preventDefault(); close(); return }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIdx(i => Math.min(i + 1, allFiltered.length - 1))
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIdx(i => Math.max(i - 1, 0))
      }
      if (e.key === 'Enter') {
        e.preventDefault()
        const cmd = allFiltered[selectedIdx]
        if (cmd) cmd.action(router, close)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, allFiltered, selectedIdx, close, router])

  // Reset selection when filter changes
  useEffect(() => { setSelectedIdx(0) }, [query])

  // Scroll selected item into view
  useEffect(() => {
    if (!listRef.current) return
    const el = listRef.current.querySelector(`[data-idx="${selectedIdx}"]`)
    el?.scrollIntoView({ block: 'nearest' })
  }, [selectedIdx])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={close}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              backgroundColor: 'color-mix(in srgb, var(--ink) 12%, transparent)',
            }}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: '20%',
              left: '50%',
              translateX: '-50%',
              zIndex: 201,
              width: '100%',
              maxWidth: 480,
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              borderRadius: 12,
              boxShadow: '0 16px 64px 0 rgba(0,0,0,0.18)',
              overflow: 'hidden',
            }}
          >
            {/* Search input */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 16px',
                borderBottom: '1px solid var(--line)',
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Go somewhere..."
                autoComplete="off"
                spellCheck={false}
                className="flex-1 bg-transparent text-small text-ink placeholder:text-ink-muted outline-none"
              />
              <span className="text-label text-ink-muted shrink-0 select-none">⌘K</span>
            </div>

            {/* Command list */}
            <div
              ref={listRef}
              style={{ maxHeight: 300, overflowY: 'auto', padding: '6px 0' }}
            >
              {allFiltered.length === 0 && (
                <p className="text-small text-ink-muted italic px-4 py-6 text-center">
                  No results.
                </p>
              )}

              {navigateGroup.length > 0 && (
                <CommandGroup
                  label="Navigate"
                  items={navigateGroup}
                  allItems={allFiltered}
                  selectedIdx={selectedIdx}
                  onHover={setSelectedIdx}
                  onSelect={cmd => cmd.action(router, close)}
                />
              )}

              {connectGroup.length > 0 && (
                <>
                  {navigateGroup.length > 0 && (
                    <div
                      style={{
                        height: 1,
                        margin: '6px 0',
                        background: 'var(--line)',
                      }}
                    />
                  )}
                  <CommandGroup
                    label="Connect"
                    items={connectGroup}
                    allItems={allFiltered}
                    selectedIdx={selectedIdx}
                    onHover={setSelectedIdx}
                    onSelect={cmd => cmd.action(router, close)}
                  />
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function CommandGroup({
  label,
  items,
  allItems,
  selectedIdx,
  onHover,
  onSelect,
}: {
  label: string
  items: CommandItem[]
  allItems: CommandItem[]
  selectedIdx: number
  onHover: (i: number) => void
  onSelect: (cmd: CommandItem) => void
}) {
  return (
    <div>
      <p
        className="text-label text-ink-muted uppercase tracking-widest"
        style={{ padding: '6px 16px 4px' }}
      >
        {label}
      </p>
      {items.map(cmd => {
        const idx = allItems.indexOf(cmd)
        const isSelected = idx === selectedIdx
        return (
          <button
            key={cmd.id}
            data-idx={idx}
            onClick={() => onSelect(cmd)}
            onMouseEnter={() => onHover(idx)}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-none"
            style={{
              background: isSelected
                ? 'color-mix(in srgb, var(--ink) 3%, transparent)'
                : 'transparent',
              color: 'var(--ink)',
            }}
          >
            <span style={{ color: 'var(--ink-muted)', display: 'flex', flexShrink: 0 }}>
              {cmd.icon}
            </span>
            <span className="flex-1 text-small">{cmd.label}</span>
            {cmd.shortcut && (
              <span className="text-label text-ink-muted shrink-0">{cmd.shortcut}</span>
            )}
          </button>
        )
      })}
    </div>
  )
}
