import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessages = () => {
      setLoading(true);
      try {
        axios.get(`/api/message/${selectedConversation._id}`).then((res) => {
          setMessages(res.data);
        });
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages]);
  return { loading, messages };
};

export default useGetMessage;
