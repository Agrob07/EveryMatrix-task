import React from "react";
import {
  FaChartLine,
  FaRegMoneyBillAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";

const Stats = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:h-52 ">
      <div className="flex flex-col items-center justify-center border-x-2 w-full lg:w-1/4 ">
        <span className="text-5xl font-bold text-[#72cfcf] mb-2 ">25</span>
        <span className="flex items-center">
          <MdOutlineDone className="text-[#72cfcf] mr-2" />
          <span className="text-lg text-gray-500 font-medium"> SIGNUPS</span>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center border-x-2w-full lg:w-1/4 ">
        <span className="text-5xl font-bold text-[#3a8bbf]  mb-2">$1000</span>
        <span className="flex items-center">
          <FaChartLine className="text-[#3a8bbf] mr-2" />
          <span className="text-lg text-gray-500 font-medium">PROFIT</span>
        </span>
      </div>
      <div className="flex  flex-col items-center justify-center border-x-2 w-full lg:w-1/4 ">
        <span className="text-5xl font-bold text-[#fbd076]  mb-2">$350</span>
        <span className="flex items-center">
          <FaRegMoneyBillAlt className="text-[#fbd076] mr-2" />
          <span className="text-lg text-gray-500 font-medium">COMMISSIONS</span>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center border-x-2w-full lg:w-1/4  ">
        <span className="text-5xl font-bold text-[#2bb9b9] mb-2">$300</span>
        <span className="flex items-center">
          <FaQuestionCircle className="text-[#2bb9b9] mr-2 " />
          <span className="text-lg text-gray-500 font-medium">
            PENDING COMMISSIONS
          </span>
        </span>
      </div>
    </div>
  );
};

export default Stats;
