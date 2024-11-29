import React from "react";
import { FaAngleRight } from "react-icons/fa";
import EssentialsCard from "./EssentialsCard";
import essentials from "../api/essentials/Essentials.json";

const DailyEssentials = () => {
  return (
    <div className="mx-36 my-36">
      <div className="flex justify-between items-center border-b-2 border-b-[#EDEDED]">
        <div>
          <h1 className="text-[#666666] text-2xl font-bold border-b-4 border-b-[#008ECC] pb-4">
            Daily&nbsp;
            <span className="text-[#008ECC]">Essentials</span>
          </h1>
        </div>
        <button className="flex items-center gap-x-2 text-base">
          <span>View All</span>
          <FaAngleRight color="#008ECC" />
        </button>
      </div>
      {/* Categories */}
      <div className="my-10">
        <EssentialsCard essentials={essentials} />
      </div>
    </div>
  );
};

export default DailyEssentials;
