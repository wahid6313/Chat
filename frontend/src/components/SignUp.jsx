import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-4xl text-center font-semibold text-white mb-7">
          SignUp
        </h1>
        <form action="">
          <div>
            <label className="label ">
              <span className="text-base label-text text-white ">FullName</span>
            </label>
            <input
              type="text"
              placeholder="fullname"
              className="w-full h-10 input input-bordered text-white"
            ></input>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-white ">UserName</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="w-full h-10 input input-bordered text-white"
            ></input>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-white ">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="w-full h-10 input input-bordered text-white"
            ></input>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-white ">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="w-full h-10 input input-bordered text-white"
            ></input>
          </div>
          <div className=" text-center mt-7">
            <button className="w-full bg-white h-9 rounded-lg text-black hover:bg-gray-300">
              SignUp
            </button>
          </div>
          <div className="text-center mt-4">
            <p>
              Already have an account ?
              <Link to="/login">
                {" "}
                <span className="hover:text-white hover:underline">SignIn</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
