import Banner from "../Sections/MainPageSections/Banner";
import FeaturedProducts from "../Sections/MainPageSections/FeaturedProducts";
import CategorySection from "../Sections/MainPageSections/CategorySection";
import Products from "../Sections/MainPageSections/Products";
import { useSelector } from "react-redux";

const MainPage = () => {
  return (
    <>
      <Banner />
      <FeaturedProducts />
      <CategorySection />
      <Products />
    </>
  );
};

export default MainPage;
