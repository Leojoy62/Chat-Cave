import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthProvider";
import io from "socket.io-client";
const authSocket = createContext();

export const useSocketContext = () => {
  return useContext(authSocket);
};

const SocketContext = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser && authUser._id !== null) {
      const socket = io("http://localhost:5000", {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  const socketInfo = {
    socket,
    onlineUsers,
  };
  return (
    <authSocket.Provider value={socketInfo}>{children}</authSocket.Provider>
  );
};

export default SocketContext;
