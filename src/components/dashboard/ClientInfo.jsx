import React from "react";
import { Download, ChevronDown } from "lucide-react";

const ClientInfo = () => {
  return (
    <div className="m-4 ">
      <div className="flex items-center justify-between">
        <div className="grid grid-cols-3 gap-3 border p-2 rounded bg-white">
          <div>
            <div className="text-[13px] font-normal text-gray-900">
              Client Name:{" "}
              <span className="text-gray-600 font-normal"> Abhi Yadav</span>
            </div>
          </div>
          <div>
            <div className="text-[13px] text-gray-900">
              Client Department :{" "}
              <span className="text-gray-600 font-normal">Devlopment</span>
            </div>
          </div>
          <div>
            <div className="text-[13px] text-gray-900">
              Client ID :
              <span className="text-gray-600 font-normal"> CLNT_007</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 ">
          <div className="flex items-center space-x-2 text-[13px] border rounded-lg px-2 py-2 bg-white font-normal">
            <input type="date" defaultValue="2025-02-08" className="" />
            <span>-</span>
            <input type="date" className="" defaultValue="2025-02-10" />
          </div>
          <select className="flex items-center space-x-2 text-[13px] bg-white  text-gray-600 border rounded-lg px-4 py-2">
            <option value="">Type</option>
            <option value="">Type 1</option>
          </select>
          <select className="flex items-center space-x-2 text-[13px] bg-white  text-gray-600 border rounded-lg px-4 py-2">
            <option value="">Data Scope</option>
            <option value="scope 1">scope 1</option>
          </select>

          <button className="flex items-center text-[13px] bg-white space-x-2 text-gray-600 border font-semibold rounded-lg px-4 py-2">
            <Download className="w-3 h-3" />
            <span>Export</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
