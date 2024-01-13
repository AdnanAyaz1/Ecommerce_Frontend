import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faKey, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../Components/Loader";
import { useUpdatePasswordMutation } from "../redux/apis/userApi";

const UpdatePassword = () => {
  const [password, setpassword] = useState("");
  const [oldPassword, setoldpassword] = useState("");
  const [confirmPassword, setconfirmpassword] = useState("");

  const [updatepassword, { isLoading }] = useUpdatePasswordMutation();

  const updateHandler = async () => {
    const response = await updatepassword({
      oldPassword,
      newPassword: password,
      confirmPassword,
    });

    if (response?.error?.data?.message) {
      return toast.error(response?.error?.data?.message);
    } else toast.success(response?.data?.msg, { position: "top-center" });
  };

  return (
    <div className="mainContainer ">
      <div className="formArea">
        <h1 className="heading">Update Password</h1>
        <div className="bottomLine"></div>
        <h1 className="label">Old Password</h1>
        <div className="inputContainer">
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => {
              setoldpassword(e.target.value);
            }}
            placeholder="Enter Old Password"
            className="input peer"
          />
          <FontAwesomeIcon
            icon={faKey}
            className="icon peer-focus:text-orange-600"
          />
        </div>
        <h1 className="label">New Password</h1>
        <div className="inputContainer">
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="input peer"
            placeholder="Enter New Password"
          />
          <FontAwesomeIcon
            icon={faLock}
            className="icon peer-focus:text-orange-600"
          />
        </div>

        <h1 className="label">Confirm New Password</h1>
        <div className="inputContainer">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setconfirmpassword(e.target.value)}
            className="input peer"
            placeholder="Confirm New Password"
          />
          <FontAwesomeIcon
            icon={faLock}
            className="icon peer-focus:text-orange-600"
          />
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <button className="inputButton" onClick={updateHandler}>
            Update Password
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default UpdatePassword;
