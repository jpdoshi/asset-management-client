import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Arrow from "./Arrow";
import axios from "axios";
import { API_URL } from "../config.mjs";

const TeamsTable = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamsRes = await axios.get(`${API_URL}/team`);
        setTeams(teamsRes.data.data);
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
            <td className="py-2 px-8">Team</td>
            <td className="py-2 px-8">Manager</td>
            <td className="py-2 px-8">Action</td>
          </tr>
        </thead>
        <tbody>
          {teams &&
            teams.map((team, index) => (
              <tr key={index} className="border-b border-indigo-100">
                <td className="py-2 px-8 text-sm">{team._id}</td>
                <td className="py-2 px-8 text-sm">{team.name}</td>
                <td className="py-2 px-8 text-sm">{team.manager.name}</td>
                <td className="py-2 px-8 text-sm">
                  <Link to={`/teams/${team._id}`}>
                    <span className="text-sm rounded-md hover:saturate-150 px-2.5 py-1.5 bg-gradient-to-br from-indigo-400  to-indigo-600 text-white inline-block shadow-md shadow-gray-200">
                      <Arrow />
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamsTable;
