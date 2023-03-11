import React from "react";
import LoginForm from "../inc/LoginForm";

export default function Login() {
  return (
    <div className="flex w-full ">
      <div className="w-full flex items-center justify-center lg:w-1/2 ">
        <LoginForm />
      </div>
      <div className="h-screen hidden relative lg:flex w-1/2 items-center justify-center bg-gray-100">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin"></div>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
      </div>
    </div>
  );
}
