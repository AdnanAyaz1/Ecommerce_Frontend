import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";
import {
  addTofavourite,
  removeFromfavourite,
} from "../redux/slices/FavouriteSlice";

const ProductItem = ({ pro }) => {
  const [cartIcon, setCartIcon] = useState(0);
  const [heartIcon, setHeartIcon] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartIconClass = `h-[25px] w-[25px] ${
    cartIcon ? "text-orange-600" : "text-white"
  } bg-white/30 rounded-full p-3`;
  const heartIconClass = `h-[25px] w-[25px] bg-white/30 ${
    heartIcon ? "text-red-500" : "text-white"
  } rounded-full p-3`;

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: 30,
    value: pro.ratings,
    isHalf: true,
  };

  const handleClick = () => {
    navigate("/productDetails", { state: { product: pro } });
  };
  const cartData = useSelector((state) => state.cart);
  const favouriteData = useSelector((state) => state.favourite);

  const handleCart = () => {
    setCartIcon((pre) => !pre);

    if (cartIcon == 0) {
      dispatch(addToCart(pro));
    } else {
      dispatch(removeFromCart(pro));
    }
  };

  const handleFavourite = () => {
    setHeartIcon((pre) => !pre);
    if(heartIcon==0)
    {
     dispatch(addTofavourite(pro))
    }
    else
    {
     dispatch(removeFromfavourite(pro))
    }
  };

  return (
    <div className="hover:scale-105 duration-200 hover:cursor-pointer mt-8 ">
      <div className="relative group border-2">
        <img
          src={pro?.images[0]?.url}
          alt=""
          className=" h-[300px] md:h-[420px] w-full object-fill "
        />
        <div
          className=" absolute inset-0 bg-transparent group-hover:bg-black/40 duration-200 z-10 "
          onClick={handleClick}
        ></div>
        <div className="hidden absolute group-hover:flex gap-2 top-8 right-8 z-30">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className={cartIconClass}
            onClick={handleCart}
          />
          <FontAwesomeIcon
            icon={faHeart}
            className={heartIconClass}
            onClick={handleFavourite}
          />
        </div>
      </div>
      <div className="md:px-4 mt-4">
        <h1 className="font-bold font-Urbanist text-2xl ">{pro.name}</h1>
        <div className="flex items-center justify-between">
          <ReactStars {...options} />{" "}
          <span className=" text-base md:text-xl font-semibold text-green-600 font-Urbanist">
            ({pro.reviews.length} Reviews)
          </span>
        </div>

        <h1 className="text-2xl font-bold text-orange-600 font-Urbanist mt-2">
          RS {pro.price}
        </h1>
      </div>
    </div>
  );
};

export default ProductItem;
