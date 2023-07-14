import React, { useEffect, useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import logo from "../images/daily_logo.png";
import "./sidebar.css";
import { format } from 'date-fns';
import axios from "axios";


function Sidebar() {
  const [entries, setEntries] = useState([])
  const [person, setPersons] = useState({})

  const [toggleSide, setToggleSide] = useState(false);

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
        setEntries(response.data)
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
          "https://therabot-backend-7c8e6dea9208.herokuapp.com/people/me",
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
      {toggleSide ? (
        <>
          <section onClick={showSide} className="side-bar bg-[#696868] max-h-screen w-[350px] flex flex-col justify-between">
            <div className="m-14 p-6 flex items-center justify-center">
              <img src={logo} alt="logo" />
            </div>
            <div className="text-black font-semibold mx-10 my-2">This Week</div>
            <ul>
              <li className="cursor-pointer px-2 py-1 mx-16 my-2">
                July 10th, 2023
              </li>
              <li className="cursor-pointer px-2 py-1 mx-16 my-2">
                July 8th, 2023
              </li>
            </ul>
            <div className="text-black font-semibold mx-10 my-2">Earlier</div>
            <ul>
              <li className="cursor-pointer px-2 py-1 mx-16 my-2">
                July 10th, 2023
              </li>
              <li className="cursor-pointer px-2 py-1 mx-16 my-2">
                July 8th, 2023
              </li>
            </ul>
            <div className="mt-8 flex flex-col space-y-4 my-4">
              <button className=" bg-transparent p-2 flex items-center">
                <div className="flex items-center text-white">
                  <AddBoxIcon className="ml-5" />
                  <span className="tracking-widest ml-10">New Reflection</span>
                </div>
              </button>
              <button className=" bg-transparent p-2 flex items-center">
                <div className="flex items-center text-white">
                  <LibraryBooksOutlinedIcon className="ml-5" />
                  <span className="tracking-widest ml-4">
                    Previous Reflections
                  </span>
                </div>
              </button>
              <button className=" bg-transparent p-2 flex items-center">
                <div className="flex items-center text-white">
                  <GradeOutlinedIcon className="ml-5" />
                  <span className="tracking-widest ml-10">Achievements</span>
                </div>
              </button>
              <button className=" bg-transparent p-2 flex items-center">
                <div className="flex items-center text-white">
                  <AddReactionOutlinedIcon className="ml-5" />
                  <span className="tracking-widest ml-10">Mood Tracker</span>
                </div>
              </button>
              <button className=" bg-transparent p-2 flex items-center">
                <div className="flex items-center text-white">
                  <PeopleOutlineOutlinedIcon className="ml-5" />
                  <span className="tracking-widest ml-10">Community</span>
                </div>
              </button>
            </div>

            <nav className="mt-auto">
              <p className="text-black font-semibold text-sm mx-12">Made by the Team-1</p>
            </nav>
          </section>
        </>
      ) : (
        <>
          {" "}
          <section onClick={showSide} className="side-bar bg-[#000000] max-h-screen w-[100px] flex flex-col justify-between">
            <div className="flex items-center justify-center">
              <img src={logo} alt="logo" className="w-[80%]" />
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
        </>
      )}
    </>
  );
}

export default Sidebar;
