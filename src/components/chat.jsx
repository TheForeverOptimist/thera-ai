import "./chat.css";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import axios from 'axios'
import { useState, useRef, useEffect } from "react";
import { Input } from ".";
import { Button } from ".";

function Chat() {
  const [text, setText] = useState("");
  const [chat, setChat] = useState([]);
  const [mood, setMood] = useState();
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState("")
  const chatParent = useRef(null);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get(
          "https://therabot-backend-7c8e6dea9208.herokuapp.com/person/me",
          {
            headers: {
              "user-id": `${localStorage.getItem("user_id")}`,
            },
          }
        );
        setPeople(response.data.persons)
        // console.log(people)
      } catch (error) {
        console.error(error);
      }
    };
    fetchPeople();
  }, []);
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
  const handleReflect = async () => {
    console.log("handleReflect called!")
    const entryData = {
      user: `${localStorage.getItem("user_id")}`,
      person: selectedPerson,
      mood: mood,
      statements: [[new Date().toISOString(), text]],
    };
    console.log(entryData)
    try {
      
      const response = await axios.post(
        "https://therabot-backend-7c8e6dea9208.herokuapp.com/ai/entry",
        entryData,
        {
          headers: {
            "user-id": `${localStorage.getItem("user_id")}`,
          },
        }

      );
      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  };
  const felt = () => {
    return (
      <div id="chtbox" className="chat chat-start flex flex-col gap-2">
        <div className="chat-bubble max-w-xl break-normal text-start ml-3 bg-stone-50 text-[#1A1A1A] mb-4">
          How are you feeling today?
          <div className="flex gap-4 p-4 text-4xl">
            <div
              className="transition-all hover:opacity-70 hover:scale-125 cursor-pointer"
              onClick={() => {
                setMood(1);
                setText('😡')
              }}
            >
              😡
            </div>
            <div
              className="transition-all hover:opacity-70 hover:scale-125 cursor-pointer"
              onClick={() => {
                setMood(2);
                setText('🙁')
              }}
            >
              🙁
            </div>
            <div
              className="transition-all hover:opacity-70 hover:scale-125 cursor-pointer"
              onClick={() => {
                setMood(3);
                setText('😐');
              }}
            >
              😐
            </div>
            <div
              className="transition-all hover:opacity-70 hover:scale-125 cursor-pointer"
              onClick={() => {
                setMood(4);
                setText('🙂')
              }}
            >
              🙂
            </div>
            <div
              className="transition-all hover:opacity-70 hover:scale-125 cursor-pointer"
              onClick={() => {
                setMood(5);
                setText('😄')
              }}
            >
              😄
            </div>
          </div>
        </div>
      </div>
    );
  };

  const entryPerson = () => {
    return (
      <div id="chtbox" className="chat chat-start flex flex-col gap-2">
        <div className="chat-bubble max-w-xl break-normal text-start ml-3 bg-stone-50 text-[#1A1A1A] mb-4">
          Who would you like to talk about?
          <div className="flex gap-4 p-4 text-2xl text-black">
            {people.map((person) => (
              <div
                key={person._id}
                className="transition-all hover:opacity-70 hover:scale-125 cursor-pointer text-black"
                onClick={() => {
                  setSelectedPerson(person._id);
                }}
              >
                {person.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="main">
      <div className="chat-container bg-[#1A1A1A] h-[42rem] mt-16 rounded-3xl w-[52rem] pr-5 p-5 flex justify-end flex-col">
        <div className="overflow-y-auto" ref={chatParent}>
          {felt()}
          {chat.map((message, i) =>
            mood ? (
              <>
                <div
                  id="chtbox"
                  className="chat chat-end flex flex-col gap-2"
                >
                  <div
                    className="chat-bubble max-w-xl break-normal text-start mr-3 bg-stone-50 text-[#1A1A1A] mb-4"
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
                    key='ai'
                  >
                    {entryPerson()}
                    <div className="flex gap-4 p-4 text-2xl text-black"></div>
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
                    className="chat-bubble max-w-xl break-normal text-start mr-3 bg-stone-50 text-[#1A1A1A] mb-4"
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
                    key='ai2'
                  >
                    What happened today?
                  </div>
                </div>
              </>
            ) : (
              <div id="chtbox" className="chat chat-end flex flex-col gap-2">
                <div
                  className="chat-bubble max-w-xl break-normal text-start mr-3 bg-stone-50 text-[#1A1A1A] mb-4"
                  key={i}
                >
                  {message.text}
                </div>
              </div>
            )
          )}

          {/* {entryPerson()} */}
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
        <Button type="submit" onClick={handleReflect}>
          I'm Done
        </Button>
        <p className="info text-blue-700">
          dAIly is not a substitute for a licensed professional.
        </p>
      </div>
    </section>
  );
}
export default Chat;