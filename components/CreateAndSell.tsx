import React from 'react'
import CreateAndSellCard from './CreateAndSellCard'

const CreateAndSell = () => {
  return (
    <div className='flex flex-col items-center  border border-gray-200 rounded-xl'>
        {/* heading */}
        <div className="flex justify-center items-center">
            <span className="font-semibold font-clash bg-gradient-to-r text-[55px]  from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block text-transparent bg-clip-text">
            Create and Sell Your NFTs
            </span>
        </div>
        {/* content */}
        <div className='flex justify-center items-center'>

        <CreateAndSellCard/>
        <CreateAndSellCard/>
        <CreateAndSellCard/>
        

        </div>
    </div>
  )
}

export default CreateAndSell