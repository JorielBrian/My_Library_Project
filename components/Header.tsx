import Link from "next/link";

const Header = () => {
    return ( 
        <header className='flex sticky top-0 w-full h-20 z-10 justify-between pt-3 px-10 backdrop-blur-sm rounded-b-xl'>
            <div id='title' className='group flex w-1/2'>
                <h1 className='w-[150px] text-6xl font-bold overflow-hidden group-hover:w-auto'>Joriel</h1>
                <h1 className='w-9 text-6xl text-yellow-400 font-bold overflow-hidden group-hover:w-auto'>Library</h1>
            </div>
            <nav className='w-1/2 mt-3 text-end text-orange-800 place-content-center'>
                <Link href='/'      className='w-48 py-1 px-3 mx-2 text-xl text-white font-bold drop-shadow-lg bg-orange-700 border-4 border-orange-700 rounded-md hover:shadow-lg hover:bg-orange-600 hover:text-white hover:scale-125 active:bg-orange-800'>Home</Link>
                <Link href="/about" className='w-48 py-1 px-3 mx-2 text-xl text-white font-bold drop-shadow-lg bg-orange-700 border-4 border-orange-700 rounded-md hover:shadow-lg hover:bg-orange-600 hover:text-white hover:scale-125 active:bg-orange-800'>About</Link>
                <a href="#contact"  className='w-48 py-1 px-3 mx-2 text-xl text-white font-bold drop-shadow-lg bg-orange-700 border-4 border-orange-700 rounded-md hover:shadow-lg hover:bg-orange-600 hover:text-white hover:scale-125 active:bg-orange-800'>Contact</a>
                <Link href='/admin' className='w-48 py-1 px-3 mx-2 text-xl text-white font-bold drop-shadow-lg bg-orange-700 border-4 border-orange-700 rounded-md hover:shadow-lg hover:bg-orange-600 hover:text-white hover:scale-125 active:bg-orange-800'>Admin</Link>
            </nav>
        </header>
    );
}

export default Header;