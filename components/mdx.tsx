import type { ComponentPropsWithoutRef } from 'react'

/**
 * MDX component overrides.
 *
 * Prose typography and spacing are handled by the .prose-content CSS class
 * in globals.css — not here. This file only overrides elements that require
 * React-specific behavior CSS alone cannot provide.
 */

type AnchorProps = ComponentPropsWithoutRef<'a'>

function MdxLink({ href, children, ...props }: AnchorProps) {
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

export const mdxComponents = {
  a: MdxLink,
}
