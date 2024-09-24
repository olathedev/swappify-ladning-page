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
                    <p className="text-sm md:text-lg">Questions? Comments? Feedback? We’d love to hear from you</p>
                </header>

                <div className="hidden md:flex flex-col gap-6 text-sm md:text-xl ">
                    <div className="flex gap-6 items-center">
                        <span>
                            <AppartmentIcon />
                        </span>
                        Swapify HQ, Laki 24/2, 12915
                        Tallinn, Estonia
                    </div>

                    <div className="flex gap-6 items-center">
                        <span>
                            <PhoneIcon />
                        </span>
                        +372 5362 2081
                    </div>

                    <div className="flex gap-6 items-center">
                        <span>
                            <MailIcon />
                        </span>
                        support@swapify.ee
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

                    <button className="bg-[#50644C] py-3 px-6 rounded-xl text-white flex justify-center items-center gap-3 md:text-lg">Send message
                        <ArrowRight />
                    </button>
                </form>

                <div className="md:hidden flex flex-col gap-4 mt-8 text-sm md:text-xl">
                    <div className="flex gap-2 items-center">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 24V5.33333H5.33333V0H18.6667V10.6667H24V24H13.3333V18.6667H10.6667V24H0ZM2.66667 21.3333H5.33333V18.6667H2.66667V21.3333ZM2.66667 16H5.33333V13.3333H2.66667V16ZM2.66667 10.6667H5.33333V8H2.66667V10.6667ZM8 16H10.6667V13.3333H8V16ZM8 10.6667H10.6667V8H8V10.6667ZM8 5.33333H10.6667V2.66667H8V5.33333ZM13.3333 16H16V13.3333H13.3333V16ZM13.3333 10.6667H16V8H13.3333V10.6667ZM13.3333 5.33333H16V2.66667H13.3333V5.33333ZM18.6667 21.3333H21.3333V18.6667H18.6667V21.3333ZM18.6667 16H21.3333V13.3333H18.6667V16Z" fill="#5F5F53" />
                            </svg>

                        </span>
                        Swapify HQ, Laki 24/2, 12915
                        Tallinn, Estonia
                    </div>

                    <div className="flex gap-2 items-center">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.6 24C19.8222 24 17.0778 23.3944 14.3667 22.1833C11.6556 20.9722 9.18889 19.2556 6.96667 17.0333C4.74444 14.8111 3.02778 12.3444 1.81667 9.63333C0.605556 6.92222 0 4.17778 0 1.4C0 1 0.133333 0.666667 0.4 0.4C0.666667 0.133333 1 0 1.4 0H6.8C7.11111 0 7.38889 0.105556 7.63333 0.316667C7.87778 0.527778 8.02222 0.777778 8.06667 1.06667L8.93333 5.73333C8.97778 6.08889 8.96667 6.38889 8.9 6.63333C8.83333 6.87778 8.71111 7.08889 8.53333 7.26667L5.3 10.5333C5.74444 11.3556 6.27222 12.15 6.88333 12.9167C7.49444 13.6833 8.16667 14.4222 8.9 15.1333C9.58889 15.8222 10.3111 16.4611 11.0667 17.05C11.8222 17.6389 12.6222 18.1778 13.4667 18.6667L16.6 15.5333C16.8 15.3333 17.0611 15.1833 17.3833 15.0833C17.7056 14.9833 18.0222 14.9556 18.3333 15L22.9333 15.9333C23.2444 16.0222 23.5 16.1833 23.7 16.4167C23.9 16.65 24 16.9111 24 17.2V22.6C24 23 23.8667 23.3333 23.6 23.6C23.3333 23.8667 23 24 22.6 24ZM4.03333 8L6.23333 5.8L5.66667 2.66667H2.7C2.81111 3.57778 2.96667 4.47778 3.16667 5.36667C3.36667 6.25556 3.65556 7.13333 4.03333 8ZM15.9667 19.9333C16.8333 20.3111 17.7167 20.6111 18.6167 20.8333C19.5167 21.0556 20.4222 21.2 21.3333 21.2667V18.3333L18.2 17.7L15.9667 19.9333Z" fill="#5F5F53" />
                            </svg>

                        </span>
                        +372 5362 2081
                    </div>

                    <div className="flex gap-2 items-center">
                        <span>
                            <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.33317 21.6667C2.59984 21.6667 1.97206 21.4056 1.44984 20.8834C0.927615 20.3612 0.666504 19.7334 0.666504 19V3.00004C0.666504 2.26671 0.927615 1.63893 1.44984 1.11671C1.97206 0.594485 2.59984 0.333374 3.33317 0.333374H24.6665C25.3998 0.333374 26.0276 0.594485 26.5498 1.11671C27.0721 1.63893 27.3332 2.26671 27.3332 3.00004V19C27.3332 19.7334 27.0721 20.3612 26.5498 20.8834C26.0276 21.4056 25.3998 21.6667 24.6665 21.6667H3.33317ZM13.9998 12.3334L3.33317 5.66671V19H24.6665V5.66671L13.9998 12.3334ZM13.9998 9.66671L24.6665 3.00004H3.33317L13.9998 9.66671ZM3.33317 5.66671V3.00004V19V5.66671Z" fill="#5F5F53" />
                            </svg>

                        </span>
                        support@swapify.com
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch