import React from "react";
import headerImg from "/header/header-img.png";
import maskGroup from "/header/mask-group.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="mx-36 my-5">
      <div className="relative">
        <span className="rounded-full bg-white w-2.5 h-2.5 inline-block"></span>
        <button className="bg-[#F3F9FB] text-[#008ECC] p-6 text-2xl rounded-full absolute -left-10 top-44 cursor-pointer">
          <FaAngleLeft />
        </button>
      </div>
      <div className="bg-[#212844] flex justify-between items-center text-white px-28 rounded-2xl">
        <div className="flex justify-between items-center w-full">
          <div>
            <h2 className="text-3xl font-semibold leading-[3]">
              Best Deal Online on smart watches
            </h2>
            <h1 className="text-6xl font-bold uppercase">Smart Wearable.</h1>
            <h1 className="text-3xl font-semibold leading-[3]">
              UP to 80% OFF
            </h1>
            <div className="text-2xl flex gap-3 pt-10">
              <span className="rounded-full bg-white w-8 h-2.5 inline-block cursor-pointer"></span>
              <span className="rounded-full bg-white w-2.5 h-2.5 inline-block cursor-pointer"></span>
              <span className="rounded-full bg-white w-2.5 h-2.5 inline-block cursor-pointer"></span>
              <span className="rounded-full bg-white w-2.5 h-2.5 inline-block cursor-pointer"></span>
              <span className="rounded-full bg-white w-2.5 h-2.5 inline-block cursor-pointer"></span>
              <span className="rounded-full bg-white w-2.5 h-2.5 inline-block cursor-pointer"></span>
              <span className="rounded-full bg-white w-2.5 h-2.5 inline-block cursor-pointer"></span>
            </div>
          </div>
          <div className="relative">
            <img src={maskGroup} alt="mask" width={600} />
            <img
              className="absolute top-12 right-1/4"
              src={headerImg}
              alt="header image"
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <button className="bg-[#F3F9FB] text-[#008ECC] p-6 text-2xl rounded-full absolute -right-10 -top-[220px] cursor-pointer">
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
