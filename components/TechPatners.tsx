import React from 'react'



const TechPatners = () => {
    return (
        <section className="w-full py-10 flex flex-col gap-6 items-center">
            <h2 className="text-3xl font-medium px-10">Our tech partners</h2>
            <div className="flex items-center gap-12">
                <img src="/techSynergyLogo.png" alt="" className='w-[101px] md:w-full h-[24px] md:h-full' />
                <div className="border-r border-black"></div>
                <img src="/startupEstoniaLogo.png" alt="" className='w-[100px] md:w-full h-[13px] md:h-full' />
            </div>
        </section>
    )
}

export default TechPatners