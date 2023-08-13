import Link from "next/link";

const Books = async () => {
    async function getBooks(){
        const res = await fetch(`${process.env.BASE_URL}/api/getbooks`)
        if(!res.ok){
            console.log(res);
        }
        return res.json();
    }
    const books = await getBooks();
    return (
        <main className="flex flex-wrap w-11/12 m-auto p-5 backdrop:blur-md">
            { books && books.map(book => (
                <div key={book.id} className="book-container flex flex-col relative justify-between w-56 h-72 py-3 px-5 m-5 bg-orange-900 shadow-2xl border-r-8 border-b-8 rounded-lg">
                    <div>
                        <h1 className="text-xl font-bold">{book.title}</h1>
                        <h3 className="text-md">Written by {book.author}</h3>
                    </div>
                    <p className="h-1/2 overflow-hidden">{book.intro}</p>
                    <div className="flex bottom-3 justify-evenly">
                        <Link href={ `/browse?id=${book.id}` } className="w-28 p-3 mx-1 text-center bg-orange-400 rounded-md hover:bg-orange-700 active:bg-yellow-600">Read</Link>
                        <button className="w-28 p-3 mx-1 bg-orange-400 rounded-md hover:bg-orange-700 active:bg-yellow-600">Borrow</button>
                    </div>
                </div>
            ))}
        </main>
    );
}

export default Books;