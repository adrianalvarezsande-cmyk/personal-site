export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
        <p className="text-label text-ink-muted uppercase tracking-widest">
          Adrián Álvarez
        </p>
        <p className="text-label text-ink-muted select-none" style={{ opacity: 0.5 }}>
          ⌘K to navigate
        </p>
        <p className="text-label text-ink-muted">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
