import React from "react";
import { useSelector } from "react-redux";
import FavItem from "../Components/FavItem";

const Favourite = () => {
  const { products } = useSelector((state) => state.favourite);
  return (
    <div className="flex flex-1 bg-slate-100 ">
      <div className="max-w-[1440px] mx-auto  w-full">
        <h1 className="text-3xl font-Urbanist font-semibold text-center mt-16">
          Your Favourite Items
        </h1>
        <div className="bg-white rounded-lg shadow-xl p-6 mt-12 w-[70%] mx-auto mb-16">
          {products.length > 0 ? (
            products.map((pro) => <FavItem pro={pro} />)
          ) : (
            <div className="text-4xl font-Urbanist font-semibold text-orange-600">
                No Products
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favourite;
