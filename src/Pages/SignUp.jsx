import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAddUserMutation } from "../redux/apis/userApi";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Components/Loader";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const navigate = useNavigate();

  const [addUser, { isLoading }] = useAddUserMutation();

  const handleSignUp = async () => {
    const data = { name, email, password, confirmPassword };
    const response = await addUser(data);

    if (response?.error?.data?.message) {
      return toast.error(response?.error?.data?.message);
    } else toast.success(response?.data?.msg, { position: "top-center" });

    setemail("");
    setpassword("");
    setname("");
    setconfirmPassword("");

    setTimeout(() => {
      navigate("/verifyAccount", {
        state: { name: response?.data?.user?.name },
      });
    }, 2000);
  };

  return (
    <div className="mainContainer">
      <div className="formArea">
        <h1 className="heading">Sign Up</h1>
        <div className="bottomLine"></div>

        {/* Name */}
        <label htmlFor="email" className="label">
          Name
        </label>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Name"
            className="input peer"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faUser}
            className="icon peer-focus:text-orange-500"
          />
        </div>

        {/* Email */}

        <label htmlFor="email" className="label ">
          Email
        </label>
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
        {/* password */}
        <label htmlFor="email" className="label ">
          Password
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
          {/* forgot Password */}
        </div>

        {/* Confirm Password */}
        <label htmlFor="Confirm password" className="label">
          Confirm Password
        </label>
        <div className="inputContainer ">
          <input
            type="text"
            placeholder="Confirm Password"
            className="input peer"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faLock}
            className="icon peer-focus:text-orange-500"
          />
        </div>

        {/* Dont Have an Account Sigin up */}
        <h1 className="text-xl font-semibold font-Urbanist mt-20 ">
          Already Have an Account ?
          <Link to="/Registration">
            <span className=" text-blue-600  ml-1 over:cursor-pointer active:scale-95">
              Sign In
            </span>
          </Link>
        </h1>
        {/* Login Button */}
        {isLoading ? (
          <Loader />
        ) : (
          <button
            className="inputButton"
            onClick={handleSignUp}
          >
            Sign UP
          </button>
        )}
        {/* Login with Google */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
