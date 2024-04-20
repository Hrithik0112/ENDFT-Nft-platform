import React from 'react'
import TopCollectionCard from './TopCollectionCard'

const TopColllection = () => {
  return (
    <div className=" flex flex-col mt-40">
        {/* heading */}
        <div className="flex justify-center items-center">
            <span className="font-semibold font-clash bg-gradient-to-r text-[55px]  from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block text-transparent bg-clip-text">
            Top Collections
            </span>
        </div>
        {/* tags */}
        <div className='flex mt-10 gap-5'>
            <div className="bg-[#2F80ED] text-white text-2xl font-semibold  rounded-[60px] flex justify-center items-center w-fit px-12 h-[62px] ">
            Art
            </div> 
            <div className="bg-transparent text-white text-2xl font-semibold border rounded-[60px] flex justify-center items-center w-fit px-12 h-[62px]  ">
            Collectibles
          </div>
          <div className="bg-transparent text-white text-2xl font-semibold border rounded-[60px] flex justify-center items-center w-fit px-12 h-[62px]  ">
            Metaverse
          </div>
          <div className="bg-transparent text-white text-2xl font-semibold border rounded-[60px] flex justify-center items-center w-fit px-12 h-[62px]  ">
            Virtual Worlds
          </div>
          <div className="bg-transparent text-white text-2xl font-semibold border rounded-[60px] flex justify-center items-center w-fit px-12 h-[62px]  ">
            Sports
          </div>
          <div className="bg-transparent text-white text-2xl font-semibold border rounded-[60px] flex justify-center items-center w-fit px-12 h-[62px]  ">
            Music
          </div>  
        </div>
        {/* cards */}
        <div className='flex flex-col gap-10 mt-20'>
            <div className='flex gap-5'>
                <TopCollectionCard/>
                <TopCollectionCard/>
                <TopCollectionCard/>
                <TopCollectionCard/>
            </div>
            <div className='flex gap-5'>
                <TopCollectionCard/>
                <TopCollectionCard/>
                <TopCollectionCard/>
                <TopCollectionCard/>
            </div>
        </div>
        <div className="mt-14 self-center  bg-transparent text-white text-2xl font-semibold border rounded-[60px] flex justify-center items-center w-[197px] h-[62px]  ">
            see more
        </div>
    </div>
  )
}

export default TopColllection