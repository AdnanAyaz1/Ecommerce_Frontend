import React from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const { user } = useSelector((state) => state.users);
  return (
    <div className="bg-slate-100 h-screen  flex items-center justify-center mx-auto">
      <div className="bg-white rounded-lg shadow-xl p-8 lg:w-[60%] w-full">
        <div className="flex items-center gap-8">
          <img
            src={user.user.avatar.url}
            alt=""
            className="h-[120px] w-[120px] rounded-full object-cover"
          />
          <div className="flex flex-col ">
            <h1 className="text-2xl font-Urbanist font-bold ">
              Welcome Back !
            </h1>

            <h1 className="text-4xl font-Urbanist font-bold ">
              {user.user.name}
            </h1>
          </div>
        </div>
        <div className="h-1 rounded-full bg-slate-400 w-full mt-6"></div>

        <div className="mt-12">
          <h1 className="text-3xl font-Urbanist font-semibold">
            Name :{" "}
            <span className="text-orange-600 font-medium text-4xl ">
              {user.user.name}
            </span>
          </h1>
          <h1 className="text-3xl font-Urbanist font-semibold mt-12">
            Email :{" "}
            <span className="text-orange-600 font-medium text-4xl ">
              {user.user.email}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
