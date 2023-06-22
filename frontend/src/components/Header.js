import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import {BsCartFill} from 'react-icons/bs';
import {FaUserAlt} from 'react-icons/fa';

const Header = () => {
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4'>
        {/* Desktop */}
        <div className=' flex items-center h-full justify-between'>
            <Link to={" "}>
                <div className='h-12'>
                    <img src={Logo} alt='logo' className='h-full' />
                </div>
            </Link>

            <div className='flex items-center gap-4 md:gap-7'>
                <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
                    <Link to={" "}>Home</Link>
                    <Link to={"menu"}>Menu</Link>
                    <Link to={"about"}>About</Link>
                    <Link to={"contact"}>Contact</Link>
                </nav>

                <div className=''>
                    <BsCartFill/>
                </div>
                
                <div className=''>
                    <FaUserAlt/>
                </div>
            </div>
        </div>
        {/* Mobile */}
    </header>
  )
}

export default Header