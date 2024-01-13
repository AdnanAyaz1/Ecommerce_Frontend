import React, { useState } from "react";
import Loader from "../Components/Loader";
import { useUpdateUserMutation } from "../redux/apis/userApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Login } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const UpdateProfile = () => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [updateProfile, { isLoading }] = useUpdateUserMutation();
  const dispatch = useDispatch();

  const updateHandler = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("avatar", avatar);

    const response = await updateProfile(formData);

    if (response?.error?.data?.message) {
      return toast.error(response?.error?.data?.message);
    } else toast.success(response?.data?.msg, { position: "top-center" });

    dispatch(
      Login({ user: response?.data?.user, token: response?.data?.token })
    );
  };

  return (
    <div className="mainContainer">
      <div className="formArea">
        <h1 className="heading">Update Profile</h1>
        <div className="bottomLine"></div>
        <h1 className="label mt-8">Name</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter Your Name"
          className="input"
        />
        <h1 className="label mt-8">Email</h1>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="input"
        />
        <div>
          <h1 className="font-Urbanist  text-xl lg:text-2xl mb-2 mt-12 font-semibold">
            Avatar
          </h1>
          <input
            type="file"
            onChange={(e) => setAvatar(e.target.files[0])}
            className="lg:p-4 p-2 text-xl font-medium font-Urbanist border border-black"
          />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <button
            className="font-Urbanist text-2xl bg-black text-white rounded-full p-4 w-full mt-8 hover:bg-white hover:text-black duration-200 active:scale-95 shadow-xl border-2 border-black"
            onClick={updateHandler}
          >
            Update Profile
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
