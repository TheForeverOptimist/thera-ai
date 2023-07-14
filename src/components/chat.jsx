import "./chat.css";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { Input } from ".";
import { Button } from ".";
import { Sidebar } from ".";

function Chat(entries) {
  const [text, setText] = useState("");
  const [chat, setChat] = useState([]);
  const chatParent = useRef(null);

  useEffect(() => {
    const domNode = chatParent.current;
    if (domNode) {
      domNode.scrollTop = domNode.scrollHeight;
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) return;
    setChat([...chat, { text }]);
    setText("");
  };
  return (
      <section className="main">
        <div className="chat-container bg-[#1A1A1A] h-[42rem] mt-16 rounded-3xl w-[52rem] pr-5 p-5 flex justify-end flex-col">
          <div className="overflow-y-auto" ref={chatParent}>
          <div id="chtbox" className="chat chat-start flex flex-col gap-2">
                  <div
                    className="chat-bubble max-w-xl break-normal text-start mr-3 bg-stone-50 text-[#1A1A1A] mb-4"
                  >
                    How are you feeling today?
                  </div>
                </div>
            {chat.map((message, i) =>
              i == 0 ? (
                <>
                <div
                  id="chtbox"
                  className="chat chat-end flex flex-col gap-2"
                >
                  <div
                    className="chat-bubble max-w-xl break-normal text-start ml-3 bg-stone-50 text-[#1A1A1A] mb-4"
                    key={i}
                  >
                    {message.text}
                  </div>
                </div>
                <div
                  id="chtbox"
                  className="chat chat-start flex flex-col gap-2"
                >
                  <div
                    className="chat-bubble max-w-xl break-normal text-start ml-3 bg-stone-50 text-[#1A1A1A] mb-4"
                    key={i}
                  >
                    Who would you like to talk about?
                  </div>
                </div>
                </>
              ) : i == 1 ? (
                <>
                <div
                  id="chtbox"
                  className="chat chat-end flex flex-col gap-2"
                >
                  <div
                    className="chat-bubble max-w-xl break-normal text-start ml-3 bg-stone-50 text-[#1A1A1A] mb-4"
                    key={i}
                  >
                    {message.text}
                  </div>
                </div>
                <div
                  id="chtbox"
                  className="chat chat-start flex flex-col gap-2"
                >
                  <div
                    className="chat-bubble max-w-xl break-normal text-start ml-3 bg-stone-50 text-[#1A1A1A] mb-4"
                    key={i}
                  >
                    What happened today?
                  </div>
                </div>
                </>
              ) : (
                <div
                  id="chtbox"
                  className="chat chat-end flex flex-col gap-2"
                >
                  <div
                    className="chat-bubble max-w-xl break-normal text-start ml-3 bg-stone-50 text-[#1A1A1A] mb-4"
                    key={i}
                  >
                    {message.text}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="bottom-section flex">
          <form
            onSubmit={handleSubmit}
            className="input-container flex gap-4 bg-[#1A1A1A] p-6 rounded-full"
          >
            <Input
              onChange={(e) => setText(e.target.value)}
              placeholder="Tell me more..."
              value={text}
              name="message"
              className="flex-auto mt-1.5"
            />
            <div id="submit" className="">
              <Button
                size="md"
                variant="default"
                className="mt-1 rounded-full p-4"
                type="submit"
              >
                <SendIcon />
              </Button>
            </div>
          </form>

          <p className="info text-blue-700">
            dAIly is not a substitute for a licensed professional.
          </p>
        </div>
      </section>
  );
}

export default Chat;
