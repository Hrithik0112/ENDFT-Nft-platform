import Image from "next/image";
import React from "react";
import { FaDiscord, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex">
      {/* data */}
      <div className="flex flex-col">
        {/* logo */}
        <div className="flex">
          <Image src="/Group 8.png" alt="logo" width={52} height={52} />
          <p className="font-semibold text-4xl text-white">ENDFT</p>
        </div>
        {/* Paragrapg */}
        <div>
            <p className="font-normal text-xl text-white">
            the leading NFT Marketplace on Ethereum <br/> Home to the next generation of digital creators. <br/>Discover the best NFT collections.
            </p>
        </div>
        {/* logo list */}
        <div className="flex gap-4">
        <FaDiscord/>
        <FaTwitter/>
        <FaInstagram/>
        <FaYoutube/>
        </div>
      </div>
      {/* links list 1 */}
      {/* links list 2 */}
    </div>
  );
};

export default Footer;
