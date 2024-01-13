import { products } from "../Constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomLeftArrowButton from "./CustomLeftArrowButton";
import CustomRightArrowButton from "./CustomRightArrowButton";
import { useGetFeaturedproductsQuery } from "../redux/apis/productApi";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const FeatureProduct = () => {
 
  const { data } = useGetFeaturedproductsQuery();
 
  console.log(data?.products)

  return (
    <div className="  xl:px-0 ">
      <h1 className="text-3xl font-Urbanist  mt-8 mb-8 text-gray-500 ">
        Our Featured Products
      </h1>
      {
        data?.products  && <Carousel
        responsive={responsive}
        itemClass="px-[15px]"
        customRightArrow={<CustomRightArrowButton />}
        customLeftArrow={<CustomLeftArrowButton />}
      >
        { data?.products.map((pro) => {
          return <ProductItem pro={pro} />;
        })}
      </Carousel>
      }
    </div>
  );
};

export default FeatureProduct;
