import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getContentItem } from '@/lib/content'
import { cvMdxComponents } from '@/components/cv-mdx'
import { mdxOptions } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import { PageFade } from '@/components/page-fade'

export const metadata: Metadata = {
  title: 'CV',
  description: 'Finance & Technology student at VU Amsterdam and UvA. CV of Adrián Álvarez Sande.',
}

export default function CVPage() {
  const cv = getContentItem('cv', 'index')
  if (!cv) notFound()

  return (
    <PageFade>
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-24 sm:px-8 sm:pt-32 sm:pb-32 lg:px-12">
        <p className="text-label uppercase tracking-widest text-ink-muted mb-12">
          CV
        </p>

        <div className="max-w-prose prose-content">
          <MDXRemote
            source={cv.source}
            options={mdxOptions}
            components={cvMdxComponents}
          />
        </div>
      </section>
    </PageFade>
  )
}
