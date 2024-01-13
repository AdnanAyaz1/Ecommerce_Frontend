import React, { useEffect } from "react";

import emptyCart from "../assets/ec.jpg";
import CartItems from "../Components/CartItems";

import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";

const Cart = () => {
  const data = useSelector((state) => state.cart);

  return (
    <>
      <ScrollToTop />

      {data.products.length > 0 ? (
        <div className="bg-slate-100">
          <div className="py-28 px-4 md:px-8 max-w-[1440px] mx-auto ">
          <h1 className="text-4xl font-Urbanist font-bold text-center">
            Shopping Cart
          </h1>
          <div className="flex gap-8 mt-16 flex-col lg:flex-row">
            {/* 1st */}

            <div className="lg:w-[70%]">
              <h1 className="text-2xl font-Urbanist font-bold mb-2">
                Cart Items
              </h1>

              <div className="p-4 shadow-xl rounded-lg bg-white ">
                {data.products.map((cartItem) => {
                  return (
                    <>
                      <CartItems pro={cartItem} />{" "}
                      <div className="h-0.5 bg-gray-200 rounded-full my-6"></div>{" "}
                    </>
                  );
                })}
              </div>
            </div>

            {/* 2nd */}
            <div className="lg:w-[30%] w-[80%] mx-auto">
              {/* Summary */}
              <h1 className="text-2xl font-Urbanist font-bold mb-2">Summary</h1>
              {/* SubTotal */}
              <div className="rounded-lg p-4 bg-green-200/70 ">
                {/* subtotal */}
                <div className="justify-between flex">
                  <h1 className="text-xl font-bold font-Urbanist">SubTotal</h1>
                  <h1 className="text-xl font-black font-Urbanist">
                    RS {data.totalAmount}
                  </h1>
                </div>
                {/* line */}
                <div className="h-0.5 rounded-full bg-gray-300 my-4"></div>
                {/* text */}
                <p className="font-Urbanist tracking-wide font-semibold text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  quo ea magnam omnis, qui numquam. Nam, quisquam voluptate ea
                  explicabo harum iure quae similique nulla corporis pariatur
                  maiores non alias eaque possimus incidunt. Ipsam sit,
                  voluptate doloribus !
                </p>
              </div>
              {/* CheckOUt */}
              <Link to="/order">
                <button className="bg-black/90  text-white font-semibold font-Urbanist text-2xl mt-8 rounded-full w-full py-3 tracking-wide active:scale-90 duration-150 hover:bg-white border hover:border-2 border-black hover:text-black">
                  Check Out
                </button>
              </Link>
            </div>
          </div>
        </div>
        </div>
      ) : (
        <div className="pt-16 flex flex-col">
          <img src={emptyCart} alt="" className="mx-auto h-[500px] w-[500px]" />
          <h1 className="text-2xl font-Urbanist font-black text-center">
            Your Cart Is Empty
          </h1>
          <h1 className="text-xl  text-gray-400 text-center mt-2">
            Looks like you have not added anything in your Cart.
          </h1>
          <h1 className="text-xl  text-gray-400 text-center mb-2">
            Go Ahead and Explore Top Categories
          </h1>
          <Link to="/" className="self-center">
            <button className="bg-black/90 text-white rounded-full p-4 px-6 text-xl font-Urbanist font-bold active:scale-95 hover:bg-white border-2 hover:border-black duration-200 hover:text-black  mt-8 shadow-xl">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
