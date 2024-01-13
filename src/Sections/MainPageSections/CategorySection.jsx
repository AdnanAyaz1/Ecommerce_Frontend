import React from "react";
import watch from "../../assets/watch.jpg";
import shoe1 from "../../assets/shoe1.png";
import bags from '../../assets/bags.jpg'
import airpods from '../../assets/airpods.jpg'
import hd from '../../assets/hd.jpg'
import gc from '../../assets/gc.jpg'
import CategoryItem from "../../Components/CategoryItem";

const categories = [
  { name: "Watches", img: watch },
  { name: "shoes", img: shoe1 },
  { name: "Bags",img:bags },
  { name: "electronics",img:airpods },
  { name: "Headsets",img:hd },
  { name: "Glass Cleaner",img:gc },
];

const CategorySection = () => {
  return (
    <div className="max-w-[1440px] mx-auto mt-[140px] px-4">
      <h1 className="text-4xl font-Urbanist font-semibold ">
        Shop By Category
      </h1>
      <div className="h-1 rounded-full w-[17%] mt-1 bg-black/60"></div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 ">
        {categories.map((cat) => {
          return (
            <CategoryItem cat={cat} />
          );
        })}
      </div>
    </div>
  );
};

export default CategorySection;
