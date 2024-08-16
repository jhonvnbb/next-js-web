'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-white text-lg font-bold">
          <Link href="/">HIMAKOM</Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={`flex-col lg:flex-row lg:flex lg:items-center ${isOpen ? 'flex' : 'hidden'} lg:space-x-4`}>
          <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            About
          </Link>
          <Link href="/lomba" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Lomba
          </Link>
          <Link href="/pengumuman-lomba" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Pengumuman Lomba
          </Link>
          <Link href="/login" className="mt-4 lg:mt-0 text-white font-bold bg-blue-900 p-2 hover:bg-blue-700 border rounded">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
