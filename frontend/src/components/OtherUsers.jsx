import React from "react";
import SingleUser from "./SingleUser.jsx";
import UseGetOtherUser from "../hooks/UseGetOtherUser.jsx";
import { useSelector } from "react-redux";

const OtherUsers = () => {
  //my custom hooks
  UseGetOtherUser();
  const { otherUser } = useSelector((store) => store.user);
  if (!otherUser) return <div>No User Found</div>; //early return
  return (
    <div className="overflow-auto h-[469px] ">
      {otherUser?.map((user) => {
        return <SingleUser key={user._id} user={user} />;
      })}
    </div>
  );
};

export default OtherUsers;
