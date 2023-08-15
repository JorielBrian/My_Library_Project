import Inventory from "@/components/Inventory";
import { getBooks } from "@/modules/fetchbook";

export default async () => {
    //FETCHING BOOKS USING MODULES
    const books = await getBooks();
    return (
        <main className="my-10">
            <Inventory books = {books} />
        </main>
    );
}