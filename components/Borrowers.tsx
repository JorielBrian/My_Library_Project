'use client'

//import { useRouter, NextRouter } from "next/router";

const Borrowers = (props: any) => {
    /*const router = useRouter();
    const refreshData = () =>{
        router.replace(router.asPath);
    }*/
    const handleReturn = async (borrowerid: number, title: string) =>{
        window.location.reload();
        const selectedbook = props.books.find((book: any) => book.title === title)
        const bookid = selectedbook.id;
        const date = new Date();
        //console.log(new Date());
        const data = await fetch(`/api/returnbook`, {
            method: 'POST',
            body: JSON.stringify({ borrowerid, bookid, date })
        })/*.then(()=>{
            refreshData();
        })*/
        const res = await data.json();
        if(!res.ok){
            console.log(res.message);
        }
    }
    return (
        <main className="flex flex-wrap w-5/6 m-auto p-5 backdrop:blur-md">
            <h1 className="w-fit m-auto text-4xl font-bold">Borrowers</h1>
            <table className="w-full p-4 text-black bg-white border-8 border-orange-700 rounded-lg">
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
                    {props.borrowers.map((borrower: any) => (
                        <tr key={borrower.id}>
                            <td className="text-center">{borrower.firstname} {borrower.lastname}</td>
                            <td className="text-center">{borrower.address}</td>
                            <td className="text-center">{borrower.contact}</td>
                            <td className="text-center">{borrower.borrowed}</td>
                            <td className="text-center">{borrower.dateborrowed}</td>
                            <td className="text-center">{borrower.datereturn ? borrower.datereturn : (<button onClick={()=> handleReturn(borrower.id, borrower.borrowed)} className="w-32 px-2 py-1 text-white font-semibold bg-orange-500 border-4 border-orange-700 rounded-full hover:scale-110">Return</button>)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}
export default Borrowers;