import Borrowbook from "@/components/Borrowbook";
import { getBooks } from "@/modules/fetchbook";

export default async () => {
    const books = await getBooks();
    return (
        <Borrowbook books = {books} />
    );
}

