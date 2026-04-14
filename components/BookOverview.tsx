const BookOverview = ({
  title,
  author,
  year,
  rating,
  genre,
  description,
  available_copies,
  total_copies,
}: Book) => {
  return (
    <section className="rounded-4xl border border-[#c7a876] bg-[#f6ece0] p-8 shadow-2xl shadow-[#6e4727]/20">
      <h2 className="text-4xl font-bold text-[#422e1a]">{title}</h2>
      <p className="mt-2 text-lg text-[#7b5f3f]">{genre} • {year}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="space-y-2 rounded-3xl bg-[#efe2d1] p-4 text-sm text-[#4b3823]">
          <p><span className="font-semibold text-[#422e1a]">Author:</span> {author}</p>
          <p><span className="font-semibold text-[#422e1a]">Rating:</span> {rating}</p>
          <p><span className="font-semibold text-[#422e1a]">Available:</span> {available_copies} / {total_copies}</p>
        </div>
        <div className="rounded-3xl bg-[#e5cfa8] p-4 text-sm text-[#422e1a]">
          <p>{description}</p>
        </div>
      </div>
    </section>
  )
}

export default BookOverview