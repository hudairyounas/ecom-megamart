import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import appleStore from "/footer/appleStore.png";
import playStore from "/footer/googlePlay.png";

const Footer = () => {
  return (
    <div className="bg-[#008ECC] text-white relative">
      <div className="bg-[#05ABF3] w-[350px] h-[350px] rounded-l-full rounded-b-full absolute top-0 -right-16"></div>
      <div className="px-36 py-5 flex flex-col gap-y-10">
        <div className="flex items-center gap-x-52">
          <div className="flex flex-col gap-y-10">
            <h1 className="text-3xl font-bold">MegaMart</h1>
            <div className="flex flex-col gap-y-5">
              <h3 className="text-lg font-medium">Contact Us</h3>
              <div className="flex flex-col gap-y-2">
                <div className="flex gap-2">
                  <div>
                    <FaWhatsapp size={30} />
                  </div>
                  <div>
                    <p>Whatsapp</p>
                    <p>+92 123 456789</p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <div>
                    <MdOutlinePhoneInTalk size={30} />
                  </div>
                  <div>
                    <p>Call Us</p>
                    <p>+92 123 456789</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <h3 className="text-xl font-medium">Download App</h3>
              <div className="flex gap-x-5">
                <img
                  className="cursor-pointer"
                  src={appleStore}
                  alt="apple store"
                />
                <img
                  className="cursor-pointer"
                  src={playStore}
                  alt="play store"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-x-20">
            <div className="flex flex-col gap-y-5">
              <div className="border-b-4 border-b-white pb-5">
                <h1 className="text-xl font-semibold">
                  Most Popular Categories
                </h1>
              </div>
              <div>
                <ul className="flex flex-col gap-y-4 list-disc pl-7">
                  <li className="cursor-pointer">Staples</li>
                  <li className="cursor-pointer">Beverages</li>
                  <li className="cursor-pointer">Personal Care</li>
                  <li className="cursor-pointer">Home Care</li>
                  <li className="cursor-pointer">Baby Care</li>
                  <li className="cursor-pointer">Vegetables & Fruits</li>
                  <li className="cursor-pointer">Snacks & Foods</li>
                  <li className="cursor-pointer">Dairy & Bakery</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="border-b-4 border-b-white pb-5">
                <h1 className="text-xl font-semibold">Customer Services</h1>
              </div>
              <div>
                <ul className="flex flex-col gap-y-4 list-disc pl-7">
                  <li className="cursor-pointer">About Us</li>
                  <li className="cursor-pointer">Terms & Conditions</li>
                  <li className="cursor-pointer">FAQ</li>
                  <li className="cursor-pointer">Privacy Policy</li>
                  <li className="cursor-pointer">E-waste Policy</li>
                  <li className="cursor-pointer">
                    Cancellation & Return Policy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-y-10">
          <hr />
          <p className="text-center text-xl font-normal">
            &copy; All tights reserved. Reliance Retails Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
