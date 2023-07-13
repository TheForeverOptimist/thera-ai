import "./chat.css";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { Input } from ".";
import { Button } from ".";

function Chat(props) {
  const [text, setText] = useState("");
  const [chat, setChat] = useState([]);
  const chatParent = useRef(null);

   useEffect(() => {
      const domNode = chatParent.current;
      if (domNode) {
         domNode.scrollTop = domNode.scrollHeight;
      }
   })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    setChat([...chat, { text }]);
    console.log(chat);
    setText("");
  };
  return (
    <section className="main bg-[url('../public/entry-background.svg')]">
      <div className="chat-container bg-[#1A1A1A] h-[42rem] mt-16 rounded-3xl w-[52rem] pr-5 p-5 flex justify-end flex-col">
        <div
          id="chtbox"
          className="chat chat-end flex flex-col gap-2 overflow-y-auto"
          ref={chatParent}
        >
          {chat.map((message, i) => (
            <div
              className="chat-bubble max-w-xl break-normal text-start mr-3 bg-stone-50 text-[#1A1A1A] mb-4"
              key={i}
            >
              {message.text}
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-section flex">
        <form
          onSubmit={handleSubmit}
          className="input-container flex gap-3 bg-[#1A1A1A] p-4 rounded-full"
        >
          <Input
            onChange={(e) => setText(e.target.value)}
            placeholder="Tell me more..."
            value={text}
            name="message"
            className="flex-auto mt-1"
          />
          <div id="submit" className="">
            <Button
              size="md"
              variant="default"
              className="mt-1 rounded-full"
              type="submit"
            >
              <SendIcon className="text-black" />
            </Button>
          </div>
        </form>
        <p className="info">
          Thera-AI is not a substitute for a licensed professional
        </p>
      </div>
    </section>
  );
}

export default Chat;
