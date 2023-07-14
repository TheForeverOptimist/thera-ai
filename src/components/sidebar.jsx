import React, { useEffect, useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import logo from "../images/Screen_Shot_2023-07-14_at_9.52.59_AM-removebg-preview.png";
import "./sidebar.css";
import axios from "axios";
import { Cover } from ".";
import { Chat } from ".";
import { Previous } from "."


function Sidebar() {
  const [entries, setEntries] = useState([])
  const [person, setPersons] = useState({})
  const [toggleSide, setToggleSide] = useState(false);
  const [activeComponent, setActiveComponent] = useState('cover');
  const [entryProp, setEntryProp] = useState({})

  const handleComponentChange = (componentName, entry) => {
    switch (componentName) {
      case "cover":
        setActiveComponent('cover');
        break;
      case "chat":
        setActiveComponent('chat');
        break;
      case "previous":
        setActiveComponent('previous');
        setEntryProp(entry);
        
        break;
      default:
        setActiveComponent('cover');
        break;
    }
  };

  const showSide = () => {
    setToggleSide(!toggleSide);
  };

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
        setEntries(response.data.entries)
        // console.log(entries)
      } catch (error) {
        console.error(error);
      }
    };
    fetchEntries();
  }, []);

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
        setPersons(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchPeople();
  }, []);
  
  return (
    <>
      <div className="app">
      {toggleSide ? (
        <>
          <section
            onClick={showSide}
            className="side-bar bg-[#000000] max-h-screen w-[350px] flex flex-col justify-between="
          >
            <div className="m-14 p-6 flex items-center justify-center">
              <img src={logo} alt="logo"
              onClick={() => handleComponentChange('cover')}/>
            </div>
            <div className="text-gray-500 font-semibold mx-10 my-2">Recent</div>
            <ul>
              <li className="cursor-pointer rounded transition-colors duration-300 hover:bg-neutral-800 px-2 py-1 mx-16 my-2">
                {console.log(entries)}
                July 10th, 2023
              </li>
              <li className="rounded transition-colors duration-300 hover:bg-neutral-800 cursor-pointer px-2 py-1 mx-16 my-2">
                July 8th, 2023
              </li>
            </ul>
            <div className="text-gray-500 font-semibold mx-10 my-2">Earlier</div>
            <ul>
              <li className="rounded transition-colors duration-300 hover:bg-neutral-800 cursor-pointer px-2 py-1 mx-16 my-2">
                July 10th, 2023
              </li>
              <li className="rounded transition-colors duration-300 hover:bg-neutral-800 cursor-pointer px-2 py-1 mx-16 my-2">
                July 8th, 2023
              </li>
            </ul>

            <div className="mt-8 flex flex-col space-y-4 my-4">
              <button className="bg-transparent p-2 flex items-center"
                onClick={() => handleComponentChange('chat')}>
                <div className="flex items-center text-white">
                  <AddBoxIcon className="ml-5" />
                  <span className="tracking-widest ml-10" onClick={() => navigate('/chat')}>New Reflection</span>
                </div>
              </button>
              <button className=" rounded transition-colors duration-300 hover:bg-neutral-800 p-2 flex items-center">
                <div className="flex items-center text-white">
                  <LibraryBooksOutlinedIcon className="ml-5" />
                  <span className="tracking-widest ml-4">
                    Previous Reflections
                  </span>
                </div>
              </button>
              <button className=" rounded transition-colors duration-300 hover:bg-neutral-800 p-2 flex items-center">
                <div className="flex items-center text-white">
                  <GradeOutlinedIcon className="ml-5" />
                  <span className="tracking-widest ml-10">Achievements</span>
                </div>
              </button>
              <button className=" rounded transition-colors duration-300 hover:bg-neutral-800 p-2 flex items-center">
                <div className="flex items-center text-white">
                  <AddReactionOutlinedIcon className="ml-5" />
                  <span className="tracking-widest ml-10">Mood Tracker</span>
                </div>
              </button>
              <button className=" rounded transition-colors duration-300 hover:bg-neutral-800 p-2 flex items-center">
                <div className="flex items-center text-white">
                  <PeopleOutlineOutlinedIcon className="ml-5" />
                  <span className="tracking-widest ml-10">Community</span>
                </div>
              </button>
            </div>

            <nav className="mt-auto">
              <p className="text-white font-semibold text-sm mx-12">
                Made by the Team-1
              </p>
            </nav>
          </section>
          {activeComponent === 'cover' && <Cover />}
          {activeComponent === 'chat' && <Chat />}
          {activeComponent === 'previous' && <Previous entryProp={entryProp} />}
        </>
      ) : (
        <>
          {" "}
          <section
            onClick={showSide}
            className="side-bar bg-[#000000] max-h-screen w-[100px] flex flex-col justify-between"
          >
            <div className="flex items-center justify-center">
              <img src={logo} alt="logo" className="w-[80%] mt-[20%]" />
            </div>
            <div className="mt-8 flex flex-col space-y-4 my-4">
              <button className=" bg-transparent p-2 flex items-center">
                <div className="flex items-center text-white">
                  <AddBoxIcon className="ml-8" />
                </div>
              </button>
              <button className=" bg-transparent p-2 flex items-center">
                <div className="flex items-center text-white">
                  <LibraryBooksOutlinedIcon className="ml-8" />
                </div>
              </button>
              <button className=" bg-transparent p-2 flex items-center">
                <div className="flex items-center text-white">
                  <GradeOutlinedIcon className="ml-8" />
                </div>
              </button>
              <button className=" bg-transparent p-2 flex items-center">
                <div className="flex items-center text-white">
                  <AddReactionOutlinedIcon className="ml-8" />
                </div>
              </button>
              <button className=" bg-transparent p-2 flex items-center">
                <div className="flex items-center text-white">
                  <PeopleOutlineOutlinedIcon className="ml-8" />
                </div>
              </button>
            </div>
          </section>
          {activeComponent === 'cover' && <Cover />}
          {activeComponent === 'chat' && <Chat peopleProp={person}/>}
          {activeComponent === 'previous' && <Previous entryProp={entryProp} peopleProp={person}/>}
        </>
      )}
      </div>
  
    </>
  );
}

export default Sidebar;
