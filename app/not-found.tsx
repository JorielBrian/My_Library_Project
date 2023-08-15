import Link from "next/link";

const Notfound = () => {
    return (
        <main className="flex flex-col w-5/6 p-10 mx-auto my-20 bg-orange-400 border-8 border-orange-700 rounded-lg">
            <h1 className="text-8xl text-center font-bold my-5">I'm sorry reader, this page not found</h1>
            <Link href='/' className="w-1/3 mx-auto my-5 p-2 text-center font-semibold bg-orange-500 border-4 border-orange-700 rounded-full hover:bg-orange-600 hover:font-bold hover:scale-125 active:bg-orange-800">Go to homepage</Link>
        </main>
    );
}

export default Notfound;