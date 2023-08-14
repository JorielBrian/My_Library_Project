import Link from "next/link";

const Welcome = () => {
    return (
        <main className="flex flex-col w-full text-center h-[55vh]">
            <h1 className="text-6xl md:text-8xl">Welcome Readers!!!</h1>
            <p className="drop-shadow-2xl">welcome to Joriel's Library where you can browse your favorite stories and fantasies in peace</p>
            <Link href='/books' className="w-1/2 p-2 mx-auto my-5 font-bold bg-orange-400 border-8 border-orange-700 rounded-md">Go to Books</Link>
        </main>
    );
}

export default Welcome;