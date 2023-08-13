import { useParams } from "next/navigation";

export default async () => {
    async function getBook() {
        const data = await fetch(`/api/browsebook`,{
            method: 'GET',
            body: JSON.stringify({ id })
        })
        const res = await data.json()
        if(!res.ok) console.log(res.message);
    }
    const book = await getBook();
    return (
        <main className="w-5/6 my-10 mx-auto p-10 text-black bg-white border-[20px] border-orange-900 rounded-xl">
        <h1 className="text-4xl font-bold">{book.title}</h1>
        <h2 className="text-2xl mb-10">Written by {book.author}</h2>
        <p>{book.content}</p>
        </main>
    );
}