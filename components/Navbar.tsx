import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mb-20">
      {/* logo */}
      <div className="flex">
        <Image src="/Group 8.png" alt="logo" width={40} height={40} />
        <p className="font-semibold text-4xl text-white">ENDFT</p>
      </div>
      {/* Nav items */}
      <div className="">
        <ul className="text-xl font-semibold text-white flex justify-between items-center space-x-14">
          <li>Marketplace </li>
          <li>Community</li>
          <li>Connection</li>
          <li>Create</li>
          <li>
            <div className="bg-[#2F80ED] text-white text-xl font-semibold  rounded-[60px] flex justify-center items-center w-[197px] h-[62px] ">
              Connect Wallet
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
