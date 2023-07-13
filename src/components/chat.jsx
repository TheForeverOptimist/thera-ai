import "./chat.css";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import { useState } from "react";
import { Input } from ".";
import { Sidebar } from ".";

function Chat() {
  const [response, setResponse] = useState("");
  return (
    <div className="app">
      <Sidebar />
      <section className="main">
        <h1>Thera-AI</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container flex gap-3">
            <Input placeholder="Tell me more..." className="flex-auto" />
            <div id="submit">
              <SendIcon className="mt-2" />
            </div>
          </div>
          <p className="info">
            Thera-AI is not a substitute for a licensed professional
          </p>
        </div>
      </section>
    </div>
  );
}

export default Chat;
