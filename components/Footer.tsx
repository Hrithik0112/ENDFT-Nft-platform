import Image from "next/image";
import React from "react";
import { FaDiscord, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-around">
      {/* data */}
      <div className="flex flex-col">
        {/* logo */}
        <div className="flex">
          <Image src="/Group 8.png" alt="logo" width={48} height={48} />
          <p className="font-semibold text-4xl text-white">ENDFT</p>
        </div>
        {/* Paragrapg */}
        <div>
            <p className="font-normal text-xl text-white">
            the leading NFT Marketplace on Ethereum <br/> Home to the next generation of digital creators. <br/>Discover the best NFT collections.
            </p>
        </div>
        {/* logo list */}
        <div className="flex gap-4 mt-4">
        <FaDiscord className="w-8 h-8 text-gray-400"/>
        <FaTwitter className="w-8 h-8 text-gray-400"/>
        <FaInstagram className="w-8 h-8 text-gray-400"/>
        <FaYoutube className="w-8 h-8 text-gray-400"/>
        </div>
      </div>
      {/* links list 1 */}
      <div className="text-white">
        <p className="text-3xl font-semibold">MarketPlace</p>
        <ul className="flex flex-col text-xl gap-4 mt-6">
            <li>Explore</li>
            <li>Articles</li>
            <li>How it Works</li>
            <li>Help</li>
        </ul>
      </div>
      {/* links list 2 */}
      <div className="text-white">
        <p className="text-3xl font-semibold">Links</p>
        <ul className="flex flex-col text-xl gap-4 mt-6">
            <li>Token</li>
            <li>Bug Bounty</li>
            <li>API</li>
            <li>Works</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
