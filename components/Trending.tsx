import React from "react";
import TrendingNFTCard from "./TrendingNFTCard";

const Trending = () => {
  return (
    <div className=" flex flex-col mt-40">
      <div className="flex justify-center items-center">

      <span className="font-semibold font-clash bg-gradient-to-r text-[55px]  from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block text-transparent bg-clip-text">
              Trending NFTs
            </span>
      </div>
      <div className="flex overflow-x-hidden gap-5 mt-10">
        <TrendingNFTCard />
        <TrendingNFTCard />
        <TrendingNFTCard />
        <TrendingNFTCard />
        <TrendingNFTCard />
      </div>
      <div className="mt-14 self-center  bg-transparent text-white text-2xl font-semibold border rounded-[60px] flex justify-center items-center w-[197px] h-[62px]  ">
            see more
          </div>
    </div>
  );
};

export default Trending;
