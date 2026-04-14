interface BookListProps {
  title: string
  books: Book[]
}

const BookList = ({ title, books }: BookListProps) => {
  return (
    <section className="space-y-6 px-6 py-8">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-3xl font-bold text-[#422e1a]">{title}</h2>
        <span className="rounded-full bg-[#d7b281]/20 px-4 py-2 text-sm text-[#4b3823]">
          {books.length} books
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <article
            key={book.id}
            className="rounded-4xl border border-[#d1b590] bg-[#fbf3e8] p-6 shadow-xl shadow-[#6e4727]/15"
          >
            <h3 className="text-xl font-semibold text-[#422e1a]">{book.title}</h3>
            <p className="text-sm text-[#7b5f3f]">{book.author}</p>
            <p className="mt-3 text-sm text-[#5a4531]">{book.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-[#5a4531]">
              <span className="rounded-full bg-[#d7b281]/40 px-3 py-1">{book.genre}</span>
              <span className="rounded-full bg-[#d7b281]/40 px-3 py-1">{book.year}</span>
              <span className="rounded-full bg-[#d7b281]/40 px-3 py-1">Rating {book.rating}</span>
            </div>
            <p className="mt-4 text-sm text-[#5a4531]">Available: {book.available_copies} / {book.total_copies}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BookList