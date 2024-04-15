import React from "react";
import Sidebar from "../../components/Sidebar";
import MessageContainer from "../../msaages/MessageContainer";

const Home = () => {
  return (
    <div className="w-[800px] h-[600px] shadow-2xl rounded-xl p-5">
      <div className="flex h-[100%]">
        <div className="w-[40%]  border-r-2 border-gray-300 mr-2 ">
          <Sidebar></Sidebar>
        </div>
        <div className="w-[80%]">
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
