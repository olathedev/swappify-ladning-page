'use client'
import React from 'react'
import ArrowRight from "@/components/common/icons/ArrowRight";
import ExcahngeIcon from "@/components/common/icons/ExcahngeIcon";
import FactCheckIcon from "@/components/common/icons/FactCheckIcon";
import OrbitIcon from "@/components/common/icons/OrbitIcon";
import SuccessfulTrades from "@/components/common/icons/SuccessfulTrades";
import FactCheckIconSm from './common/icons/FactCheckIconSm';
import OrbitIconSm from './common/icons/OrbitIconSm';
import ExchangeIconSm from './common/icons/ExchangeIconSm';
import { useModal } from '@/hooks/useModal';



const HowItWorks = () => {
  const {openModal} = useModal()

  const howitworks = [
    { title: 'Register and List Items', description: 'Sign up on Swapify and list your items. Choose the categories youre interested in exchanging for or mark them for donation.', desktopIcon: <FactCheckIcon />, mobileIcon: <FactCheckIconSm /> },

    { title: 'Smart Matching', description: 'Our algorithm matches you with users who have items youre interested in. Expand your search area for more options.', desktopIcon: <OrbitIcon />, mobileIcon: <OrbitIconSm /> },

    { title: 'Exchange, Donate, and Connect', description: 'Connect with other users to arrange exchanges or donations. Use our video call feature for added security.', desktopIcon: <ExcahngeIcon />, mobileIcon: <ExchangeIconSm /> },

    { title: 'Successful Trades and Donations', description: 'Track your successful trades and donations, and build your verified profile.', desktopIcon: <SuccessfulTrades />, mobileIcon: <FactCheckIconSm /> },
  ]
  return (
    <div className="mt-10 md:mt-20 mb-10 md:mb-36 container mx-auto px-6 md:px-20 flex flex-col md:flex-row gap-4 md:gap-32">
      <div className="md:w-[40%] flex flex-col gap-16 ">
        <div className='text-center md:text-start'>
          <h2 className="text-xl md:text-3xl font-bold">Here’s how it works:</h2>
          <p className="text-sm md:text-xl">Join the Swapify community in 4 easy steps</p>
        </div>

        <button className="hidden md:flex bg-[#50644C] py-3 px-6 rounded-xl text-white  justify-center items-center gap-3 text-lg" onClick={openModal}>Start swapping
          <ArrowRight />
        </button>
      </div>
      <div className="md:w-[60%]">
        <div className="flex flex-col gap-6">


          {howitworks.map((item, index) => (
            <div className="flex gap-3" key={index}>
              <span className='hidden md:flex'>{item.desktopIcon}</span>
              <span className='md:hidden'>{item.mobileIcon}</span>

              <div className="flex  flex-col gap-2">
                <p className="text-sm md:text-xl font-medium"><span className="font-semibold">Step {index + 1}: {item.title}</span> </p>
                <p className="md:text-lg text-sm"> {item.description} </p>
              </div>
            </div>
          ))}

          <button className="md:hidden flex bg-[#50644C] py-2 px-6 rounded-xl text-white  justify-center items-center gap-3">Start swapping
            <ArrowRight />
          </button>

        </div>
      </div>

    </div>
  )
}

export default HowItWorks