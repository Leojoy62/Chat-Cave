import React, { useState } from "react";
import useLogIn from "../../hooks/useLogIn";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { login, loading } = useLogIn();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(inputs);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">Login</h1>
      <form
        className="flex flex-col justify-start items-start"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            className="border-b-2 border-gray-500 focus:outline-none w-[350px] mb-6 text-xl font-semibold"
            type="text"
            placeholder="Username:"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </div>

        <div>
          <input
            className="border-b-2 border-gray-500 focus:outline-none w-[350px] mb-6 text-xl font-semibold"
            type="password"
            placeholder="Password:"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>

        <div className="mt-5">
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? "Logining..." : "Login"}
          </button>
        </div>
      </form>
      <div className="mt-5">
        <p>
          Don't have an account?{" "}
          <Link to={"/signup"} className="font-semibold text-green-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
