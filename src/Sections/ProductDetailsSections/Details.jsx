import React, { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/CartSlice";
const Details = ({ pro }) => {
  const [bigImg, setBigImg] = useState(pro?.images[0]?.url);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const increaseQuantity = () => {
    if (quantity <= pro.stock) setQuantity((pre) => pre + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((pre) => pre - 1);
    }
  };
  const handlecart = () => {
    pro.quantity = quantity;
    dispatch(addToCart(pro));
  };
  return (
    <div className=" pt-28 flex flex-col gap-16 xl:gap-0  lg:flex-row relative  px-5">
      {/* 1st */}
      <div className="lg:w-1/2 flex gap-2 flex-col-reverse md:flex-row mx-auto lg:mx-0">
        <div className="space-y-4 flex flex-row md:flex-col items-center  gap-4">
          {pro.images.map((img) => {
            return (
              <div
                className="relative rounded-lg hover:cursor-pointer group "
                onClick={() => setBigImg(img?.url)}
              >
                <img
                  src={img.url}
                  className="h-[80px] w-[100px] rounded-lg  object-center "
                ></img>
                <div className=" hidden group-hover:flex absolute inset-0 bg-black/10 rounded-lg"></div>
              </div>
            );
          })}
        </div>
        <div className="">
          <img
            src={bigImg}
            alt=""
            srcset=""
            className="h-[600px] w-[600px] border-2"
          />
        </div>
      </div>
      {/* 2nd */}
      <div className="lg:w-[40%] xl:w-[35%] px-12 lg:px-2  md:w-[70%] mx-auto ">
        <h1 className="text-4xl font-Urbanist font-bold">{pro.name}</h1>
        <h1 className="text-xl font-Urbanist font-bold my-4">{pro.category}</h1>
        <div className="flex justify-between">
          <h1 className="text-xl font-Urbanist font-bold">
            {" "}
            MRP: <span className="font-black text-2xl">RS {pro.price}</span>
          </h1>
        </div>
        <h1 className="font-Urbanist text-xl text-gray-400 mt-2 ">
          incl of taxes
        </h1>
        <h1 className="font-Urbanist text-xl text-gray-400 mt-1">
          Also include All applicable duties
        </h1>

        <div className="flex gap-6 my-8">
          <h1 className="text-3xl font-Urbanist font-bold">Quantity</h1>
          <button
            className="bg-slate-200 p-2 rounded-sm active:scale-75 duration-200"
            onClick={increaseQuantity}
          >
            <FontAwesomeIcon icon={faPlus} className="h-[17px]" />
          </button>
          <h1 className="text-3xl font-Urbanist font-bold">{quantity}</h1>
          <button
            className="bg-slate-200 p-2 rounded-sm active:scale-75 duration-200"
            onClick={decreaseQuantity}
          >
            <FontAwesomeIcon icon={faMinus} className="h-[17px]" />
          </button>
        </div>

        <div className="h-0.5 rounded-full bg-slate-300 mb-4"></div>

        {pro.stock > 0 ? (
          <h1 className="text-4xl font-bold font-Urbanist text-green-500">
            InStock
          </h1>
        ) : (
          <h1 className="text-4xl font-bold font-Urbanist text-red-500">
            Out of Stock
          </h1>
        )}

        <div className="flex flex-col gap-4 mt-8">
          <button
            className="rounded-full bg-black/80 text-white text-xl font-Urbanist py-3 hover:bg-white hover:text-black duration-200 border-2 border-black active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={pro.stock <= 0}
            onClick={handlecart}
          >
            Add To Cart
          </button>
          <button className="rounded-full hover:bg-black/80 hover:text-white text-xl font-Urbanist py-3 bg-white text-black duration-200 border-2 border-black active:scale-95">
            Add To Wishlist
          </button>
        </div>

        <h1 className="text-xl font-bold font-Urbanist mt-8">
          Product Details
        </h1>

        <h1 className="mt-6 text-xl font-Urbanist font-semibold">
          {pro.description}
        </h1>
      </div>
    </div>
  );
};

export default Details;
