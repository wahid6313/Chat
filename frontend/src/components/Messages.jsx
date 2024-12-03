import React from "react";
import SingleMessage from "./SingleMessage.jsx";

const Messages = () => {
  return (
    <div className="px-5 flex-1 overflow-auto mb-4 mt-4 ">
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
    </div>
  );
};

export default Messages;
