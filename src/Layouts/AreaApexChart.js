import React from "react";
import ReactApexChart from "react-apexcharts";
import { FaChevronDown } from "react-icons/fa";

import { state } from "../data/apexLine";

const AreaApexChart = () => {
  return (
    <div className="chart w-full lg:w-1/3 bg-[#2a2a2a]">
      <div className="flex justify-between m-2 text-white font-thin">
        <p>Medias Stats</p>
        <div className="flex justify-center items center">
          <p className="mr-3 opacity-20">Last week</p>
          <section>
            <FaChevronDown className="mt-1" />
          </section>
        </div>
      </div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={300}
      />
    </div>
  );
};

export default AreaApexChart;
