import React, { useEffect, useState } from "react";
import { useGetOrdersQuery } from "../../../redux/apis/OrdersApi";
import OrderItem from "../../../Components/OrderItem";

const Orders = () => {
  const [status, changeStatus] = useState("All");
  const [date, setDate] = useState("today");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    if (date == "today") {
      const today = new Date();
      const endDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1
      );
      const startDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );
      setStartDate(startDate);
      setEndDate(endDate);
    }
  }, [date]);

  const changeDateHandler = (e) => {
    setDate(e.target.value);

    if (e.target.value == "week") {
      const today = new Date();
      const startDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 7
      );
      const endDate = new Date();
      setStartDate(startDate);
      setEndDate(endDate);
    }
    if (e.target.value == "month") {
      const today = new Date();
      const startDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 30
      );
      const endDate = new Date();
      setStartDate(startDate);
      setEndDate(endDate);
    }
  };

  const { data } = useGetOrdersQuery({ status, startDate, endDate });
  const headings = ["Phone No", "Total Amount", "Date", "Status", "Details"];

  return (
    <div className="bg-slate-100 w-full  min-h-screen lg:p-16 p-2 ">
      <h1 className="text-3xl font-bold font-Urbanist text-center underline underline-offset-[10px]">
        All Orders
      </h1>
      <div className="my-8 flex justify-between">
        <div>
          <h1 className="text-2xl font-Urbanist font-medium mb-4">
            Filter By Status
          </h1>
          <select
            name=""
            id=""
            value={status}
            onChange={(e) => changeStatus(e.target.value)}
            className="text-lg font-Urbanist border-2 p-3"
          >
            <option value="All">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="shipped">Shipped</option>
          </select>
        </div>
        <div>
          <h1 className="text-2xl font-Urbanist font-medium mb-4">
            Filter By Date
          </h1>
          <select
            name=""
            id=""
            value={date}
            onChange={(e) => changeDateHandler(e)}
            className="text-lg font-Urbanist border-2 p-3"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-5 items-center mt-8 bg-black/80 p-4 rounded-lg">
        {headings.map((heading) => {
          return (
            <div className="text-center text-base lg:text-2xl font-Urbanist font-semibold text-white">
              {heading}
            </div>
          );
        })}
      </div>
      {data?.Allorders &&
        data?.Allorders.map((order) => {
          return <OrderItem order={order} />;
        })}
    </div>
  );
};

export default Orders;
