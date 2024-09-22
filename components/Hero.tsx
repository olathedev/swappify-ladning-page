'use client'
import { useModal } from '@/hooks/useModal'
import Image from 'next/image'
import React from 'react'



const Hero = () => {
  const {openModal} = useModal()

  return (
    <div className="container mx-auto px-6 md:px-10 flex h-full items-center py-8">
    <div className="md:w-[35%] flex flex-col gap-2 md:gap-1 md:-mt-[20rem]">
        <h1 className="text-2xl md:leading-[45px] md:text-[36px] font-bold mb-1 md:mb-6">Swapify: Your Smart Barter Platform</h1>
        
        <h4 className="text-xl font-medium">Declutter, donate, or discover. </h4>
        <p className="font-normal text-lg text-primary">Sustainable living starts here.</p>
        <div className="flex gap-3 mt-6 cursor-pointer">
          <img src='/googleplay.png' alt="" className='md:w-[205px] w-[133px] h-[42px] md:h-[64px]' onClick={openModal}  />
          <img src='/appstore.png' alt="" className='md:w-[205px] w-[133px] h-[42px] md:h-[64px]' onClick={openModal}  />
        </div>
    </div>

    <div className="hidden w-full md:flex justify-start md:justify-start relative md:w-[70%] overflow-hidden h-full">
         <Image src='/splash.png' alt="" width={1000} height={750} className="absolute -left-20" />
         <Image src='/home.png' alt="" width={1000} height={750} className="absolute top-20 left-16" />
          {/* <Image src='/heroImg2.png' alt="" width={300} height={350} /> */}
    </div>
</div>
  )
}

export default Hero