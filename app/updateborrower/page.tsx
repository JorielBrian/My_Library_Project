import Updateborrower from "@/components/Updateborrower";
import { getBooks } from "@/modules/fetchbook";
import { getBorrowers } from "@/modules/getBorrowers";

export default async () =>{
    const borrowers = await getBorrowers();
    const books = await getBooks();
    return(
        <main>
            <Updateborrower borrowers = {borrowers} books = {books} />
        </main>
    );
}