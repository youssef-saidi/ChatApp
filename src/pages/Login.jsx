import axios from "axios";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../app/slices/logSlice";
import { useNavigate } from "react-router-dom";
import Cache from "../Storage/Storage";

const Login = () => {
  const loggedin = useSelector((state) => state.isLoggin.value);

  const [formData, updateFormData] = useState({}),
    [formErrors, updateFormErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedin) navigate("/");
  }, [loggedin]);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};

    if (_.isEmpty(formData.name))
      errors = { ...errors, name: "Your Username is required" };

    if (_.isEmpty(formData.password))
      errors = { ...errors, password: "Your password is required" };

    updateFormErrors(errors);

    if (!_.isEmpty(errors)) return; //Skip the rest.
    return axios
      .post(
        `http://localhost:22551/ChatApp-war/login?name=${formData.name}&pass=${formData.password}`
      )
      .then((response) => {
        if (response.data.status) {
          dispatch(logIn());
          Cache.set("userId", response.data.userId);

          return navigate("/");
        } else {
          errors = {
            ...errors,
            error: "Your Username Or password is Incorrect",
          };
          return updateFormErrors(errors);
        }
      })
      .catch((error) => {
        errors = {
          ...errors,
          error: "Something went wrong please try again later.",
        };
        return updateFormErrors(errors);
      });
  };

  const displayError = (key) => {
    if (!_.isEmpty(formErrors[key]))
      return (
        <div className="" style={{ color: "red" }}>
          {formErrors[key]}
        </div>
      );
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center w-screen overflow-hidden relative">
        <div className="absolute w-60 h-60 rounded-xl bg-white -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <div className="absolute w-48 h-48 rounded-xl bg-white -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
        <form
          onSubmit={handleSubmit}
          className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20"
        >
          <div>
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer text-gray-700">
              Log to your Account
            </h1>
            <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              Welcome to our Chat App !
            </p>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="UserName"
              name="name"
              onChange={handleChange}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            {displayError("name")}
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            />
            {displayError("password")}
          </div>
          {displayError("error")}

          <div className="text-center mt-6">
            <button
              type="submit"
              className="py-3 w-64 text-xl text-white bg-gray-400 hover:bg-gray-700 rounded-2xl"
            >
              Log In
            </button>
            <p className="mt-4 text-sm">
              You don't have Have An Account?{" "}
              <a
                href="/register"
                className="underline font-bold cursor-pointer"
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
        <div className="w-40 h-40 absolute bg-white rounded-full top-0 right-12 hidden md:block"></div>
        <div className="w-20 h-40 absolute bg-white rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
      </div>
    </>
  );
};

export default Login;
