import React, { useEffect } from "react";
import { io } from "socket.io-client";
function App() {
  useEffect(() => {
    const socket = io("http://localhost:3001");
    socket.on("Hello", (arg) => {
      console.log(arg);
    });
    socket.emit();
  }, []);
  return <div>Ok</div>;
}

export default App;
