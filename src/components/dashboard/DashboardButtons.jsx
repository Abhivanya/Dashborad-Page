import React from "react";

const DashboardButtons = ({ activeDashboard, changeDashboard }) => {
  const buttons = [
    { title: "Total Campaigns", id: 1 },
    { title: "Deals Dashboard", id: 2 },
    { title: "Leads Dashboard", id: 3 },
    { title: "Project Dashboard", id: 4 },
    { title: "Campaign Sent", id: 5 },
    { title: "Campaign Draft", id: 6 },
    { title: "Campaigns Feedback", id: 7 },
  ];
  return (
    <div className="m-4 flex items-center justify-between px-2 ">
      {buttons.map((btn) => (
        <button
          className={`text-gray-800 font-normal px-4 py-2 rounded-sm ${
            activeDashboard === btn.id && "bg-white border-b-2  border-red-600"
          } text-shadow-md`}
          key={btn.id}
          onClick={() => changeDashboard(btn.id)}
        >
          {btn.title}
        </button>
      ))}
    </div>
  );
};

export default DashboardButtons;
