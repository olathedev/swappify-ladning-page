import React from 'react'
import ArrowRight from './common/icons/ArrowRight'
import MailIcon from './common/icons/MailIcon'
import PhoneIcon from './common/icons/PhoneIcon'
import AppartmentIcon from './common/icons/AppartmentIcon'



const GetInTouch = () => {
    return (
        <section className="container mx-auto px-6 md:px-20 py-10 flex flex-col md:flex-row gap-6 md:gap-24">
            <div className="md:w-1/2 flex flex-col md:gap-16">
                <header>
                    <h1 className="text-xl md:text-3xl font-bold mb-2">Get in touch</h1>
                    <p className="text-sm md:text-2xl">Questions? Comments? Feedback? We’d love to hear from you</p>
                </header>

                <div className="hidden md:flex flex-col gap-6 text-sm md:text-xl">
                    <div className="flex gap-6 items-center">
                        <span>
                            <AppartmentIcon />
                        </span>
                        Swapify HQ, Tallinn, Estonia
                    </div>

                    <div className="flex gap-6 items-center">
                        <span>
                            <PhoneIcon />
                        </span>
                        +372 123 4567
                    </div>

                    <div className="flex gap-6 items-center">
                        <span>
                            <MailIcon />
                        </span>
                        support@swapify.com
                    </div>
                </div>
            </div>
            <div className="md:w-1/2">

                <form action="" className="w-full flex flex-col gap-4">
                    <div className="w-full">
                        <label className="md:text-lg text-[#181D17]">Name</label>
                        <input type="text" className="w-full p-2.5 rounded-lg border border-[#5F5F53]" placeholder="Enter your name" />
                    </div>

                    <div className="w-full">
                        <label className="md:text-lg text-[#181D17]">Email</label>
                        <input type="text" className="w-full p-2.5 rounded-lg border border-[#5F5F53]" placeholder="Enter your email address" />
                    </div>

                    <div className="w-full">
                        <label className="md:text-lg text-[#181D17]">Phone Number</label>
                        <input type="text" className="w-full p-2.5 rounded-lg border border-[#5F5F53]" placeholder="Enter your Phone number" />
                    </div>

                    <div className="w-full flex flex-col">
                        <label className="md:text-lg text-[#181D17]">Message</label>
                        <textarea name="" id="" placeholder="Enter your message" className="h-[139px] border border-[#5F5F53] rounded-lg p-3 py-3"></textarea>

                    </div>

                    <button className="bg-[#50644C] py-3 px-6 rounded-xl text-white flex justify-center items-center gap-3 text-lg">Send message
                        <ArrowRight />
                    </button>
                </form>

                <div className="md:hidden flex-col gap-6 text-sm md:text-xl">
                    <div className="flex gap-6 items-center">
                        <span>
                            {/* <AppartmentIcon /> */}
                        </span>
                        Swapify HQ, Tallinn, Estonia
                    </div>

                    <div className="flex gap-6 items-center">
                        <span>
                            {/* <PhoneIcon /> */}
                        </span>
                        +372 123 4567
                    </div>

                    <div className="flex gap-6 items-center">
                        <span>
                            {/* <MailIcon /> */}
                        </span>
                        support@swapify.com 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch