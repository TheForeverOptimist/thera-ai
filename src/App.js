
import { Cover } from "./components";
import { Chat } from "./components";
import { Login } from "./components";
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/Home' element={<Cover/>}></Route>
      <Route path='/Chat' element={<Chat/>}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;