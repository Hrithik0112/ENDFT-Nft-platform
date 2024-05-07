import React from "react";

const TrendingNFTCard2 = () => {
  return (
    <div className="p-2 flex flex-col text-white gap-4">
      {/* image */}
      <img src="/cardImage/midNFT2.png" alt="nft" width={400} height={328} />
      {/* name */}
      <div className="flex justify-between w-[400px] h-16">
        <img src="/cardImage/Avatar4.png" alt="avtar" height={63} width={63} />
        <div className="flex flex-col">
          <p className="font-semibold text-2xl text-[#6A58F1]">HAPE#8064</p>
          <p className="font-medium text-xs">Hape Prime</p>
        </div>
        <img src="/cardImage/ETH.png" alt="ETH" width={64} height={64} />
      </div>
      {/* price */}
      <div className="flex justify-between w-[400px] h-14">
        <div className="flex flex-col text-left">
          <p className="font-semibold text-xl">15.8 ETH</p>
          <p className="font-medium text-sm">Latest Bid</p>
        </div>
        <div className="flex flex-col text-left">
          <p className="font-semibold text-xl">9.45 ETH</p>
          <p className="font-medium text-sm">from</p>
        </div>
        <div className="flex flex-col text-right">
          <p className="font-semibold text-xl">$180,345</p>
          <p className="font-medium text-sm text-green-400">+12.45%</p>
        </div>
      </div>
      {/* button */}
      <div className="bg-[#2F80ED] flex items-center justify-center w-[400px] h-[60px] text-white font-semibold text-xl rounded-[60px]">
        Collect Now
      </div>
    </div>
  );
};

export default TrendingNFTCard2;
