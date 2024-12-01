import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      userName: "",
      password: "",
    });
  };
  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-4xl text-center font-semibold text-white mb-7">
          SignIn
        </h1>
        <form onSubmit={onSubmitHandler} action="">
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

          <div className=" text-center mt-7">
            <button
              type="submit"
              className="w-full bg-white h-10 rounded-lg text-black hover:bg-gray-300"
            >
              SignIn
            </button>
          </div>
          <div className="text-center mt-4">
            <p>
              Create new account ?
              <Link to="/register">
                {" "}
                <span className="hover:text-white hover:underline">SignUp</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
