import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const checkboxHandler = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      fullName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-4xl text-center font-semibold text-white mb-6">
          SignUp
        </h1>
        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label ">
              <span className="text-base label-text text-white ">FullName</span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
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
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
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
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
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
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              type="password"
              placeholder="confirm password"
              className="w-full h-10 input input-bordered text-white"
            ></input>
          </div>
          <div className="mt-4 flex items-center">
            <div className="flex items-center">
              <p className="text-white">Male</p>
              <input
                checked={user.gender === "male"}
                onChange={() => checkboxHandler("male")}
                type="checkbox"
                defaultChecked
                className="checkbox mx-2"
              />
            </div>
            <div className="flex items-center ml-6">
              <p className="text-white">Female</p>
              <input
                checked={user.gender === "female"}
                onChange={() => checkboxHandler("female")}
                type="checkbox"
                defaultChecked
                className="checkbox mx-2"
              />
            </div>
          </div>
          <div className=" text-center mt-7">
            <button
              type="submit"
              className="w-full bg-white h-9 rounded-lg text-black hover:bg-gray-300"
            >
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
