import React, { useEffect } from "react";
import FeatureProduct from "../../Components/FeatureProduct";


const FeaturedProducts = () => {
  return (
    <>
      <div className="py-16 text-center max-w-[60%] mx-auto ">
        <h1 className="font-bold text-4xl font-Urbanist ">
          Welcome To Ayaz Traders
        </h1>
        <p className="text-xl text-gray-600 font-Urbanist  text-center my-6 ">
          Your Trusted Source For Reliable Products.
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto px-4">
        <h1 className="text-4xl font-Urbanist font-semibold ">
          Featured Products
        </h1>
        <div className="h-1 rounded-full w-[17%] mt-1 bg-black/60"></div>
        <FeatureProduct />
      </div>
    </>
  );
};

export default FeaturedProducts;
