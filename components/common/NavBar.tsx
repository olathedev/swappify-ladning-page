'use client';
import React, { useState } from 'react'
import ChevronDownIcon from './icons/ChevronDownIcon'
import Link from 'next/link'
import { InfoIcon } from 'lucide-react';
import FaqIcon from './icons/FaqIcon';
import ContactUs from './icons/ContactUs';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

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

                <div onClick={() => setIsOpen(!isOpen)}>
                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12.5V10.5H18V12.5H0ZM0 7.5V5.5H18V7.5H0ZM0 2.5V0.5H18V2.5H0Z" fill="#50644C" />
                    </svg>
                </div>
            </div>

            {/* Mobile Sidenav */}
            {isOpen && (
                <div className="fixed inset-y-0 right-0 w-[75%] bg-white z-50 md:hidden">
                    <div className="flex flex-col h-full p-6">
                        <div className="flex justify-end">
                            <button onClick={() => setIsOpen(false)}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#1C1B1F" />
                                </svg>

                            </button>
                        </div>
                        <ul className="flex flex-col space-y-6 mt-8 text-primary text-lg">
                            <li><Link href='/about' className='flex items-center gap-2'>
                            <InfoIcon />
                            About Us</Link></li>
                            <li><Link href='/faq' className='flex items-center gap-2'>
                            <FaqIcon />
                            FAQs</Link></li>
                            <li><Link href='/contact' className='flex items-center gap-2'>
                            <ContactUs />
                            Contact Us</Link></li>
                        </ul>
                        <div className="mt-12">
                            <button className="bg-[#E3E3DE] py-2 px-6 rounded-lg text-[#50644C] text-base flex gap-2 items-center">
                                Get Swappify
                                <ChevronDownIcon />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavBar