'use client'
import Footer from '@/components/common/Footer'
import NavBar from '@/components/common/NavBar'
import React, { useState } from 'react'
import { motion } from 'framer-motion';


const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        { title: 'What is Swapify?', description: 'Swapify is a barter platform that allows you swap items with other users' },
        { title: 'Who can trade on Swapify?', description: 'Swapify is a barter platform that allows you swap items with other users' },
        { title: 'How do I trade on Swapify?', description: 'Swapify is a barter platform that allows you swap items with other users' },
        { title: 'Is Swapify free?', description: 'Swapify is a barter platform that allows you swap items with other users' },
        { title: 'How long does a trade take?', description: 'Swapify is a barter platform that allows you swap items with other users' },
        { title: 'How do I apply for an item listed for donation?', description: 'Swapify is a barter platform that allows you swap items with other users' },
        { title: 'Can I own multiple accounts?', description: 'Swapify is a barter platform that allows you swap items with other users' },
        { title: 'Is my data and personal information safe on Swapify?', description: 'Swapify is a barter platform that allows you swap items with other users '},
        { title: 'How do I report failed trades?', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='w-full bg-about-bg bg-cover h-full bg-center'>
            <div className="bg-white bg-opacity-80">
                <NavBar />
                <hr />

                <div className='container mx-auto px-6 md:px-10 py-20 flex justify-center'>
                    <div className='w-[920px]'>
                        <h1 className='text-3xl font-bold py-4'>Frequently Asked Questions</h1>
                        <div className="flex flex-col gap-6 pt-10">
                            {faqs.map((faq, index) => (
                                <div key={index}>
                                    <div className="flex justify-between cursor-pointer" onClick={() => toggleFAQ(index)}>
                                        <p className='font-medium text-[#181D17]'>{faq.title}</p>
                                        <span>
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d={openIndex === index ? "M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" : "M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z"} fill="#181D17" />
                                            </svg>
                                        </span>
                                    </div>
                                    {openIndex === index && (
                                        <motion.div className="mt-2 py-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                            <p className='text-[#181D17]'>{faq.description}</p>
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Faq