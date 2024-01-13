import React from "react";
import { useSelector } from "react-redux";
import userimg from "../assets/userimg.png";
import UserSideBarComponent from "./UserSideBarComponent";
import {
  faUser,
  faUserEdit,
  faKey,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const UserSidebar = () => {
  const { user } = useSelector((state) => state.users);
  console.log(user)
  const options = [
    { link: "Profile", to: "myProfile", img: faUser },
    { link: "Update Profile", to: "updateProfile", img: faUserEdit },
    { link: "Change Password", to: "updatePassword", img: faKey },
    { link: "Orders", to: "myOrders", img: faShoppingCart },
  ];

  return (
    <div className="lg:w-[400px] md:w-[100px] w-[80px] h-screen bg-black/80 lg:p-8 p-2 py-8 ">
      {/* Name with Image */}
      <div className="flex gap-6 items-center border-b-2 pb-3 justify-center lg:justify-start ">
        <img
          src={user?.user?.avatar?.url ? user?.user?.avatar?.url : userimg}
          alt=""
          className="lg:w-[80px] lg:h-[80px] w-[40px] h-[40px] rounded-full object-cover"
        />
        <h1 className="text-3xl font-Urbanist text-white font-semibold hidden lg:flex">
          {user?.user?.name}
        </h1>
      </div>
      <div className=" mt-16">
        {options.map((link) => {
          return <UserSideBarComponent link={link} />;
        })}
      </div>
    </div>
  );
};

export default UserSidebar;
