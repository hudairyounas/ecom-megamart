import React from "react";
import appleLogo from "/electronics/apple-logo.png";
import appleImage from "/electronics/apple.png";
import realmeImage from "/electronics/realme.png";
import realmeLogo from "/electronics/realme-logo.png";
import xiaomiImage from "/electronics/xiaomi.png";
import xiaomiLogo from "/electronics/xiaomi-logo.png";

const ElectronicsCard = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-10 bg-[#313131] text-white px-10 py-5 rounded-2xl">
          <div className="flex flex-col items-start gap-y-5">
            <h3 className="bg-[#494949] px-4 py-2 font-normal rounded-xl">
              IPHONE
            </h3>
            <img src={appleLogo} alt="iphone logo" />
            <h1 className="text-2xl font-semibold">UP to 80% OFF</h1>
          </div>
          <div>
            <img src={appleImage} alt="iphone" />
          </div>
        </div>

        <div className="flex items-center gap-x-10 bg-[#FFF3CC] text-black px-10 py-5 rounded-2xl">
          <div className="flex flex-col items-start gap-y-5">
            <h3 className="bg-[#F6DE8D] px-4 py-2 font-normal rounded-xl">
              REALME
            </h3>
            <img src={realmeLogo} alt="iphone logo" />
            <h1 className="text-2xl font-semibold">UP to 80% OFF</h1>
          </div>
          <div>
            <img src={realmeImage} alt="iphone" />
          </div>
        </div>

        <div className="flex items-center gap-x-10 bg-[#FFECDF] text-black px-10 py-5 rounded-2xl">
          <div className="flex flex-col items-start gap-y-5">
            <h3 className="bg-[#FFD1B0] px-4 py-2 font-normal rounded-xl">
              XIAOMI
            </h3>
            <img src={xiaomiLogo} alt="iphone logo" />
            <h1 className="text-2xl font-semibold">UP to 80% OFF</h1>
          </div>
          <div>
            <img src={xiaomiImage} alt="iphone" />
          </div>
        </div>
      </div>
      <div className="text-2xl flex justify-center items-center gap-3 pt-10 ">
        <span className="rounded-full bg-[#008ECC] w-8 h-2.5 inline-block cursor-pointer"></span>
        <span className="rounded-full bg-[#D9D9D9] w-2.5 h-2.5 inline-block cursor-pointer"></span>
        <span className="rounded-full bg-[#D9D9D9] w-2.5 h-2.5 inline-block cursor-pointer"></span>
        <span className="rounded-full bg-[#D9D9D9] w-2.5 h-2.5 inline-block cursor-pointer"></span>
        <span className="rounded-full bg-[#D9D9D9] w-2.5 h-2.5 inline-block cursor-pointer"></span>
        <span className="rounded-full bg-[#D9D9D9] w-2.5 h-2.5 inline-block cursor-pointer"></span>
        <span className="rounded-full bg-[#D9D9D9] w-2.5 h-2.5 inline-block cursor-pointer"></span>
      </div>
    </div>
  );
};

export default ElectronicsCard;
