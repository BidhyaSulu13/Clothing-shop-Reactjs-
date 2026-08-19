import React from 'react'
import {useState} from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaBars,
    FaTimes,

} from 'react-icons/fa'

export default function Navbar() {
    const[open, setOpen]= useState(false)
  return (
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                {/*logo */}
                <div className="text-2xl font-bold text-blue-600">
                    MyShop
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                    <li>
                        <a href="#home" className="hover:text-blue-600">Home</a>
                    </li>
                     <li>
                        <a href="#products" className="hover:text-blue-600">Products</a>
                    </li>
                     <li>
                        <a href="#contact" className="hover:text-blue-600">Contact</a>
                    </li>
                </ul>

                {/* social icons */}
                <div className="hidden md:flex items-center gap-3 text-gray-600">
                    <a href="#" className="p-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition"><FaFacebookF />
                    </a>

                    <a href="#" className="p-2 rounded-full hover:bg-pink-50 hover:text-text-600 transition"><FaInstagram />
                    </a>

                    <a href="#" className="p-2 rounded-full hover:bg-sky-50 hover:text-sky-600 transition"><FaTwitter />
                    </a>

                    <a href="#" className="p-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition"><FaLinkedinIn />
                    </a>
                </div>

                {/* mbl button */}
                <button className="md:hidden text-2xl text-gray-700"
                onClick={()=>setOpen(!open)}>
              {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div>

        {/*mobile menu */}
        {open && (
            <div className="md:hidden bg-white border-t">
                <ul className="flex flex-col items-center gap-5 py-5 font-medium text-gray-700">
                    <li>
                        <a href="#home" onClick={()=>setOpen(false)}>Home</a>
                    </li>
                     <li>
                        <a href="#products" onClick={()=>setOpen(false)}>Home</a>
                    </li>
                     <li>
                        <a href="#contact" onClick={()=>setOpen(false)}>Home</a>
                    </li>
                </ul>
                <div className="flex justify-center gap-4 pb-5 text-gray-600">
                    <FaFacebookF />
                     <FaInstagram /> 
                     <FaTwitter />
                      <FaLinkedinIn />
                </div>
            </div>
        )}
      </nav>
    
  );
}