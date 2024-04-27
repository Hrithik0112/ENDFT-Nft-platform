"use client"

import React from 'react'
import TopCategoriesSlider from './TopCategoriesSlider'

const TopCategories = () => {
  return (
    <div className='flex flex-col mt-40'>
        {/* heading */}
        <div className="flex justify-center items-center mt-10">
            <span className="font-semibold font-clash bg-gradient-to-r text-[55px]  from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block text-transparent bg-clip-text">
            Top Categories
            </span>
        </div>
        {/* caarousal */}
        <TopCategoriesSlider/>
        {/* buuton */}
        <div className="mt-14 self-center  bg-transparent text-white text-2xl font-semibold border rounded-[60px] flex justify-center items-center w-[197px] h-[62px]  ">
            see more
        </div>
    </div>
  )
}

export default TopCategories