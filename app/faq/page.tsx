import Footer from '@/components/common/Footer'
import NavBar from '@/components/common/NavBar'
import React from 'react'

type Props = {}

const Faq = (props: Props) => {
    const faqs = [
        { title: 'What is Swapify all about?', description: '' },
        { title: 'What is Swapify all about?', description: '' },
        { title: 'How does Swapify match users?', description: '' },
        { title: 'How does Swapify match users?', description: '' },
        { title: 'Is Swapify only for barter?', description: '' },
        { title: 'Is Swapify only for barter?', description: '' },
        { title: 'How can I select items that have been listed for donations?', description: '' },
        { title: 'How can I select items that have been listed for donations?', description: '' }

    ]
    return (
        <div className='w-full bg-about-bg bg-cover bg-center'>
            <div className="bg-white bg-opacity-80">
                <NavBar />
                <hr />

                <div className='container mx-auto px-10 py-20 flex justify-center'>
                    <div className='w-[920px]'>

                        <h1 className='text-3xl font-bold py-4'>Frequently Asked Questions</h1>

                        <div className="flex flex-col gap-6 pt-10">
                            {faqs.map((faq, index) => (
                                <div className="flex justify-between" key={index}>
                                    <p className='font-medium text-[#181D17]'>{faq.title}</p>
                                    <span>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="#181D17" />
                                        </svg>
                                    </span>

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