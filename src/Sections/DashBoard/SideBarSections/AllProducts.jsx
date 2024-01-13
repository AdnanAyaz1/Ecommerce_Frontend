import React, { useState, useEffect } from "react";
import {
  useGetProductsQuery,
  useSearchproductQuery,
} from "../../../redux/apis/productApi";
import ReactPaginate from "react-paginate";
import AllProductsItem from "../../../Components/AllProductsItem";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MultiRangeSlider from "multi-range-slider-react";

const headings = ["Image", "Name", "Price", "Stock", "Category", "Edit"];

const AllProducts = () => {
  const [search, setSearch] = useState("");
  const [minValue, set_minValue] = useState(1000);
  const [maxValue, set_maxValue] = useState(30000);
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(1);

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
    stock,
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
    <div className="p-8 bg-slate-100">
      {/* Search */}

      <div className=" ">
        <div className="flex relative mt-8">
          <input
            type="text"
            className=" rounded-3xl border-2 border-gray-400  px-4 py-2 peer text-xl font-Urbanist pl-10 w-[400px] bg-white active:shadow-xl focus:border-black focus:outline-none"
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
          <div className="">
            <h3 className="text-xl font-Urbanist  font-bold">
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
            <h1 className="text-2xl font-Urbanist font-semibold mb-4">
              Filter By Category Or Price
            </h1>
            <select
              className="border border-black p-3 text-lg font-Urbanist  font-bold"
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
      </div>

      <div className="flex gap-8">
        <h1
          className="hover:cursor-pointer text-white bg-red-400 p-2 shadow-xl rounded-sm active:scale-90  font-Urbanist text-xl mb-8 font-semibold  underline-offset-8"
          onClick={() => setStock(0)}
        >
          Out Of Stock Products
        </h1>
        <h1
          className="hover:cursor-pointer bg-blue-500 text-white p-2 shadow-xl rounded-sm active:scale-90  font-Urbanist text-xl mb-8 font-semibold"
          onClick={() => setStock(1)}
        >
          All Products
        </h1>
      </div>

      <div className="grid grid-cols-6 border-2 border-black bg-black/80  py-2">
        {headings.map((head) => (
          <div className=" text-xl xl:text-3xl font-Urbanist font-semibold text-center text-white">
            {head}
          </div>
        ))}
      </div>
      <div className=" border-black   h-[730px] overflow-y-auto ">
        {data?.allProducts &&
          currentItems.map((pro) => {
            return <AllProductsItem pro={pro} />;
          })}
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="flex mx-auto  items-center justify-center gap-4 lg:text-2xl font-Urbanist mt-16"
          // pageClassName="bg-orange-400 w-[50px] text-center py-1 font-semibold hover:bg-orange-600 hover:cursor-pointer"
          activeLinkClassName="bg-orange-600  px-4 py-1"
          previousClassName="bg-black hover:bg-white border-2 border-black duration-200 font-semibold p-3 text-white rounded-lg hover:text-black"
          nextClassName="bg-black hover:bg-white border-2 border-black duration-200 font-semibold p-3 text-white rounded-lg hover:text-black"
        />
      </div>
    </div>
  );
};

export default AllProducts;
