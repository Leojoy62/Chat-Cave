import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const signup = ({
    fullname,
    username,
    email,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleInputError({
      fullname,
      username,
      email,
      password,
      confirmpassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      axios
        .post("/api/auth/register", {
          fullname,
          username,
          email,
          password,
          confirmpassword,
          gender,
        })
        .then((res) => {
          localStorage.setItem("chat-user", JSON.stringify(res.data));

          setAuthUser(res.data);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { signup, loading };
};

export default useSignUp;

const handleInputError = ({
  fullname,
  username,
  email,
  password,
  confirmpassword,
  gender,
}) => {
  if (
    !fullname ||
    !username ||
    !email ||
    !password ||
    !confirmpassword ||
    !gender
  ) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password !== confirmpassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
};
