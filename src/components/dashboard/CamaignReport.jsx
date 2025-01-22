import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import NewsletterCard from "../NewsLetterCard";
import { RiDownloadFill } from "react-icons/ri";
const CamaignReport = () => {
  return (
    <div className="m-4 bg-white p-4 rounded-md shadow-md min-h-[700px]">
      <div className="flex justify-between w-full pb-2">
        <div className="flex justify-between  mb-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Campaign Overview
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex justify-between gap-4 items-center">
            <div className="flex items-center border border-gray-300 rounded-md px-4 py-2 shadow-sm w-[250px] max-w-sm">
              <RiSearch2Line className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Type a Campaign Name"
                className="flex-grow outline-none text-gray-600 text-sm"
              />
            </div>
            <LuSettings2 size={28} className="text-gray-700 mr-2" />
          </div>
          <div className="flex text-red-500 font-semibold items-center gap-4 cursor-pointer">
            <RiDownloadFill />
            Dwonload Delivery Report
          </div>
        </div>
      </div>
      <NewsletterCard social={"email"} isComplete={true} />
      <NewsletterCard social={"youtube"} isComplete={false} />
      <NewsletterCard social={"linkedin"} isComplete={true} />
    </div>
  );
};

export default CamaignReport;
