import React from "react";

const CategoryCard = ({ categories }) => {
  return (
    <div className="grid grid-cols-7 place-items-center">
      {categories.map((curElem, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-full h-full"
          >
            <div className="bg-[#F5F5F5] hover:border-2 hover:border-[#008ECC] hover:shadow-lg transition-all p-10 rounded-full w-48 h-48 flex justify-center items-center mb-10">
              <img
                className="w-24 h-24 object-contain"
                src={curElem.image}
                alt="category"
              />
            </div>
            <h1 className="text-base font-normal">{curElem.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCard;
