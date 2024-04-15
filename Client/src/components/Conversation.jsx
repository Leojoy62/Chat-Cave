import React from "react";
import useConversation from "../zustand/useConversation";
import { useSocketContext } from "../context/SocketContext";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-green-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-green-500" : ""}
			`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilepic} alt="user avatar" />
          </div>
        </div>
        <p className="font-bold text-gray-600">{conversation.fullname}</p>
      </div>

      {!lastIdx && <div className="divider mt-0 h-[1px]"></div>}
    </>
  );
};

export default Conversation;
