import React from "react";

const Greeting = () => {
  return (
    <>
      <div className="w-full shadow-xl rounded-md bg-red-900 h-40 flex justify-between items-center m-3">
        <div>
          <h2 className="text-2xl font-semibold text-white px-12">
            Hello, Abhi Yadav!
          </h2>
          <h4 className="text-md text-white px-12 py-1">
            You have 4 active Companies
          </h4>
        </div>
        <div className="flex justify-between mr-14 gap-6">
          <select
            name="Companies"
            id="Company"
            className="text-red-600 px-2 py-2  rounded-md font-semibold"
          >
            <option
              value="MarcomUSA"
              className="text-red-600 px-2 py-2  rounded-md font-semibold"
            >
              MarcomUSA
            </option>
            <option
              value="Companies"
              className="text-red-600 px-2 py-2  rounded-md font-semibold"
            >
              Business Optima
            </option>
          </select>
          <button className="bg-gray-100 bg-opacity-30 text-white font-medium  py-2 pl-2 pr-10 rounded-lg shadow-lg  text-left">
            All packages
          </button>
        </div>
      </div>
    </>
  );
};

export default Greeting;
