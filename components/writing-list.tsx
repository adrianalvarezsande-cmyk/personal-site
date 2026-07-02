'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

interface Post {
  slug: string
  title: string
  date: string
  readingTime: number
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    month: 'short',
    year: 'numeric',
  })
}

export function WritingList({ posts }: { posts: Post[] }) {
  return (
    <div className="border-t border-line max-w-prose">
      {posts.map((post, index) => (
        <motion.div
          key={post.slug}
          className="border-b border-line"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.1 + index * 0.08,
            ease: 'easeOut',
          }}
        >
          <Link
            href={`/writing/${post.slug}`}
            className="group flex items-baseline gap-4 sm:gap-8 py-5 transition-opacity duration-150 hover:opacity-60"
          >
            {/* Date — left column, editorial label */}
            <span className="w-20 shrink-0 text-label uppercase tracking-wider text-ink-muted">
              {formatDate(post.date)}
            </span>

            {/* Title — middle, primary */}
            <span className="flex-1 text-small font-medium text-ink">
              {post.title}
            </span>

            {/* Reading time — right, metadata */}
            <span className="text-label text-ink-muted shrink-0">
              {post.readingTime} min
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
