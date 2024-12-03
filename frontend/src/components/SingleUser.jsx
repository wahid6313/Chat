import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice.js";

const SingleUser = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);

  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };

  return (
    <>
      <div
        onClick={() => selectedUserHandler(user)}
        className={`${
          selectedUser?._id === user?._id ? "bg-neutral-600" : ""
        } flex items-center cursor-pointer hover:bg-neutral-600 hover:text-white rounded-xl p-2`}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={user?.profilePhoto} alt="user-profile" />
          </div>
        </div>
        <div className="px-3 ">
          <div className="flex gap-2">
            <p className="text-base font-semibold">{user?.fullName}</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default SingleUser;
