import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentRoot = path.join(process.cwd(), 'content')

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ContentMeta {
  slug: string
  title: string
  date: string
  description?: string
  readingTime: number // minutes, derived from word count
}

export interface ContentItem extends ContentMeta {
  source: string // raw MDX content (frontmatter stripped)
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

/**
 * Format a date string as "Jan 2025" — editorial, month + year only.
 */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    month: 'short',
    year: 'numeric',
  })
}

// ─── Content access ───────────────────────────────────────────────────────────

/**
 * Returns a sorted list of content metadata for a given type.
 * contentType maps to content/[contentType]/ on disk.
 *
 * Returns [] if the directory does not exist — safe to call before
 * any content has been added.
 */
export function getContentList(contentType: string): ContentMeta[] {
  const dir = path.join(contentRoot, contentType)
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))

  const items = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(dir, filename), 'utf-8')
    const { data, content } = matter(raw)

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      description: (data.description as string) ?? undefined,
      readingTime: readingTime(content),
    }
  })

  return items.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

/**
 * Returns a single content item by type and slug, or null if not found.
 */
export function getContentItem(
  contentType: string,
  slug: string
): ContentItem | null {
  const filePath = path.join(contentRoot, contentType, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: (data.description as string) ?? undefined,
    readingTime: readingTime(content),
    source: content,
  }
}
