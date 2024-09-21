import React from 'react'



const TechPatners = () => {
    return (
        <section className="w-full py-10 flex flex-col gap-6 items-center">
            <h2 className="text-3xl font-medium px-10">Our tech partners</h2>
            <div className="flex items-center gap-12">
                <img src="/techSynergyLogo.png" alt="" className='w-[101px] md:w-full h-[24px] md:h-full' />
                <span>
                    <svg width="3" height="40" viewBox="0 0 3 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.6665" y1="4.37114e-08" x2="1.6665" y2="40" stroke="#60603C" strokeWidth="2" />
                    </svg>

                </span>
                <img src="/startupEstoniaLogo.png" alt="" className='w-[100px] md:w-full h-[13px] md:h-full' />
            </div>
        </section>
    )
}

export default TechPatners