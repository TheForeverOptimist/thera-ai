import { Cover } from "./components";
import { Chat } from "./components";
import { Login } from "./components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [entries, setEntries] = useState({})
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get(
          "https://therabot-backend-7c8e6dea9208.herokuapp.com/entry/me",
          {
            headers: {
              "user-id": `${localStorage.getItem("user_id")}`,
            },
          }
        );
        setEntries(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchEntries();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Cover entries={entries}/>}></Route>
        <Route path="/Chat" element={<Chat entries={entries}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
