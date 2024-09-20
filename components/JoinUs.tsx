import { Check } from 'lucide-react'
import React from 'react'
import ArrowRight from './common/icons/ArrowRight'



const JoinUs = () => {
    return (
        <section className="w-full bg-[#181D17] my-6">
            <div className="container mx-auto px-4 md:px-20 py-16 flex flex-col gap-16 text-white">
                <header className="md:text-center flex flex-col md:items-center">
                    <h1 className="text-2xl md:text-3xl mb-1 font-medium">Swapify is more than just swapping...</h1>
                    <p className="md:text-xl">...it is a community of people dedicated to promoting sustainability through smart exchanges and donations</p>
                </header>

                <div className="flex flex-col-reverse md:flex-row gap-6 items-center">
                    <div className="md:w-[55%] flex flex-col gap-10">
                        <h2 className="text-2xl font-medium">Why you should join us</h2>

                        <ul className="flex flex-col gap-6">
                            <li className="flex gap-1 items-center">
                                <Check size={20} /> Reduce waste: Contribute to a circular economy by reusing items.
                            </li>
                            <li className="flex gap-1 items-center">
                                <Check size={20} /> Make a difference: Donate to worthy causes and support those in need..
                            </li>
                            <li className="flex gap-1 items-center">
                                <Check size={20} /> Support your community: Connect with local people and businesses.
                            </li>
                            <li className="flex gap-1 items-center">
                                <Check size={20} /> Convenience: Easily find items to swap or donate near you..
                            </li>
                            <li className="flex gap-1 items-center">
                                <Check size={20} /> Save money: Enjoy the benefits of bartering without spending a dime.
                            </li>
                        </ul>

                        <button className="bg-white py-3 text-black flex justify-center items-center gap-10 rounded-xl text-lg font-medium">Join our community <ArrowRight /> </button>
                    </div>

                    <div className="md:w-[45%]">
                        {/* <Image src='/happypeople.png' alt="" height={510} width={455} /> */}
                        <img src="/happypeople.png" alt=""  className='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinUs