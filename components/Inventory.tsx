'use client'
import { useState } from "react";
import Link from "next/link";

export default (props: any) => {
    const [ searchbook, setSearchbook ] = useState('');
    const [ books, setBooks ] = useState(props.books);
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
    const onSearchbooks = (event: React.FormEvent) =>{
        event.preventDefault();
        if(searchbook.length === 0){
            setBooks(props.books)
        } else {
            setBooks(props.books.filter((book: any) => searchbook.toLowerCase() === book.title.toLowerCase() || searchbook.toLowerCase() === book.author.toLowerCase() || searchbook.toLowerCase() === book.isbn.toLowerCase()))
        }
    }
    return (
        <main className="flex flex-col w-full relative">
            <h1 className="w-fit mx-auto my-10 text-4xl font-bold">Book Inventory</h1>
            <form onSubmit={onSearchbooks} className="absolute sm:w-5/6 md:1/3 lg:w-5/12 h-2/3 m-2 top-20 right-0">
                <input className="px-6 text-lg text-black border-4 border-orange-700 rounded-2xl" placeholder="Search Book" value={searchbook} onChange={(e) => setSearchbook(e.target.value)} />
            </form>
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
                    { books.map((book:any) => (
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
            <Link href='/updatebook' className="w-60 mx-auto my-2 px-2 py-1 text-white text-center font-bold bg-orange-500 border-4 border-orange-700 rounded-full hover:scale-110">Update a book</Link>
        </main>
    );
}