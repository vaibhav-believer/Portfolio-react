import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center '
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to="/" className="p-4 text-white text-lg font-bold underline">
        Home
      </Link>
      <Link to="/connect" className="p-4 text-white text-lg font-bold underline">
        Connect
      </Link>
      <Link to="/achievements" className="p-4 text-white font-bold underline text-lg">
        Achievements
      </Link>
    </div>
  );
};

export default Dropdown;
