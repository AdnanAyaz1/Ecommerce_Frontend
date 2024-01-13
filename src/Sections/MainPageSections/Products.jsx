import React, { useState, useEffect } from "react";

import ProductItem from "../../Components/ProductItem";
import { setProducts } from "../../redux/slices/productSlice";
import ReactPaginate from "react-paginate";

import { useGetProductsQuery } from "../../redux/apis/productApi";
import { useDispatch, useSelector } from "react-redux";
const Products = () => {
  const dispatch = useDispatch();
  const { data } = useGetProductsQuery();
  console.log(data)
  dispatch(setProducts(data?.allProducts));
  const product = useSelector((state) => state.products);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = product?.products?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(product?.products?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % product?.products?.length;

    setItemOffset(newOffset);
  };

  return (
    <div className="mt-[120px] px-4">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-4xl font-Urbanist font-semibold ">All Products</h1>
        <div className="h-1 rounded-full w-[10%] mt-1 bg-black/60"></div>
      </div>
      <div>
        <div className="max-w-[1440px] mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-12 pt-12 mb-16 gap-2">
          {product?.products &&
            currentItems.map((pro) => <ProductItem pro={pro} />)}
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
         // pageClassName="bg-orange-400 w-[50px] text-center py-1 font-semibold hover:bg-orange-600 hover:cursor-pointer"
          activeLinkClassName="bg-orange-600  px-4 py-1"
          previousClassName="bg-black hover:bg-white border-2 border-black duration-200 font-semibold p-3 text-white rounded-lg hover:text-black"
          nextClassName="bg-black hover:bg-white border-2 border-black duration-200 font-semibold p-3 text-white rounded-lg hover:text-black"
        />
      </div>
    </div>
  );
};

export default Products;
