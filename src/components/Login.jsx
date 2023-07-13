import React from 'react'
import './Login.css'
import Mirror from '../images/mirror_ai.png'

const Login = () => (
  <div className="bg-black bg-opacity-50 m-auto p-40 rounded-2xl shadow-2xl absolute top-0 left-24 right-0 bottom-0 w-[500px] h-[430px]">
    <div className="fixed inset-0 z-[-1] block bg-cover bg-no-repeat"></div>
    <div className="flex flex-col items-start text-[32px] my-div mt-auto font-bold pb-4 text-center">
      Login Here
    </div>
    <input
      className="my-1 p-4 border-none rounded-2xl w-full text-[16px]"
      type="text"
      placeholder="Your Email Address"
    />
    <input
      className="my-1 p-4 border-none rounded-2xl w-full text-[16px]"
      type="password"
      placeholder="Your Password"
    />
    <input className="hidden" type="checkbox" id="terms" />
    <label className="inline-block relative ml-5 mr-10 top-5 w-[20px] h-[20px] cursor-pointer" for="terms"></label>
    <span>
      Agree with <a href="https://elevate.app">Terms & Conditions</a>
    </span>
    <button>Login</button>
  </div>
);

export default Login