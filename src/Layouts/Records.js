import React from "react";
import DataTable from "../components/DataTable";
import {tableData, columns, data } from "../data/tableData";

const Records = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      {tableData.map((info, idx) => (
        <div className="w-full lg:w-1/3" key={idx}>
          <DataTable columns={columns} data={data} heading={info} />
        </div>
      ))}
    </div>
  );
};

export default Records;
