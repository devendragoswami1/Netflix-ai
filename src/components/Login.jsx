import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <div className=" bg-black absolute w-full h-full -z-10 ">
        <p className="bg-black/40 hidden -z-10 sm:block absolute w-full h-full"></p>
        <img
          className="absolute w-full h-full hidden sm:block top-0 -z-20 object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/1ac1cee7-5580-4cfa-b701-99d1a8f2d148/IN-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ebbef551-d229-4865-8cdc-fb00f8960227_large.jpg"
          alt=""
        />
        <Header />
        <div className="w-full flex justify-center">
          <div className="text-white z-10  sm:bg-black/70 rounded-md sm:px-16 sm:py-14 w-[90%] max-w-md flex flex-col m-10 gap-8 justify-center">
            <h2 className="text-4xl font-bold">
              {isLogin ? "Sign In" : "Sign Up"}
            </h2>
            <form className="flex flex-col gap-8 w-full" action="#">
              {!isLogin && (
                <input
                  className=" border placeholder:text-gray-200 sm:bg-zinc-800/30 w-full  bg-zinc-800 p-4 rounded-sm border-gray-500 "
                  type="text"
                  name="userName"
                  id=""
                  placeholder="Your Name"
                />
              )}
              <input
                className=" border placeholder:text-gray-200 sm:bg-zinc-800/30 w-full  bg-zinc-800 p-4 rounded-sm border-gray-500 "
                type="email"
                name="email"
                id=""
                placeholder="Email"
              />
              <input
                className=" border sm:bg-zinc-800/30 placeholder:text-gray-200 border-gray-500 bg-zinc-800 p-4 rounded-sm"
                type="password"
                name="password"
                id=""
                placeholder="Password"
              />
              <button
                type="submit"
                className="bg-red-600 py-2 rounded-md active:bg-red-500  ">
                {isLogin ? "Sing In" : "Sign Up"}
              </button>
            </form>
            <div className="flex gap-2 text-md">
              <p>{isLogin ? "New to  Netflix" : "Already a User"}</p>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className=" hover:underline">
                {isLogin ? "Sign Up Now" : "Sign In Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
