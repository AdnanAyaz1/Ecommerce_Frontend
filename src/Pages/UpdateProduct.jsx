import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Components/Loader";
import { useEditProductMutation } from "../redux/apis/productApi";

const UpdateProduct = () => {
  const location = useLocation();
  const product = location.state?.product;
  const navigate = useNavigate();

  const [productName, setProductName] = useState(product.name);
  const [productPrice, setProductPrice] = useState(product.price);
  const [productDescription, setProductDescription] = useState(
    product.description
  );
  const [productStock, setProductStock] = useState(product.stock);
  const [category, setCategory] = useState(product.category);
  const [image, setImages] = useState();

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const [updateProduct, { isLoading }] = useEditProductMutation();

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", productPrice);
    formData.append("category", category);
    formData.append("description", productDescription);
    formData.append("stock", productStock);
    for (let i = 0; i <= image?.length; i++) {
      formData.append(`image`, image[i]);
    }

    const response = await updateProduct({ formData, id: product._id });
    if (response?.error?.data?.message) {
      return toast.error(response?.error?.data?.message);
    } else toast.success(response?.data?.msg, { position: "top-center" });

    setCategory("");
    setImages(null);
    setProductDescription("");
    setProductName("");
    setProductPrice("");

    setInterval(() => {
      navigate("/DashBoard");
    }, 10000);
  };

  return (
    <div className="flex items-center justify-center bg-slate-100 min-h-screen">
      <div className="border-2 border-black rounded-2xl w-[600px] p-8 bg-white shadow-xl">
        <h1 className="text-3xl font-Urbanist text-center font-medium underline underline-offset-[10px]">
          Update Product
        </h1>
        <div className="my-8">
          <h1 className="font-Urbanist text-2xl mb-2">Name</h1>
          <input
            type="text"
            placeholder="Enter A Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="p-3 w-full border border-black text-xl font-Urbanist"
          />
        </div>
        {/* Price */}
        <div className="my-8">
          <h1 className="font-Urbanist text-2xl mb-2">Price</h1>
          <input
            type="number"
            placeholder="Enter A Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="p-3 w-full border border-black text-xl font-Urbanist"
          />
        </div>
        {/* Stock */}
        <div className="my-8">
          <h1 className="font-Urbanist text-2xl mb-2">Stock</h1>
          <input
            type="number"
            placeholder="Enter A Product Stock"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
            className="p-3 w-full border border-black text-xl font-Urbanist"
          />
        </div>
        {/* Description */}
        <div className="my-8">
          <h1 className="font-Urbanist text-2xl mb-2">Description</h1>
          <textarea
            placeholder="Enter A Product Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="p-3 w-full border border-black text-xl font-Urbanist"
          />
        </div>
        {/* Category */}
        <div className="my-8">
          <h1 className="font-Urbanist text-2xl mb-2">Category</h1>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-black p-4 text-xl font-Urbanist rounded-lg font-medium"
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="shoes">Shoes</option>
            <option value="sports">Sports</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        {/* Files */}
        <div>
          <h1 className="font-Urbanist text-2xl mb-2">Images</h1>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="p-4 text-xl font-medium font-Urbanist border border-black"
          />
        </div>
        <div className="my-8 ">
          {isLoading ? (
            <Loader />
          ) : (
            <button
              className="text-3xl font-Urbanist bg-black text-white rounded-full p-3 w-full text-center shadow-xl hover:text-black hover:bg-white border-2 border-black duration-200 active:scale-95"
              onClick={handleUpload}
            >
              Update Product
            </button>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateProduct;
