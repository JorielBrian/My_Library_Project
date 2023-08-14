import Link from "next/link";
import { PrismaClient } from "@prisma/client";

export default async({ params }: { params: { bookId: number } }) => {
    const prisma = new PrismaClient();
    const id = Number(params.bookId)
    async function getBook(){
        const data = await prisma.book.findUnique({
            where: {
                id: id
            }
        })
        return data
    }
    const book = await getBook();
    return(
        <main className="w-5/6 mx-auto my-16">
            { !book && <h1 className="w-fit mx-auto my-10 forn-bold bg-orange-500 border-8 border-orange-800">Sorry book no longer available</h1> }
            { book && <div className="w-full p-5 mx-auto my-5 text-black bg-white border-8 border-orange-900 rounded-lg">
                <h1 className="text-4xl font-bold">{book.title}</h1>
                <h1 className="text-2xl">Written by {book.author}</h1>
                <h1 className="text-md">ISBN: {book.isbn}</h1>
                <p className="my-5 text-sm">{book.intro}</p>
                <p className="my-5 text-sm">{book.content}</p>
            </div> }
            <Link href={`/books`} className="p-2 mr-2 font-bold bg-orange-500 border-8 border-orange-800 rounded-md">Go to Books</Link>
            { book && <Link href={`/borrow`} className="p-2 ml-2 font-bold bg-orange-500 border-8 border-orange-700 rounded-md">Borrow</Link> }
        </main>
    );
}