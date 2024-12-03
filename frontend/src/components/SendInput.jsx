import React from "react";
import { IoSend } from "react-icons/io5";

const SendInput = () => {
  return (
    <form className="px-4 mb-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="send message..."
          className=" input input-bordered border-none rounded-xl w-full px-3 block h-11 pr-14"
        />
        <button className="absolute flex inset-y-0 end-0 items-center pr-4 hover:text-white">
          <IoSend />
        </button>
      </div>
    </form>
  );
};

export default SendInput;
