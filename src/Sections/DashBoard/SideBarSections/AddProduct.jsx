import { useState } from "react";
import { useAddProductMutation } from "../../../redux/apis/productApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../../Components/Loader";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [category, setCategory] = useState("");
  const [productStock, setProductStock] = useState("");
  const [image, setImages] = useState("");

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const [addProduct, { isLoading }] = useAddProductMutation();

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("price", productPrice);
    formData.append("stock", productStock);
    formData.append("category", category);
    formData.append("description", productDescription);
    for (let i = 0; i <= image?.length; i++) {
      formData.append(`image`, image[i]);
    }

    const response = await addProduct(formData);

    if (response?.error?.data?.message) {
      return toast.error(response?.error?.data?.message);
    } else toast.success(response?.data?.msg, { position: "top-center" });

    setCategory("");
    setImages(null);
    setProductDescription("");
    setProductName("");
    setProductPrice("");
  };

  return (
    <div className="flex items-center justify-center bg-slate-100  w-full p-8 ">
      <div className="border-2 border-black rounded-2xl  w-[500px] mx-auto lg:w-[600px] p-8 bg-white shadow-xl  ">
        <h1 className="text-2xl lg:text-3xl font-Urbanist text-center font-medium underline underline-offset-[10px]">
          Add a Product
        </h1>
        <div className="my-8">
          <h1 className="font-Urbanist  text-xl lg:text-2xl mb-2">Name</h1>
          <input
            type="text"
            placeholder="Enter A Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="lg:p-3 p-2 w-full border border-black text-xl font-Urbanist"
          />
        </div>
        {/* Price */}
        <div className="my-8">
          <h1 className="font-Urbanist  text-xl lg:text-2xl mb-2">Price</h1>
          <input
            type="number"
            placeholder="Enter A Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="lg:p-3 p-2 w-full border border-black text-xl font-Urbanist"
          />
        </div>
        {/* Stock */}
        <div className="my-8">
          <h1 className="font-Urbanist  text-xl lg:text-2xl mb-2">Stock</h1>
          <input
            type="number"
            placeholder="Enter A Product Stock"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
            className="lg:p-3 p-2 w-full border border-black text-xl font-Urbanist"
          />
        </div>
        {/* Description */}
        <div className="my-8">
          <h1 className="font-Urbanist  text-xl lg:text-2xl mb-2">
            Description
          </h1>
          <textarea
            placeholder="Enter A Product Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="lg:p-3 p-2 w-full border border-black text-xl font-Urbanist"
          />
        </div>
        {/* Category */}
        <div className="my-8">
          <h1 className="font-Urbanist  text-xl lg:text-2xl mb-2">Category</h1>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-black lg:p-4 p-2 text-xl font-Urbanist rounded-lg font-medium"
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
          <h1 className="font-Urbanist  text-xl lg:text-2xl mb-2">Images</h1>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="lg:p-4 p-2 text-xl font-medium font-Urbanist border border-black"
          />
        </div>
        <div className="my-8 ">
          {isLoading ? (
            <Loader />
          ) : (
            <button
              className="lg:text-3xl text-2xl font-Urbanist bg-black text-white rounded-full p-3 w-full text-center shadow-xl hover:text-black hover:bg-white border-2 border-black duration-200 active:scale-95"
              onClick={handleUpload}
            >
              Add Product
            </button>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
