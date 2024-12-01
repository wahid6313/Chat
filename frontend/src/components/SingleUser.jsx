import React from "react";

const SingleUser = () => {
  return (
    <div>
      <div className="flex items-center cursor-pointer hover:bg-neutral-600 hover:text-white rounded-xl p-2">
        <div className="avatar online">
          <div className="w-12 rounded-full">
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
    </div>
  );
};

export default SingleUser;
