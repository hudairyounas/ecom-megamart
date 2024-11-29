import React from "react";

const EssentialsCard = ({ essentials }) => {
  return (
    <div className="flex justify-between items-center">
      {essentials.map((curElem, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-[#F5F5F5] hover:border-2 hover:border-[#008ECC] hover:shadow-lg transition-all grid place-items-center w-48 h-48 rounded-3xl">
              <img
                className="w-40 h-40 object-contain"
                src={curElem.image}
                alt="essential"
              />
            </div>
            <div className="flex flex-col items-center pt-5">
              <p className="text-[#666666] font-semibold text-base">
                {curElem.name}
              </p>
              <h1 className="text-xl font-bold">{curElem.discount}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EssentialsCard;
