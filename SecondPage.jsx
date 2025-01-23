import React from 'react';
import Navbar from '../components/Navbar';

const SecondPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-5">
      <Navbar />
      <div className="flex flex-col items-center mt-10">
        <img
          src="/public/Assets/pp.jpg"
          alt="Your Photo"
          className="w-40 h-40 rounded-full mb-5"
        />
        <p className="text-xl">Name: Sneha Jain</p>
        <p className="text-xl">Reg No: 20234161</p>
        <button
          onClick={() => window.location.href = 'https://www.instagram.com/schnozzle754/'}
          className="bg-red-600 px-5 py-2 mt-5 rounded hover:bg-red-700"
        >
          Visit My Instagram
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
