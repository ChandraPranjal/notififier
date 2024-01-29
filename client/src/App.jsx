import React, { useEffect } from "react";
import { io } from "socket.io-client";
function App() {
  useEffect(() => {
    const socket = io("http://localhost:3001");
   
    socket.on("myEvent", (data)=>{
      console.log(data);
    })

  }, []);
  return <div>Ok</div>;
}

export default App;
