const Footer = () => {
    return ( 
        <footer className="flex bottom-0 w-full h-52 p-10 text-white bg-orange-800 rounded-t-xl">
            <div id="contact" className="w-1/2 text-center">
                <h1 className="text-4xl font-bold">Contact Me</h1>
                <p>jorielsudario@gmail.com</p>
                <p>+63-951-277-3058</p>
            </div>
            <div id="socials" className="w-1/2 text-center">
                <h1 className="text-4xl font-bold">Social Media</h1>
                <p>facebook</p>
                <p>instagram</p>
                <p>tiktok</p>
            </div>
        </footer>
    );
}

export default Footer;