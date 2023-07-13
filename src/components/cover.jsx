import "./cover.css";
import React from "react";
import { PiPencilBold } from "react-icons/pi";
import img from "../Assets/img.png";
import Sidebar from "./Sidebar";

function Cover() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <div className="w-full flex flex-wrap">
          <div className="main">
            <div className="mt-10 bg-black w-[95%] h-[52vh] rounded-2xl flex justify-between">
              <div className="w-[30%] flex flex-col justify-center items-center">
                <h1 className="text-[300%] text-left ml-[10%] max-[1259px]:text-[250%] max-[1129px]:text-[220%] max-[807px]:text-[200%]">
                  Hey @User, Welcome back!
                </h1>
              </div>
              <div className="w-[30%] flex flex-col justify-center max-[1150px]:w-[40%]">
                <img src={img} className="w-[100%]" />
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[35vh] mt-[-40vh] flex">
            <div className="bg-[#f3e4e4] w-[250px] h-[330px] z-5 mt-[-60px] rounded-2xl ml-[3.5%] flex flex-col justify-center">
              <PiPencilBold className="fill-[black] align-center text-[75px] ml-[30%]" />
              <h2 className="text-center text-[black] text-[25px]">
                Start New Reflection
              </h2>
            </div>
            <div className="w-[100%] items-center flex justify-around">
              <div className="w-[200px] h-[30vh] bg-[#777373] mt-[2%] rounded-2xl flex flex-col justify-around items-center">
                <h2 className=" text-center text-[black] text-[25px]">
                  Previous Refelctions
                </h2>
              </div>
              <div className="w-[200px] h-[30vh] bg-[#AEAEAE] mt-[2%] rounded-2xl  flex flex-col justify-around items-center">
                <h2 className="text-center text-[black] text-[25px]">
                  Community
                </h2>
              </div>
              <div className="w-[200px] h-[30vh] bg-[#CBC7C7] mt-[2%] rounded-2xl  flex flex-row justify-evenly">
                <h2 className="text-center text-[black] text-[25px] mt-[15%]">
                  Weekly Mood Tracker
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cover;
