import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import google from "../assets/google.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLoginUserMutation } from "../redux/apis/userApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Login } from "../redux/slices/userSlice";

const SiginIn = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleSignIn = async () => {
    const data = { email, password };
    const response = await loginUser(data);

    if (response?.error?.data?.message) {
      return toast.error(response?.error?.data?.message);
    } else toast.success(response?.data?.msg, { position: "top-center" });

    setEmail("");
    setPassword("");
    dispatch(
      Login({ user: response?.data?.user, token: response?.data?.token })
    );
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="mainContainer">
      <div className="formArea">
        {/* Heading */}
        <h1 className="heading">Sign In</h1>
        <div className="bottomLine"></div>

        {/* Email Input */}
        <label htmlFor="email" className="label">
          Email
        </label>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Email"
            className="input peer"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="icon peer-focus:text-orange-500"
          />
        </div>

        {/* password */}
        <label htmlFor="password" className="label">
          Password
        </label>
        <div className="inputContainer">
          <input
            type="password"
            placeholder="Password "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input peer"
          />
          <FontAwesomeIcon
            icon={faLock}
            className="icon peer-focus:text-orange-500"
          />

          {/* forgot Password */}
          <Link to="/forgotPassword">
            <h1 className="text-xl font-Urbanist text-blue-600  absolute right-0 bottom-[-60px] hover:cursor-pointer active:scale-95">
              Forgot Password ?
            </h1>
          </Link>
        </div>

        {/* Dont Have an Account Sigin up */}
        <h1 className="text-xl font-medium font-Urbanist mt-20">
          Don't Have an Account ?
          <Link to="/SignUp">
            <span className=" text-blue-600   ml-1   hover:cursor-pointer active:scale-95">
              Sign Up
            </span>
          </Link>
        </h1>

        {/* Login Button */}
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <button className="inputButton" onClick={handleSignIn}>
              Sign In
            </button>

            {/* Login with Google */}
            <h1 className="text-xl text-center font-Urbanist font-bold my-6">
              OR
            </h1>
            <button className="flex items-center justify-center gap-4 border-2 border-black rounded-full p-4 w-full shadow-xl active:scale-95">
              <img src={google} alt="" className="h-[25px] w-[25px]" />
              <h1 className="text-2xl font-Urbanist ">Login With Google</h1>
            </button>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default SiginIn;
