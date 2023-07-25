import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import circlesImage from "../images/multiplecircles.svg";
import logo from "../images/daily_logo.png";
import bg from "../images/loginbg.png";
import './Login.css'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user_id, setUserId] = useState("");
  const [name, setName] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("")

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post("https://localhost:8000/signup", {
        email,
        password,
        name,
        year_of_birth: yearOfBirth,
      });
      //handle response from backend
      const { message, user_id } = response.data;
      setMessage(message);

      //now use the user_id for any further operations like putting it inlocal storage
      localStorage.setItem('user_id', user_id);
      localStorage.setItem('name', name)


      //navigate to home screen
      navigate('/home')
    } catch(error) {
      //handle error
      console.error(error);
      setMessage("Signup Failed!")
    } 
  }

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
      className="relative min-h-screen max-height-[95vh] bg-cover bg-no-repeat object-fit-contain overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-[#1A1A1A] fixed inset-0 m-auto rounded-3xl w-[1026px] h-[695px]">
        <div className="mt-[75px] ml-[390px]">
          <img src={circlesImage} alt="circles" />
        </div>
        <div className="flex flex-col text-[63px] mt-0 ml-[208px] font-bold font-calistoga">
          <div>Welcome</div>
          <div>Back!</div>
        </div>
        <div className="gap-y-[15px] ml-[210px] font-[18px]">Username</div>
        <input
          className="w-[635px] h-[73px] p-4 rounded-3xl ml-[196px] bg-white text-black"
          type="text"
          placeholder="   Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="mt-8 ml-[210px] font-[18px]">Password</div>
        <input
          className="w-[635px] h-[73px] p-4 rounded-3xl ml-[196px] bg-white text-black"
          type="password"
          placeholder="   Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="ml-[666px] p-2">Forgot password?</div>
        <div className="button-container flex">
          <div className="w-[117px] h-[114px] ml-[635px] mt-[50px] z-[1] bg-white rounded-full relative flex items-center justify-center">

            <span className="text-black font-bold m-4">Sign Up</span>
          </div>
          <div
            className="w-[117px] h-[114px] ml-[25px] z-[1] mt-[50px] bg-white rounded-full relative flex items-center justify-center cursor-pointer"
            onClick={handleLogin}
          >
            <span className="text-black font-bold m-4">Log In</span>
          </div>
        </div>
        <div
          className="relative border-4 border-[#5D70FF] bg-transparent w-[450px] h-[450px] mt-[-200px] ml-[-300px] rounded-full"
          style={{ zIndex: 1 }}
        ></div>
        <div
          className="relative w-[200px] h-[200px] ml-[-30px] mt-[-450px] border-4 border-[#8BB1F7] bg-transparent rounded-full"
          style={{ zIndex: 2, left: "50px", top: "50px" }}
        ></div>
        <div
          className="relative w-[500px] h-[500px] ml-[800px] mt-[-850px] border-4 border-[#71D195] bg-transparent rounded-full"
          style={{ zIndex: 2 }}
        ></div>
        <div
          className="relative w-[100px] h-[100px] ml-[900px] mt-[-250px] border-2 border-[#F5BF4D] bg-transparent rounded-full"
          style={{ zIndex: 0 }}
        ></div>
        <div className="fixed top-1 left-1 p-2 m-2">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div
        className="w-[175px] h-[175px] mt-[600px] ml-[350px] border-4 z-[0] border-green-500 bg-transparent rounded-full"
        style={{ zIndex: 0 }}
      ></div>
      <div
        className="w-[300px] h-[300px] mt-[-700px] ml-[1150px] border-4 z-[0] border-[#E75255] bg-transparent rounded-full"
        style={{ zIndex: 0 }}
      ></div>
      <div
        className="w-[175px] h-[175px] mt-[5px] ml-[1250px] border-4 z-[0] border-green-500 bg-transparent rounded-full"
        style={{ zIndex: 0 }}
      ></div>
      <div
        className="w-[475px] h-[475px] mt-[-750px] ml-[1250px] border-4 z-[0] border-[#ED794D] bg-transparent rounded-full"
        style={{ zIndex: 2 }}
      ></div>
      <div className="ml-[525px] mt-[-4rem] text-white">
        By signing up, you agree to Daily’s <br></br>Terms and Conditions &
        Privacy Policy.
      </div>
    </div>
  );
};

export default Login;
