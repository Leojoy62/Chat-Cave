import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    setLoading(true);
    try {
      axios.get("/api/users").then((res) => {
        setConversations(res.data);
      });
    } catch (err) {
      toast.error(err.response.data.error);
    } finally {
      setLoading(false);
    }
  }, []);
  return { loading, conversations };
};

export default useGetConversations;
