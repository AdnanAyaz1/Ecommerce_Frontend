import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../redux/slices/CartSlice";
import { ChangeQuantity } from "../redux/slices/CartSlice";

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CartItems = ({ pro }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(pro.quantity);

  const updateQuantityHanlder = (e) => {
    setQuantity(e.target.value);
    let payload = {
      product: pro,
      quantity:e.target.value,
    };
    dispatch(ChangeQuantity(payload));
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(pro));
  };

  return (
    <div className=" flex justify-between">
      {/* image with text */}
      <div className="flex gap-4 ">
        <img
          src={pro.images[0].url}
          className="xl:h-[200px] xl:w-[200px] h-[150px] w-[150px] object-center rounded-lg"
        />
        <div className="">
          <h1 className="xl:text-3xl text-xl font-Urbanist font-bold lg:font-semibold">
            {pro.name}
          </h1>
          <h1 className="xl:text-xl text-base text-gray-500 font-Urbanist font-semibold mt-2">
            {pro.category}
          </h1>
          {/* size and quantity */}
          <div className="flex gap-8 xl:mt-16 mt-10">
            {/* quantity */}
            <div className="flex gap-2 items-center">
              <label
                htmlFor="quantity"
                className="xl:text-xl text-base font-Urbanist text-gray-500 font-semibold"
              >
                Quantity
              </label>
              <select
                id="quantity"
                className="border rounded px-2 py-1"
                value={quantity}
                onChange={(e) => updateQuantityHanlder(e)}
              >
                {/* <option value={pro.quantity}>{pro.quantity}</option> */}
                {num.map((num) => (
                  <option value={num}>{num}</option>
                ))}

                {/* Add more quantity options as needed */}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* price with icon */}
      <div className="    flex flex-col items-end xl:gap-28 gap-20">
        <h1 className=" xl:text-2xl text-xl font-Urbanist text-gray-500 font-semibold">
          Price:{" "}
          <span className="ml-2 text-black font-bold">RS {pro.price}</span>
        </h1>
        <FontAwesomeIcon
          icon={faTrash}
          className="lg:h-[25px] lg:w-[25px] h-[20px] w-[20px] hover:cursor-pointer active:scale-90 duration-100 text-gray-500"
          onClick={removeFromCartHandler}
        />
      </div>
    </div>
  );
};

export default CartItems;
