import React from "react";
import SearchBox from "./SearchBox";
import Conversations from "./Conversations";
import LogOutBtn from "./LogOutBtn";

const Sidebar = () => {
  return (
    <div>
      <SearchBox></SearchBox>

      <div className="mt-5 h-[450px] overflow-y-auto">
        <Conversations></Conversations>
      </div>
      <div className="text-3xl mt-5">
        <LogOutBtn></LogOutBtn>
      </div>
    </div>
  );
};

export default Sidebar;
