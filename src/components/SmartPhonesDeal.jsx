import React from "react";
import { FaAngleRight } from "react-icons/fa";
import phones from "../api/SmartPhones/SmartPhones.json";
import Card from "./Card";

const SmartPhonesDeal = () => {
  return (
    <div className="mx-36 my-36">
      <div className="flex justify-between items-center border-b-2 border-b-[#EDEDED]">
        <div>
          <h1 className="text-[#666666] text-2xl font-bold border-b-4 border-b-[#008ECC] pb-4">
            Grab the best deal on&nbsp;
            <span className="text-[#008ECC]">Smartphones</span>
          </h1>
        </div>
        <button className="flex items-center gap-x-2 text-base">
          <span>View All</span>
          <FaAngleRight color="#008ECC" />
        </button>
      </div>
      {/* Cards */}
      <div className="mt-10">
        <Card phones={phones} />
      </div>
    </div>
  );
};

export default SmartPhonesDeal;
