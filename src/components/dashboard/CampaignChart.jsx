import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { IoMdResize } from "react-icons/io";

const data = [
  { name: "Sun", OpenRate: 80, ClickThroughRate: 40 },
  { name: "Mon", OpenRate: 30, ClickThroughRate: 20 },
  { name: "Tue", OpenRate: 60, ClickThroughRate: 70 },
  { name: "Wed", OpenRate: 100, ClickThroughRate: 50 },
  { name: "Thu", OpenRate: 70, ClickThroughRate: 60 },
  { name: "Fri", OpenRate: 90, ClickThroughRate: 80 },
  { name: "Sat", OpenRate: 100, ClickThroughRate: 70 },
];

const CampaignOverview = () => {
  return (
    <div className="p-4 bg-white rounded-md text-gray-700rounded-lg shadow-md h-[400px] relative w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">
          Campaign Overview
        </h2>
      </div>

      <div className="absolute top-4 right-4 ">
        <div className="flex justify-between items-center gap-4">
          <select className="bg-gray-100 text-gray-500 px-3 py-2 shadow-md rounded-md font-medium">
            <option value="">Last 30 Days</option>
          </select>
          <IoMdResize className="text-gray-500" />
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              wrapperStyle={{
                paddingLeft: 20,
              }}
            />
            <Bar dataKey="OpenRate" fill="#058F81" />
            <Bar dataKey="ClickThroughRate" fill="#F9CB2D" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CampaignOverview;
