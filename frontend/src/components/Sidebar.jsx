import React from "react";
import OtherUsers from "./OtherUsers.jsx";

const Sidebar = () => {
  return (
    <div className=" border-r border-gray-600 p-4">
      <form action="" className="flex items-center">
        <input
          type="text"
          className="input input-bordered rounded-lg "
          placeholder="search..."
        />
        <button
          type="submit"
          className="border border-slate-600 py-[9px] ml-2 rounded-lg p-2 hover:bg-neutral"
        >
          Search
        </button>
      </form>
      <div className="divider"></div>
      <OtherUsers />
      {/* <div className="bg-white p-">
        <button className="btn btn-sm">LogOut</button>
      </div> */}
    </div>
  );
};

export default Sidebar;
