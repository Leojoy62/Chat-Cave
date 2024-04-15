import { TiMessages } from "react-icons/ti";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { useAuthContext } from "../context/AuthProvider";
import useConversation from "../zustand/useConversation";
import { useEffect } from "react";
const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  const handleBack = () => {
    setSelectedConversation(null);
  };

  return (
    <div className="md:min-w-[450px] flex flex-col justify-center ">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="flex justify-between md:flex-col bg-slate-500 w-[100%] md:min-w-[450px]  px-4 py-2 mb-2">
            <div>
              <span className="label-text">To:</span>{" "}
              <span className="text-gray-900 font-bold">
                {selectedConversation.fullname}
              </span>
            </div>
            <div className="md:hidden">
              <p onClick={handleBack}>Back</p>
            </div>
          </div>
          <div className="mt-5 h-[450px] overflow-y-auto">
            <Messages />
          </div>
          <div className="flex flex-col h-full justify-end">
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center w-full h-full text-center">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-500 font-semibold flex flex-col items-center gap-2">
        <p>Welcome {authUser.fullname} </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
