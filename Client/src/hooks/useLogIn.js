import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const useLogIn = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const login = ({ username, password }) => {
    const success = handleInputError(username, password);
    if (!success) return;
    setLoading(true);
    try {
      axios
        .post("/api/auth/login", {
          username,
          password,
        })
        .then((res) => {
          toast.success("Login-success");
          localStorage.setItem("chat-user", JSON.stringify(res.data));

          setAuthUser(res.data);
          navigate("/");
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
  return { login, loading };
};

export default useLogIn;

const handleInputError = (username, password) => {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }
  return true;
};
