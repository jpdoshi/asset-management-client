import React, { useEffect, useState } from "react";
import Cross from "./Cross";

import axios from "axios";
import Cookie from "js-cookie";
import { API_URL } from "../config.mjs";

const TeamUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamsRes = await axios.get(
          `${API_URL}/team/manager/${Cookie.get("user_id")}`
        );

        const usersRes = await axios.get(
          `${API_URL}/team/${teamsRes.data.data[0]._id}`
        );

        setUsers(usersRes.data.data.users);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-white rounded-md border border-indigo-100 shadow-lg shadow-indigo-50">
      <table className="w-full">
        <thead>
          <tr className="border-b border-indigo-100 font-semibold">
            <td className="py-2 px-8">ID</td>
            <td className="py-2 px-8">Member Name</td>
            <td className="py-2 px-8">Member Role</td>
            <td className="py-2 px-8">Action</td>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={index} className="border-b border-indigo-100">
                <td className="py-2 px-8 text-sm">{user._id}</td>
                <td className="py-2 px-8 text-sm">{user.name}</td>
                <td className="py-2 px-8 text-sm">{user.designation}</td>
                <td className="py-2 px-8 text-sm">
                  <button
                    onClick={async () => {
                      await axios.put(`${API_URL}/user/${user._id}`, {
                        team: null,
                      });
                      window.location.reload();
                    }}
                    disabled={user.role == "Manager"}
                  >
                    <span
                      className={`${
                        user.role == "Manager" ? "opacity-50" : ""
                      } text-sm rounded-md p-0.5 bg-red-600 duration-300 hover:bg-red-500 text-white inline-block shadow-md shadow-gray-200`}
                    >
                      <Cross />
                    </span>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamUsers;
