'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

type Book = {
  isbn: string
  coverId?: string
  title: string
  originalTitle?: string
  author: string
  note: string
}

const books: Book[] = [
  {
    isbn: '9780553418811',
    title: 'Weapons of Math Destruction',
    originalTitle: 'Armas de destrucción matemática',
    author: "Cathy O'Neil",
    note: "Read it in Spanish. Made me think differently about how algorithms aren't neutral. They reflect the priorities of whoever built them.",
  },
  {
    isbn: '0735211299',
    title: 'Atomic Habits',
    author: 'James Clear',
    note: 'Useful framework for thinking about how small changes compound. Applied it more to training than to studying, honestly.',
  },
  {
    isbn: '9780679778318',
    title: 'The Inner Game of Tennis',
    author: 'W. Timothy Gallwey',
    note: 'Required reading if you coach. The mental side of performance is almost entirely about getting out of your own way.',
  },
  {
    isbn: '9780857197689',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    note: "Better than most finance books because it doesn't pretend people make financial decisions rationally.",
  },
  {
    isbn: '9780060555665',
    title: 'The Intelligent Investor',
    originalTitle: 'El inversor inteligente',
    author: 'Benjamin Graham',
    note: 'Read it in Spanish. Dense but worth it. Changed how I think about the difference between price and value.',
  },
  {
    isbn: '9781476708720',
    coverId: '7313659',
    title: 'The Innovators',
    originalTitle: 'Los innovadores',
    author: 'Walter Isaacson',
    note: 'History of how computing actually got built. The collaboration parts stuck with me more than the individual genius stories.',
  },
  {
    isbn: '9781401324087',
    coverId: '10829047',
    title: 'Rafa: My Story',
    originalTitle: 'Rafa, mi historia',
    author: 'Rafael Nadal',
    note: "Read it in Spanish obviously. What stands out isn't the tennis. It's how much of elite performance is just refusing to stop.",
  },
  {
    isbn: '9780553573404',
    title: 'A Game of Thrones',
    author: 'George R.R. Martin',
    note: "Not everything has to be useful. Sometimes you just want a good story.",
  },
]

const CURRENTLY_READING_ISBN = '9780553573404'
const currentlyReading = books.find(b => b.isbn === CURRENTLY_READING_ISBN)
const readBooks = books.filter(b => b.isbn !== CURRENTLY_READING_ISBN)

// ── BookCard ──────────────────────────────────────────────────────────────────

function BookCard({
  book,
  index,
  coverSize = { w: 90, h: 128 },
}: {
  book: Book
  index: number
  coverSize?: { w: number; h: number }
}) {
  const [imgFailed, setImgFailed] = useState(false)
  const coverUrl = book.coverId
    ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
    : `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`

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
            width: coverSize.w,
            height: coverSize.h,
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
            width: coverSize.w,
            height: coverSize.h,
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
        {book.originalTitle && (
          <p className="text-ink-muted italic" style={{ fontSize: '0.7rem', lineHeight: 1.4 }}>
            {book.originalTitle}
          </p>
        )}
        <p className="text-label text-ink-muted">{book.author}</p>
        <p className="text-label text-ink-muted italic mt-1 leading-relaxed">{book.note}</p>
      </div>
    </motion.div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BooksPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-24 pb-24 sm:px-8 sm:pt-32 sm:pb-32 lg:px-12">
      {/* Page label */}
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

      {/* Currently reading */}
      {currentlyReading && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12, ease: 'easeOut' }}
          className="mb-14"
        >
          <p className="text-label uppercase tracking-widest text-ink-muted mb-8">
            Currently reading
          </p>
          <BookCard book={currentlyReading} index={0} coverSize={{ w: 90, h: 128 }} />
        </motion.div>
      )}

      {/* Divider */}
      {currentlyReading && (
        <motion.div
          className="border-t border-line mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
        />
      )}

      {/* Read */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: currentlyReading ? 0.22 : 0.12, ease: 'easeOut' }}
      >
        {currentlyReading && (
          <p className="text-label uppercase tracking-widest text-ink-muted mb-8">
            Read
          </p>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10">
          {readBooks.map((book, index) => (
            <BookCard key={book.isbn} book={book} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
