import BookList from "@/components/BookList"
import { sampleBoooks } from "@/constants"

export default function LibraryPage() {
  return (
    <main className="space-y-8 px-6 py-8">
      <section className="rounded-4xl border border-amber-400/40 bg-slate-950/80 p-8 shadow-2xl shadow-black/20">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-white">Library</h1>
          <p className="max-w-3xl text-slate-300">
            Browse the full library collection and find new books to read. The library page displays a tidy summary for each available title.
          </p>
        </div>
      </section>

      <BookList title="All Books" books={sampleBoooks} />
    </main>
  )
}
