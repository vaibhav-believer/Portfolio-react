import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
  return (
    <nav
      className='flex justify-between items-center h-16 relative shadow-sm font-mono font-semibold text-white'
      role='navigation'
    >
      <Link to='/' className='pl-8 text-2xl '>
        Mr. Programmer
      </Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='white'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block  hidden'>
        <Link to='/' className='p-4 text-xl'>
          Home
        </Link>
        <Link to='/connect' className='p-4 text-xl'>
          Connect
        </Link>
        <Link to='/achievements' className='p-4 text-xl'>
          Achievements
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;