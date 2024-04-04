import React from "react";
import TrendingNFTCard from "./TrendingNFTCard";

const Trending = () => {
  return (
    <div className=" flex flex-col">
      <h2 className="font-semibold font-clash bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] text-transparent bg-clip-text">
        Trending NFTs
      </h2>
      <div className="flex overflow-x-hidden gap-5">
        <TrendingNFTCard />
        <TrendingNFTCard />
        <TrendingNFTCard />
        <TrendingNFTCard />
        <TrendingNFTCard />
      </div>
    </div>
  );
};

export default Trending;
