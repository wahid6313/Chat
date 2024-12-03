import React from "react";
import OtherUsers from "./OtherUsers.jsx";
import { VscGoToSearch } from "react-icons/vsc";

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
          className="py-[9px] ml-2 rounded-lg p-2 bg-neutral  hover:text-white gap-2 flex items-center"
        >
          Search
          <VscGoToSearch className="h-5 w-5 hover:text-white" />
        </button>
      </form>
      <div className="divider py-0 mb-0"></div>
      <OtherUsers />
      {/* <div className="bg-white p-">
        <button className="btn btn-sm">LogOut</button>
      </div> */}
    </div>
  );
};

export default Sidebar;
