import React, { useEffect, useState } from "react";

import Cookie from "js-cookie";
import axios from "axios";
import { API_URL } from "../config.mjs";
import Cross from "./Cross";

const TeamAssets = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get(
          `${API_URL}/user/${Cookie.get("user_id")}`
        );
        const teamId = userRes.data.data.team._id;
        const assetsRes = await axios.get(`${API_URL}/asset/team/${teamId}`);
        setAssets(assetsRes.data.data);
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
            <td className="py-2 px-8">Asset Name</td>
            <td className="py-2 px-8">Asset Type</td>
            <td className="py-2 px-8">User</td>
            <td className="py-2 px-8">Action</td>
          </tr>
        </thead>
        <tbody>
          {assets &&
            assets.map((asset, index) => (
              <tr key={index} className="border-b border-indigo-100">
                <td className="py-2 px-8 text-sm">{asset._id}</td>
                <td className="py-2 px-8 text-sm">{asset.product}</td>
                <td className="py-2 px-8 text-sm">{asset.category}</td>
                <td className="py-2 px-8 text-sm">
                  {asset.user ? asset.user.name : "Unassigned"}
                </td>
                <td className="py-2 px-8 text-sm flex gap-2">
                  <button
                    onClick={async () => {
                      await axios.put(`${API_URL}/asset/${asset._id}`, {
                        team: null,
                      });
                      window.location.reload();
                    }}
                  >
                    <span className="text-sm rounded-md p-0.5 bg-red-600 duration-300 hover:bg-red-500 text-white inline-block shadow-md shadow-gray-200">
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

export default TeamAssets;
