import React, { useState } from "react";
import {
  useResendVerificationOtpMutation,
  useVerifyMutation,
} from "../redux/apis/userApi";
import Loader from "../Components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Login } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const VerifyAccount = () => {
  const [otp, setOtp] = useState();

  const location = useLocation();
  const name = location?.state?.name;

  const [verify, { isLoading }] = useVerifyMutation();
  const [resend, { isLoading: Loading }] = useResendVerificationOtpMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const verifyHandler = async () => {
    const response = await verify({ otp });
    if (response?.error?.data?.message) {
      return toast.error(response?.error?.data?.message);
    } else toast.success(response?.data?.msg, { position: "top-center" });
    setOtp("");

    dispatch(
      Login({ user: response?.data?.user, token: response?.data?.token })
    );
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const resetOtpHandler = async () => {
    const response = await resend({ name });
    if (response?.error?.data?.message) {
      return toast.error(response?.error?.data?.message);
    } else toast.success(response?.data?.msg, { position: "top-center" });
  };

  return (
    <div className="flex w-full h-screen bg-slate-100 items-center justify-center">
      <div className="w-[500px] border-2 border-black rounded-lg p-8 py-16 bg-white shadow-xl">
        <h1 className="font-Urbanist text-xl lg:text-3xl text-center font-semibold underline underline-offset-8 ">
          Verify Account
        </h1>
        <h1 className="text-2xl font-Urbanist text-gray-700 mt-20 font-medium mb-2 ">
          Enter OTP
        </h1>
        <input
          type="number"
          className="p-3 border border-black w-[100%] font-Urbanist text-lg"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        {isLoading || Loading ? (
          <Loader />
        ) : (
          <button
            className="my-8 mt-20 bg-black text-white rounded-full text-2xl font-Urbanist font-semibold w-full text-center py-3 hover:bg-white hover:text-black duration-200 border-2 border-black shadow-xl"
            onClick={resetOtpHandler}
          >
            Resend OTP
          </button>
        )}
        <button
          className=" bg-black text-white rounded-full text-2xl font-Urbanist font-semibold w-full text-center py-3 hover:bg-white hover:text-black duration-200 border-2 border-black shadow-xl"
          onClick={verifyHandler}
        >
          Verify Account
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default VerifyAccount;
