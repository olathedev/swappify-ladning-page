import React from 'react'
import ArrowRight from '../common/icons/ArrowRight'

type Props = {}

const Notification = (props: Props) => {
    return (
        <div className="h-[62px] flex gap-3 items-center text-white text-sm md:text-lg font-semibold justify-center bg-custom-gradient px-1">
            Swapify is coming soon! Stay tuned and get ready for amazing things.  <span className="underline cursor-pointer">Notify me</span>
            <ArrowRight />
        </div>
    )
}

export default Notification