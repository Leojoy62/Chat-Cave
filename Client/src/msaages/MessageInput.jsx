import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../hooks/useSendMessage";
const MessageInput = () => {
  const [message, setmessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message) return;
    sendMessage(message);
    setmessage("");
  };
  return (
    <>
      <form
        className=" my-3 lex flex-col h-full justify-end relative"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <input
            type="text"
            className="focus:outline-none border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white text-xl"
            placeholder="Send a message"
            value={message}
            onChange={(e) => setmessage(e.target.value)}
          />
          <button
            type="submit"
            className="absolute top-3 end-3 flex items-center pe-3 text-white text-xl"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <BsSend />
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default MessageInput;
