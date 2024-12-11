import React, { useRef } from "react";
import Cookies from "js-cookie";

import users from "../utils/users.json";

const Login = () => {
  const usernameField = useRef();
  const passwordField = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const username = usernameField.current.value;
    const password = passwordField.current.value;

    for (let user of users.users) {
      if (username == user.username && password == user.password) {
        const userId = user.id;
        const userRole = user.role;

        Cookies.set("user_id", userId, { expires: 7 });
        Cookies.set("user_role", userRole, { expires: 7 });

        window.location.reload();
        return;
      }
    }
    alert("invalid credentials");
  };
  return (
    <main className="min-h-screen w-screen bg-indigo-300 bg-opacity-10 fixed">
      <form onSubmit={handleFormSubmit}>
        <div className="bg-white p-4 max-w-[90%] w-[600px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-md border border-indigo-100">
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
                className="w-full border border-indigo-100 bg-indigo-100 bg-opacity-20 p-2 rounded-md"
                placeholder="e.g: admin123"
                required
              />
            </div>
            <div className="mb-6 flex flex-col">
              <label className="mb-2">Enter Password</label>
              <input
                ref={passwordField}
                type="text"
                className="w-full border border-indigo-100 bg-indigo-100 bg-opacity-20 p-2 rounded-md"
                placeholder="********"
                required
              />
            </div>
            <button className="mt-4 block w-full bg-indigo-600 text-white rounded-md p-2 font-medium">
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Login;
