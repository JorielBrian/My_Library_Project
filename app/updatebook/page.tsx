import Updatebook from "@/components/Updatebook";
import { getBooks } from "@/modules/fetchbook";

export default async () =>{
    const books = await getBooks();
    return(
        <main>
            <Updatebook books = {books} />
        </main>
    );
}