import React from 'react'
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDeleteProductMutation } from '../redux/apis/productApi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const AllProductsItem = ({pro}) => {

    const [deleteProduct] = useDeleteProductMutation()
     
    const handleDeleteProduct = async ()=>{
      const response = await deleteProduct(pro._id)
      if (response?.error?.data?.message) {
        return toast.error(response?.error?.data?.message);
      } else {
        toast.success(response?.data?.msg, { position: "top-center" });
      }
    }

    const navigate = useNavigate()
    const handleUpdateProduct = ()=>{
       navigate('/updateProduct',{state:{product:pro}})
    }
  return (
    <div className="grid grid-cols-6 my-2 border-2 items-center bg-white">
    <div>
      <img
        src={pro?.images[0]?.url}
        alt=""
        className=" h-[80px] w-[80px]  lg:h-[150px] lg:w-[170px] text-center"
      />
    </div>
    <div className="lg:text-2xl font-Urbanist font-semibold text-center">
      {pro.name}
    </div>
    <div className="text-center lg:text-2xl font-Urbanist font-bold text-orange-400">
      {pro.price}
    </div>
    <div className="text-center lg:text-2xl font-Urbanist font-bold">
      {pro.stock}
    </div>
    <div className="text-center lg:text-2xl font-Urbanist font-bold text-orange-400">
      {pro.category}
    </div>
    <div className="flex gap-6 items-center justify-center">
      <FontAwesomeIcon
        icon={faEdit}
        className="lg:h-[25px] text-green-500 hover:cursor-pointer active:scale-75"
        onClick={handleUpdateProduct}
      />
      <FontAwesomeIcon
        icon={faTrash}
        className="lg:h-[25px] text-red-400 hover:cursor-pointer active:scale-75"
        onClick={handleDeleteProduct}
      />
    </div>
    <ToastContainer />
  </div>
  )
}

export default AllProductsItem