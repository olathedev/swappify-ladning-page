import React from 'react'
import ChevronDownIcon from './icons/ChevronDownIcon'
import Link from 'next/link'



const NavBar = () => {
    return (
        <nav className="container bg-white md:bg-transparent text-lg mx-auto h-16 md:h-20 px-6 md:px-10">
            {/* Desktop Nav */}
            <div className="hidden w-full h-full md:flex items-center justify-between">
                <Link href='/' className='cursor-pointer'>LOGO</Link>

                <ul className="cursor-pointer flex w-[468px] justify-between text-[#50644C]">
                    <li>
                        <Link href='/about'> About Us</Link>
                    </li>
                    <li> <Link href='/faq'>FAQs</Link></li>
                    <li>News</li>
                    <li> <Link href='/contact'> Contact Us </Link></li>
                </ul>

                <div className="bg-[#E3E3DE] py-2 px-6 rounded-lg text-[#50644C] text-base flex gap-2 items-center ">
                    Get Swappify
                    <ChevronDownIcon />
                </div>
            </div>

            {/* mobile nav */}
            <div className="flex w-full h-full items-center justify-between text-base md:hidden">
                <Link href='/' className='cursor-pointer'>LOGO</Link>

                <div>
                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12.5V10.5H18V12.5H0ZM0 7.5V5.5H18V7.5H0ZM0 2.5V0.5H18V2.5H0Z" fill="#50644C" />
                    </svg>

                </div>
            </div>
        </nav>
    )
}

export default NavBar