import Addbooks from "@/components/Addbooks";
import Borrowers from "@/components/Borrowers";
import Inventory from "@/components/Inventory";
import { getBooks } from "@/modules/fetchbook";
import { getBorrowers } from "@/modules/getBorrowers";

export default async () =>{
    //FETCHING BOOK AND BORROWER DATA USING MODULES
    const books = await getBooks();
    const borrowers = await getBorrowers();
    return (
        <main className="w-full mx-auto my-16">
            <Inventory books = {books} />
            <Borrowers borrowers = {borrowers} books = {books} />
            <Addbooks />
        </main>
    );
}