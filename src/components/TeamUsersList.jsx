import React, { useEffect, useState } from "react";
import Cross from "./Cross";
import axios from "axios";
import { API_URL } from "../config.mjs";

const TeamUsersList = ({ teamId }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await axios.get(`${API_URL}/team/${teamId}`);
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
                <td className="py-2 px-8 text-sm flex gap-2">
                  <button
                    onClick={async () => {
                      await axios.delete(
                        `${API_URL}/user/remove-team/${user._id}`
                      );

                      window.location.reload();
                    }}
                  >
                    <span className="text-sm rounded-md bg-gradient-to-r from-red-500  to-red-600 text-white inline-block shadow-md shadow-gray-200">
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

export default TeamUsersList;
