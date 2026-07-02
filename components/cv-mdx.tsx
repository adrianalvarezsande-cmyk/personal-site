import type { ComponentPropsWithoutRef } from 'react'

/**
 * MDX component overrides for the CV page.
 *
 * h2  → label style (matches "ABOUT" / "NOW" on the About page)
 * h3  → group title: body size, muted, regular weight, opens a course cluster
 * a   → external links open in new tab
 */

type AnchorProps = ComponentPropsWithoutRef<'a'>

function CvLink({ href, children, ...props }: AnchorProps) {
  const isExternal = typeof href === 'string' && href.startsWith('http')
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  )
}

export const cvMdxComponents = {
  // "## Coursework" → same quiet label as ABOUT / NOW
  h2: ({ children }: ComponentPropsWithoutRef<'h2'>) => (
    <div className="text-label uppercase tracking-widest text-ink-muted mt-16 mb-8">
      {children}
    </div>
  ),
  // "### Mathematics & Computing" → group title: body size, muted, regular weight
  h3: ({ children }: ComponentPropsWithoutRef<'h3'>) => (
    <div className="text-base font-medium text-ink-muted mt-8 mb-1">
      {children}
    </div>
  ),
  a: CvLink,
}
