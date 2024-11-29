import React from "react";
import { FaTimes } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoLockClosed } from "react-icons/io5";

const Login = ({ toggleSignup, closeForm }) => {
  const handleSignupClick = (event) => {
    event.preventDefault();
    toggleSignup();
  };

  const handleCloseClick = (event) => {
    event.preventDefault();
    closeForm();
  };

  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form className="relative bg-white p-10 rounded-xl">
        <button
          className="absolute top-2 right-2 text-xl"
          onClick={handleCloseClick}
          type="button"
        >
          <FaTimes />
        </button>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">Login</h1>
          <p className="text-[#776f6f]">
            Welcome back! Please sign in to continue
          </p>
        </div>
        <div className="grid gap-y-5 py-5">
          <div className="border-2 w-full flex items-center px-4 py-2 rounded-3xl">
            <GoMail size={30} color="#bcb9bc" />
            <input
              className="w-full outline-none px-2"
              type="email"
              placeholder="Email id"
            />
          </div>
          <div className="border-2 w-full flex items-center px-4 py-2 rounded-3xl">
            <IoLockClosed size={30} color="#bcb9bc" />
            <input
              className="w-full outline-none px-2"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <p className="text-[#008ECC] font-semibold cursor-pointer">
          Forgot Password?
        </p>
        <button
          className="bg-[#008ECC] text-white block w-full py-2 rounded-3xl my-4"
          onClick={submit}
        >
          Login
        </button>
        <span className="mt-2 text-[#776f6f]">
          Don't have an account?&nbsp;
          <button
            className="text-[#008ECC] font-semibold"
            onClick={handleSignupClick}
            type="button"
          >
            Sign Up
          </button>
        </span>
      </form>
    </div>
  );
};

export default Login;