import Image from 'next/image'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="container mx-auto px-4 md:px-10 flex h-full gap-20 items-center py-10">
    <div className="md:w-[35%] flex flex-col gap-3 md:gap-6 md:-mt-[20rem]">
        <h1 className="text-2xl md:leading-normal md:text-[36px] font-bold">Swapify: Your Smart Barter Platform</h1>
        <h4 className="text-xl font-medium">Declutter, donate, or discover. </h4>
        <p className="font-normal text-lg">Sustainable living starts here.</p>
        <div className="flex gap-3">
          <img src='/googleplay.png' alt="" className='md:w-[205px] w-[133px] h-[42px] md:h-[64px]' />
          <img src='/appstore.png' alt="" className='md:w-[205px] w-[133px] h-[42px] md:h-[64px]' />
        </div>
    </div>

    <div className="hidden w-full md:flex justify-center md:justify-start relative md:w-[65%] h-full">
         <Image src='/heroImg1.png' alt="" width={300} height={350} className="absolute top-6 left-32" />
         <Image src='/heroImg2.png' alt="" width={300} height={350} className="absolute top-[10rem] left-[25rem]" />
         <Image src='/heroImg3.png' alt="" width={300} height={350} className="absolute top-[25rem] left-40" />
          {/* <Image src='/heroImg2.png' alt="" width={300} height={350} /> */}
    </div>
</div>
  )
}

export default Hero