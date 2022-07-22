import React, { useEffect, useRef } from "react";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world-merc";
import "jsvectormap/dist/css/jsvectormap.css";
import { FaChevronDown } from "react-icons/fa";

const WorldMap = () => {
  const map = useRef(null);
  useEffect(() => {
    if (!map.current) {
      map.current = new jsVectorMap({
        selector: ".worldMap",
        map: "world_merc",
      });
    }
  }, []);
  return (
    <div className="w-full lg:w-1/3 pb-10 flex flex-col justify-between  items-center bg-[#2a2a2a]">
      <div className="flex  m-2 justify-between w-full  text-white font-thin">
        <p>Geographic Data</p>
        <div className="flex justify-center items center">
          <p className="mr-3 opacity-20">Last Month</p>
          <section>
            <FaChevronDown className="mt-1" />
          </section>
        </div>
      </div>
      <div className="h-4/5">
        <div
          style={{ height: "100%", width: "100%" }}
          className="worldMap"
        ></div>
      </div>
    </div>
  );
};

export default WorldMap;
