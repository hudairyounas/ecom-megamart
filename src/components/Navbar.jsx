import React from "react";
import { BsCart3 } from "react-icons/bs";
import { CiDiscount1, CiLocationOn, CiSearch } from "react-icons/ci";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoIosList } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = ({ toggleLogin }) => {
  return (
    <div className="border-b-2">
      {/* Top Section */}
      <div className="flex justify-between bg-[#F5F5F5] px-36 py-5">
        <div>
          <h1 className="text-[#666666]">Welcome to worldwide Megamart!</h1>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-2">
            <CiLocationOn size={20} className="text-[#008ECC]" />
            <span className="text-[#666666] border-r-2 border-[#D9D9D9] px-2">
              Deliver to <span className="text-[black]">423651</span>
            </span>
          </div>
          <div className="flex items-center gap-x-2 border-r-2 border-[#D9D9D9] px-2">
            <TbTruckDelivery size={20} className="text-[#008ECC]" />
            <span className="text-[#666666]">Track your order</span>
          </div>
          <div className="flex items-center gap-x-2">
            <CiDiscount1 size={20} className="text-[#008ECC]" />
            <span className="text-[#666666]">All Offers</span>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="px-36 py-5 flex justify-between items-center">
        <Link to={"/"} className="flex items-center gap-x-5 cursor-pointer">
          <HiMiniBars3
            size={50}
            className="bg-[#008ECC20] p-2 text-[#008ECC] rounded-full"
          />
          <h1 className="text-4xl font-bold text-[#008ECC]">MegaMart</h1>
        </Link>
        <div className="flex items-center gap-x-5 bg-[#F3F9FB] rounded-xl px-4">
          <CiSearch className="text-[#008ECC]" size={25} />
          <input
            className="bg-transparent border-none outline-none w-96  px-3 py-2"
            type="text"
            placeholder="Search essential, groceries and more..."
          />
          <IoIosList className="text-[#008ECC]" size={25} />
        </div>
        <div className="flex items-center">
          <button
            className="flex items-center gap-3 px-5 border-r-2 border-r-black"
            onClick={toggleLogin}
          >
            <LuUser className="text-[#008ECC]" size={25} />
            <span className="text-[#666666]">Sign Up/Login</span>
          </button>
          <Link to={"/cart"} className="flex items-center gap-3 pl-5">
            <BsCart3 className="text-[#008ECC]" size={25} />
            <span className="text-[#666666]">Cart</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between px-36 py-5">
        <div className="flex items-center gap-x-2 bg-[#F3F9FB] rounded-full p-4 hover:bg-[#008ECC] hover:text-white group transition-all duration-200 cursor-pointer">
          <span>Groceries</span>
          <MdKeyboardArrowDown
            className="text-[#008ECC] group-hover:text-white"
            size={25}
          />
        </div>
        <div className="flex items-center gap-x-2 bg-[#F3F9FB] rounded-full p-4 hover:bg-[#008ECC] hover:text-white group transition-all duration-200 cursor-pointer">
          <span>Premium Fruits</span>
          <MdKeyboardArrowDown
            className="text-[#008ECC] group-hover:text-white"
            size={25}
          />
        </div>
        <div className="flex items-center gap-x-2 bg-[#F3F9FB] rounded-full p-4 hover:bg-[#008ECC] hover:text-white group transition-all duration-200 cursor-pointer">
          <span>Home & Kitchen</span>
          <MdKeyboardArrowDown
            className="text-[#008ECC] group-hover:text-white"
            size={25}
          />
        </div>
        <div className="flex items-center gap-x-2 bg-[#F3F9FB] rounded-full p-4 hover:bg-[#008ECC] hover:text-white group transition-all duration-200 cursor-pointer">
          <span>Fashion</span>
          <MdKeyboardArrowDown
            className="text-[#008ECC] group-hover:text-white"
            size={25}
          />
        </div>
        <div className="flex items-center gap-x-2 bg-[#F3F9FB] rounded-full p-4 hover:bg-[#008ECC] hover:text-white group transition-all duration-200 cursor-pointer">
          <span>Electronics</span>
          <MdKeyboardArrowDown
            className="text-[#008ECC] group-hover:text-white"
            size={25}
          />
        </div>
        <div className="flex items-center gap-x-2 bg-[#F3F9FB] rounded-full p-4 hover:bg-[#008ECC] hover:text-white group transition-all duration-200 cursor-pointer">
          <span>Beauty</span>
          <MdKeyboardArrowDown
            className="text-[#008ECC] group-hover:text-white"
            size={25}
          />
        </div>
        <div className="flex items-center gap-x-2 bg-[#F3F9FB] rounded-full p-4 hover:bg-[#008ECC] hover:text-white group transition-all duration-200 cursor-pointer">
          <span>Home Improvement</span>
          <MdKeyboardArrowDown
            className="text-[#008ECC] group-hover:text-white"
            size={25}
          />
        </div>
        <div className="flex items-center gap-x-2 bg-[#F3F9FB] rounded-full p-4 hover:bg-[#008ECC] hover:text-white group transition-all duration-200 cursor-pointer">
          <span>Sports, Toys & Luggage</span>
          <MdKeyboardArrowDown
            size={25}
            className="text-[#008ECC] group-hover:text-white"
          />
        </div>
      </div>
      {/* Add Horizontal line */}
    </div>
  );
};

export default Navbar;
