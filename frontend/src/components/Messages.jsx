import React from "react";
import SingleMessage from "./SingleMessage.jsx";

import { useSelector } from "react-redux";
import UseGetRtm from "../hooks/UseGetRtm.jsx";
import UseGetMessage from "../hooks/UseGetMessage.jsx";

const Messages = () => {
  UseGetMessage();
  UseGetRtm();
  const { messages } = useSelector((store) => store.message);
  return (
    <div className="px-5 flex-1 overflow-auto mb-4 mt-4 ">
      {messages &&
        messages?.map((message) => {
          return <SingleMessage key={message._id} message={message} />;
        })}
    </div>
  );
};

export default Messages;
