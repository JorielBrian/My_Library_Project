'use client'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
    const [ navBtn, setNavBtn ] = useState(true);
    const [ searchbtn, setSearchbtn ] = useState(true);
    const [ search, setSearch ] = useState('');
    const navigation = useRef();
    const searchbar = useRef();
    const router = useRouter();

    const toggleNavbar = () => {
        if(navBtn === true){
            navigation.current.classList.remove('hidden');
            navigation.current.classList.add('flex');
            setNavBtn(false);
        } else {
            navigation.current.classList.remove('flex');
            navigation.current.classList.add('hidden');
            setNavBtn(true);
        }
    }
    const toggleSearch = () => {
        if(searchbtn === true){
            searchbar.current.classList.remove('hidden');
            searchbar.current.classList.add('flex');
            setSearchbtn(false);
        } else {
            searchbar.current.classList.remove('flex');
            searchbar.current.classList.add('hidden');
            setSearchbtn(true);
        }
    }

    const onSearch = (event: React.FormEvent) =>{
        event.preventDefault();
        const searchQuery = encodeURI(search);
        try{
            router.push(`/search?q=${searchQuery}`);
        }catch(err){
            console.log(err)
        }
    }

    return ( 
        <header className='flex sticky top-0 w-full h-20 z-10 justify-between pt-3 px-10 backdrop-blur-sm rounded-b-xl'>
            <div id='title' className='group flex w-5/8 md:w-2/3 lg:w-5/12'>
                <h1 className='w-[150px] text-6xl font-bold overflow-hidden group-hover:w-auto'>Joriel's</h1>
                <h1 className='w-9 text-6xl text-yellow-400 font-bold overflow-hidden group-hover:w-auto'>Library</h1>
            </div>
            <nav className='md:flex relative w-3/8 md:w-2/3 lg:1/2 mt-3 text-orange-800'>
                <form onSubmit={onSearch} ref={searchbar} className="hidden absolute sm:block sm:static sm:w-5/6 md:1/3 lg:w-5/12 h-2/3 m-2 top-10 right-0">
                    <input className="px-6 text-lg text-black border-4 border-orange-700 rounded-2xl" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                </form>
                <div ref={navigation} className="hidden absolute w-[60vw] md:w-full m2 flex-col lg:flex lg:flex-row top-24 sm:top-12 lg:top-0 right-0 2xl:right-16 items-center justify-evenly text-lg text-white font-semibold lg:w-1/2">
                    <Link href='/'      className='w-full lg:w-28 py-1 px-1 mx-2 my-1 text-lg text-center text-white font-bold drop-shadow-lg bg-orange-500 border-4 border-orange-700 rounded-md hover:shadow-lg hover:bg-orange-600 hover:text-white hover:scale-125 active:bg-orange-800'>Home</Link>
                    {/*<Link href="/about" className='w-full md:w-28 py-1 px-1 mx-2 my-1 text-lg text-center text-white font-bold drop-shadow-lg bg-orange-500 border-4 border-orange-700 rounded-md hover:shadow-lg hover:bg-orange-600 hover:text-white hover:scale-125 active:bg-orange-800'>About</Link>*/}
                    <a href="/books"  className='w-full lg:w-28 py-1 px-1 mx-2 my-1 text-lg text-center text-white font-bold drop-shadow-lg bg-orange-500 border-4 border-orange-700 rounded-md hover:shadow-lg hover:bg-orange-600 hover:text-white hover:scale-125 active:bg-orange-800'>Books</a>
                    <div className="group w-full lg:w-32 flex">
                        <Link href='/admin' className='w-full lg:w-32 py-1 px-1 mx-2 my-1 text-lg text-center text-white font-bold drop-shadow-lg bg-orange-500 border-4 border-orange-700 rounded-md hover:shadow-lg hover:bg-orange-600 hover:text-white hover:scale-125 active:bg-orange-800'>Admin</Link>
                        <div className="group-hover:flex hidden flex-col absolute w-11/12 lg:w-24 top-[152px] lg:top-12 right-3 text-white font-semibold bg-orange-500 border-4 border-t-0 border-orange-700 rounded-b-lg">
                            <Link href='/inventory ' className="px-1 py-2 text-sm hover:bg-orange-600"   >Inverntory</Link>
                            <Link href='/borrowers'  className="px-1 py-2 text-sm hover:bg-orange-600"   >Borrowers</Link>
                            <Link href='/addbook'    className="px-1 py-2 text-sm hover:bg-orange-600"   >Add Book</Link>
                        </div>
                    </div>
                </div>
                
            </nav>
            <div className="absolute top-7 right-0">
                <button onClick={toggleSearch} className="w-20 p-1 mx-1 z-10top-7 right-5 sm:hidden bg-orange-500 border-4 border-orange-700 rounded-full"><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff"}} className="w-1/4 right-10 text-2xl shadow-2xl" /></button>
                <button onClick={toggleNavbar} className="w-20 p-1 mx-1 z-10 top-7 right-5 lg:hidden bg-orange-500 border-4 border-orange-700 rounded-full"><FontAwesomeIcon icon={faBars} style={{color: "#ffffff"}} className="w-1/4 right-10 text-2xl shadow-2xl" /></button>
            </div>
        </header>
    );
}

export default Header;