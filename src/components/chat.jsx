import "./chat.css";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { Input } from ".";
import { Button } from ".";

function Chat() {
  const [text, setText] = useState("");
  const [chat, setChat] = useState([]);
  const [mood, setMood] = useState("");
  const [people, setPeople] = useState([]);
  const [bot, setBot] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState();
  const chatParent = useRef(null);
  const user = localStorage.getItem("user_id")

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get(
          "https://therabot-backend-7c8e6dea9208.herokuapp.com/person/me",
          {
            headers: {
              "user-id": `${user}`,
            },
          }
        );
        setPeople(response.data.persons);
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
    setChat([...chat, text]);
    setBot([...bot, [new Date().toISOString(), text]])
    setText("");
    console.log(chat);
  };

  const moods = {
    1: "😡",
    2: "🙁",
    3: "😐",
    4: "🙂",
    5: "😄",
  };
  const responses = [
    "How are you feeling today",
    "Who would you like to talk about?",
    "What happened today?",
    "That's so unfortunate, what happened?",
    "Oh no, what happened?",
    "Okay. What happened?",
    "That's good to hear. What happened?",
    "That's wonderful! What happened??",
  ];

  const tbResponses = () => {
    return (
      <div id="chtbox" className="chat chat-start flex flex-col gap-2">
        <div
          key="feel"
          className="chat-bubble max-w-xl break-normal text-start ml-3 bg-stone-50 text-[#1A1A1A] mb-4"
        >
          {responses[0]}
          <div className="flex gap-4 p-4 text-4xl">
            <div
              className="transition-all hover:opacity-70 hover:scale-125 cursor-pointer"
              onClick={() => {
                setMood(1);
              }}
            >
              😡
            </div>
            <div
              className="transition-all hover:opacity-70 hover:scale-125 cursor-pointer"
              onClick={() => {
                setMood(2);
              }}
            >
              🙁
            </div>
            <div
              className="transition-all hover:opacity-70 hover:scale-125 cursor-pointer"
              onClick={() => {
                setMood(3);
              }}
            >
              😐
            </div>
            <div
              className="transition-all hover:opacity-70 hover:scale-125 cursor-pointer"
              onClick={() => {
                setMood(4);
              }}
            >
              🙂
            </div>
            <div
              className="transition-all hover:opacity-70 hover:scale-125 cursor-pointer"
              onClick={() => {
                setMood(5);
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
      <div>
        <div id="chtbox" className="chat chat-start flex flex-col gap-2">
          <div className="chat-bubble max-w-xl break-normal text-start ml-3 bg-stone-50 text-[#1A1A1A] mb-4">
            {responses[1]}
            <div className="flex gap-4 p-4 text-2xl text-black">
              {people.map((person) => (
                <div
                  key={person._id}
                  className="transition-all hover:opacity-70 hover:scale-125 cursor-pointer text-black"
                  onClick={() => {
                    setSelectedPerson(person);
                    console.log(selectedPerson);
                  }}
                >
                  {person.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const personChat = () => {
    if (selectedPerson) {
      return (
        <>
          <div id="chtbox" className="chat chat-end flex flex-col gap-2">
            <div
              key="feel"
              className="chat-bubble max-w-xl break-normal text-start mr-3 bg-stone-50 text-[#1A1A1A] mb-4"
            >
              {selectedPerson.name}
            </div>
          </div>
          <div id="chtbox" className="chat chat-start flex flex-col gap-2">
            <div
              key="feel"
              className="chat-bubble max-w-xl break-normal text-start ml-3 bg-stone-50 text-[#1A1A1A] mb-4"
            >
              {responses[2]}
            </div>
          </div>
        </>
      );
    }
  };

  const moodChat = () => {
    if (mood) {
      return (
        <>
          <div id="chtbox" className="chat chat-end flex flex-col gap-2">
            <div
              key="feel"
              className="chat-bubble max-w-xl break-normal text-start mr-3 bg-stone-50 text-[#1A1A1A] mb-4"
            >
              {moods[mood]}
            </div>
          </div>
          {entryPerson()}
          {personChat()}
        </>
      );
    }
  };

  const handleReflect = async () => {
    const entryData = {
      user: user,
      person: selectedPerson._id,
      mood: mood,
      statements: bot,
    };

    // try {
    //   const response = await axios.post(
    //     "https://therabot-backend-7c8e6dea9208.herokuapp.com/ai/entry",
    //     entryData,
    //     {
    //       headers: {
    //         "user-id": `${localStorage.getItem("user_id")}`,
    //       },
    //     }
    //   );
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
    console.log(entryData)
  };

  const moodBasedResponse = () => {
    if (chat.length) {
      switch (mood) {
        case 1:
          return (
            <div id="chtbox" className="chat chat-start flex flex-col gap-2">
              <div
                key="feel"
                className="chat-bubble max-w-xl break-normal text-start ml-3 bg-stone-50 text-[#1A1A1A] mb-4"
              >
                {responses[3]}
              </div>
            </div>
          );
        case 2:
          return (
            <div id="chtbox" className="chat chat-start flex flex-col gap-2">
              <div
                key="feel"
                className="chat-bubble max-w-xl break-normal text-start ml-3 bg-stone-50 text-[#1A1A1A] mb-4"
              >
                {responses[4]}
              </div>
            </div>
          );
        case 3:
          return (
            <div id="chtbox" className="chat chat-start flex flex-col gap-2">
              <div
                key="feel"
                className="chat-bubble max-w-xl break-normal text-start ml-3 bg-stone-50 text-[#1A1A1A] mb-4"
              >
                {responses[5]}
              </div>
            </div>
          );
        case 4:
          return (
            <div id="chtbox" className="chat chat-start flex flex-col gap-2">
              <div
                key="feel"
                className="chat-bubble max-w-xl break-normal text-start ml-3 bg-stone-50 text-[#1A1A1A] mb-4"
              >
                {responses[6]}
              </div>
            </div>
          );
        case 5:
          return (
            <div id="chtbox" className="chat chat-start flex flex-col gap-2">
              <div
                key="feel"
                className="chat-bubble max-w-xl break-normal text-start ml-3 bg-stone-50 text-[#1A1A1A] mb-4"
              >
                {responses[7]}
              </div>
            </div>
          );
      }
    }
  };

  return (
    <section className="main">
      <div className="chat-container bg-[#1A1A1A] h-[42rem] mt-16 rounded-3xl w-[52rem] pr-5 p-5 flex justify-end flex-col">
        <div className="overflow-y-auto" ref={chatParent}>
          {tbResponses()}
          {moodChat()}
          {chat.map((message, i) => {
            if (i == 0) {
              return (
                <div id="chtbox" className="chat chat-end flex flex-col gap-2">
                  <div
                    className="chat-bubble max-w-xl break-normal text-start mr-3 bg-stone-50 text-[#1A1A1A] mb-4"
                    key={i}
                  >
                    {message}
                  </div>
                </div>
              );
            }
          })}
          {moodBasedResponse()}
          {chat.map((message, i) => {
            if (i !== 0) {
              return (
                <div id="chtbox" className="chat chat-end flex flex-col gap-2">
                  <div
                    className="chat-bubble max-w-xl break-normal text-start mr-3 bg-stone-50 text-[#1A1A1A] mb-4"
                    key={i}
                  >
                    {message}
                  </div>
                </div>
              );
            }
          })}
          {/* {chat.map((message, i) =>
            mood ? (
              <>
                <div id="chtbox" className="chat chat-end flex flex-col gap-2">
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
                    key="ai"
                  >
                    {entryPerson()}
                    <div className="flex gap-4 p-4 text-2xl text-black"></div>
                  </div>
                </div>
              </>
            ) : i == 1 ? (
              <>
                <div id="chtbox" className="chat chat-end flex flex-col gap-2">
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
                    key="ai2"
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
          )} */}
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
        <Button type="submit" variant="default" onClick={handleReflect}>
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
