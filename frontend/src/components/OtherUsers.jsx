import React from "react";
import SingleUser from "./SingleUser.jsx";
import UseGetOtherUser from "../hooks/UseGetOtherUser.jsx";

const OtherUsers = () => {
  UseGetOtherUser();
  return (
    <div className="overflow-auto h-[469px] ">
      <SingleUser />

      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
      <SingleUser />
    </div>
  );
};

export default OtherUsers;
