import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateOrderMutation } from "../../../redux/apis/OrdersApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setPage } from "../../../redux/slices/DashBoardPageSlice";

const options = ["shipped", "delivered"];

const OrderDetails = () => {
  const { data } = useSelector((state) => state.page);
  const [status, setStatus] = useState("pending");
  const [updateOrder, { isLoading }] = useUpdateOrderMutation();
  const handleUpdate = async (e) => {
    setStatus(e.target.value);
    const body = {
      status: e.target.value,
    };
    const response = await updateOrder({ body, id: data._id });
    if (response?.error?.data?.message) {
      return toast.error(response?.error?.data?.message);
    } else toast.success(response?.data?.msg, { position: "top-center" });
    dispatch(setPage("Orders"));
  };

  return (
    <div className="h-screen bg-slate-100 flex items-center justify-center p-8">
      <div className="flex rounded-lg  shadow-xl bg-white lg:p-8 lg:gap-16 p-4 gap-4">
        {/* 1st */}
        <div className="">
          <h1 className="lg:text-3xl text-2xl font-Urbanist font-semibold underline underline-offset-8 mb-8">
            Product Items
          </h1>
          {data.productDetails.map((pro) => {
            return (
              <div className="flex justify-between lg:gap-12 gap-6">
                <h1 className="lg:text-2xl text-lg font-Urbanist text-gray-600 my-2 font-semibold">
                  {pro.name}
                </h1>
                <h1 className="lg:text-2xl  text-lg font-Urbanist text-gray-600 my-2 font-bold">
                  ({pro.quantity})
                </h1>
              </div>
            );
          })}
        </div>
        <div className="w-0.5 rounded-full bg-slate-500"></div>
        {/* 2nd */}
        <div>
          <h1 className="lg:text-3xl text-2xl font-Urbanist font-semibold underline underline-offset-8 mb-8">
            Shipping Details
          </h1>
          <h1 className="lg:text-2xl text-lg font-Urbanist text-gray-600 my-2 font-semibold">
            Country: {data.shippingInfo.country}
          </h1>
          <h1 className="lg:text-2xl text-lg font-Urbanist text-gray-600 my-2 font-semibold">
            State: {data.shippingInfo.state}
          </h1>
          <h1 className="lg:text-2xl text-lg font-Urbanist text-gray-600 my-2 font-semibold">
            City: {data.shippingInfo.city}
          </h1>
          <h1 className="lg:text-2xl text-lg font-Urbanist text-gray-600 my-2 font-semibold">
            Phone No: {data.shippingInfo.phoneNo}
          </h1>
          <h1 className="lg:text-2xl text-lg font-Urbanist text-gray-600 my-4 font-bold">
            Total Amount :{" "}
            <span className="text-orange-500 font-bold">
              {" "}
              {data.totalAmount}
            </span>
          </h1>
          {data?.ShippedAt && (
            <h1 className="lg:text-2xl text-xl font-Urbanist text-gray-600 my-2 font-semibold">
              Shipped At : {data.ShippedAt}
            </h1>
          )}
          {data?.DeliveredAt && (
            <h1 className="lg:text-2xl text-xl font-Urbanist text-gray-600 my-2 font-semibold">
              Delivered At : {data.DeliveredAt}
            </h1>
          )}
        </div>
        <div className="w-0.5 rounded-full bg-slate-500"></div>
        {/* 3rd */}
        <div>
          <h1 className="lg:text-3xl text-2xl font-Urbanist font-semibold underline underline-offset-8 mb-8">
            Status
          </h1>
          <select
            value={status}
            onChange={(e) => handleUpdate(e)}
            className="lg:text-2xl text-xl font-Urbanist p-2"
          >
            <option value="pending">Pending</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OrderDetails;
