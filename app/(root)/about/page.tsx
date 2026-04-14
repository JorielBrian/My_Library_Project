export default function AboutPage() {
  return (
    <main className="px-6 py-8">
      <section className="rounded-4xl border border-amber-400/40 bg-slate-950/80 p-8 shadow-2xl shadow-black/20">
        <h1 className="text-5xl font-bold text-white">About Library System</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          This demo library system is built with Next.js, Tailwind CSS, and React. It shows a small collection of books, a featured selection, and a responsive header with navigation.
        </p>
        <div className="mt-6 space-y-3 text-slate-200">
          <p className="text-lg font-semibold text-amber-100">Features included</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Responsive layout with modern UI components</li>
            <li>Book overview cards and listing page</li>
            <li>Client-side navigation using the Next.js App Router</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
