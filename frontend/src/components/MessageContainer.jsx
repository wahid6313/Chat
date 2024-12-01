import React from "react";
import SendInput from "./SendInput.jsx";
import Messages from "./Messages.jsx";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[550px] flex flex-col ">
      <div className="flex items-center  px-4 py-[19.3px] justify-between">
        <div className="flex items-center">
          <div className="avatar online">
            <div className="w-12 rounded-full cursor-pointer">
              <img
                src="https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
                alt="user-profile"
              />
            </div>
          </div>
          <div className="px-3 ">
            <div className="flex gap-2">
              <p className="text-base font-semibold">wahid ali</p>
            </div>
          </div>
        </div>
        <div className="bg-neutral rounded-lg">
          <button className="px-3 text-sm py-2 hover:text-white">LogOut</button>
        </div>
      </div>
      <div className="divider px-3  my-0 py-0 h-1"> </div>
      <Messages />
      <SendInput />
    </div>
  );
};

export default MessageContainer;
