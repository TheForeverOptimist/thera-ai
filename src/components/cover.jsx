import "./cover.css";
import React from "react";
import { PiPencilLineLight } from "react-icons/pi";
import img from "../Assets/img.png";
import Sidebar from "./Sidebar";
import circlesImage from "../images/multiplecircles.svg";


function Cover() {
  return (
    <>
      <div className="app">
        <div className="w-full flex flex-wrap">
          <div className="main">
            <div className="mt-10 bg-black w-[95%] h-[52vh] rounded-[30px] flex justify-between">
              <div className="w-[30%] flex flex-col justify-center items-center">
                <h1 className="text-[280%] text-left ml-[10%] max-[1321px]:text-[250%] max-[1129px]:text-[220%] max-[807px]:text-[200%] font-serif font-bold">
                  Hey {localStorage.name}, welcome back!
                </h1>
              </div>
              <div className="w-[30%] flex flex-col justify-center max-[1150px]:w-[40%] min-[1735px]:w-[30%]">
                <img src={img} className="w-[100%]" />
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[35vh] mt-[-40vh] flex z-4 bg-transparent">
            <div className="w-[100%] items-center flex justify-around">
              <div className="w-[200px] h-[25vh] bg-transparent mt-[4%] ml-[20%] rounded-full flex flex-col justify-around items-center border-[2px] border-orange-600 max-[1100px]:hidden"></div>
              <div className="w-[250px] h-[32vh] bg-transparent mt-[4%] ml-[-10%] rounded-full  flex flex-col justify-around items-center border-[2px] border-violet-500 max-[1100px]:hidden"></div>
              <div className="w-[200px] h-[25vh] bg-transparent ml-[-12%] mt-[2%] rounded-full flex flex-col justify-center items-center"></div>
            </div>
          </div>
          <div className="w-[100%] h-[35vh] mt-[-40vh] flex">
            <div className="bg-[white] w-[250px] h-[330px] z-5 mt-[-60px] rounded-[30px] ml-[3.5%] flex flex-col justify-center max-[1100px]:inline-block">
              <PiPencilLineLight className="fill-[black] align-center text-[75px] ml-[30%]" />
              <h2 className="text-center text-[black] text-[25px] font-serif">
                Start New Reflection
              </h2>
            </div>
            <div className="w-[100%] items-center flex justify-around max-[1100px]:inline-block">
              <div className="w-[200px] h-[25vh] bg-[white] mt-[2%] rounded-full flex flex-col justify-around items-center max-[1100px]:w-[90%] max-[1100px]:h-[25%] max-[1100px]:ml-[5%]">
                <h2 className=" text-center text-[black] text-[25px] font-serif">
                  Previous Refelctions
                </h2>
              </div>
              <div className="w-[250px] h-[32vh] bg-[white] mt-[2%] rounded-full  flex flex-col justify-around items-center max-[1100px]:w-[90%] max-[1100px]:h-[25%] max-[1100px]:ml-[5%]">
                <h2 className="text-center text-[black] text-[25px] font-serif mt-[15%] max-[1100px]:mt-[-2%]">
                  Weekly Mood Tracker
                </h2>
                <img src={circlesImage} alt="circles" className="w-[70%] mt-[-40%] max-[1100px]:w-[90%] max-[1100px]:h-[25%] max-[1100px]:mt-[-5%]"/>
              </div>
              <div className="w-[200px] h-[25vh] bg-[white] mt-[2%] rounded-full flex flex-col justify-center items-center max-[1100px]:w-[90%] max-[1100px]:h-[25%] max-[1100px]:ml-[5%]">
                <h2 className="text-center text-[black] text-[25px] mt-[15%] font-serif mb-[15px] max-[1100px]:mt-[2%]">
                  Community
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[35vh] mt-[-40vh] flex z-10 bg-transparent">
            <div className="bg-transparent w-[250px] h-[330px] z-5 mt-[-70px] rounded-[30px] ml-[3%] flex flex-col justify-center  border-[2px] border-green-500 max-[1100px]:hidden "></div>
            <div className="w-[100%] items-center flex justify-around">
              <div className="w-[200px] h-[25vh] bg-transparent mt-[2%] rounded-full flex flex-col justify-around items-center border-[2px] border-orange-600 max-[1100px]:hidden"></div>
              <div className="w-[250px] h-[32vh] bg-transparent mt-[2%] rounded-full  flex flex-col justify-around items-center border-[2px] border-violet-500 max-[1100px]:hidden"></div>
              <div className="w-[200px] h-[25vh] bg-transparent mt-[2%] rounded-full flex flex-col justify-center items-center border-[2px] border-yellow-500 max-[1100px]:hidden"></div>
            </div>
          </div>
          <div className="w-[100%] h-[35vh] mt-[-40vh] flex z-11 bg-transparent">
            <div className="bg-transparent w-[250px] h-[330px] z-5 mt-[-60px] rounded-[30px] ml-[4%] flex flex-col justify-center  border-[2px] border-green-500 max-[1100px]:hidden"></div>
            <div className="w-[100%] items-center flex justify-around">
              <div className="w-[200px] h-[25vh] bg-transparent mt-[2%] rounded-full flex flex-col justify-around items-center border-[2px] border-orange-600 max-[1100px]:hidden"></div>
              <div className="w-[250px] h-[32vh] bg-transparent mt-[2%] rounded-full  flex flex-col justify-around items-center border-[2px] border-violet-500 max-[1100px]:hidden"></div>
              <div className="w-[200px] h-[25vh] bg-transparent mt-[2%] rounded-full flex flex-col justify-center items-center border-[2px] border-yellow-500 max-[1100px]:hidden"></div>
            </div>
          </div>
          <div className="w-[100%] h-[35vh] mt-[-40vh] flex z-11 bg-transparent">
            <div className="w-[100%] items-center flex justify-around">
              <div className="w-[200px] h-[25vh] bg-transparent rounded-full ml-[72%] mt-[3%] flex flex-col justify-center items-center border-[2px] border-yellow-500 max-[1100px]:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cover;
