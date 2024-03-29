import React from "react";

function Hero() {
  return (
    <div className="w-full min-h-screen flex text-white">
      {/* leftside */}
      <div className="flex flex-col space-y-10 ">
        {/* Main Moto */}
        <div className="text-[85px] leading-[78px] font-clash text-left">
          <p className="font-normal ">
            Discover
            <br />
            Collect,& Sell
            <br />
            <span className="font-bold bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block text-transparent bg-clip-text">
              Extraordinary
            </span>
            <br />
            NFTs
          </p>
        </div>
        {/* Description */}

        <div className="text-xl">
          the leading NFT Marketplace on Ethereum
          <br />
          Home to the next generation of digital creators.
          <br />
          Discover the best NFT collections.
        </div>
        {/* cta buttons */}
        <div className="w-[430px] flex justify-between">
          {/* blue buttom */}
          <div className="bg-[#2F80ED] text-white text-2xl font-semibold  rounded-[60px] flex justify-center items-center w-[197px] h-[62px] ">
            Explore
          </div>
          {/* transparent button */}
          <div className="bg-transparent text-white text-2xl font-semibold border rounded-[60px] flex justify-center items-center w-[197px] h-[62px]  ">
            Create
          </div>
        </div>

        {/* stats */}
        <div className="w-[430px] flex justify-between">
          {/* stats 1 */}
          <div className="h-[73px] flex flex-col justify-between">
            <p className="font-semibold font-clash text-4xl">432K+</p>
            <p className="font-normal text-base">Collections</p>
          </div>
          {/* stats 2 */}
          <div className="h-[73px] flex flex-col justify-between">
            <p className="font-semibold font-clash text-4xl">200K+</p>
            <p className="font-normal text-base">Artists</p>
          </div>
          {/* stats 3 */}
          <div className="h-[73px] flex flex-col justify-between">
            <p className="font-semibold font-clash text-4xl">10K+</p>
            <p className="font-normal text-base">Community</p>
          </div>
        </div>
      </div>
      {/* rightside */}
      <div>Right Side</div>
    </div>
  );
}

export default Hero;
