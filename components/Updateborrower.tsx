const Updateborrower = () => {
  const borrowers = [
    { id: 1, name: 'Borrower 1' },
    { id: 2, name: 'Borrower 2' },
  ]

  return (
    <div>
      <h1>Update Borrower</h1>
      <ul>
        {borrowers.map((borrower) => (
          <li key={borrower.id}>{borrower.name}</li>
        ))}
      </ul>
    </div>
  )
}

Updateborrower.displayName = 'Updateborrower'

export default Updateborrower