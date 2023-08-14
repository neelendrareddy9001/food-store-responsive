import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link, useActionData } from 'react-router-dom';
import {BsCartFill} from 'react-icons/bs';
import {HiOutlineUserCircle} from 'react-icons/hi';
import {useSelector} from 'react-redux';
import { toast } from 'react-hot-toast';
import { logoutRedux } from '../redux/userSlice';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const userData = useSelector((state) => state.user)
    console.log(userData.email);

    const handleShowMenu = () => {
        setShowMenu (preve => !preve)
    }


    const handleLogout = () => {
        dispatchEvent(logoutRedux())
        toast("LogOut Successfully")
    }

    console.log(process.env.REACT_APP_ADMIN_EMAIL)
  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
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

                <div className='text-2xl text-slate-600 relative cursor-pointer'>
                    <BsCartFill/>
                    <div className='absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 text-center rounded-full m-0 p-0  text-sm'>0</div>
                </div>
                
                <div className='text-2xl text-slate-600' onClick={handleShowMenu}>
                    <div className='text-3xl cursor-pointer w-10 h-10 rounded-full overflow-hidden drop-shadow'>
                        {userData.img ? <img src={userData.image} className='h-full w-full' /> : <HiOutlineUserCircle/> }
                    </div>
                    {showMenu && (
                        <div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col'>
                        {
                            userData.email === process.env.REACT_APP_ADMIN_EMAIL && <Link to={"newproduct"} className='whitespace-nowrap cursor-pointer'>New product</Link>
                        }

                        {userData.image ? (
                            <p className="cursor-pointer text-white px-2 bg-red-500" onClick={handleLogout}>
                    Logout ({userData.firstName}){" "}
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    Login
                  </Link>
                )}
                        </div>
                    )}
                </div>
            </div>
        </div>
        {/* Mobile */}
    </header>
  )
}

export default Header