import React from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomLeftArrowButton = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      className="flex bg-black/70 hover:bg-black/80 py-4 px-4 absolute bottom-50 left-10 rounded-full"
      onClick={() => onClick()}
    >
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="h-[20px] w-[20px] font-bold text-white hover:text-gray-500"
      />
    </button>
  );
};

export default CustomLeftArrowButton;
