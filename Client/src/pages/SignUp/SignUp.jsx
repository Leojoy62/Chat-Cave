import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import useSignUp from "../../hooks/useSignUp";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const { loading, signup } = useSignUp();
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs);
  };

  const handleCheckBoxChange = (gender) => {
    setInputs({
      ...inputs,
      gender: gender,
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">SignUp</h1>
      <form
        className="flex flex-col justify-start items-start"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            className="border-b-2 border-gray-500 focus:outline-none w-[350px] mb-6 text-xl font-semibold"
            type="text"
            placeholder="Full Name:"
            value={inputs.fullname}
            onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
          />
        </div>
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
            type="email"
            placeholder="Email:"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
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
        <div>
          <input
            className="border-b-2 border-gray-500 focus:outline-none w-[350px] mb-6 text-xl font-semibold"
            type="password"
            placeholder="Confirm Password:"
            value={inputs.confirmpassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmpassword: e.target.value })
            }
          />
        </div>
        <GenderCheckBox
          handleCheckBoxChange={handleCheckBoxChange}
          selectedGender={inputs.gender}
        />
        <div className="mt-5">
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Signup"
            )}
          </button>
        </div>
      </form>
      <div className="mt-5">
        <p>
          Already have an account?{" "}
          <Link to={"/login"} className="font-semibold text-green-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
