'use client'
import React from 'react'
import ArrowRight from '../common/icons/ArrowRight'
import { useModal } from '@/hooks/useModal'

const Notification = () => {
    const {openModal} = useModal()
    return (
        <div className="h-[62px] flex gap-3 items-center text-white text-xs md:text-sm px-6 font-semibold justify-center bg-custom-gradient">
            Swapify is coming soon! Stay tuned and get ready for amazing things.  <span className=" underline cursor-pointer" onClick={openModal}>Notify me</span>
            <ArrowRight />
        </div>
    )
}

export default Notification