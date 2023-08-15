import Borrowers from "@/components/Borrowers";
import { getBooks } from "@/modules/fetchbook";
import { getBorrowers } from "@/modules/getBorrowers";

export default async () => {
    //FETCHING BOOKS AND BORROWERS DATA USING MODULES
    const books = await getBooks();
    const borrowers = await getBorrowers();
    return(
        <main className="flex items-center h-[100vh]">
            <Borrowers borrowers = {borrowers} books = {books} />
        </main>
    )
}