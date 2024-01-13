import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Components/Loader";
import { useSelector } from "react-redux";
import { useAddOrderMutation } from "../redux/apis/OrdersApi";
import { useNavigate } from "react-router-dom";
import CartItems from "../Components/CartItems";
import ScrollToTop from "../Components/ScrollToTop";

const Order = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [placeOrder, { isLoading }] = useAddOrderMutation();
  const { products, totalAmount } = useSelector((state) => state.cart);
  const data = useSelector((state) => state.users);
  const navigate = useNavigate();

  const handleConfirmOrder = async () => {
    const user = data.user?.user?.name.length > 0 ? data.user?.user?.id : "";
    const shippingInfo = { country, state, city, zipcode, pincode, phoneNo };
    const response = await placeOrder({
      shippingInfo,
      products,
      totalAmount,
      user,
    });
    if (response?.error?.data?.message) {
      return toast.error(response?.error?.data?.message);
    } else {
      toast.success(response?.data?.msg, { position: "top-center" });
    }
    setCountry("");
    setState("");
    setCity("");
    setZipcode("");
    setPincode("");
    setPhoneNo("");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div>
      <ScrollToTop />
      <div className="bg-gray-100 lg:flex-row flex flex-col gap-8  py-16 px-8 xl:px-16 w-full ">
        <div className="py-16 px-16 border-2 w-[500px] lg:w-[600px]  bg-white rounded-2xl">
          <h1 className="text-center font-semibold text-4xl font-Urbanist">
            Confirm Order
          </h1>
          <div className="h-1 rounded-full bg-gray-300 w-[20%] mx-auto mt-2 mb-8"></div>

          {/* Country */}
          <label
            htmlFor="country"
            className="text-2xl font-Urbanist font-medium"
          >
            Country
          </label>
          <div className="relative flex items-center mt-2 mb-8">
            <input
              type="text"
              placeholder="Country"
              className="w-full h-full p-4 border border-black font-Urbanist text-xl"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          {/* State */}
          <label htmlFor="state" className="text-2xl font-Urbanist font-medium">
            State
          </label>
          <div className="relative flex items-center mt-2 mb-8">
            <input
              type="text"
              placeholder="State"
              className="w-full h-full p-4 border border-black font-Urbanist text-xl"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>

          {/* City */}
          <label htmlFor="city" className="text-2xl font-Urbanist font-medium">
            City
          </label>
          <div className="relative flex items-center mt-2 mb-8">
            <input
              type="text"
              placeholder="City"
              className="w-full h-full p-4 border border-black font-Urbanist text-xl"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          {/* Zipcode */}
          <label
            htmlFor="zipcode"
            className="text-2xl font-Urbanist font-medium"
          >
            Zipcode
          </label>
          <div className="relative flex items-center mt-2 mb-8">
            <input
              type="text"
              placeholder="Zipcode"
              className="w-full h-full p-4 border border-black font-Urbanist text-xl"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </div>

          {/* Pincode */}
          <label
            htmlFor="pincode"
            className="text-2xl font-Urbanist font-medium"
          >
            Pincode
          </label>
          <div className="relative flex items-center mt-2 mb-8">
            <input
              type="text"
              placeholder="Pincode"
              className="w-full h-full p-4 border border-black font-Urbanist text-xl"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>

          {/* Phone Number */}
          <label
            htmlFor="phoneNo"
            className="text-2xl font-Urbanist font-medium"
          >
            Phone Number
          </label>
          <div className="relative flex items-center mt-2 mb-8">
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full h-full p-4 border border-black font-Urbanist text-xl"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>

          {/* Confirm Order Button */}
          {isLoading ? (
            <Loader />
          ) : (
            <button
              className="font-Urbanist text-2xl bg-black text-white rounded-full p-4 w-full mt-8 hover:bg-white hover:text-black duration-200 active:scale-95 shadow-xl border-2 border-black"
              onClick={handleConfirmOrder}
            >
              Confirm Order
            </button>
          )}
        </div>
        <ToastContainer />
        <div className="lg:w-[60%] w-full p-10 bg-white">
          <h1 className="text-4xl font-Urbanist font-semibold mb-4">
            You Cart
          </h1>
          {products.map((cartItem) => {
            return (
              <>
                <CartItems pro={cartItem} />{" "}
                <div className="h-0.5 bg-gray-200 rounded-full my-6"></div>{" "}
              </>
            );
          })}
          <h1 className="text-2xl font-bold font-Urbanist">
            TOTAL AMOUNT{" "}
            <span className="text-orange-600 text-3xl">RS {totalAmount}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Order;
