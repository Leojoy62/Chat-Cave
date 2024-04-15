import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children = null }) => {
  // Provide a default value for children
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );

  const authInfo = {
    authUser,
    setAuthUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children} {/* Render children */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
