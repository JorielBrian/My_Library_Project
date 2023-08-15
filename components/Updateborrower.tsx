'use client'
import { useState } from "react";

export default (props:any) => {
    const borrwers = props.borrowers;
    const [ id, setId ] = useState(0);
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ contact, setContact ] = useState('');
    const [ borrowed, setBorrowed ] = useState('');
    const [ dateborrowed, setDateborrowed ] = useState(0);
    const [ datereturn, setDatereturn] = useState(0);
    const updateborrower = async () =>{
        const data = await fetch(`/api/updateborrower`,{
            method: 'POST',
            body: JSON.stringify({ id, firstname, lastname, address, contact, borrowed, dateborrowed, datereturn })
        })
        const res = await data.json()
        if(!res.ok) console.log(res.message);
    }
    const handleSelect = (firstname:string) =>{
        setId(borrwers.find((borrower:any) => borrower.firstname === firstname).id);
        setFirstname(borrwers.find((borrower:any) => borrower.firstname === firstname).firstname);
        setLastname(borrwers.find((borrower:any) => borrower.firstname === firstname).lastname);
        setAddress(borrwers.find((borrower:any) => borrower.firstname === firstname).address);
        setContact(borrwers.find((borrower:any) => borrower.firstname === firstname).contact);
        setBorrowed(borrwers.find((borrower:any) => borrower.firstname === firstname).borrowed);
        setDateborrowed(borrwers.find((borrower:any) => borrower.firstname === firstname).dateborrowed);
        setDatereturn(borrwers.find((borrower:any) => borrower.firstname === firstname).datereturn);
    }
    return(
        <main className="w-5/6 mx-auto mt-10 mb-20 p-5 bg-orange-400 border-8 border-orange-700 rounded-lg">
            <h1 className="my-3 text-4xl font-bold text-center">Update borrower</h1>
            <form action='' onSubmit={updateborrower} className="flex flex-col">
                <label className="w-full font-bold" htmlFor="borrwer">First Name:</label>
                <select name="borrwer" className="w-96 px-4 py-1 text-black border-4 border-orange-700 rounded-md" onChange={(e) => handleSelect(e.target.value)} required>
                    <option value="" className="text-gray-400">Select First Name</option>
                    {borrwers.map((borrower: any) => (
                        <option value={borrower.title} className="text-black">{borrower.firstname}</option>
                    ))}
                </select>
                <label className="w-full font-bold" htmlFor="lastname">Last Name:</label>
                <input className="w-96 px-4 m-1 text-black border-4 border-orange-700 rounded-lg" type="text" placeholder="Last Name" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required/>
                <label className="w-full font-bold" htmlFor="address">Address:</label>
                <textarea className="w-full px-4 m-1 text-black border-4 border-orange-700 rounded-lg" placeholder="Address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                <label className="w-full font-bold" htmlFor="contact">Contact:</label>
                <input className="w-96 px-4 m-1 text-black border-4 border-orange-700 rounded-lg" type="text" placeholder="Contact" name="contact" value={contact} onChange={(e) => setContact(e.target.value)} required/>
                <label className="w-full font-bold" htmlFor="borrowed">Book Borrowed:</label>
                <input className="w-96 px-4 m-1 text-black border-4 border-orange-700 rounded-lg" type="text" placeholder="Book Borrowed" name="borrowed" value={borrowed} onChange={(e) => setBorrowed(e.target.value)} required/>
                <label className="w-full font-bold" htmlFor="dateborrowed">Date Borrowed:</label>
                <input className="w-96 px-4 m-1 text-black border-4 border-orange-700 rounded-lg" type="date" placeholder="Date Borrowed" name="dateborrowed" value={dateborrowed} onChange={(e) => setDateborrowed(Number(e.target.value))} required/>
                <label className="w-full font-bold" htmlFor="datereturn">Date Return:</label>
                <input className="w-96 px-4 m-1 text-black border-4 border-orange-700 rounded-lg" type="date" placeholder="Date Return" name="datereturn" value={datereturn} onChange={(e) => setDatereturn(Number(e.target.value))} required/>
                <input type="submit" value="Update borrower now" className="w-96 mx-auto px-4 py-1 bg-orange-500 border-4 border-orange-700 rounded-full"/>
            </form>
        </main>
    );
}