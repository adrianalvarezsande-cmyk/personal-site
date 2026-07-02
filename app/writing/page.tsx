import type { Metadata } from 'next'
import { getContentList } from '@/lib/content'
import { WritingList } from '@/components/writing-list'

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Ideas, observations, and things I\'m working through — on AI, economics, technology, and more.',
}

export default function WritingPage() {
  const posts = getContentList('writing')

  return (
    <section className="mx-auto max-w-5xl px-6 pt-24 pb-24 sm:px-8 sm:pt-32 sm:pb-32 lg:px-12">
      <p className="text-label uppercase tracking-widest text-ink-muted mb-12">
        Writing
      </p>

      {posts.length === 0 ? (
        <p className="text-base text-ink-muted max-w-intro">
          Nothing published yet. I write when I have something worth saying.
        </p>
      ) : (
        <WritingList posts={posts} />
      )}
    </section>
  )
}
