import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3002");
function App() {

  const [inputValue, setInputValue] = useState("");
  console.log("Page refreshed");
  useEffect(() => {
    // Initialize the socket connection

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    // Emit a message to the server
    socket.emit("message", inputValue);

    // Clear the input field after sending the message
    setInputValue("");
  };

  return (
    <div>
      <input
        id="my"
        value={inputValue}
        onChange={(e) => {
          e.preventDefault();
          setInputValue(e.target.value);
        }}
      />
      <button type="submit" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
