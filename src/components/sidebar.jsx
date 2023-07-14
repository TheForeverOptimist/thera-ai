import { Previous } from ".";
import AddBoxIcon from "@mui/icons-material/AddBox";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import React from "react";
import logo from "../images/Screen_Shot_2023-07-13_at_7.41.33_PM-removebg-preview.png";
import "./sidebar.css";
import { useState } from "react";


function Sidebar() {
  const [toggleSide, setToggleSide] = useState(false);

  const showSide = () => {
    setToggleSide(!toggleSide);
  };


  return (
    <>
      {toggleSide ? (
        <>
          <section onClick={showSide} className="side-bar bg-[#000000] max-h-screen w-[350px] flex flex-col justify-between overflow-scroll">
            <div className="m-14 p-6 flex items-center justify-center">
              <img src={logo} alt="logo" />
            </div>
            <div className="text-gray-500 mx-10 my-2">This Week</div>
            <ul>
              <li className="cursor-pointer px-2 py-1 mx-16 my-2">
                July 10th, 2023
              </li>
              <li className="cursor-pointer px-2 py-1 mx-16 my-2">
                July 8th, 2023
              </li>
            </ul>
            <div className="text-gray-500 mx-10 my-2">Earlier</div>
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
              <p className="text-gray-500 text-sm mx-12">Made by the Team-1</p>
            </nav>
          </section>

          <Previous />
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
