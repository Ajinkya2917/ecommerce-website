import React from "react";
import MainCarosel from "../components/HomeCarosel/MainCarosel";
import HomeSectionCarousel from "../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../Data/Mens/mens_kurta";

const Home = () => {
  return (
    <div>
      <MainCarosel />

      <div className="space-y-10 py-20 flex flex-col justify-center">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shooes"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"} />
      </div>
    </div>
  );
};

export default Home;
