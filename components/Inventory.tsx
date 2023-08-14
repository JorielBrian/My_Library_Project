'use client'

export default (props: any) => {
    const handleDelete = (id: number, title: string, author: string) =>{
        //console.log(`Delete ${id}`)
        try {
            fetch( `/api/deletebook/`,{
                method: 'POST',
                body: JSON.stringify({ id, title, author })
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <main>
            <h1 className="w-fit m-auto text-4xl font-bold">Book Inventory</h1>
            <table className="w-full text-black bg-white border-8 border-orange-700 rounded-lg">
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                        <th>ISBN</th>
                        <th>QUANTITY</th>
                        <th>BORROWED</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    { props.books.map((book:any) => (
                        <tr key={book.id}>
                            <td className="text-center">{book.title}</td>
                            <td className="text-center">{book.author}</td>
                            <td className="text-center">{book.isbn}</td>
                            <td className="text-center">{book.quantity}</td>
                            <td className="text-center">{book.borrow}</td>
                            <td><button className="px-2 py-1 text-white font-semibold bg-orange-500 border-4 border-orange-700 rounded-full hover:scale-110" onClick={()=> handleDelete(book.id, book.title, book.author)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}