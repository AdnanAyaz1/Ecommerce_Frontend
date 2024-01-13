import React from "react";
import bags from "../assets/bags.jpg";
import ReactStars from "react-rating-stars-component";
const ProductComments = ({ rev }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: 40,
    isHalf: true,
    value: rev.ratings,
  };
  return (
    <div className="p-8 mx-4 bg-pink-100/70 border-2 border-black rounded-2xl mt-8 mb-4 min-h-[300px] flex flex-col justify-between  ">
      <div className="flex items-center gap-4">
        <img
          src={bags}
          alt=""
          className="h-[100px] w-[100px] rounded-full border border-black"
        />
        <h1 className="text-3xl font-Urbanist font-semibold">{rev.name}</h1>
      </div>
      <div className="my-8 text-2xl font-Urbanist ">{rev.comment}</div>
      <ReactStars {...options} />
    </div>
  );
};

export default ProductComments;
