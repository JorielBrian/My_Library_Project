'use client'
import { useState } from "react";

export default (props:any) => {
    const books = props.books;
    const [ id, setId ] = useState(0);
    const [ title, setTitle ] = useState('');
    const [ isbn, setIsbn ] = useState('');
    const [ intro, setIntro ] = useState('');
    const [ content, setContent ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ quantity, setQuantity ] = useState(0);
    const [ borrow, setBorrow] = useState(0);
    const updatebook = async () =>{
        const data = await fetch(`/api/updatebook`,{
            method: 'POST',
            body: JSON.stringify({ id, title, isbn, intro, content, author, quantity, borrow })
        })
        const res = await data.json()
        if(!res.ok) console.log(res.message);
    }
    const handleSelect = (title:string) =>{
        setId(books.find((book:any) => book.title === title).id);
        setTitle(books.find((book:any) => book.title === title).title);
        setAuthor(books.find((book:any) => book.title === title).author);
        setIsbn(books.find((book:any) => book.title === title).isbn);
        setIntro(books.find((book:any) => book.title === title).intro);
        setContent(books.find((book:any) => book.title === title).content);
        setQuantity(books.find((book:any) => book.title === title).quantity);
        setBorrow(books.find((book:any) => book.title === title).borrow);
    }
    return(
        <main className="w-5/6 mx-auto mt-10 mb-20 p-5 bg-orange-400 border-8 border-orange-700 rounded-lg">
            <h1 className="my-3 text-4xl font-bold text-center">Update Book</h1>
            <form action='' onSubmit={updatebook} className="flex flex-col">
                <label className="w-full font-bold" htmlFor="book">Book:</label>
                <select name="book" className="w-96 px-4 py-1 text-black border-4 border-orange-700 rounded-md" onChange={(e) => handleSelect(e.target.value)} required>
                    <option value="" className="text-gray-400">Select a book</option>
                    {books.map((book: any) => (
                        <option value={book.title} className="text-black">{book.title}</option>
                    ))}
                </select>
                <label className="w-full font-bold" htmlFor="author">Author:</label>
                <input className="w-96 px-4 m-1 text-black border-4 border-orange-700 rounded-lg" type="text" placeholder="Author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
                <label className="w-full font-bold" htmlFor="isbn">ISBN:</label>
                <input className="w-96 px-4 m-1 text-black border-4 border-orange-700 rounded-lg" type="text" placeholder="Isbn" name="isbn" value={isbn} onChange={(e) => setIsbn(e.target.value)} required/>
                <label className="w-full font-bold" htmlFor="intro">Intro:</label>
                <textarea className="w-full px-4 m-1 text-black border-4 border-orange-700 rounded-lg" placeholder="Intro" name="intro" value={intro} onChange={(e) => setIntro(e.target.value)} required/>
                <label className="w-full font-bold" htmlFor="content">Content:</label>
                <textarea className="w-full px-4 m-1 text-black border-4 border-orange-700 rounded-lg" placeholder="Content" name="content" value={content} onChange={(e) => setContent(e.target.value)} required/>
                <label className="w-full font-bold" htmlFor="quantity">Quantity:</label>
                <input className="w-96 px-4 m-1 text-black border-4 border-orange-700 rounded-lg" type="number" placeholder="Quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required/>
                <label className="w-full font-bold" htmlFor="borrow">Borrow:</label>
                <input className="w-96 px-4 m-1 text-black border-4 border-orange-700 rounded-lg" type="number" placeholder="Borrow" name="borrow" value={borrow} onChange={(e) => setBorrow(Number(e.target.value))} required/>
                <input type="submit" value="Update book now" className="w-96 mx-auto px-4 py-1 bg-orange-500 border-4 border-orange-700 rounded-full"/>
            </form>
        </main>
    );
}