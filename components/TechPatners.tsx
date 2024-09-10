import React from 'react'

type Props = {}

const TechPatners = (props: Props) => {
    return (
        <section className="w-full py-10 flex flex-col gap-6 items-center border-b-2">
            <h2 className="text-3xl font-medium">Our tech partners</h2>
            <div className="flex gap-12">
                <img src="/techSynergyLogo.png" alt="" />
                <div className="border-r border-black"></div>
                <img src="/startupEstoniaLogo.png" alt="" />
            </div>
        </section>
    )
}

export default TechPatners