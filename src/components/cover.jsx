import "./cover.css";
import React from "react";
import { PiPencilLineLight } from "react-icons/pi";
import img from "../Assets/img.png";
import circlesImage from "../images/multiplecircles.svg";
import mood from "../images/mood.png";
import dev from "../images/developer.png";
import ux from "../images/Ux.png"

function Cover() {
  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="main">
          <div className="mt-10 bg-black w-[95%] h-[52vh] rounded-[30px] flex justify-between">
            <div className="w-[30%] flex flex-col justify-center items-center max-[1356px]:w-[35%] max-[1020px]:w-[45%]">
              <h1 className="text-[260%] text-left ml-[10%] max-[1321px]:text-[250%] max-[1129px]:text-[220%] max-[807px]:text-[200%] font-serif font-bold">
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
            <div className=" bg-black w-[200px] h-[330px] z-5 mt-[-48px] rounded-[30px] ml-[-21%] flex flex-col justify-center max-[1100px]:hidden"></div>
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
            <div className="w-[350px] h-[25vh] bg-[transparent] mt-[2%] rounded-[35px] border-[2px] border-black flex flex-col justify-around items-center max-[1100px]:w-[90%] max-[1100px]:h-[25%] max-[1100px]:ml-[5%]">
              <h2 className=" text-center text-[black] text-[25px] font-serif">
                Weekly Mood Tracker
              </h2>
              <div className="flex justify-center">
                <img
                  src={mood}
                  alt="chart"
                  className="w-[70%] mt-[-10%] max-[1100px]:w-[90%] max-[1100px]:h-[25%] max-[1100px]:mt-[-5%]"
                />
              </div>
            </div>
            <div className="w-[150px] h-[20vh] bg-[white] mt-[2%] rounded-full  flex flex-col justify-around items-center max-[1100px]:w-[90%] max-[1100px]:h-[25%] max-[1100px]:ml-[5%]">
              <h2 className="text-center text-[black] text-[20px] w-[90%] font-serif mt-[10%] max-[1100px]:mt-[-2%]">
                Previous Reflections
              </h2>
            </div>
            <div className="w-[150px] h-[20vh] bg-[white] mt-[2%] rounded-full flex flex-col justify-center items-center max-[1100px]:w-[90%] max-[1100px]:h-[25%] max-[1100px]:ml-[5%]">
              <h2 className="text-center text-[black] text-[20px] mt-[15%] font-serif mb-[15px] max-[1100px]:mt-[2%]">
                Community
              </h2>
            </div>
          </div>
        </div>
        <div className="w-[95%] h-[200vh] border-[2px]">
          <div className="w-[100%] h-[25%] flex justify-center flex-wrap">
            <div className="bg-[white] w-[50%] h-[50%] mt-[5%] rounded-[45px] flex flex-wrap">
              <div className="w-[100%] h-[15%] flex justify-center">
                <h1 className="text-[black] font-serif font-bold">Our Goal</h1>
              </div>
              <div className="w-[100%] mt-[-10%]">
                <p className="text-[black] text-center p-4 font-serif ">
                  Daily Reflections leverages AI to provide individuals with
                  reflective summaries of their daily entries. The platform aims
                  to help users gain better insights into their emotional state
                  and relationship dynamics, fostering self-awareness and
                  personal growth.
                </p>
              </div>
            </div>
            <div className="w-[60%] mt-[-4%] flex justify-evenly">
              <button className="bg-[black] w-[25%] rounded-[25px] h-[70%] mt-[3%] font-serif">
                Start New Reflection
              </button>
              <button className="bg-[black] w-[25%] rounded-[25px] h-[70%] mt-[3%] font-serif">
                Contact Us
              </button>
            </div>
          </div>
          <div className="w-[100%] h-[40%] flex flex-wrap">
            <div className="w-[100%] flex items-center justify-center">
              <h1 className="font-serif mt-[5%] text-[black] text-xl font-bold">
                Meet Our Team
              </h1>
            </div>
            <div className="h-[50%] w-[100%] flex justify-center items-center">
              <div className="w-[23%] h-[40%] bg-[grey] rounded-[35px] m-5 flex">
                <div className="w-[60%] flex flex-col items-center justify-center">
                  <div className="w-[100%]">
                    <h1 className="text-center text-[black] font-serif">
                      Edwin Rodriguez
                    </h1>
                  </div>
                  <div className="w-[100%]">
                    <h2 className="text-center text-[black] font-serif">
                      Developer
                    </h2>
                  </div>
                </div>
                <div className="w-[40%]">
                  <img src={dev} alt="devbulb" className="w-[100%] mt-[10%]" />
                </div>
              </div>
              <div className="w-[23%] h-[40%] bg-[grey] rounded-[35px] m-5 flex">
                <div className="w-[60%] flex flex-col items-center justify-center">
                  <div className="w-[100%]">
                    <h1 className="text-center text-[black] font-serif">
                      Sylvia Chen
                    </h1>
                  </div>
                  <div className="w-[100%]">
                    <h2 className="text-center text-[black] font-serif">
                      Developer
                    </h2>
                  </div>
                </div>
                <div className="w-[40%]">
                  <img src={dev} alt="devbulb" className="w-[100%] mt-[10%]" />
                </div>
              </div>
              <div className="w-[23%] h-[40%] bg-[grey] rounded-[35px] m-5 flex">
                <div className="w-[60%] flex flex-col items-center justify-center">
                  <div className="w-[100%]">
                    <h1 className="text-center text-[black] font-serif">
                      Sean Munjal
                    </h1>
                  </div>
                  <div className="w-[100%]">
                    <h2 className="text-center text-[black] font-serif">
                      Developer
                    </h2>
                  </div>
                </div>
                <div className="w-[40%]">
                  <img src={dev} alt="devbulb" className="w-[100%] mt-[10%]" />
                </div>
              </div>
              <div className="w-[23%] h-[40%] bg-[grey] rounded-[35px] m-5 flex">
                <div className="w-[60%] flex flex-col items-center justify-center">
                  <div className="w-[100%]">
                    <h1 className="text-center text-[black] font-serif">
                      Troy Mathis
                    </h1>
                  </div>
                  <div className="w-[100%]">
                    <h2 className="text-center text-[black] font-serif">
                      Developer
                    </h2>
                  </div>
                </div>
                <div className="w-[40%]">
                  <img src={dev} alt="devbulb" className="w-[100%] mt-[10%]" />
                </div>
              </div>
            </div>
            <div className="h-[50%] w-[100%] flex justify-center items-center">
              <div className="w-[23%] h-[40%] bg-[white] rounded-[35px] m-5 mt-[-15%] flex">
                <div className="w-[60%] flex flex-col items-center justify-center">
                  <div className="w-[100%]">
                    <h1 className="text-center text-[black] font-serif">
                      Alyson Mar
                    </h1>
                  </div>
                  <div className="w-[100%]">
                    <h2 className="text-center text-[black] font-serif">
                      UX Designer
                    </h2>
                  </div>
                </div>
                <div className="w-[40%]">
                  <img src={ux} alt="uxbulb" className="w-[100%] mt-[10%]" />
                </div>
              </div>
              <div className="w-[23%] h-[40%] bg-[white] rounded-[35px] m-5 mt-[-15%] flex">
                <div className="w-[60%] flex flex-col items-center justify-center">
                  <div className="w-[100%]">
                    <h1 className="text-center text-[black] font-serif">
                      Karina Manukian
                    </h1>
                  </div>
                  <div className="w-[100%]">
                    <h2 className="text-center text-[black] font-serif">
                      UX Designer
                    </h2>
                  </div>
                </div>
                <div className="w-[40%]">
                  <img src={ux} alt="uxbulb" className="w-[100%] mt-[10%]" />
                </div>
              </div>
              <div className="w-[23%] h-[40%] bg-[white] rounded-[35px] m-5 mt-[-15%] flex">
                <div className="w-[60%] flex flex-col items-center justify-center">
                  <div className="w-[100%]">
                    <h1 className="text-center text-[black] font-serif">
                      Roeya Amigh
                    </h1>
                  </div>
                  <div className="w-[100%]">
                    <h2 className="text-center text-[black] font-serif">
                      UX Designer
                    </h2>
                  </div>
                </div>
                <div className="w-[40%]">
                  <img src={ux} alt="uxbulb" className="w-[100%] mt-[10%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cover;
