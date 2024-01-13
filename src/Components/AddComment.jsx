import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

import { useSelector } from "react-redux";
import { useAddReviewMutation } from "../redux/apis/productApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddComment = ({ pro }) => {
  const [ratings, setRatings] = useState(0);
  const [comment, setComment] = useState("");
  const { user } = useSelector((state) => state.users);

  const options = {
    edit: true,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: 40,
    isHalf: true,
    value: ratings,
  };

  const body = {
    name: user?.name,
    ratings,
    comment,
  };
  const id = pro._id;
  const [addReview, { isLoading }] = useAddReviewMutation();
  const handleSubmit = async () => {
    const data = { id, body };
    const response = await addReview(data);
    if (response?.error?.data?.message) {
      return toast.error(response?.error?.data?.message);
    } else toast.success(response?.data?.msg, { position: "top-center" });
    setRatings(0);
    setComment("");
  };
  const ratingChange = (newRatings) => {
    setRatings(newRatings);
  };

  return (
    <div className="max-w-[1440px] mx-auto my-8">
      <h1 className="font-Urbanist text-3xl font-bold ">Add A Review</h1>

      {user?.user?.name?.length > 0 ? (
        <div>
          <textarea
            className="border-2 border-black rounded-lg h-[120px] mt-2 w-1/2 p-4 text-xl font-Urbanist"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <ReactStars {...options} onChange={ratingChange} />

          <button
            className="bg-orange-500 hover:bg-orange-600 duration-200 font-Urbanist text-2xl px-8 py-2 rounded-full shadow-xl active:scale-90 mt-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      ) : (
        <h1 className="text-2xl mt-4 text-red-400 font-Urbanist">
          You Must Be Logged In To Post A Review
        </h1>
      )}
      <ToastContainer />
    </div>
  );
};

export default AddComment;
