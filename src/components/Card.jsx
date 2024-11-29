import React from "react";

const Card = ({ phones }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {phones.map((curElem) => {
        return (
          <div
            className="flex flex-col items-start rounded-2xl border hover:shadow-xl hover:border-[#008ECC] transition-all max-w-[1000px]"
            key={curElem.id}
          >
            <div className="bg-[#F5F5F5] px-20 py-5 rounded-t-2xl relative flex w-full">
              <div className="bg-[#008ECC] text-white flex flex-col items-center justify-center absolute -right-[1px] -top-[1px] rounded-tr-2xl rounded-bl-2xl p-3">
                <span>{curElem.off}</span>
                <span>OFF</span>
              </div>
              <div>
                <img
                  width={100}
                  className="h-36"
                  src={curElem.image}
                  alt="phone"
                />
              </div>
            </div>
            <div className="p-5 w-full ">
              <div className="pb-2 border-b-2">
                <p className="text-base text-[#222222] font-semibold">
                  {curElem.name}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-base text-[#222222] font-bold">
                    Rs. {curElem.price}
                  </span>
                  <span className="text-base text-[#222222] line-through font-normal">
                    Rs. {curElem.discount}
                  </span>
                </div>
              </div>
              <div className="text-[#249B3E] flex gap-2 text-base font-semibold">
                <span>Save</span>
                <span>-</span>
                <span>Rs. {curElem.save}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
