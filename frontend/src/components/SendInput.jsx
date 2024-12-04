import axios from "axios";
import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const SendInput = () => {
  const [message, setMessage] = useState("");
  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.message);
  const dispatch = useDispatch();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/message/send/${selectedUser?._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res);
      dispatch(setMessages([...messages, res?.data?.newMessage]));
    } catch (error) {
      console.log(error);
    }
    setMessage("");
  };

  return (
    <form onSubmit={onSubmitHandler} className="px-4 mb-3">
      <div className="w-full relative">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="send message..."
          className=" input input-bordered border-none rounded-xl w-full px-3 block h-11 pr-14"
        />
        <button
          type="submit"
          className="absolute flex inset-y-0 end-0 items-center pr-4 hover:text-white"
        >
          <IoSend />
        </button>
      </div>
    </form>
  );
};

export default SendInput;
