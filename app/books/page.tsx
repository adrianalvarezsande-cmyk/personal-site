'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

type Book = {
  title: string
  author: string
  note: string
  isbn: string
}

const books: Book[] = [
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    note: 'Changed how I think about decision-making under uncertainty.',
    isbn: '9780374533557',
  },
  {
    title: "The Innovator's Dilemma",
    author: 'Clayton Christensen',
    note: 'Why good companies fail at the worst moment.',
    isbn: '9780875845852',
  },
  {
    title: 'Stubborn Attachments',
    author: 'Tyler Cowen',
    note: 'The case for taking long-run growth seriously.',
    isbn: '9781732265135',
  },
]

function BookCard({ book, index }: { book: Book; index: number }) {
  const [imgFailed, setImgFailed] = useState(false)
  const coverUrl = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.16 + index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -3, transition: { duration: 0.15, ease: 'easeOut' } }}
      className="flex flex-col gap-3"
      style={{ cursor: 'default' }}
    >
      {/* Cover */}
      {imgFailed ? (
        <div
          style={{
            width: 90,
            height: 128,
            borderRadius: 4,
            background: 'var(--line)',
            flexShrink: 0,
          }}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={coverUrl}
          alt={`Cover of ${book.title}`}
          onError={() => setImgFailed(true)}
          style={{
            width: 90,
            height: 128,
            objectFit: 'cover',
            borderRadius: 4,
            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.12)',
            display: 'block',
            flexShrink: 0,
          }}
        />
      )}

      {/* Meta */}
      <div className="flex flex-col gap-0.5">
        <p className="text-small font-medium text-ink leading-snug">{book.title}</p>
        <p className="text-label text-ink-muted">{book.author}</p>
        <p className="text-label text-ink-muted italic mt-1 leading-relaxed">{book.note}</p>
      </div>
    </motion.div>
  )
}

export default function BooksPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-24 pb-24 sm:px-8 sm:pt-32 sm:pb-32 lg:px-12">
      <motion.p
        className="text-label uppercase tracking-widest text-ink-muted mb-12"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        Books
      </motion.p>

      <motion.p
        className="text-small text-ink-muted italic mb-12"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08, ease: 'easeOut' }}
      >
        Things I&apos;ve read that stuck with me.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10">
        {books.map((book, index) => (
          <BookCard key={book.isbn} book={book} index={index} />
        ))}
      </div>
    </section>
  )
}
