import React from "react";
import { useDispatch } from "react-redux";
import { setPage, setData } from "../redux/slices/DashBoardPageSlice";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDeleteOrderMutation } from "../redux/apis/OrdersApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const OrderItem = ({ order }) => {

  const textClass = "font-Urbanist lg:text-xl font-semibold text-center";
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setData(order));
    dispatch(setPage("OrderDetails"));
  };

  const [deleteOrder, { isLoading }] = useDeleteOrderMutation();

  const handleDelete = async () => {
    const response = await deleteOrder(order._id);
    if (response?.error?.data?.message) {
      return toast.error(response?.error?.data?.message);
    } else toast.success(response?.data?.msg, { position: "top-center" });
    console.log(response)
  };

  return (
    <div className="grid grid-cols-5 border-2 my-2 bg-white rounded-lg lg:p-4 p-2">
      <div className={textClass}>{order.shippingInfo.phoneNo}</div>
      <div className={textClass}>{order.totalAmount}</div>
      <div className={textClass}> {order.createdAt}</div>
      <div className={textClass}>{order.status}</div>
      <div className="flex lg:gap-8 gap-2 items-center">
        <div
          className={
            "text-blue-500 hover:cursor-pointer lg:underline-offset-8 underline font-Urbanist text-sm lg:text-xl font-semibold text-center "
          }
          onClick={handleClick}
        >
          See Order Details
        </div>
        <FontAwesomeIcon
          icon={faTrash}
          className="text-red-500 lg:h-[20px] lg:w-[20px] h-[15px] hover:cursor-pointer active:scale-75"
          onClick={handleDelete}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default OrderItem;
