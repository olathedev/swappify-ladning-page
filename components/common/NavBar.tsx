import React from 'react'
import ChevronDownIcon from './icons/ChevronDownIcon'

type Props = {}

const NavBar = (props: Props) => {
    return (
        <nav className="container text mx-auto h-[80px] flex items-center justify-between px-10">
            <div>Logo</div>

            <ul className="flex w-[468px] justify-between text-[#50644C]">
                <li>About Us</li>
                <li>FAQs</li>
                <li>News</li>
                <li>Contact Us</li>
            </ul>

            <div className="bg-[#E3E3DE] py-2 px-4 rounded-lg text-[#50644C] text-base flex gap-2 items-center">
                Get Swappify
                <ChevronDownIcon />
            </div>
        </nav>
    )
}

export default NavBar