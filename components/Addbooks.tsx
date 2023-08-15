'use client'
import React, { useState } from 'react';
//import axios from 'axios';

export default () =>{
    const [ title, setTitle ] = useState('');
    const [ isbn, setIsbn ] = useState('');
    const [ intro, setIntro ] = useState('');
    const [ content, setContent ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ quantity, setQuantity ] = useState(0);

    async function submitBook() {
        const data = await fetch(`/api/createbook`,{
            method: 'POST',
            body: JSON.stringify({ title, isbn, intro, content, author, quantity })
        })
        const res = await data.json()
        if(!res.ok) console.log(res.message);
    }

    return (
        <main className="w-2/3 mx-auto my-16">
            <form action='/' onSubmit={submitBook} className="flex flex-wrap p-4 bg-orange-500 border-8 border-orange-900 rounded-lg">
                <h1 className="w-fit m-auto text-4xl font-bold">Add Book</h1>
                <label className="w-full font-bold" htmlFor="title">Title:</label>
                <input className="w-96 px-4 m-1 text-black border-4 border-orange-700 rounded-lg" type="text" placeholder="Title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
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
                <input className="w-96 p-1 m-2 font-bold bg-orange-700 border-4 border-orange-700 rounded-lg hover:bg-orange-600 active:bg-orange-900" type="submit" value="Add Book" />
            </form>
        </main>
    );
}