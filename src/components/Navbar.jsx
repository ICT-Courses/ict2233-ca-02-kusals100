import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes} from 'react-icons/fa';


function Navbar() {

  //A state to remember whether the mobile menu is open or closed
  const [nav, setNav] = useState(false);

  //The function that change the state after clicking on the hamburger icon
  const handleClick =  () => setNav(!nav);

  // A function to explicitly close the mobile menu, used when a link is clicked
  const closeMobileMenu = () => setNav(false);

  return (
    <header className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-md z-10'>
    
    {/*Logo section */}
    <div>
        <Link to="home" smooth = {true} duration={500}  className="text-2xl font-bold text-[#64ffda] cursor-pointer">
          Kusal S.
        </Link>
      </div>

    {/*Menu for the Desktop */}
    <ul className='hidden md:flex'> {/*In mobile -> hidden | In Desktop -> flex */}
      <li className="px-4 cursor-pointer hover:text-[#64ffda] transition-colors duration-300">
        <Link to='home' smooth={true} duration={500} >Home</Link>
      </li>    
      <li className='px-4 cursor-pointer hover:text-[#64ffda] transition-colors duration-300'>
        <Link to ="about" smooth={true} duration={500}>About</Link>
      </li>
      <li className="px-4 cursor-pointer hover:text-[#64ffda] transition-colors duration-300">
          <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
        </li>
        <li className="px-4 cursor-pointer hover:text-[#64ffda] transition-colors duration-300">
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
    </ul>

    {/* Hamburger Menu Icon for MOBILE */}
    <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />} {/*According to the nav state, icon is changed */}
      </div>

    {/*Mobile Menu Overlay */}
      <ul
        className={
          !nav
            ? 'hidden' // If nav = false, Hide the menu 
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' // If nav = true ,Show the full-screen menu 
        }
      >
        <li className="py-6 text-4xl hover:text-[#64ffda]">
          <Link onClick={closeMobileMenu} to ="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#64ffda]">
          <Link onClick={closeMobileMenu} to ="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#64ffda]">
          <Link onClick={closeMobileMenu} to ="portfolio" smooth={true} duration={500}>Portfolio</Link>
        </li>
        <li className="py-6 text-4xl hover:text-[#64ffda]">
          <Link onClick={closeMobileMenu} to ="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

    </header>
  );

}

export default Navbar;
