import React from "react";

const SingleUser = (props) => {
  const user = props.user;
  return (
    <div>
      <div className="flex items-center cursor-pointer hover:bg-neutral-600 hover:text-white rounded-xl p-2">
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
    </div>
  );
};

export default SingleUser;
