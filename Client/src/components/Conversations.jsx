import React from "react";
import Conversation from "./Conversation.jsx";
import useGetConversations from "../hooks/useGetConversations.js";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="flex flex-col overflow-y-auto">
      {conversations.map((conversation, idx) => {
        return (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx === conversations.length - 1}
          />
        );
      })}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
