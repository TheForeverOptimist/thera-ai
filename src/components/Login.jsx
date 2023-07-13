import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Mirror from '../images/mirror_ai.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [user_id, setUserId] = useState('');

  const navigate= useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://therabot-backend-7c8e6dea9208.herokuapp.com/login', { email, password });
      const { message, user_id } = response.data;
      setMessage(message);
      setUserId(user_id);
      console.log("Login successful!")
      localStorage.setItem('user_id', user_id);
      navigate('/home');
    } catch (error) {
      // Handle error
      console.error(error);
      setMessage('Login failed');
    }
  };

  return (
    <div className="bg-black bg-opacity-50 m-auto p-40 rounded-2xl shadow-2xl absolute top-0 left-24 right-0 bottom-0 w-[500px] h-[430px]">
      <div className="fixed inset-0 z-[-1] block bg-cover bg-no-repeat"></div>
      <div className="flex flex-col items-start text-[32px] my-div mt-auto font-bold pb-4 text-center">
        Login Here
      </div>
      <input
        className="my-1 p-4 border-none rounded-2xl w-full text-[16px]"
        type="text"
        placeholder="Your Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="my-1 p-4 border-none rounded-2xl w-full text-[16px]"
        type="password"
        placeholder="Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input className="hidden" type="checkbox" id="terms" />
      <label
        className="inline-block relative ml-5 mr-10 top-5 w-[20px] h-[20px] cursor-pointer"
        htmlFor="terms"
      ></label>
      <span>
        Agree with <a href="https://elevate.app">Terms & Conditions</a>
      </span>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
