import Footer from '@/components/common/Footer'
import NavBar from '@/components/common/NavBar'
import Image from 'next/image'
import React from 'react'

type Props = {}

function About({ }: Props) {
    return (
        <div className='w-full bg-about-bg bg-center bg-cover'>
            <div className="w-full h-full bg-white bg-opacity-80">
                <NavBar />
                <hr className="border border-white w-full" />
                <div className='container mx-auto px-10 py-10'>
                    <h1 className='text-3xl font-bold text-center py-4'>About Swapify</h1>

                    <div className="flex flex-col md:flex-row gap-10 py-10">
                        <div className="md:w-2/3 flex flex-col gap-8">
                            <div>
                                <h3 className='font-semibold text-lg'>Who We Are</h3>
                                <p>Swapify is a pioneering online platform designed to revolutionize the way people exchange goods and services, with a strong focus on promoting sustainability, reducing waste, and fostering a sense of community.
                                    Founded in 2024 and based in Tallinn, Estonia, Swapify aims to create a seamless
                                    and secure environment for bartering, making it easier than ever for users to trade items and
                                    services without the need for cash. In addition, Swapify also aims to strengthen communities by encouraging donations </p>
                            </div>

                            <div>
                                <h3 className='font-semibold text-lg'>Our Mission</h3>
                                <p>Swapify is a pioneering online platform designed to revolutionize the way people exchange goods and services, with a strong focus on promoting sustainability, reducing waste, and fostering a sense of community.
                                    Founded in 2024 and based in Tallinn, Estonia, Swapify aims to create a seamless
                                    and secure environment for bartering, making it easier than ever for users to trade items and
                                    services without the need for cash. In addition, Swapify also aims to  </p>
                            </div>

                            <div>
                                <h3 className='font-semibold text-lg'>Our Vision</h3>
                                <p>We envision a world where unused resources are constantly repurposed, reducing environmental impact and creating value for everyone.</p>
                            </div>
                        </div>

                        <div className="md:w-1/3">
                            <Image src='/aboutImage.png' alt='' height={491} width={428} />
                        </div>

                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default About