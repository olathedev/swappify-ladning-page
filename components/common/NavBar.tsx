'use client';
import React, { useState } from 'react'
import ChevronDownIcon from './icons/ChevronDownIcon'
import Link from 'next/link'
import { InfoIcon } from 'lucide-react';
import FaqIcon from './icons/FaqIcon';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useModal } from '@/hooks/useModal';
import { motion } from 'framer-motion'; // Import Framer Motion

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { openModal } = useModal()
    const pathname = usePathname()
    console.log(pathname)
    const navItems = [
        { page: 'About Us', path: '/about' },
        { page: 'FAQs', path: '/faq' },
        { page: 'News', path: '/news' },
        { page: 'Contact Us', path: '/contact' }
    ]

    return (
        <nav className="container bg-white md:bg-transparent text-lg mx-auto h-16 md:h-20 md:py-4 px-6 md:px-10">
            {/* Desktop Nav */}
            <div className="hidden w-full h-full md:flex items-center justify-between">
                <Link href='/' className='cursor-pointer'>
                    <Image src='/logo.svg' alt='' width={75} height={75} />
                </Link>

                <ul className="cursor-pointer flex w-[468px] justify-between text-primary">
                    {navItems.map((item, index) => (

                        <li key={index} className={`${pathname === item.path && 'font-bold text-black'}`}>
                            <Link href={item.path}>{item.page}</Link>
                        </li>

                    ))}
                </ul>

                <div className="bg-[#f8f8e5] py-2 px-6 rounded-lg text-[#50644C] text-base flex gap-2 items-center " onClick={openModal}>
                    Get Swappify
                    <ChevronDownIcon />
                </div>
            </div>

            {/* mobile nav */}
            <div className="flex w-full h-full items-center justify-between text-base py-4 md:hidden">
                <Link href='/' className='cursor-pointer'>
                    <Image src='/logo.svg' alt='' width={60} height={60} />
                </Link>

                <div onClick={() => setIsOpen(!isOpen)}>
                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12.5V10.5H18V12.5H0ZM0 7.5V5.5H18V7.5H0ZM0 2.5V0.5H18V2.5H0Z" fill="#50644C" />
                    </svg>
                </div>
            </div>

            {/* Mobile Sidenav */}
            {isOpen && (
                <motion.div
                    className="fixed inset-y-0 right-0 w-[75%] bg-white z-50 md:hidden" // Position on the right
                    initial={{ x: '100%' }} // Start off-screen to the right
                    animate={{ x: 0 }} // Animate to on-screen
                    exit={{ x: '100%' }} // Animate off-screen to the right when closed
                    transition={{ type: 'tween', duration: 0.3 }} // Smooth transition
                >
                    <div className="flex flex-col h-full p-6">
                        <div className="flex justify-end">
                            <button onClick={() => setIsOpen(false)}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#1C1B1F" />
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col space-y-6 mt-8 text-primary">
                            <li><Link href='/about' className='flex items-center gap-2'>
                                <InfoIcon />
                                About Us</Link></li>
                            <li><Link href='/faq' className='flex items-center gap-2'>
                                <FaqIcon />
                                FAQs</Link></li>
                            <li><Link href='/contact' className='flex items-center gap-2'>
                                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 20L8.75 17H8.5C6.13333 17 4.125 16.175 2.475 14.525C0.825 12.875 0 10.8667 0 8.5C0 6.13333 0.825 4.125 2.475 2.475C4.125 0.825 6.13333 0 8.5 0C9.68333 0 10.7875 0.220833 11.8125 0.6625C12.8375 1.10417 13.7375 1.7125 14.5125 2.4875C15.2875 3.2625 15.8958 4.1625 16.3375 5.1875C16.7792 6.2125 17 7.31667 17 8.5C17 9.75 16.7958 10.95 16.3875 12.1C15.9792 13.25 15.4208 14.3167 14.7125 15.3C14.0042 16.2833 13.1625 17.175 12.1875 17.975C11.2125 18.775 10.15 19.45 9 20ZM11 16.35C12.1833 15.35 13.1458 14.1792 13.8875 12.8375C14.6292 11.4958 15 10.05 15 8.5C15 6.68333 14.3708 5.14583 13.1125 3.8875C11.8542 2.62917 10.3167 2 8.5 2C6.68333 2 5.14583 2.62917 3.8875 3.8875C2.62917 5.14583 2 6.68333 2 8.5C2 10.3167 2.62917 11.8542 3.8875 13.1125C5.14583 14.3708 6.68333 15 8.5 15H11V16.35ZM8.475 13.975C8.75833 13.975 9 13.875 9.2 13.675C9.4 13.475 9.5 13.2333 9.5 12.95C9.5 12.6667 9.4 12.425 9.2 12.225C9 12.025 8.75833 11.925 8.475 11.925C8.19167 11.925 7.95 12.025 7.75 12.225C7.55 12.425 7.45 12.6667 7.45 12.95C7.45 13.2333 7.55 13.475 7.75 13.675C7.95 13.875 8.19167 13.975 8.475 13.975ZM7.75 10.8H9.25C9.25 10.3 9.3 9.95 9.4 9.75C9.5 9.55 9.81667 9.18333 10.35 8.65C10.65 8.35 10.9 8.025 11.1 7.675C11.3 7.325 11.4 6.95 11.4 6.55C11.4 5.7 11.1125 5.0625 10.5375 4.6375C9.9625 4.2125 9.28333 4 8.5 4C7.76667 4 7.15 4.20417 6.65 4.6125C6.15 5.02083 5.8 5.51667 5.6 6.1L7 6.65C7.08333 6.36667 7.24167 6.0875 7.475 5.8125C7.70833 5.5375 8.05 5.4 8.5 5.4C8.95 5.4 9.2875 5.525 9.5125 5.775C9.7375 6.025 9.85 6.3 9.85 6.6C9.85 6.88333 9.76667 7.1375 9.6 7.3625C9.43333 7.5875 9.23333 7.81667 9 8.05C8.41667 8.55 8.0625 8.94583 7.9375 9.2375C7.8125 9.52917 7.75 10.05 7.75 10.8Z" fill="#5F5F53" />
                                </svg>

                                Contact Us</Link></li>
                        </ul>
                        <div className="mt-10">
                            <button className="bg-[#E3E3DE] py-2 px-6 rounded-lg text-[#50644C] text-base flex gap-2 items-center" onClick={openModal}>
                                Get Swappify
                                <ChevronDownIcon />
                            </button>
                        </div>

                        <div className="mt-auto flex flex-col gap-6 text-primary">
                            <Link href='/about' className='flex items-center gap-2'>
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18V16H17V8.9C17 6.95 16.3208 5.29583 14.9625 3.9375C13.6042 2.57917 11.95 1.9 10 1.9C8.05 1.9 6.39583 2.57917 5.0375 3.9375C3.67917 5.29583 3 6.95 3 8.9V15H2C1.45 15 0.979167 14.8042 0.5875 14.4125C0.195833 14.0208 0 13.55 0 13V11C0 10.65 0.0875 10.3208 0.2625 10.0125C0.4375 9.70417 0.683333 9.45833 1 9.275L1.075 7.95C1.20833 6.81667 1.5375 5.76667 2.0625 4.8C2.5875 3.83333 3.24583 2.99167 4.0375 2.275C4.82917 1.55833 5.7375 1 6.7625 0.6C7.7875 0.2 8.86667 0 10 0C11.1333 0 12.2083 0.2 13.225 0.6C14.2417 1 15.15 1.55417 15.95 2.2625C16.75 2.97083 17.4083 3.80833 17.925 4.775C18.4417 5.74167 18.775 6.79167 18.925 7.925L19 9.225C19.3167 9.375 19.5625 9.6 19.7375 9.9C19.9125 10.2 20 10.5167 20 10.85V13.15C20 13.4833 19.9125 13.8 19.7375 14.1C19.5625 14.4 19.3167 14.625 19 14.775V16C19 16.55 18.8042 17.0208 18.4125 17.4125C18.0208 17.8042 17.55 18 17 18H9ZM7 11C6.71667 11 6.47917 10.9042 6.2875 10.7125C6.09583 10.5208 6 10.2833 6 10C6 9.71667 6.09583 9.47917 6.2875 9.2875C6.47917 9.09583 6.71667 9 7 9C7.28333 9 7.52083 9.09583 7.7125 9.2875C7.90417 9.47917 8 9.71667 8 10C8 10.2833 7.90417 10.5208 7.7125 10.7125C7.52083 10.9042 7.28333 11 7 11ZM13 11C12.7167 11 12.4792 10.9042 12.2875 10.7125C12.0958 10.5208 12 10.2833 12 10C12 9.71667 12.0958 9.47917 12.2875 9.2875C12.4792 9.09583 12.7167 9 13 9C13.2833 9 13.5208 9.09583 13.7125 9.2875C13.9042 9.47917 14 9.71667 14 10C14 10.2833 13.9042 10.5208 13.7125 10.7125C13.5208 10.9042 13.2833 11 13 11ZM4.025 9.45C3.90833 7.68333 4.44167 6.16667 5.625 4.9C6.80833 3.63333 8.28333 3 10.05 3C11.5333 3 12.8375 3.47083 13.9625 4.4125C15.0875 5.35417 15.7667 6.55833 16 8.025C14.4833 8.00833 13.0875 7.6 11.8125 6.8C10.5375 6 9.55833 4.91667 8.875 3.55C8.60833 4.88333 8.04583 6.07083 7.1875 7.1125C6.32917 8.15417 5.275 8.93333 4.025 9.45Z" fill="#5F5F53" />
                                </svg>

                                Help and Support</Link>
                            <Link href='/about' className='flex items-center gap-2'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0002 17.0002C12.2835 17.0002 12.521 16.9044 12.7127 16.7127C12.9044 16.521 13.0002 16.2835 13.0002 16.0002C13.0002 15.7169 12.9044 15.4794 12.7127 15.2877C12.521 15.096 12.2835 15.0002 12.0002 15.0002C11.7169 15.0002 11.4794 15.096 11.2877 15.2877C11.096 15.4794 11.0002 15.7169 11.0002 16.0002C11.0002 16.2835 11.096 16.521 11.2877 16.7127C11.4794 16.9044 11.7169 17.0002 12.0002 17.0002ZM11.0002 13.0002H13.0002V7.0002H11.0002V13.0002ZM12.0002 23.3002L8.6502 20.0002H4.0002V15.3502L0.700195 12.0002L4.0002 8.6502V4.0002H8.6502L12.0002 0.700195L15.3502 4.0002H20.0002V8.6502L23.3002 12.0002L20.0002 15.3502V20.0002H15.3502L12.0002 23.3002ZM12.0002 20.5002L14.5002 18.0002H18.0002V14.5002L20.5002 12.0002L18.0002 9.5002V6.0002H14.5002L12.0002 3.5002L9.5002 6.0002H6.0002V9.5002L3.5002 12.0002L6.0002 14.5002V18.0002H9.5002L12.0002 20.5002Z" fill="#5F5F53" />
                                </svg>


                                Report a problem</Link>
                        </div>




                    </div>
                </motion.div>
            )}
        </nav>
    )
}

export default NavBar