
import shoe1 from "../../assets/shoe1.png";
import shoe2 from "../../assets/shoe2.png";
import shoe3 from "../../assets/shoe3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ShopNowHeading from "../../Components/ShopNowHeading";

const Banner = () => {
  return (
    <div className="lg:h-[600px] relative max-w-[1440px] mx-auto my-8">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        transitionTime={300}
        renderArrowPrev={(clickHandler) => (
          <button
            className="flex bg-black py-4 px-6 absolute bottom-0 right-20 z-10"
            onClick={clickHandler}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="h-[20px] w-[20px] font-bold text-white hover:text-gray-500"
            />
          </button>
        )}
        renderArrowNext={(handler) => (
          <button className="flex bg-black py-4 px-6 absolute bottom-0 right-0" onClick={handler}>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="h-[20px] w-[20px] font-bold text-white hover:text-gray-500"
            />
          </button>
        )}
      >
        <div>
          <img src={shoe1} />
          <ShopNowHeading/>
        </div>
        <div>
          <img src={shoe2} />
          <ShopNowHeading/>
        </div>
        <div>
          <img src={shoe3} />
          <ShopNowHeading/>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;