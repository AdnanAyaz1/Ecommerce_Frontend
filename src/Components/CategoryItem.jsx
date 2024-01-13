import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ cat }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/shop", { state: { cat } });
  };
  return (
    <div
      className="relative hover:cursor-pointer group flex items-center justify-center rounded-2xl h-[150px] md:h-[250px]"
      onClick={handleClick}
    >
      <img
        src={cat?.img}
        alt=""
        className=" object-cover w-full h-full rounded-2xl absolute"
      />

      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 rounded-2xl"></div>

      <h1 className="text-white text-3xl font-Urbanist font-bold tracking-wide z-20">
        {cat?.name}
      </h1>
    </div>
  );
};

export default CategoryItem;
