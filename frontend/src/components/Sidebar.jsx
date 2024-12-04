import React, { useState } from "react";
import OtherUsers from "./OtherUsers.jsx";
import { VscGoToSearch } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { setOtherUsers } from "../redux/userSlice.js";
import toast from "react-hot-toast";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const { otherUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();
    const conversationUser = otherUser?.find((user) =>
      user.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversationUser) {
      dispatch(setOtherUsers([conversationUser]));
    } else {
      toast.error("user not find");
    }

    setSearch("");
  };

  return (
    <div className=" border-r border-gray-600 p-4">
      <form onSubmit={searchHandler} action="" className="flex items-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
