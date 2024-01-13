import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import DropDownComponent from "./DropDownComponent";
import { Link, NavLink } from "react-router-dom";

const categories = [
  { name: "Electronics", value: "electronics" },
  { name: "Clothing", value: "clothing" },
  { name: "Shoes", value: "shoes" },
  { name: "Sports", value: "sports" },
];

const NavLinksComponent = ({ link, i, to }) => {
  const [dropdown, setdrop] = useState(0);
  const handledropdown = () => {
    setdrop((pre) => !pre);
  };

  return (
    <>
      {i !== 2 ? (
        <NavLink
          to={to}
          className={({ isActive }) =>
            `font-semibold text-[1.4rem] font-Urbanist ${
              isActive ? "text-orange-600 underline" : "text-gray-500"
            } hover:cursor-pointer hover:text-orange-600 underline-offset-8 hover:underline`
          }
        >
          {link}
        </NavLink>
      ) : (
        <span
          className="flex items-center justify-center gap-2 relative font-semibold text-xl font-Urbanist hover:cursor-pointer hover:text-orange-600 text-gray-500"
          onClick={() => handledropdown()}
        >
          {link}
          <FontAwesomeIcon
            icon={dropdown ? faChevronUp : faChevronDown}
            className="h-[12px] w-[12px] font-bold text-black"
          />
          {/* a dropdown is to displayed when the link is clicked */}
          {dropdown ? (
            <DropDownComponent
              categories={categories}
              key={categories}
              signDrop={false}
            />
          ) : null}
        </span>
      )}
    </>
  );
};

export default NavLinksComponent;
