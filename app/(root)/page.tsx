import BookList from "@/components/BookList"
import BookOverview from "@/components/BookOverview"
import { sampleBoooks } from "@/constants"

const Home = () => {
  const featuredBook = sampleBoooks[0]

  return (
    <main className="space-y-10 px-6 py-8">
      <section className="space-y-6 rounded-4xl border border-amber-400/40 bg-slate-950/80 p-8 shadow-2xl shadow-black/20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Featured</p>
            <h1 className="text-5xl font-bold text-white">Spotlight Book</h1>
          </div>
          <p className="max-w-xl text-slate-300">
            Explore the latest library arrivals, view the featured selection, and manage your collection with a clean, responsive interface.
          </p>
        </div>

        <BookOverview {...featuredBook} />
      </section>

      <BookList title="Latest Books" books={sampleBoooks} />
    </main>
  )
}

export default Home;