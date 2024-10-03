import Footer from '@/components/common/Footer'
import NavBar from '@/components/common/NavBar'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='w-full bg-news-bg bg-cover bg-center'>
            <div className="bg-white bg-opacity-80">
                <NavBar />
                <hr />
                <div className='container mx-auto px-6 md:px-10 py-20 h-screen flex flex-col space-y-10'>
                    <header>
                        <h1 className='text-3xl font-bold mb-2'>Whats New at Swapify</h1>
                        <p className='text-xl text-[#181D17]'>Stay updated on our latest developments</p>
                    </header>

                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-[794px] flex flex-col">
                            <h4  className='font-semibold text-[#181D17] text-lg'>Swapify at the African Business Summit in Estonia
                            </h4>
                            <p className='my-2'>Swapify recently attended the African Business Summit held by the Ministry of Foreign Affairs in Estonia. This prestigious event, which aims to foster economic collaboration and strengthen business ties between Estonia and Africa, provided an excellent platform for us to explore new opportunities and forge meaningful connections...</p>

                            <Link href='/news/swapify-at-african-business-summit' className="inline-flex items-center gap-2 text-primary my-2">
                                <span className=''>Read More</span>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z" fill="#5F5F53" />
                                </svg>
                            </Link>

                            <p className='font-medium text-sm'>Published: <span className='font-normal'>2w ago</span></p>
                        </div>

                        <div className="md:w-[296px]]">
                            <img src="/newsImg.png" className='h-full w-full rounded-2xl' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page