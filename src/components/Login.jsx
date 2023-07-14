import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import circlesImage from "../images/multiplecircles.svg";
import logo from "../images/daily_logo.png";
import bg from "../images/loginbg.png"

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
      const { message, user_id, name } = response.data;
      setMessage(message);
      setUserId(user_id);
      console.log("Login successful!");
      localStorage.setItem("user_id", user_id);
      localStorage.setItem("name", name);
      navigate("/home");
    } catch (error) {
      // Handle error
      console.error(error);
      setMessage("Login failed");
    }
  };

  return (
    <div
      className="relative min-h-screen max-height-[95vh] bg-cover bg-no-repeat object-fit-contain"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black fixed inset-0 m-auto rounded-3xl w-[1026px] h-[695px]">
        <div className="mt-[75px] ml-[390px]">
          <img src={circlesImage} alt="circles" />
        </div>
        <div className="flex flex-col text-[63px] mt-0 ml-[208px] font-bold">
          <div>Welcome</div>
          <div>Back!</div>
        </div>
        <div className="gap-y-[15px] ml-[210px] font-[18px]">Username</div>
        <input
          className="w-[635px] h-[73px] rounded-3xl ml-[196px] bg-white text-black"
          type="text"
          placeholder="   Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="mt-8 ml-[210px] font-[18px]">Password</div>
        <input
          className="w-[635px] h-[73px] rounded-3xl ml-[196px] bg-white text-black"
          type="password"
          placeholder="   Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="ml-[666px] p-2">Forgot password?</div>
        <div className="button-container flex">
          <div className="w-[117px] h-[114px] z-[1] bg-white rounded-full relative flex items-center justify-center">
            <span className="text-black font-bold m-4">Sign Up</span>
          </div>
          <div
            className="w-[117px] h-[114px] z-[1] bg-white rounded-full relative flex items-center justify-center cursor-pointer"
            onClick={handleLogin}
          >
            <span className="text-black font-bold m-4">Log In</span>
          </div>
        </div>
      </div>
      <div className="ml-[525px] mt-[-4rem] text-white">
        By signing up, you agree to Daily’s <br></br>Terms and Conditions &
        Privacy Policy.
      </div>
      <div className="mt-[-850px]">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Login;
