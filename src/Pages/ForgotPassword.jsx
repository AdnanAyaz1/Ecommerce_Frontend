import React, { useState } from "react";
import { useForgotPasswordMutation } from "../redux/apis/userApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ForgotPassword = () => {
  const [email, setemail] = useState("");
  const [forgotpassword, { isLoading }] = useForgotPasswordMutation();

  const navigate = useNavigate();

  const forgotPasswordHandler = async () => {
    const response = await forgotpassword({ email });

    if (response?.error?.data?.message) {
      return toast.error(response?.error?.data?.message);
    } else toast.success(response?.data?.msg, { position: "top-center" });

    setTimeout(() => {
      navigate("/resetPassword");
    }, 2000);
  };

  return (
    <div className="mainContainer">
      <div className="formArea">
        <h1 className="heading">Forgot Password</h1>
        <div className="bottomLine"></div>
        <h1 className="label ">Enter Email</h1>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="input peer"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="icon peer-focus:text-orange-500"
          />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <button className="inputButton" onClick={forgotPasswordHandler}>
            Confim Email
          </button>
        )}
      </div>
      <ToastContainer
        position="top-center"
        className={`text-xl font-Urbanist flex-1`}
      />
    </div>
  );
};

export default ForgotPassword;
