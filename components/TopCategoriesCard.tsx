import React from 'react'

const TopCategoriesCard = ({text} : {text : string}) => {
  return (
    <div className='flex flex-col gap-6 p-5  backdrop-blur-lg'>
        <img src="/cardImage/top.png" alt="top" width={404} height={293} />
        <p className='font-semibold text-[22px] text-white'>{text}</p>
    </div>
  )
}

export default TopCategoriesCard