import { useState } from "react";
import { useAuthContext } from "../context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogOut = () => {
  const [looading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const logout = () => {
    setLoading(true);
    try {
      axios
        .post("/api/auth/logout")
        .then(() => {
          toast.success("Logout-success");
          localStorage.removeItem("chat-user");
          setAuthUser(null);
          navigate("/login");
        })
        .catch((err) => {
          console.log("error", err.response.data.error);
          toast.error(err.response.data.error);
        });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { looading, logout };
};

export default useLogOut;
