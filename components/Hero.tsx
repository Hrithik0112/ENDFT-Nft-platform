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
      <div className="relative">
        <div className="w-[300px] h-[180px] rounded-[20px] backdrop-blur-[100px] -skew-x-[10deg] drop-shadow-xl border absolute top-[110px] left-[260px] bg-white opacity-5 z-10 "></div>
        <div className="w-[300px] h-[400px] rounded-[20px] backdrop-blur-[100px] -skew-x-[10deg] drop-shadow-xl border absolute bottom-[130px] left-[300px] bg-white opacity-5 z-20"></div>
        <div className="relative w-[400px] h-[423px] drop-shadow-xl">
          <img
            src="/nftImg.png"
            alt="nftimage"
            className="object-cover absolute top-36 left-[240px] "
          />
        </div>
        <div className="w-fit flex flex-col justify-around text-white font-clash  py-2 px-7 rounded-[20px] -skew-x-[10deg] bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg absolute -right-[240px] top-32">
          <p className="font-bold text-xl">BID NOW!</p>
          <p className="font-medium text-xs">Latest Collection</p>
        </div>
        <div className="w-fit p-4 rounded-[20px] -skew-x-[10deg] bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg absolute -right-[60px] bottom-[180px]">
          <div className="flex justify-between items-center space-x-4 font-clash">
            <div className="flex flex-col justify-around">
              <p className="font-bold text-xl">5.758 ETH</p>
              <p className="font-medium text-xs">Latest Bid</p>
            </div>
            <div className="flex flex-col justify-around">
              <p className="font-bold text-xl">$5758.31</p>
              <p className="font-medium text-xs text-green-500 text-right">+12.45%</p>
            </div>
          </div>
        </div>
        <div className="w-fit flex flex-col justify-around text-white font-clash  p-3 rounded-[20px] -skew-x-[10deg] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg absolute bottom-[100px] right-[50px]">
          <p className="font-bold text-xl">Auction</p>
          <p className="font-medium text-xs">Ends In</p>
        </div>
        <div className="w-fit flex items-center  text-white font-clash  px-3 rounded-[20px] -skew-x-[10deg] bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl absolute bottom-[80px] -right-[200px]">
          <div className="flex flex-col px-3 py-3">
            <p className="font-bold text-xl">17</p>
            <p className="font-medium text-xs">Hours</p>
          </div>
          <p>:</p>
          <div className="flex flex-col px-3 py-3">
            <p className="font-bold text-xl">56</p>
            <p className="font-medium text-xs">Minutes</p>
          </div>
          <p>:</p>
          <div className="flex flex-col px-3 py-3">
            <p className="font-bold text-xl">03</p>
            <p className="font-medium text-xs">Seconds</p>
          </div>
        </div>
        <div className="w-fit flex items-center justify-between space-x-4 text-white font-clash  p-3 rounded-[20px] -skew-x-[10deg] bg-white bg-opacity-5 backdrop-filter backdrop-blur-xl absolute bottom-[270px] -right-[240px]">
          <div className="relative">
            <img src="/avatar.png" alt="avatar" className="w-12 h-12" />
            <img src="/verified.png" alt="Verified" className="w-3 h-3 absolute bottom-0 right-0" />
          </div>
          <div className="flex flex-col font-clash">
            <p className="font-bold text-xl">HAPE#6959</p>
            <p className="font-medium text-xs text-black">Hapes Prime</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
