import React from 'react'
import Image from 'next/image'
import logo from '../public/pinnacle-tech-website-favicon-color.png'
import Link from 'next/link'
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
                                <Link href='/' passHref legacyBehavior>
                                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>

                                </Link>
                                <Link href='/about' passHref legacyBehavior>
                                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>

                                </Link>
                                <Link href='/contact' passHref legacyBehavior>
                                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>

                                </Link>
                                <Link href='/prototype' passHref legacyBehavior>
                                    <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Prototype</a>

                                </Link>
                            </div>
                        </div>
                    </div>



                    {/* <!-- Mobile Menu (hidden by default) --> */}
                    < div class="sm:hidden" id="mobile-menu" >
                        <div class="px-2 pt-2 pb-3 space-y-1">
                            <Link href='/' passHref legacyBehavior>
                                <a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                            </Link>

                            <Link href='/about' passHref legacyBehavior>
                                <a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>

                            </Link>
                            <Link href='/contact' passHref legacyBehavior>
                                <a class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>

                            </Link>
                            <Link href="/prototype" passHref legacyBehavior>
                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Prototype</a>
                            </Link>

                        </div>
                    </div >
                </div>
            </div>
        </nav >
    )
}

export default Navbar