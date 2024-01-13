import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useResetPasswordMutation } from "../redux/apis/userApi";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";
import { faLock, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResetPassword = () => {
  const [otp, setotp] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmpassword] = useState("");
  const navigate = useNavigate();

  const [updatepassword, { isLoading }] = useResetPasswordMutation();

  const updateHandler = async () => {
    const response = await updatepassword({
      resetPasswordToken: otp,
      password,
      confirmPassword,
    });

    if (response?.error?.data?.message) {
      return toast.error(response?.error?.data?.message);
    } else toast.success(response?.data?.msg, { position: "top-center" });

    setTimeout(() => {
      navigate("/Registration");
    }, 2000);
  };

  return (
    <div className="mainContainer">
      <div className="formArea">
        <h1 className="heading">Reset Password</h1>
        <div className="bottomLine"></div>
        <h1 className="label">OTP</h1>
        <div className="inputContainer">
          <input
            type="number"
            value={otp}
            onChange={(e) => {
              setotp(e.target.value);
            }}
            className="input"
            placeholder="Enter Otp"
          />
        </div>
        {/* password */}
        <label htmlFor="email" className="label ">
          New Password
        </label>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Password"
            className="input peer"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faLock}
            className="icon peer-focus:text-orange-500"
          />
        </div>
        <h1 className="label">Confirm New Password</h1>

        <div className="inputContainer ">
          <input
            type="text"
            placeholder="Confirm Password"
            className="input peer"
            value={confirmPassword}
            onChange={(e) => setconfirmpassword(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faLock}
            className="icon peer-focus:text-orange-500"
          />
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <button className="inputButton" onClick={updateHandler}>
            Reset Password
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
