import React, { createContext, useState, useContext, useRef } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

//tạo một đối tượng để bọc một chương trình 
export const SocketProvider = ({ children }) => {
  const socketRef = useRef(null);
  //tạo kết nối với socket server 
  const connectSocket = () => {
    socketRef.current = io.connect(
      //đường link 
      //kiếm link dán vô trong docs api của customer
      "https://grabapp.api.atseeds.com?customerId=31",
      {
        transports: ["websocket"],
      }
    );
  };

  const disconnectSocket = () => {
    if (socketRef.current) {
      socketRef.current.disconnect();
    }
  };

  //3 giá trị sẽ được dùng xuyên suốt trong quá trình 
  return (
    <SocketContext.Provider
      value={{ socketRef, connectSocket, disconnectSocket }}
    >
      {children}
    </SocketContext.Provider>
  );
};
