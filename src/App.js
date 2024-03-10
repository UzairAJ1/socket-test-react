import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";
import React, { useEffect, useState } from "react";
function App() {
  useEffect(() => {
    // Connect to the WebSocket server
    const socket = io("http://localhost:3333");
    //Enter the userId 
    const userId="1";
socket.on("connect", () => {
 console.log("Connected to the server");
});

socket.on("server message", (data) => {
 console.log(data.message);
});
socket.on("taskCreated", (data) => {
  if(userId===data.user)
  {
    console.log("A task has been created for you!")
  }
  //console.log(data.user);
 });
socket.emit('task', { token: '123' });

  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
