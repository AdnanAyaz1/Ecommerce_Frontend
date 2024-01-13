import { FooterLinks } from "../Constants/index.js";
import youtube from "../assets/youtube.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

const icons = [youtube, facebook, instagram, twitter];

const Footer = () => {
  return (
    <div className="bg-black ">
      <div className="max-w-[1440px] mx-auto  flex flex-col gap-6 lg:flex-row  justify-between py-16 px-8 ">
        <div className="flex gap-20">
          {/* 1st col */}
          <div className="space-y-2">
            {FooterLinks.first.map((link) => {
              return (
                <h1
                  className="text-white font-Oswald text-xl hover:cursor-pointer hover:text-gray-400 tracking-wider"
                  key={link}
                >
                  {link}
                </h1>
              );
            })}
          </div>
          {/* 2nd col */}
          <div className="space-y-2">
            {FooterLinks.second.map((link, i) => {
              const color = i == 0 ? "white" : "gray-600";
              const text = `text-${color} font-Oswald text-xl hover:cursor-pointer hover:text-gray-400 tracking-wider`;
              return (
                <h1 className={text} key={link}>
                  {link}
                </h1>
              );
            })}
          </div>
          {/* 3rd col */}
          <div className="space-y-2">
            {FooterLinks.third.map((link, i) => {
              const color = i == 0 ? "white" : "gray-600";
              const text = `text-${color} font-Oswald text-xl hover:cursor-pointer hover:text-gray-400 tracking-wider`;
              return (
                <h1 className={text} key={link}>
                  {link}
                </h1>
              );
            })}
          </div>
        </div>
        <div className="flex gap-4">
          {icons.map((icon) => {
            return (
              <img
                src={icon}
                alt=""
                className="text-white p-2 bg-gray-500 rounded-full h-[40px] w-[40px] hover:bg-gray-300 hover:cursor-pointer"
                key={icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
