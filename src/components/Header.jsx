import React from "react";
import { Search, ChevronDown, Filter } from "lucide-react";
import LogoIcon from "../assets/logo.png";
import BoxIcon from "../assets/boxicon.png";
import { GoBell } from "react-icons/go";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiSearch2Line } from "react-icons/ri";
import ProfilePhoto from "../assets/profilePhoto.png";
import CircleIcon from "../assets/circleIcon.png";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-1">
      <div className="flex items-center lg:justify-evenly lg:gap-10 ">
        <img src={LogoIcon} alt="logo" />
        <div className="flex items-center flex-1 mx-12">
          <div className="flex items-center bg-gray-100 rounded-md  flex-1 max-w-64 justify-evenly">
            <div>
              <RiSearch2Line className="flex-1 text-gray-600  text-xl ml-1" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none flex-1 pl-2"
            />
            <button className="bg-blue-500 text-white px-2 py-1 flex items-center rounded-r-lg">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex items-center md:gap-6 ">
          <div className="hidden items-center gap-6 md:flex">
            <button>
              <img src={BoxIcon} alt="Box icon" className="w-8 h-8" />
            </button>
            <button>
              <img src={CircleIcon} alt="" className="w-8 h-8" />
            </button>
            <button>
              <div className="relative w-8 border-gray-300 border-[1px] h-8 flex items-center justify-center bg-gray-100 rounded-md">
                <TfiHeadphoneAlt className="text-gray-400 text-sm" />

                <div className="absolute top-1 right-0 w-3 h-3 bg-red-700 text-white text-[8px] font-normal flex items-center justify-center rounded-full">
                  1
                </div>
              </div>
            </button>
            <button>
              <div className="relative w-8 border-gray-300 border-[1px] h-8 flex items-center justify-center bg-gray-100 rounded-md">
                <GoBell className="text-gray-400 text-sm" />

                <div className="absolute top-1 right-0 w-3 h-3 bg-red-700 text-white text-[8px] font-normal flex items-center justify-center rounded-full">
                  2
                </div>
              </div>
            </button>
          </div>
          <div className="flex items-center justify-between gap-1 ">
            <img
              src={ProfilePhoto}
              alt="Profile"
              className="w-10 h-10 rounded-md "
            />
            <div className="flex flex-col ">
              <div className="flex justify-between">
                <div className="font-semiBold text-[.9rem] text-gray-500">
                  Abhi Yadav
                </div>

                <ChevronDown className="w-4 h-4 ml-2 text-gray-800" />
              </div>
              <div className="text-[10px] text-gray-400">
                FrontEnd Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
