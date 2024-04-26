import React from 'react'

const ArticlesCard = () => {
  return (
    <div className='  rounded-[20px] flex flex-col'>
            <img src="/cardImage/article.png" alt="article" width={442} height={275} className='object-cover'/>
            <div className='py-2 px-6 flex flex-col gap-5 justify-between bg-[#282d53]'>
                <p className='font-semibold text-[22px] text-gray-50'>We've lowered our market fees on all our favourite NFT's</p>
                <p className='font-medium text-sm text-gray-400'>January 23, 2023</p>

            </div>
    </div>
  )
}

export default ArticlesCard