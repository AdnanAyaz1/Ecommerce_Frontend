import React from "react";
import { useGetMyOrdersQuery } from "../redux/apis/OrdersApi";
import OrderItem from "../Components/OrderItem";

const MyOrders = () => {
  const { data } = useGetMyOrdersQuery();
  const headings = ["Phone No", "Total Amount", "Date", "Status", "Details"];
  return (
    <div className="bg-slate-100 w-full  h-screen lg:p-16 p-2">
      <h1 className="text-3xl font-bold font-Urbanist text-center underline underline-offset-[10px]">
        Your Orders
      </h1>
      <div className="grid grid-cols-5 items-center mt-8 bg-black/80 p-4 rounded-lg">
        {headings.map((heading) => {
          return (
            <div className="text-center text-base lg:text-2xl font-Urbanist font-semibold text-white">
              {heading}
            </div>
          );
        })}
      </div>
      {data?.myorders &&
        data?.myorders.map((order) => {
          return <OrderItem order={order} />;
        })}
    </div>
  );
};

export default MyOrders;
