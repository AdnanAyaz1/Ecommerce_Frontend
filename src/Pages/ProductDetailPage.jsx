import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Details from "../Sections/ProductDetailsSections/Details";
import SimilarProducts from "../Sections/ProductDetailsSections/SimilarProducts";

import Comments from "../Sections/ProductDetailsSections/Comments";
import ScrollToTop from "../Components/ScrollToTop";

const ProductDetailPage = () => {
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div>
      <ScrollToTop />

      <div className="max-w-[1440px] mx-auto">
        <Details pro={product} />
        <SimilarProducts cat={product.category} />
        <Comments pro={product} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
