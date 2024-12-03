import React from "react";

const SingleMessage = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <div className="chat-header text-xs">
        wahid ali
        <time className="text-xs opacity-50 ml-4 ">12:45</time>
      </div>
      <div className="chat-bubble text-white mb-2">
        message checkmessage checkmessage checkmessage
      </div>
      {/* <div className="chat-footer opacity-30 text-xs my-0 py-0">Delivered</div> */}
    </div>
  );
};

export default SingleMessage;
