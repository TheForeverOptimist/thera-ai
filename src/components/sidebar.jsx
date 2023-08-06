import React, { useEffect, useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import logo from "../images/Screen_Shot_2023-07-14_at_9.52.59_AM-removebg-preview.png";
import "./sidebar.css";
import { format } from "date-fns";
import axios from "axios";
import { Cover } from ".";
import { Chat } from ".";
import { Previous } from ".";

function Sidebar() {
  const [entries, setEntries] = useState([]);
  const [person, setPersons] = useState({});
  const [toggleSide, setToggleSide] = useState(false);
  const [activeComponent, setActiveComponent] = useState("cover");
  const [entryProp, setEntryProp] = useState({});

  const handleComponentChange = (componentName, entry) => {
    switch (componentName) {
      case "cover":
        setActiveComponent("cover");
        break;
      case "chat":
        setActiveComponent("chat");
        break;
      case "previous":
        setActiveComponent("previous");
        setEntryProp(entry);

        break;
      default:
        setActiveComponent("cover");
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
        setEntries(response.data.entries);
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
        setPersons(response.data);
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
              className="side-bar ml-[10px]  mt-[5px] bg-[#000000] h-[750px] w-[200px] flex flex-col justify-between rounded-[50px] overflow-y-auto"
            >
               <div className="flex items-center justify-center cursor-pointer">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[80%] mt-[20%]"
                  onClick={() => handleComponentChange("cover")}
                />
              </div>
              <div className="mt-[80px] flex flex-col space-y-4 my-4">
              <div className="text-gray-500 font-semibold mx-10 my-2 text-sm">
                Earlier This Month
              </div>
              <ul>
                {entries.length > 0 ? (
                  entries.map((entry) => (
                    <div className="w-[100%] flex flex-col justify-center">
                        <li
                      className="cursor-pointer px-2 py-1 mx-16 my-2 w-[100%]"
                      key={entry._id}
                      onClick={() => handleComponentChange("previous", entry)}
                    >
                      <p className="text-xs"> {format(new Date(entry.creation_date), "MMMM d, yyyy")}</p>
                    </li>
                    </div>
                  ))
                ) : (
                  <p>Loading entries...</p>
                )}
              </ul>
              </div>
              <div className="w-[100%] bg-[white] h-[120px] rounded-[40px] mt-[20px] flex flex-col justify-center">
              <button className=" bg-transparent p-2 flex items-center">
                  <div className="flex items-center">
                    <PersonOutlineIcon style={{fill: "black"}} className="ml-8" />
                    <p className="text-xs text-[black] ml-[5px]">Profile</p>
                  </div>
                </button>
              </div>
            </section>
            {activeComponent === "cover" && <Cover />}
            {activeComponent === "chat" && <Chat />}
            {activeComponent === "previous" && (
              <Previous entryProp={entryProp} />
            )}
          </>
        ) : (
          <>
            {" "}
            <section
              onClick={showSide}
              className="side-bar ml-[10px]  mt-[5px] bg-[#000000] h-[750px] w-[200px] flex flex-col justify-between rounded-[50px]"
            >
              <div className="flex items-center justify-center cursor-pointer">
                <img
                  src={logo}
                  alt="logo"
                  className="w-[80%] mt-[20%]"
                  onClick={() => handleComponentChange("cover")}
                />
              </div>
              <div className="mt-[200px] flex flex-col space-y-4 my-4">
                <button
                  className=" bg-transparent p-2 flex items-center"
                  onClick={() => handleComponentChange("chat")}
                >
                  <div className="flex items-center text-white">
                    <LibraryBooksOutlinedIcon className="ml-8" />
                    <p className="text-xs ml-[5px]">New Reflection</p>
                  </div>
                </button>
                <button className=" bg-transparent p-2 flex items-center">
                  <div className="flex items-center text-white">
                    <AddBoxIcon className="ml-8" />
                    <p className="text-xs">Previous Reflection</p>
                  </div>
                </button>
                <button className=" bg-transparent p-2 flex items-center">
                  <div className="flex items-center text-white">
                    <AddReactionOutlinedIcon className="ml-8" />
                    <p className="text-xs ml-[5px]">Mood Tracker</p>
                  </div>
                </button>
                <button className=" bg-transparent p-2 flex items-center">
                  <div className="flex items-center text-white">
                    <GradeOutlinedIcon className="ml-8" />
                    <p className="text-xs ml-[5px]">Achievements</p>
                  </div>
                </button>
                <button className=" bg-transparent p-2 flex items-center">
                  <div className="flex items-center text-white">
                    <PeopleOutlineOutlinedIcon className="ml-8" />
                    <p className="text-xs ml-[5px]">Community</p>
                  </div>
                </button>
              </div>
              <div className="w-[100%] bg-[white] h-[120px] rounded-[40px] mt-[20px] flex flex-col justify-center">
              <button className=" bg-transparent p-2 flex items-center">
                  <div className="flex items-center">
                    <PersonOutlineIcon style={{fill: "black"}} className="ml-8" />
                    <p className="text-xs text-[black] ml-[5px]">Profile</p>
                  </div>
                </button>
              </div>
            </section>
            {activeComponent === "cover" && <Cover />}
            {activeComponent === "chat" && <Chat peopleProp={person} />}
            {activeComponent === "previous" && (
              <Previous entryProp={entryProp} peopleProp={person} />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Sidebar;
