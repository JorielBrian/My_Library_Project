import Link from "next/link";

const Notfound = () => {
    return (
        <main>
            <h1 className="text-8xl">Page Not Found</h1>
            <Link href='/'>Go to homepage</Link>
        </main>
    );
}

export default Notfound;