import React, { useEffect, useState } from "react";

import {
  useGetProductsQuery,
  useSearchproductQuery,
} from "../redux/apis/productApi";
import Loader from "../Components/Loader";
import ProductItem from "../Components/ProductItem";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MultiRangeSlider from "multi-range-slider-react";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ScrollToTop from "../Components/ScrollToTop";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [minValue, set_minValue] = useState(1000);
  const [maxValue, set_maxValue] = useState(30000);
  const [category, setCategory] = useState("");

  const location = useLocation();
  const passedCategory = location.state?.cat;

  useEffect(() => {
    if (passedCategory) {
      setCategory(passedCategory?.name ? passedCategory.name : passedCategory);
    }
  }, [passedCategory]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const { data, isLoading } = useSearchproductQuery({
    keyword: search,
    minValue,
    maxValue,
    category,
  });

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = data?.allProducts?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data?.allProducts?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % data?.allProducts?.length;

    setItemOffset(newOffset);
  };

  return (
    <div>
      <ScrollToTop />

      <div className="flex gap-8 px-4">
        {/* SideBar */}
        <div></div>
        {/* Products Area */}
        {isLoading ? (
          <Loader />
        ) : (
          <div className="w-[1440px] mx-auto py-8">
            <div className="flex relative mt-8">
              <input
                type="text"
                className=" rounded-3xl border-2 border-gray-400  px-4 py-2 peer text-xl font-Urbanist pl-10 w-[400px] bg-white focus:shadow-xl focus:border-black focus:outline-none"
                placeholder="Search For A Product"
                value={search}
                onChange={(e) => handleChange(e)}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="h-[25px] absolute left-2 top-3 text-gray-400 peer-focus:text-black "
              />
            </div>

            {/* Filtering */}
            <div className="flex justify-between items-center flex-row-reverse my-16">
              <div className="mt-16">
                <h3 className="text-2xl font-Urbanist  font-bold">
                  Price Range:{" "}
                  <span className="text-orange-400 ">
                    Rs {minValue} - Rs {maxValue}
                  </span>
                </h3>
                <div className="">
                  <MultiRangeSlider
                    min={1000}
                    max={30000}
                    step={5}
                    minValue={minValue}
                    maxValue={maxValue}
                    ruler={false}
                    style={{ border: "none", boxShadow: "none" }}
                    barInnerColor="	#FF8C00"
                    onInput={(e) => {
                      handleInput(e);
                    }}
                  />
                </div>
              </div>
              {/* Categories */}
              <div>
                <h1 className="text-3xl font-Urbanist font-semibold mb-6">
                  Filter By Category Or Price
                </h1>
                <select
                  className="border border-black p-4 text-xl font-Urbanist rounded-lg font-bold"
                  value={category}
                  onChange={(e) => handleChangeCategory(e)}
                >
                  <option value="">All Items</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="shoes">Shoes</option>
                  <option value="sports">Sports</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 ">
              {data.allProducts.length > 0 ? (
                currentItems.map((pro) => <ProductItem pro={pro} />)
              ) : (
                <div className="w-[1440px] mx-auto mt-20 ">
                  <h1 className="text-black font-bold text-[40px] text-center font-Urbanist max-w-[70%] mx-auto">
                    No Products Found in the Given Category!{" "}
                    <span>Try Changing the Category</span>
                  </h1>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex mx-auto  items-center justify-center gap-4 text-2xl font-Urbanist my-16"
        activeLinkClassName="bg-orange-600  px-4 py-1"
        previousClassName="bg-black hover:bg-white border-2 border-black duration-200 font-semibold p-3 text-white rounded-lg hover:text-black"
        nextClassName="bg-black hover:bg-white border-2 border-black duration-200 font-semibold p-3 text-white rounded-lg hover:text-black"
      />
    </div>
  );
};

export default Shop;
