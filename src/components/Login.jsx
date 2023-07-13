import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import circlesImage from "../images/multiplecircles.svg";
import loginBg from "../images/loginbg.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user_id, setUserId] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://therabot-backend-7c8e6dea9208.herokuapp.com/login",
        { email, password }
      );
      const { message, user_id } = response.data;
      setMessage(message);
      setUserId(user_id);
      console.log("Login successful!");
      localStorage.setItem("user_id", user_id);
      navigate("/home");
    } catch (error) {
      // Handle error
      console.error(error);
      setMessage("Login failed");
    }
  };

  return (
    <div className="app">
      <div className="bg-black m-auto rounded-3xl shadow-2xl absolute top-0 left-0 right-0 bottom-0 w-[1026px] h-[695px]">
        <div className="mt-[75px] ml-[390px]">
          <img src={circlesImage} alt="circles" />
        </div>
        <div className="flex flex-col text-[63px] mt-0 ml-[208px] font-bold">
          <div>Welcome</div>
          <div>Back!</div>
        </div>
        <div className="gap-y-[15px] ml-[210px] font-[18px]">Username</div>
        <input
          className="w-[635px] h-[73px] rounded-3xl ml-[196px] bg-white"
          type="text"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="mt-8 ml-[210px] font-[18px]">Password</div>
        <input
          className="w-[635px] h-[73px] rounded-3xl ml-[196px] bg-white"
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>

    // <input className="hidden" type="checkbox" id="terms" />
    // <label
    //   className="inline-block relative ml-5 mr-10 top-5 w-[20px] h-[20px] cursor-pointer"
    //   htmlFor="terms"
    // ></label>
    // <span>
    //   Agree with <a href="https://elevate.app">Terms & Conditions</a>
    // </span>
    // <button onClick={handleLogin}>Login</button>
  );
};

export default Login;
