import React from 'react'

const TopCollectionCard = () => {
  return (
    <div className='flex flex-col p-3'>
            {/* image */}
            <img src="/cardImage/collection.png" alt="image" width={285} height={281} />
            {/* name  */}
            <div className='flex flex-col w-[285px] h-[58px]'>
                <p className='font-semibold text-[22px] text-white'>COOLGUYZ</p>
                <p className='font-medium text-[13px]'>Coolguyz.io</p>
            </div>
    </div>
  )
}

export default TopCollectionCard