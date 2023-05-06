import React from 'react'
import Image from 'next/image'
import logo from '../public/pinnacle-tech-website-favicon-color.png'
function Navbar() {
    return (
        <nav class="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">

                    {/* <!-- Logo --> */}
                    <div class="flex items-center">
                        <div class="pl-4">
                            <Image src={logo} alt="logo" class="h-12 w-12" />
                        </div>
                        <span class="ml-2 text-lg font-bold text-white">Pinnacle Tech</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1 flex items-center justify-end sm:items-stretch sm:justify-start">
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Design</a>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Hamburger Menu (for small screens) --> */}
                    <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            {/* <!-- Icon when menu is closed. -->
                <!--
                  Heroicon name: menu
      
                  Menu open: "hidden", Menu closed: "block"
                --> */}
                            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* <!-- Icon when menu is open. -->
                <!--
                  Heroicon name: x
      
                  Menu open: "block", Menu closed: "hidden"
                --> */}
                            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div >

            {/* <!-- Mobile Menu (hidden by default) --> */}
            < div class="sm:hidden" id="mobile-menu" >
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                    <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Design</a>

                </div>
            </div >

        </nav >
    )
}

export default Navbar