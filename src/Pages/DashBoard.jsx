import React from "react";
import SideBar from "../Sections/DashBoard/SideBar";
import SideBarPageContent from "../Sections/DashBoard/SideBarPageContent";
import {
  faHamburger,
  faCross,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";
const DashBoard = () => {
  const [sidebar, showsidebar] = useState(0);
  const { user } = useSelector((state) => state.users);

  return (
    <>
      {user?.user?.role == "admin" ? (
        <div className="flex w-full ">
          <div className="hidden xl:block">
            <SideBar></SideBar>
          </div>
          <div className="xl:hidden w-[12%]  bg-black text-center py-3  h-screen">
            <FontAwesomeIcon
              icon={sidebar ? faClose : faHamburger}
              className={`h-[30px] w-[30px] hover:cursor-pointer z-20 relative text-white`}
              onClick={() => showsidebar((pre) => !pre)}
            />
            {sidebar ? (
              <div
                className="fixed  bg-black/70 top-[-5px]  inset-0"
                onClick={() => showsidebar(0)}
              >
                <SideBar />
              </div>
            ) : null}
          </div>
          <div className="w-full ">
            <SideBarPageContent />
          </div>
        </div>
      ) : (
        <div className="text-[70px] font-semibold text-red-400 font-Urbanist text-center">
          You Are Not Authorized To Access This Page
        </div>
      )}
    </>
  );
};

export default DashBoard;
