import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return ( 
        <footer className="flex flex-wrap bottom-0 w-full p-10 mx-auto text-white bg-orange-700 rounded-t-xl">
            <div id="contact" className="w-full my-2 md:w-1/2 text-center">
                <h1 className="text-4xl font-bold">Contact Me</h1>
                <p>jorielsudario@gmail.com</p>
                <p>+63-951-277-3058</p>
            </div>
            <div id="socials" className="w-full my-2 md:w-1/2 text-center">
                <h1 className="text-4xl font-bold">Social Media</h1>
                <div className='flex w-1/2 m-auto justify-evenly'>
                    <a className='text-3xl hover:scale-125 transform duration-300' href="https://www.facebook.com/jorielbrian.sudario?mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook}  /></a>
                    <a className='text-3xl hover:scale-125 transform duration-300' href="https://instagram.com/jorielbrian?igshid=MzNlNGNkZWQ4Mg=="><FontAwesomeIcon icon={faInstagram} /></a>
                    <a className='text-3xl hover:scale-125 transform duration-300' href="https://www.tiktok.com/@joriel91011?_t=8dVw1EU01J9&_r=1"><FontAwesomeIcon icon={faTiktok} /></a>
                    <a className='text-3xl hover:scale-125 transform duration-300' href="https://www.linkedin.com/in/joriel-brian-sudario-b14728265"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a className='text-3xl hover:scale-125 transform duration-300' href="https://github.com/JorielBrian"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;