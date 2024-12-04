import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const SingleMessage = ({ message }) => {
  const { authUser, selectedUser } = useSelector((store) => store.user);
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={scroll}
      className={`chat ${
        authUser?._id === message?.senderId ? "chat-end" : "chat-start"
      } `}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={
              message?.senderId === authUser?._id
                ? authUser?.profilePhoto
                : selectedUser?.profilePhoto
            }
          />
        </div>
      </div>
      <div className="chat-header text-xs">
        {message?.senderId === authUser?._id
          ? authUser?.fullName
          : selectedUser?.fullName}
        <time className="text-xs opacity-50 ml-4 ">12:45</time>
      </div>
      <div
        className={`chat-bubble  ${
          authUser?._id === message?.senderId ? "" : "bg-gray-500 text-gray-200"
        }   mb-2`}
      >
        {message?.message}
      </div>
      {/* <div className="chat-footer opacity-30 text-xs my-0 py-0">Delivered</div> */}
    </div>
  );
};

export default SingleMessage;
