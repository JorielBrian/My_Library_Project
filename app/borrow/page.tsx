import Borrowbook from "@/components/Borrowbook";
import { getBooks } from "@/modules/fetchbook";

export default async () => {
    //FETCHING BOOKS USING MODULE
    const books = await getBooks();
    return (
        <Borrowbook books = {books} />
    );
}

