import React from "react";
import ProductComments from "../../Components/ProductComments";
import Carousel from "react-multi-carousel";
import CustomLeftArrowButton from "../../Components/CustomLeftArrowButton";
import CustomRightArrowButton from "../../Components/CustomRightArrowButton";

import AddComment from "../../Components/AddComment";
export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Comments = ({ pro }) => {
  return (
    <div className="max-w-[1440px] mx-auto mt-28">
      <h1 className="text-4xl font-Urbanist font-bold text-center">REVIEWS</h1>
      <div className="h-1 w-[10%] mt-1 mx-auto rounded-full bg-slate-400"></div>
      {pro.reviews.length > 0 ? (
        <Carousel
          responsive={responsive}
          itemClass=""
          customRightArrow={<CustomRightArrowButton />}
          customLeftArrow={<CustomLeftArrowButton />}
        >
          {pro.reviews.map((rev) => (
            <ProductComments rev={rev} />
          ))}
        </Carousel>
      ) : (
        <h1 className="text-4xl font-Urbanist text-center font-semibold mt-8 text-red-400 italic">
          No Reviews Yet
        </h1>
      )}
      <AddComment pro={pro} />
    </div>
  );
};

export default Comments;
