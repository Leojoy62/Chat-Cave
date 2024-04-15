import React from "react";
import Sidebar from "../../components/Sidebar";
import MessageContainer from "../../msaages/MessageContainer";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="w-[100%] h-[620px]  md:w-[800px]  shadow-2xl rounded-xl p-5 ">
      <div className="md:flex h-[100%]">
        <div
          className={`md:block w-[100%] md:w-[40%]  md:border-r-2 md:border-gray-300 mr-2 ${
            selectedConversation ? "hidden" : ""
          }`}
        >
          <Sidebar></Sidebar>
        </div>
        <div
          className={`md:block w-[100%] md:w-[60%] ${
            selectedConversation ? "" : "hidden"
          }`}
        >
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
