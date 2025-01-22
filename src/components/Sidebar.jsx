import React from "react";
import {
  FaHome,
  FaUsers,
  FaNetworkWired,
  FaCalendarAlt,
  FaUser,
  FaBook,
  FaFileAlt,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { icon: <FaHome />, label: "Home", path: "/dashboard" },
    { icon: <FaUsers />, label: "Users", path: "/users" },
    { icon: <FaNetworkWired />, label: "Network", path: "/network" },
    { icon: <FaCalendarAlt />, label: "Calendar", path: "/calender" },
    { icon: <FaUser />, label: "Profile", path: "/profile" },
    { icon: <FaBook />, label: "Library", path: "/library" },
    { icon: <FaFileAlt />, label: "Files", path: "/files" },
    { icon: <FaCog />, label: "Settings", path: "/settings" },
    { icon: <FaQuestionCircle />, label: "Help", path: "/help" },
  ];

  return (
    <div className="w-20 h-[100vh] bg-white flex flex-col items-center py-2 border-r border-gray-200 absolute left-0 top-22">
      <div className="mb-1">
        <div className="text-2xl text-gray-500">≡</div>
      </div>
      <div className="flex flex-col items-center ">
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `w-10 h-10 flex items-center justify-center rounded-md ${
                isActive
                  ? "bg-red-100 text-red-600 border-l-4 border-red-600"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            {item.icon}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
