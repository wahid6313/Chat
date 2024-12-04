import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const UseGetRtm = () => {
  const { socket } = useSelector((store) => store.socket);
  const dispatch = useDispatch();
  const { messages } = useSelector((store) => store.message);
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      dispatch(setMessages([...messages, newMessage]));
    });
  }, [setMessages, messages]);
};

export default UseGetRtm;
