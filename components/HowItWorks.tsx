import React from 'react'
import ArrowRight from "@/components/common/icons/ArrowRight";
import ExcahngeIcon from "@/components/common/icons/ExcahngeIcon";
import FactCheckIcon from "@/components/common/icons/FactCheckIcon";
import OrbitIcon from "@/components/common/icons/OrbitIcon";
import SuccessfulTrades from "@/components/common/icons/SuccessfulTrades";

type Props = {}

const HowItWorks = (props: Props) => {
  return (
    <div className="mt-20 mb-36 container mx-auto px-20 flex gap-32">
    <div className="w-[40%] flex flex-col gap-16 ">
      <div>
        <h2 className="text-3xl font-bold">Here’s how it works:</h2>
        <p className="text-xl">Join the Swapify community in 4 easy steps</p>
      </div>

      <button className="bg-[#50644C] py-3 px-6 rounded-xl text-white flex justify-center items-center gap-3 text-lg">Start swapping
        <ArrowRight />
      </button>
    </div>
    <div className="w-[60%]">
      <div className="flex flex-col gap-6">


        
      <div className="flex gap-3">
            <span><FactCheckIcon /></span>
            <div className="flex  flex-col gap-2">
              <p className="text-xl font-medium"><span className="font-semibold">Step 1:</span> Register and List Items</p>
              <p className="text-lg">Connect with other users to arrange exchanges or donations. Use our video call feature for added security.</p>
            </div>
        </div>

        <div className="flex gap-3">
            <span><OrbitIcon /></span>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-medium"><span className="font-semibold">Step 2:</span> Smart Matching</p>
              <p className="text-lg">Our algorithm matches you with users who have items you're interested in. Expand your search area for more options.</p>
            </div>
        </div>

        <div className="flex gap-3">
            <span><ExcahngeIcon /></span>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-medium"><span className="font-semibold">Step 3:</span> Exchange, Donate, and Connect</p>
              <p className="text-lg">Connect with other users to arrange exchanges or donations. Use our video call feature for added security.</p>
            </div>
        </div>

        <div className="flex gap-3">
            <span><SuccessfulTrades /></span>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-medium"><span className="font-semibold">Step 4:</span> Successful Trades and Donations</p>
              <p className="text-lg">Track your successful trades and donations, and build your verified profile.</p>
            </div>
        </div>

      </div>
    </div>

  </div>
  )
}

export default HowItWorks