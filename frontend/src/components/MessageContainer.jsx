import React from "react";
import SendInput from "./SendInput.jsx";
import Messages from "./Messages.jsx";
import { IoMdLogOut } from "react-icons/io";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MessageContainer = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/v1/user/logOut`);
      navigate("/login");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

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
        <div
          onClick={logoutHandler}
          className="bg-neutral rounded-lg flex items-center hover:text-white"
        >
          <button className="px-2 text-sm py-2 ">Logout</button>
          <IoMdLogOut className="mr-2" />
        </div>
      </div>
      <div className="divider px-3  my-0 py-0 h-1"> </div>
      <Messages />
      <SendInput />
    </div>
  );
};

export default MessageContainer;
