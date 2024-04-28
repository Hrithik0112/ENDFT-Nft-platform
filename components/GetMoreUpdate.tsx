import React from 'react'

const GetMoreUpdate = () => {
  return (
    <div className='flex flex-col gap-6 text-white'>
        <p className='text-[48px] font-clash font-semibold'>Get More Updates</p>
        <p className='font-normal text-xl'>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks</p>
        <div className='w-[865px] h-[71px] rounded-[116px] bg-[#d9d9d9] flex justify-end items-center relative'>
            <input type="text" placeholder='Your email..' className=' absolutepl-10 w-[865px]  rounded-l-[116px] h-full bg-[#d9d9d9] pl-10' />
            <button className='w-[150px] h-[63px] bg-blue-500 text-center text-white font-semibold text-xl mr-1  rounded-[116px]'>
                I'm in
            </button>
        </div>
    </div>
  )
}

export default GetMoreUpdate