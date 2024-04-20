import React from 'react'

const TopCollectionCard = () => {
  return (
    <div className='flex flex-col p-3 gap-3 text-white border border-white border-opacity-50 rounded-3xl'>
            {/* image */}
            <img src="/cardImage/collection.png" alt="image" width={285} height={281} />
            {/* name  */}
            <div className='flex flex-col w-[285px] h-[58px]'>
                <p className='font-semibold text-[22px] text-white'>COOLGUYZ</p>
                <p className='font-medium text-[13px]'>Coolguyz.io</p>
            </div>
            {/* price */}
            <div className='flex justify-between w-[285px] h-[58px]'>
                <div className='flex flex-col'>
                    <p className='font-semibold text-xl'>1.5 ETH</p>
                    <p className='font-medium text-sm'>Floor price</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-right font-semibold text-xl'>$2045.12</p>
                    <p className='text-red-600 text-right font-medium text-sm'>-12.45</p>
                </div>
            </div>
    </div>
  )
}

export default TopCollectionCard