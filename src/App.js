
import { Sidebar } from "./components";
import { Cover } from "./components";
import { Chat } from "./components";
import { Login } from "./components";
import React from 'react'


function App() {
  return (
    <div className="app">
      <Login />
      <Sidebar />
      <Cover />
      <Chat />
    </div>
  );
}

export default App;
