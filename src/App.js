import React from "react";

import "./App.css";
import SideBar from "./Layouts/SideBar";
import PageContent from "./Layouts/PageContent";

function App() {
  return (
    <div className="App flex h-fit">
      <SideBar />
      <PageContent />
    </div>
  );
}

export default App;
