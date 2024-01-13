import React from "react";
import AdminOptionsComponent from "../../Components/AdminOptionsComponent";
const adminOptions = [
  "All Products",
  "Add Product",
  "Orders",
  "Update Profile",
  "Update Password",
];

const SideBar = () => {
  return (
    <div className="bg-black h-screen text-white  p-8 sticky top-0  w-[400px] ">
      <h1 className="text-3xl font-Urbanist text-center font-semibold  border-b-2 pb-1 rounded-full mt-8">
        DashBoard
      </h1>
      {/* OPTIONS */}
      <div className="border-white border-2 rounded-2xl mt-16 p-4">
        {adminOptions.map((opt) => (
          <AdminOptionsComponent option={opt}/>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
