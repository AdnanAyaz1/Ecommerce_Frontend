import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomLeftArrowButton from "../../Components/CustomLeftArrowButton";
import CustomRightArrowButton from "../../Components/CustomRightArrowButton";
import { useGetSimilarProductsQuery } from "../../redux/apis/productApi";
import ProductItem from "../../Components/ProductItem";
export const responsive = {
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

const SimilarProducts = ({ cat }) => {
  const { data } = useGetSimilarProductsQuery(cat);

  return (
    <div className="sm:px-16  md:px-4  xl:px-0">
      <h1 className="text-3xl font-Urbanist font-bold mt-16 mb-8 ">
        You May Also Like
      </h1>
      {data?.products && (
        <Carousel
          responsive={responsive}
          itemClass="px-[10px]"
          customRightArrow={<CustomRightArrowButton />}
          customLeftArrow={<CustomLeftArrowButton />}
        >
          {data?.products.map((pro) => {
            return <ProductItem pro={pro} />;
          })}
        </Carousel>
      )}
    </div>
  );
};

export default SimilarProducts;
