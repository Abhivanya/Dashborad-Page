import React from "react";
import {
  FaEnvelope,
  FaCalendarAlt,
  FaClock,
  FaPaperPlane,
  FaInfoCircle,
  FaUserAlt,
  FaFlag,
  FaSyncAlt,
  FaEllipsisH,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";

const NewsletterCard = ({ social, isComplete }) => {
  const socials = {
    email: {
      title: "Email",
      icon: <FaEnvelope size={16} />,
    },
    youtube: {
      title: "YouTube",
      icon: <FaYoutube />,
    },
    linkedin: {
      title: "LinkedIn",
      icon: <FaLinkedin />,
    },
  };
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 flex justify-between items-center  w-full">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold mb-2">Newsletter</h2>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            {socials[social].icon}
            <span>{socials[social].title}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            <span>24 December</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock />
            <span>21:16</span>
          </div>
        </div>
        <div className="flex gap-10 mt-2">
          <div className="flex gap-2 items-center text-sm">
            <div className="p-2 bg-red-400 text-gray-50 rounded-md">
              <FaPaperPlane size={20} />
            </div>
            <div className="flex flex-col text-gray-500 ">
              <span>100 Sent</span>
            </div>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <div className="p-2 bg-red-400 text-gray-50 rounded-md">
              <FaEnvelope size={20} />
            </div>
            <div className="flex flex-col text-gray-500 ">
              <span>0%</span>
              <span>Delivered</span>
            </div>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <div className="p-2 bg-red-400 text-gray-50 rounded-md">
              <FaInfoCircle size={20} />
            </div>
            <div className="flex flex-col text-gray-500 ">
              <span>1/2 Clicks</span>
            </div>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <div className="p-2 bg-red-400 text-gray-50 rounded-md">
              <FaUserAlt size={20} />
            </div>
            <div className="flex flex-col text-gray-500 ">
              <span>0%</span>
              <span>Unsubscribed</span>
            </div>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <div className="p-2 bg-red-400 text-gray-50 rounded-md">
              <FaInfoCircle size={20} />
            </div>
            <div className="flex flex-col text-gray-500 ">
              <span>0%</span>
              <span> Spam Complaints</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <span
          className={` ${
            isComplete
              ? "text-green-700 bg-green-100"
              : "text-red-500 bg-red-300 "
          } px-3 py-1 rounded-md text-sm font-medium flex items-center`}
        >
          <span className="mr-1">{isComplete ? "Completed" : "Cancelled"}</span>
          {isComplete ? <FaFlag /> : <IoMdInformationCircle size={20} />}
        </span>
        <div className="flex gap-3 justify-end">
          <button className="p-2 bg-gray-200 rounded-full">
            <FaSyncAlt className="text-gray-500" />
          </button>
          <button className="p-2 bg-gray-100 rounded-full">
            <FaEllipsisH className="text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCard;
