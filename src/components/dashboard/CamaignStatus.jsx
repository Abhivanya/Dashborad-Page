import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiMinusCircle } from "react-icons/bi";

const CampaignStatus = () => {
  const campaignData = [
    { title: "Campaign Sent", count: 10, date: "From Dec 1" },
    { title: "Delivered", count: 8, date: "From Dec 1" },
    { title: "Opened", count: 7, date: "From Jun 3" },
    { title: "Replied", count: 8, date: "From Sep 11" },
    { title: "Interested", count: 4, date: "From Oct 3" },
    { title: "% Bounced", count: 8, date: "From Jan 14" },
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

              {/* <FaChevronDown className="ml-1 w-3 h-3" />
                {item.count} */}
              <select className="bg-red-500 text-white gap-2 text-sm px-2 py-1 rounded-md flex items-center">
                <option value="" defaultChecked>
                  {item.count}
                </option>
                <option value="1">1</option>

                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
              </select>
            </div>
            <div className="flex justify-between mt-4 px-2 items-center gap-2  ">
              <p className="text-gray-700 mt-2">{item.count}</p>
              <p className="text-gray-700 mt-2">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignStatus;
