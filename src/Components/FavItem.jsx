import React from "react";
import ScrollToTop from "./ScrollToTop";
import { useDispatch } from "react-redux";
import { removeFromfavourite } from "../redux/slices/FavouriteSlice";
import { addToCart } from "../redux/slices/CartSlice";

const FavItem = ({ pro }) => {
  const dispatch = useDispatch();

  const removeFromFav = () => {
    dispatch(removeFromfavourite(pro));
  };
  const addToCartHandler = () => {
    dispatch(addToCart(pro));
  };

  return (
    <>
      <ScrollToTop />
      <div className="flex justify-between p-4">
        <div className="flex gap-4 w-[80%]">
          <img
            src={pro.images[1].url}
            alt=""
            className="h-[180px] min-w-[180px] rounded-md object-cover"
          />
          <div className="flex flex-col gap-4 py-3">
            <h1 className="text-3xl font-Urbanist text-orange-600 font-medium">
              {pro.name}
            </h1>
            <h1 className="text-base text-gray-500 font-Urbanist">
              {pro.description}
            </h1>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-Urbanist text-orange-600 font-bold">
            RS {pro.price}
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4">
        <button
          className="text-xl font-Urbanist font-semibold p-4 py-2 bg-black text-white rounded-lg hover:bg-white border-2 border-blackhover:text-black shadow-xl duartion-200 active:scale-90 hover:text-black border-black"
          onClick={addToCartHandler}
        >
          Add To Cart
        </button>
        <button
          className="text-xl font-Urbanist font-semibold p-4 py-2 bg-black text-white rounded-lg hover:bg-white border-2 border-blackhover:text-black shadow-xl duartion-200 active:scale-90 hover:text-black border-black"
          onClick={removeFromFav}
        >
          Remove From Favourite
        </button>
      </div>
      <div className="h-0.5 rounded-full bg-gray-300 w-full my-4"></div>
    </>
  );
};

export default FavItem;
