'use client'
import { useModal } from '@/hooks/useModal'
import { axiosInstance } from '@/lib/axios.config'
import axios from 'axios'
import React, { FormEvent, useState } from 'react'
import { toast } from 'sonner'



const NewsLetterModal = () => {
    const { isOpen, closeModal } = useModal()
    const [email, setEmail] = useState<string>('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        if (!email) {
            toast.error('provide a valid email')
            return
        }
        try {
            setIsSubmitting(true)
            const response = await axiosInstance.post(`/api/users/waitlist`, {
                email
            })
            // console.log(response?.data)
            setIsSubmitting(false)
            setEmail('')
            toast.success(response.data.message)
            closeModal()
        } catch (error) {
            let apiError;
            if (axios.isAxiosError(error)) {
                apiError = {
                    message: error.response?.data?.error,
                    status: error.response?.status || 'Error',
                    error: error.response?.data
                }
            }
            setIsSubmitting(false)
            toast.error(apiError?.message || 'something went wrong, please try again')
            setEmail('')
        }
    }


    return (
        isOpen && (
            <div className='w-full fixed inset-0 bg-black bg-opacity-40 flex items-center  p-4 justify-center'>
                <div className="w-full md:w-[643px] bg-white rounded-lg p-6 flex gap-3">
                    <span className='hidden md:flex'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_292_4831" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_292_4831)">
                                <path d="M2.72479 21C2.54146 21 2.37479 20.9542 2.22479 20.8625C2.07479 20.7708 1.95812 20.65 1.87479 20.5C1.79146 20.35 1.74562 20.1875 1.73729 20.0125C1.72896 19.8375 1.77479 19.6667 1.87479 19.5L11.1248 3.5C11.2248 3.33333 11.354 3.20833 11.5123 3.125C11.6706 3.04167 11.8331 3 11.9998 3C12.1665 3 12.329 3.04167 12.4873 3.125C12.6456 3.20833 12.7748 3.33333 12.8748 3.5L22.1248 19.5C22.2248 19.6667 22.2706 19.8375 22.2623 20.0125C22.254 20.1875 22.2081 20.35 22.1248 20.5C22.0415 20.65 21.9248 20.7708 21.7748 20.8625C21.6248 20.9542 21.4581 21 21.2748 21H2.72479ZM4.44979 19H19.5498L11.9998 6L4.44979 19ZM11.9998 18C12.2831 18 12.5206 17.9042 12.7123 17.7125C12.904 17.5208 12.9998 17.2833 12.9998 17C12.9998 16.7167 12.904 16.4792 12.7123 16.2875C12.5206 16.0958 12.2831 16 11.9998 16C11.7165 16 11.479 16.0958 11.2873 16.2875C11.0956 16.4792 10.9998 16.7167 10.9998 17C10.9998 17.2833 11.0956 17.5208 11.2873 17.7125C11.479 17.9042 11.7165 18 11.9998 18ZM11.9998 15C12.2831 15 12.5206 14.9042 12.7123 14.7125C12.904 14.5208 12.9998 14.2833 12.9998 14V11C12.9998 10.7167 12.904 10.4792 12.7123 10.2875C12.5206 10.0958 12.2831 10 11.9998 10C11.7165 10 11.479 10.0958 11.2873 10.2875C11.0956 10.4792 10.9998 10.7167 10.9998 11V14C10.9998 14.2833 11.0956 14.5208 11.2873 14.7125C11.479 14.9042 11.7165 15 11.9998 15Z" fill="#50644C" />
                            </g>
                        </svg>
                    </span>

                    <div className="flex flex-col gap-4 w-full">
                        <h3 className='text-[#50644C] text-lg font-bold w-full flex  items-center justify-between'>
                            Swapify is coming soon!
                            <span className='cursor-pointer' onClick={closeModal}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="#50644C" />
                                </svg>
                            </span>


                        </h3>

                        <p className='text-[#50644C]'>We’re working tirelessly to give you the best experience. But you can join our other amazing customers on the waitlist and be among the first to try out the app.</p>

                        <form className='w-full flex flex-col md:flex-row gap-3' onSubmit={handleSubmit}>
                            <input type="text" className='grow border p-3 rounded-lg' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button className='py-3 px-6 text-lg rounded-xl bg-[#50644C] text-[#DDE5DB] transition duration-200 hover:bg-[#738370]' disabled={isSubmitting}>{!isSubmitting ? 'Join waitlist' : 'Processing...'}</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    )
}

export default NewsLetterModal