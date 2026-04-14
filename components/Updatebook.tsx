const Updatebook = () => {
  const books = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
  ]

  return (
    <div>
      <h1>Update Book</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}

Updatebook.displayName = 'Updatebook'

export default Updatebook