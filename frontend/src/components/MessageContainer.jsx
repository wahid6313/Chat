import React, { useEffect } from "react";
import SendInput from "./SendInput.jsx";
import Messages from "./Messages.jsx";
import { IoMdLogOut } from "react-icons/io";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setSelectedUser } from "../redux/userSlice.js";

import { BiSolidMessageRoundedDetail } from "react-icons/bi";

const MessageContainer = ({ user }) => {
  const navigate = useNavigate();
  const { selectedUser, authUser, onlineUsers } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();
  // const isOnline =
  //   Array.isArray(onlineUsers) && onlineUsers.includes(user?._id);
  const isOnline = onlineUsers.includes(selectedUser?._id);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/v1/user/logOut`);
      navigate("/login");
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => dispatch(setSelectedUser(null));
  }, []);

  return (
    <>
      {selectedUser !== null ? (
        <div className="md:min-w-[550px] flex flex-col ">
          <div className="flex items-center  px-4 py-[19.3px] justify-between">
            <div className="flex items-center">
              <div className={`avatar ${isOnline ? "online" : ""}`}>
                <div className="w-12 rounded-full cursor-pointer">
                  <img src={selectedUser?.profilePhoto} alt="user-profile" />
                </div>
              </div>
              <div className="px-3 ">
                <div className="flex gap-2">
                  <p className="text-base font-semibold">
                    {selectedUser?.fullName}
                  </p>
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
      ) : (
        <div className="md:min-w-[550px] flex flex-col items-center justify-center">
          <BiSolidMessageRoundedDetail className="w-24 h-24" />
          <h1 className="text-lg ">
            {" "}
            👋,{" "}
            <span className="font-semibold text-white">
              {authUser?.fullName} ✌️
            </span>
          </h1>
          <h1 className="text-lg font-light">Let's start conversation 💬</h1>
        </div>
      )}
    </>
  );
};

export default MessageContainer;
