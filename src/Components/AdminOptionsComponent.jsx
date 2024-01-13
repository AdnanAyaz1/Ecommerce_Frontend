import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/slices/DashBoardPageSlice";

const AdminOptionsComponent = ({ option }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setPage(option));
  };

  return (
    <div
      className="hover:text-white font-Urbanist text-2xl font-medium bg-white/100 rounded-full my-8 border-2 border-white hover:bg-transparent duration-200 hover:cursor-pointer text-center py-2 text-black"
      onClick={handleClick}
    >
      {option}
    </div>
  );
};

export default AdminOptionsComponent;
