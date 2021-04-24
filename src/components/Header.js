import React from 'react';
import Logo from '../images/logo.png';
import { FaBars, FaSearch, FaCartPlus, FaUserPlus } from 'react-icons/fa';
// import SearchIcon from '@material-ui/icons/Search';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Header = () => {
  return (
    <header className='header flex items-center justify-between py-3'>
      <div className='menu-btn flex'>
        <div className='mx-4'>
          <FaBars />
        </div>
        <div className='mx-2'>
          <FaSearch />
        </div>
      </div>
      <div className='logo'>
        <img src={Logo} alt='Microsoft' />
      </div>
      <div className='cart flex'>
        <div>
          <FaCartPlus />
        </div>
        <div className='mx-4'>
          <FaUserPlus />
        </div>
      </div>
    </header>
  );
};

export default Header;
