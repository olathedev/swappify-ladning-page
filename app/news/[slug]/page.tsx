import Footer from '@/components/common/Footer'
import NavBar from '@/components/common/NavBar'
import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

const NewsDetails = () => {
    return (
        <div className='w-full bg-news-bg bg-cover bg-center'>
            <div className="bg-white bg-opacity-80">
                <NavBar />
                <hr />
                <div className='container mx-auto px-6 md:px-10 py-20 min-h-screen flex flex-col space-y-10'>
                    <header>
                        <h1 className='text-3xl font-bold mb-2'>Swapify at the African Business Summit in Estonia</h1>
                    </header>

                    <div className="flex flex-col space-y-4">
                        <h3 className="font-semibold text-lg">Swapify at the African Business Summit in Estonia
                        </h3>
                        <div className='flex flex-col gap-2'>
                            <p>Swapify recently attended the African Business Summit held by the Ministry of Foreign Affairs in Estonia. This prestigious event, which aims to foster economic collaboration and strengthen business ties between Estonia and Africa, provided an excellent platform for us to explore new opportunities and forge meaningful connections.</p>

                            <p>During the summit, we had the privilege of meeting with Daniel Schaer, the Ambassador of Estonia to Kenya. Our discussions with Ambassador Schaer were incredibly insightful and reinforced our commitment to driving a green economy through innovative solutions and collaborative efforts.</p>

                            <p className='font-semibold'>Summit Highlights:</p>

                            <p>Networking Opportunities: The summit brought together business leaders, government officials, and entrepreneurs from various sectors, providing us with a unique opportunity to network and share our vision for a sustainable future.</p>

                            <p>Collaboration Prospects: We explored potential partnerships with companies, organizations, and governments that are equally committed to promoting sustainability and reducing environmental impact.</p>

                            <p>Insights and Innovations: Engaging in discussions with experts and thought leaders, we gained valuable insights into the latest trends and innovations in the green economy.</p>

                            <p>Our Commitment: Swapify is dedicated to promoting a circular economy by facilitating smart barter exchanges and donations. Our platform is designed to reduce waste, save money, and foster a sense of community. Attending the African Business Summit reinforced our mission and provided us with new perspectives on how we can further our goals through international collaboration.</p>

                            <p>Looking Ahead: We are eager to collaborate with companies, organizations, governments, and individuals who share our vision for a greener, more sustainable future. By working together, we can make a significant impact on reducing waste and promoting resource efficiency on a global scale.</p>

                            <p>For more information about our participation in the summit and our ongoing initiatives, please visit the African Business Summit website.</p>

                            <p>Together, let&apos;s drive a better green economy and create a more sustainable world for future generations.</p>
                        </div>

                        <div className='pt-10 cursor-pointer'>
                        <img src="/swappifyafric.png" alt="" className='' />

                        </div>

                        <div className="w-full flex text-primary gap-2 text-xl justify-end items-center ">
                            Next story
                            <ArrowRightIcon />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default NewsDetails