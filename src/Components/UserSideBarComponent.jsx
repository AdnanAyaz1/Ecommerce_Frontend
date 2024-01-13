import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserSideBarComponent = ({ link }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `font-Urbanist text-2xl  p-4   lg:px-8 font-semibold text-center border-2 mb-8 rounded-full flex items-center justify-center  ${
          isActive
            ? "bg-white text-orange-600 border-black"
            : "border-white bg-white/70 text-black "
        }`
      }
      to={link.to}
    >
      <FontAwesomeIcon icon={link.img} className="w-[25px] h-[25px] " />
      <h1 className="mx-auto hidden lg:flex">{link.link}</h1>
    </NavLink>
  );
};

export default UserSideBarComponent;
