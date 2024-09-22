import Footer from '@/components/common/Footer'
import NavBar from '@/components/common/NavBar'
import React from 'react'

const page = () => {
    return (
        <div className='w-full bg-about-bg bg-cover bg-center min-h-screen'>
            <div className="bg-white bg-opacity-80">
                <NavBar />
                <hr />
            </div>


            <Footer />
        </div>
    )
}

export default page