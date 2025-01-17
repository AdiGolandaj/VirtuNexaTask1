import React from 'react'
import { useState } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div><nav className="fixed w-full z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#home" className="text-3xl font-bold text-l4">
            Y-HOP
          </a>
        </div>

        {/* Links */}
        <div className="hidden md:flex md:justify-end md:w-svw space-x-24 pr-7">
          <a href="#home" className="text-l4 hover:text-gray-900 font-extrabold tracking-widest">
            HOME
          </a>
          <a href="#contactus" className="text-l4 hover:text-gray-900 font-extrabold tracking-widest">
            CONTACT US
          </a>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-l1 hover:text-l1 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden">
        <a
          href="#home"
          className="block text-l1 hover:text-gray-900 px-4 py-2"
        >
          HOME
        </a>
        <a
          href="#contactus"
          className="block text-l1 hover:text-gray-900 px-4 py-2"
        >
          CONTACT US
        </a>
      </div>
    )}
  </nav></div>
  )
}

export default Nav