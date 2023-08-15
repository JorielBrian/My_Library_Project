'use client'
import { useState } from "react";

export default (props: any) => {
    const [ title, setTitle ] = useState('');
    const [ fname, setFname ] = useState('');
    const [ lname, setLname ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ contact, setContact ] = useState('');

    //SUBMITTING BORROWER DETAILS TO THE API
    async function submitborrower() {
        const selectedbook = props.books.find((book: any) => book.title === title)
        const id = selectedbook.id
        const data = await fetch(`/api/addborrower`,{
            method: 'POST',
            body: JSON.stringify({ id, title, fname, lname, address, contact })
        })
        const res = await data.json()
        if(!res.ok) console.log(res.message);
    }
    return (
        <main className="my-16">
            <form action='/borrow' onSubmit={submitborrower} className="flex flex-wrap w-5/6 sm:w-1/2 md:w-7/12 lg:w-1/2 p-4 mx-auto bg-orange-500 border-8 border-orange-900 rounded-lg">
                <h1 className="w-fit m-auto text-4xl font-bold">Borrow a Book</h1>
                <label className="w-full font-bold" htmlFor="title">Book:</label>
                <select name="title" className=" text-black border-4 border-orange-700 rounded-md" onChange={(e) => setTitle(e.target.value)} required>
                    <option value="">Select a book</option>
                    {props.books.map((book:any) => (
                        <option value={book.title} className="text-black font-semibold">{book.title}</option>
                    ))}
                </select>
                <label className="w-full font-bold" htmlFor="fname">First Name:</label>
                <input className="w-96 px -2 m-1 text-black border-4 border-orange-700 rounded-lg" type="text" placeholder="First Name" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} required/>
                <label className="w-full font-bold" htmlFor="lname">Last Name:</label>
                <input className="w-96 px -2 m-1 text-black border-4 border-orange-700 rounded-lg" type="text" placeholder="Last Name" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} required/>
                <label className="w-full font-bold" htmlFor="adrress">Address:</label>
                <textarea className="w-full px -2 m-1 text-black border-4 border-orange-700 rounded-lg" placeholder="Address" name="adrress" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                <label className="w-full font-bold" htmlFor="contact">Contact:</label>
                <input className="w-full px -2 m-1 text-black border-4 border-orange-700 rounded-lg" type="text" placeholder="Contact" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} required/>
                <input className="w-96 p-1 m-2 font-bold bg-orange-400 border-4 border-orange-700 rounded-lg hover:bg-orange-600 hover:scale-110 active:bg-orange-900" type="submit" value="Borrow" />
            </form>
        </main>
    );
}

