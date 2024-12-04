import React from "react";
import SingleMessage from "./SingleMessage.jsx";
import UseGetMessage from "../hooks/UseGetMessage";
import { useSelector } from "react-redux";

const Messages = () => {
  UseGetMessage();
  const { messages } = useSelector((store) => store.message);
  if (!messages) return;
  return (
    <div className="px-5 flex-1 overflow-auto mb-4 mt-4 ">
      {messages?.map((message) => {
        return <SingleMessage key={message._id} message={message} />;
      })}
    </div>
  );
};

export default Messages;
