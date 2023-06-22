import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
        {/* Desktop */}
        <div className=''>
            <img src={Logo} alt='logo' />
        </div>
        {/* Mobile */}
    </header>
  )
}

export default Header