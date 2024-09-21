import React from 'react'
import ArrowRight from '../common/icons/ArrowRight'

const Notification = () => {
    return (
        <div className="h-[62px] flex gap-3 items-center text-white text-xs px-6 font-semibold justify-center bg-custom-gradient">
            Swapify is coming soon! Stay tuned and get ready for amazing things.  <span className=" underline cursor-pointer">Notify me</span>
            <ArrowRight />
        </div>
    )
}

export default Notification