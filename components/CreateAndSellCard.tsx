import React from 'react'

const CreateAndSellCard = () => {
  return (
    <div className='h-[313px] w-[378px] flex flex-col gap-6 text-white'>
        <img src="/cardImage/Wallet.png" alt="image" width={64} height={60} />
        <h2 className='text-[28px] font-semibold '>
            Set up your Wallet
        </h2>
        <p className='text-lg font-normal'>
        Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.
        </p>
    </div>
  )
}

export default CreateAndSellCard