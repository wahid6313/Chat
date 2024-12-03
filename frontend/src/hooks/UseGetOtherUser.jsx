import React, { useEffect } from "react";
import axios from "axios";

const UseGetOtherUser = () => {
  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(`http://localhost:8080/api/v1/user/`);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUsers();
  }, []);
};

export default UseGetOtherUser;
