import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getContentItem, getContentList, formatDate } from '@/lib/content'
import { mdxComponents } from '@/components/mdx'
import { mdxOptions } from '@/lib/mdx'

// Pre-generate all known slugs at build time.
// New content is picked up on the next deploy.
export async function generateStaticParams() {
  const posts = getContentList('writing')
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getContentItem('writing', slug)
  if (!post) return { title: 'Not found' }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getContentItem('writing', slug)
  if (!post) notFound()

  return (
    <article className="mx-auto max-w-5xl px-6 pt-24 pb-24 sm:px-8 sm:pt-32 sm:pb-32 lg:px-12">
      {/* Back link */}
      <div className="mb-16">
        <Link
          href="/writing"
          className="text-small text-ink-muted transition-opacity duration-150 hover:opacity-60"
        >
          ← Writing
        </Link>
      </div>

      {/* Article header */}
      <header className="mb-12 max-w-prose">
        <h1 className="text-display-sm text-ink mb-5">{post.title}</h1>
        <p className="text-label uppercase tracking-wider text-ink-muted">
          {formatDate(post.date)}&nbsp;&nbsp;·&nbsp;&nbsp;{post.readingTime} min read
        </p>
      </header>

      {/* Rule between header and content */}
      <div className="border-t border-line mb-12 max-w-prose" />

      {/* Article content */}
      <div className="max-w-prose prose-content">
        <MDXRemote
          source={post.source}
          options={mdxOptions}
          components={mdxComponents}
        />
      </div>

      {/* Footer */}
      <div className="mt-20 max-w-prose border-t border-line pt-8">
        <Link
          href="/writing"
          className="text-small text-ink-muted transition-opacity duration-150 hover:opacity-60"
        >
          ← Writing
        </Link>
      </div>
    </article>
  )
}
