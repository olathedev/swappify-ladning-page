import Footer from '@/components/common/Footer'
import NavBar from '@/components/common/NavBar'
import GetInTouch from '@/components/GetInTouch'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <div className='w-full bg-contact-bg bg-center bg-cover'>
            <div className="w-full h-full bg-white bg-opacity-80">

            <NavBar />
            <hr />

            <div className="w-full py-20">

                <GetInTouch />
            </div>
            </div>

            <Footer />
        </div>
    )
}

export default page