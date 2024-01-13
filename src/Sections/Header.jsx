import logo from "../assets/logo.svg";
import { navLinks } from "../Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faUser,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import userimg from "../assets/userimg.png";
import NavLinksComponent from "../Components/navLinksComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

import { useSelector } from "react-redux";
import { Logout } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Header = () => {
  const [showSignDrop, setDropDown] = useState(0);
  const { user } = useSelector((state) => state.users);

  const cartItems = useSelector((state) => state.cart);
  const favItems = useSelector((state) => state.favourite);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dropDownOption = user?.user?.name ? "Log Out" : "Sign In";
  const bool = user?.user?.role == "admin";

  const secondDropDownOption = bool ? "DashBoard" : "Profile";

  const options = [dropDownOption, secondDropDownOption];

  const handleDropDownClick = (cat) => {
    if (cat == "Log Out") {
      dispatch(Logout());
      toast.success("LogOut Successful", { position: "top-center" });
    }
    if (cat == "Sign In") {
      navigate("/Registration");
    }
    if (cat == "DashBoard") {
      navigate("/DashBoard");
    }
    if (cat == "Profile") {
      if (user?.user?.name.length > 0) {
        navigate("Profile");
      } else {
        navigate("/Registration");
      }
    }
  };

  return (
    <div className=" sticky top-0 bg-white z-30 ">
      <div className="flex justify-between items-center px-12 max-w-[1440px] mx-auto shadow-xl">
        {/* logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="h-[80px] w-[80px] " />
          </Link>
        </div>
        {/* links */}
        <div className="lg:flex gap-8 hidden">
          {navLinks.map((link, i) => {
            return (
              <NavLinksComponent
                link={link.name}
                to={link?.to}
                i={i}
                key={link}
              />
            );
          })}
        </div>
        {/* icons */}
        <div className="flex gap-8 items-center">
          <div
            className="flex gap-2 items-end hover:cursor-pointer "
            onClick={() => setDropDown((pre) => !pre)}
          >
            {user?.user?.name ? (
              <div className="flex gap-2 items-center">
                <img
                  src={
                    user?.user?.avatar?.url ? user?.user?.avatar?.url : userimg
                  }
                  alt=""
                  className="h-[40px] w-[40px] rounded-full"
                />
                <h1 className="text-gray-600 font-Urbanist text-xl ">
                  {user?.user?.name.split(" ")[0]}
                </h1>
              </div>
            ) : (
              <Link to="/Registration">
                {" "}
                <FontAwesomeIcon
                  icon={faUser}
                  className="h-[25px] w-[25px] hover:scale-125   text-gray-600 hover:text-gray-700"
                />
              </Link>
            )}
            <FontAwesomeIcon
              icon={showSignDrop ? faChevronUp : faChevronDown}
            />
            {showSignDrop ? (
              <div className="absolute bg-white rounded-lg bottom-[-80px] shadow-xl py-4 px-8 z-30 w-[150px]">
                {options.map((cat) => (
                  <h1
                    className="text-gray-500 text-xl font-medium hover:cursor-pointer hover:text-orange-600 font-Urbanist hover:underline-offset-8 hover:underline mb-2"
                    key={cat}
                    onClick={() => handleDropDownClick(cat)}
                  >
                    {cat}
                  </h1>
                ))}
              </div>
            ) : null}
          </div>
          <div className="relative">
           <Link to='/favourite'>
           <FontAwesomeIcon
              icon={faHeart}
              className="h-[25px] w-[25px] hover:scale-125  text-gray-600 hover:text-gray-700"
            />
           </Link>
            <p className="absolute text-white bg-red-600 rounded-full  px-1 text-sm top-[-10px] right-[-16px]">
              {favItems.products.length}
            </p>
          </div>
          <div className="relative">
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="h-[25px] w-[25px] hover:scale-125 text-gray-600 hover:text-gray-700"
              />
            </Link>
            <p className="absolute text-white bg-red-600 rounded-full  px-1 text-sm top-[-10px] right-[-10px]">
              {cartItems.products.length}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Header;
