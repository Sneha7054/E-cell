import React from 'react';
import Navbar from '../components/Navbar';

const SecondPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-5">
      <Navbar />
      <div className="flex flex-col items-center mt-10">
        {/* Profile Section */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-40 h-40 bg-red-600 rounded-full animate-pulse"></div>
          <img
            src="/public/Assets/pp.jpg"
            alt="Your Photo"
            className="w-40 h-40 rounded-full z-10 border-4 border-red-600"
          />
        </div>

        <div className="mt-5 text-center">
          <p className="text-2xl font-bold">Name: Sneha Jain</p>
          <p className="text-2xl font-bold">Reg No: 20234161</p>
        </div>

     
        <button
          onClick={() => window.location.href = 'https://www.instagram.com/schnozzle754/'}
          className="bg-red-600 px-6 py-3 mt-8 rounded-lg text-lg font-bold hover:bg-red-700 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-700"
        >
          Visit My Instagram
        </button>

        {/* Squid Game Symbols Section */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="w-20 h-20 flex justify-center items-center bg-gray-800 rounded shadow-inner text-3xl">
            △
          </div>
          <div className="w-20 h-20 flex justify-center items-center bg-gray-800 rounded shadow-inner text-3xl">
            ◯
          </div>
          <div className="w-20 h-20 flex justify-center items-center bg-gray-800 rounded shadow-inner text-3xl">
            □
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
