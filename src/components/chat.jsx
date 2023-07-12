import './chat.css'
import SendIcon from "@mui/icons-material/Send";
import React from 'react'

function Chat() {
  return (
    <section className="main">
      <h1>Thera-AI</h1>
      <ul className="feed"></ul>
      <div className="bottom-section">
        <div className="input-container">
          <input />
          <div id="submit">
            <SendIcon />
          </div>
        </div>
        <p className="info">
          Thera-AI is not a substitute for a licensed professional
        </p>
      </div>
    </section>
  );
}

export default Chat