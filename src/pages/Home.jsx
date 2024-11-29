import React from "react";
import SmartPhonesDeal from "../components/SmartPhonesDeal";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ElectronicsBrand from "../components/ElectronicsBrand";
import DailyEssentials from "../components/DailyEssentials";

const Home = () => {
  return (
    <div>
      <Hero />
      <SmartPhonesDeal />
      <Categories />
      <ElectronicsBrand />
      <DailyEssentials />
    </div>
  );
};

export default Home;
