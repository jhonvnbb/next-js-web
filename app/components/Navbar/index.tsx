"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen(false);
  };

  const toggleDropdown: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-6">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-white text-lg font-bold">
          <Link href="/">HIMAKOM</Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link
            href="/about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Lomba
            </button>

            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Link
                    href="/lomba1"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    LCT
                  </Link>
                  <Link
                    href="/lomba2"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    CPC
                  </Link>
                  <Link
                    href="/lomba3"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Futsal
                  </Link>
                  <Link
                    href="/lomba4"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Mobile Legend
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link
            href="/pengumuman-lomba"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Pengumuman Lomba
          </Link>
          <Link
            href="/login"
            className="mt-4 lg:mt-0 text-white font-bold bg-blue-900 p-2 hover:bg-blue-700 border rounded"
          >
            Login
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-95 flex flex-col justify-center items-center space-y-6">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <FaTimes />
          </button>
          <Link href="/about" className="text-white text-lg font-medium" onClick={toggleMenu}>
            About
          </Link>
          <div className="relative">
            <button onClick={toggleDropdown} className="text-white text-lg font-medium">
              Lomba
            </button>

            {isDropdownOpen && (
              <div className="mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Link
                    href="/lomba1"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    LCT
                  </Link>
                  <Link
                    href="/lomba2"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    CPC
                  </Link>
                  <Link
                    href="/lomba3"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Futsal
                  </Link>
                  <Link
                    href="/lomba4"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Mobile Legend
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/pengumuman-lomba" className="text-white text-lg font-medium" onClick={toggleMenu}>
            Pengumuman Lomba
          </Link>
          <Link
            href="/login"
            className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-lg font-bold"
            onClick={toggleMenu}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
