import React from "react";
import Stats from "../Layouts/Stats";
import Charts from "../Layouts/Charts";
import Records from "../Layouts/Records";
import AddToFavorites from "../Layouts/AddToFavorites";

const Dashboard = () => {
  return (
    <div>
      <AddToFavorites />
      <Stats />
      <Charts />
      <Records />
    </div>
  );
};

export default Dashboard;
