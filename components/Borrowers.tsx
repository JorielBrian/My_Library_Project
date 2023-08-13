import React from "react";

const Borrowers = async () => {
    async function getBorrowers(){
        const res = await fetch(`${process.env.BASE_URL}/api/getborrowers`)
        if(!res.ok){
            console.log(res);
        }
        return res.json();
    }
    const borrowers = await getBorrowers();
    return (
        <main className="flex flex-wrap w-5/6 m-auto p-5 backdrop:blur-md">
            <table className="w-full text-black bg-white border-8 border-orange-700 rounded-lg">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>ADDRESS</th>
                        <th>CONTACT</th>
                        <th>BOOK BORROWED</th>
                        <th>DATE BORROWED</th>
                        <th>DATE RETURNED</th>
                    </tr>
                </thead>
                <tbody>
                    { borrowers && borrowers.map(borrower => (
                        <tr key={borrower.id}>
                            <td className="text-center">{borrower.firstname} {borrower.lastname}</td>
                            <td className="text-center">{borrower.address}</td>
                            <td className="text-center">{borrower.contact}</td>
                            <td className="text-center">{borrower.borrowed}</td>
                            <td className="text-center">{borrower.dateborrowed}</td>
                            <td className="text-center">{borrower.datereturn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}
export default Borrowers;