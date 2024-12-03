import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const UseGetMessage = () => {
  const { selectedUser } = useSelector((store) => store.user);
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:8080/api/v1/message/${selectedUser?._id}`
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessage();
  }, [selectedUser?._id]);
};

export default UseGetMessage;
