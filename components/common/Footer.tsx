import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='h-[290px] w-full bg-[#5F5F53] text-white py-6'>
      <div className="container mx-auto px-20 flex justify-between">

        <div className="w-1/2 flex gap-28">

          <div className='flex flex-col gap-4'>
            <h4 className='text-lg font-semibold'>Quick Links</h4>
            <ul className='flex flex-col gap-2'>
              <li>Home</li>
              <li>About Us</li>
              <li>News</li>
              <li>FAQs</li>
              <li>Contact Us</li>


            </ul>

          </div>
          <div className='flex flex-col gap-4'>
            <h4 className='text-lg font-semibold'>Legal</h4>
            <ul className='flex flex-col gap-2'>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>

          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h4 className='text-lg font-semibold'>Join our waitlist</h4>
          <p>Subscribe and get updates on our launch date</p>
          <div className="flex gap-3 items-center">
            <input type="text" placeholder='Enter your email' className='p-3 w-[387px] border text-[#DDE5DB] border-[#DDE5DB] rounded-lg bg-transparent placeholder:text-[#DDE5DB]' />
            <button className='py-3 px-6 bg-white rounded-xl text-black'>Notify me</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer