import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiMinusCircle } from "react-icons/bi";

const CampaignStatus = () => {
  const campaignData = [
    { title: "Campaign Sent", count: 0, date: "From Dec 1" },
    { title: "Delivered", count: 0, date: "From Dec 1" },
    { title: "Opened", count: 0, date: "From Dec 1" },
    { title: "Replied", count: 0, date: "From Dec 1" },
    { title: "Interested", count: 0, date: "From Dec 1" },
    { title: "% Bounced", count: 0, date: "From Dec 1" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg m-4 p-3">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold">Campaign Status</h2>
          <select className="border text-[13px] px-3 py-1 rounded-md">
            <option>Month</option>
            <option>Week</option>
            <option>Day</option>
          </select>
        </div>
        <div>
          <div className="text-gray-500 flex items-center ">
            <FiSettings className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {campaignData.map((item, index) => (
          <div key={index} className="text-center border-r">
            <div className="flex justify-between px-2 items-center gap-2  ">
              <span className="text-gray-700 font-medium">{item.title}</span>
              <span className="bg-red-500 text-white gap-2 text-sm px-2 py-1 rounded-md flex items-center">
                <FaChevronDown className="ml-1 w-3 h-3" />
                {item.count}
              </span>
            </div>
            <div className="flex justify-between mt-4 px-2 items-center gap-2  ">
              <p className="text-gray-700 mt-2">0</p>
              <p className="text-gray-700 mt-2">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignStatus;
