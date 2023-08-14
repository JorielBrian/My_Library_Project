import Link from "next/link";
import { getBooks } from "@/modules/fetchbook";

const Books = async () => {
    const books = await getBooks();
    return (
        <main className="flex flex-wrap w-11/12 h-full my-10 mx-auto p-5 backdrop:blur-md">
            { books && books.map(book => (
                <div key={book.id} className="book-container flex flex-col relative justify-between w-56 h-96 py-3 px-5 m-5 bg-orange-900 shadow-2xl border-r-8 border-b-8 rounded-lg">
                    <div>
                        <h1 className="text-xl font-bold">{book.title}</h1>
                        <h3 className="text-md">Written by {book.author}</h3>
                    </div>
                    <p className="h-1/2 text-sm overflow-hidden">{book.intro}</p>
                    <div className="flex bottom-3 justify-evenly">
                        <Link href={ `/books/${book.id}` } className="w-28 p-3 mx-1 font-bold text-center bg-orange-400 border-4 border-orange-600 rounded-md hover:bg-orange-700 hover:text-orange-300 active:bg-yellow-600 ">Read</Link>
                        <Link href={`/borrow`} className="w-28 p-3 mx-1 font-bold text-center bg-orange-400 border-4 border-orange-600 rounded-md hover:bg-orange-700 hover:text-orange-300 active:bg-yellow-600">Borrow</Link>
                    </div>
                </div>
            ))}
        </main>
    );
}

export default Books;