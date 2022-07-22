import React from "react";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";

const PageContent = () => {
  return (
    <div className="w-full">
      <Header />
      <Dashboard />
    </div>
  );
};

export default PageContent;
