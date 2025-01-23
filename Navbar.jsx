import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center bg-white shadow-md p-4">
      <h1 className="text-2xl font-bold">E-Cell</h1>
      <div className="flex space-x-4">
      
        <button
          onClick={() => navigate('/second')}
          className="text-blue-500 hover:underline"
        >
          Home
        </button>
        <button
          onClick={() => navigate('/')}
          className="text-blue-500 hover:underline"
        >
          Grid
        </button>
        <a
          href="https://www.linkedin.com/in/sneha-jain-520233300/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
