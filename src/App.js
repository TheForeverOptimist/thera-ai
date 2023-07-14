
import React from "react";
import { Login } from "./components";
import { Sidebar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />}/>
        <Route path="/home" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
