import React from 'react'
import Footer from './Footer'
import Link from 'next/link'

const GetMoreUpdate = () => {
  return (
    <div className=' flex flex-col justify-center bg-[#0E1135] py-24 mt-20 '>

    <div className='flex flex-col gap-6 text-white items-center justify-center'>
        <p className='text-[48px] font-clash font-semibold'>Get More Updates</p>
        <p className='font-normal text-xl'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks</p>
        <div className='w-[865px] h-[71px] rounded-[116px] bg-[#d9d9d9] flex justify-end items-center relative'>
            <input type="text" placeholder='Your email..' className=' absolutepl-10 w-[865px]  rounded-l-[116px] h-full bg-[#d9d9d9] pl-10' />
            <button className='w-[150px] h-[63px] bg-blue-500 text-center text-white font-semibold text-xl mr-1  rounded-[116px]'>
                I'm in
            </button>
        </div>
    </div>
    <Footer/>
    <div className="flex mt-20 text-center font-clash text-5xl font-bold justify-center items-center text-white">
      Made With ❤️ by &nbsp; <Link href="https://hrithik-portfolio-one.vercel.app/">Hrithik</Link>
      
    </div>
    </div>
  )
}

export default GetMoreUpdate