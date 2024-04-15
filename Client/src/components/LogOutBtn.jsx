import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogOut from "../hooks/useLogOut";
const LogOutBtn = () => {
  const { loading, logout } = useLogOut();
  return (
    <div className="flex items-start">
      <button onClick={logout}>
        {loading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <RiLogoutBoxLine />
        )}
      </button>
    </div>
  );
};

export default LogOutBtn;
