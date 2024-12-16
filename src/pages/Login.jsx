import React, { useRef } from "react";
import Cookies from "js-cookie";

import axios from "axios";
import { API_URL } from "../config.mjs";

const Login = () => {
  const usernameField = useRef();
  const passwordField = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const username = usernameField.current.value;
    const password = passwordField.current.value;

    try {
      const user = await axios.post(`${API_URL}/user/login`, {
        username,
        password,
      });

      if (user && user.data) {
        const userId = user.data.data._id;
        const userRole = user.data.data.role;

        Cookies.set("user_id", userId, { expires: 7 });
        Cookies.set("user_role", userRole, { expires: 7 });

        window.location.reload();
        return;
      }
    } catch (error) {
      alert("Could not login, check credentials");
      console.error(error.message);
    }
  };
  return (
    <main className="min-h-screen w-screen bg-indigo-300 bg-opacity-10 fixed">
      <form onSubmit={handleFormSubmit}>
        <div className="bg-white p-6 shadow-xl shadow-gray-200 max-w-[90%] w-[600px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-md border border-indigo-100">
          <h1 className="text-3xl font-medium mb-1">Login</h1>
          <h1 className="font-medium text-lg opacity-60">
            Complete login to continue
          </h1>
          <div className="mt-8">
            <div className="mb-6 flex flex-col">
              <label className="mb-2">Enter Username</label>
              <input
                ref={usernameField}
                type="text"
                className="w-full border border-indigo-100 bg-indigo-100 bg-opacity-20 px-3 p-2 rounded-md"
                placeholder="e.g: admin123"
                required
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label className="mb-2">Enter Password</label>
              <input
                ref={passwordField}
                type="password"
                className="w-full border border-indigo-100 bg-indigo-100 bg-opacity-20 px-3 p-2 rounded-md"
                placeholder="********"
                required
              />
            </div>
            <button className="mt-4 block w-full hover:saturate-150 bg-gradient-to-br from-indigo-400 to-indigo-600  text-white rounded-md p-3 font-medium">
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Login;
