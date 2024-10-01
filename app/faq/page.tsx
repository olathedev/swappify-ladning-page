'use client'
import Footer from '@/components/common/Footer'
import NavBar from '@/components/common/NavBar'
import React, { useState } from 'react'
import { motion } from 'framer-motion';


const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = [
        { title: 'What is Swapify?', description: 'Swapify is your favourite platform for trading used goods via barter and donating unused items to individuals and organisations in need. At Swapify, we promote community, environmental conservation, and a circular economy by giving used items a second home without exchanging cash.' },
        { title: 'Who can trade on Swapify?', description: 'While everyone is welcome to create an account on Swapify, swap deals and donations are currently only open to people in Estonia. Other locations would be duly added in the future.' },
        { title: 'How do I trade on Swapify?', description: 'To trade (list an item for swap or donation), simply select the “+” button, and follow the prompt. Input the item credentials and desired conditions and expect bids from interested swappers.' },
        { title: 'Is Swapify free?', description: 'Swapify is currently free for all users. A moderate fee might be charged in the future to cover operating costs and upgrade the quality of our service.' },
        { title: 'How long does a trade take?', description: 'Trades take as long as it takes for both parties involved to agree on the item(s) listed in the deal. This could take from a few minutes to some days, but we would automatically terminate any deal after five days or 120 hours. The parties would have to initiate the deal again.' },
        { title: 'How do I apply for an item listed for donation?', description: 'To apply for an item listed for donation, simply select the “Donations” tab on the “Trade” page. Select a desired item, write your letter of intent and go ahead and send in your proposal.' },
        { title: 'Can I own multiple accounts?', description: 'We do not encourage users to own multiple accounts for any reason, as we aim to promote a transparent trade system. For a start, users would be required to verify their socials and phone numbers. In the future, we would integrate nationally recognised identity checks to limit each user to one account.' },
        { title: 'Is my data and personal information safe on Swapify?', description: 'Yes, your data is highly secured on our platform. As service providers, we only collect data for marketing purposes, and you only provide relevant data to another party you are trading with to complete your deal. '},
        { title: 'How do I report failed trades?', description: 'If a trade fails (in case you got a defective product or a product that didn’t match the advertised standard), you can report the trade and the user to us immediately with evidence to back your claims. We would look into this claim and drive a quick resolution as soon as possible..' }];

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