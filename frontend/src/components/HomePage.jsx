import React from "react";
import Sidebar from "./Sidebar.jsx";
import MessageContainer from "./MessageContainer.jsx";

function HomePage() {
  return (
    <div className="flex rounded-xl sm:h-[450px] md:h-[600px] overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100  ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}

export default HomePage;
