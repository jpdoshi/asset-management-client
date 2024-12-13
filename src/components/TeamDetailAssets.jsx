import React, { useEffect, useState } from "react";

import Cookie from "js-cookie";
import axios from "axios";
import { API_URL } from "../config.mjs";
import Cross from "./Cross";

const TeamDetailAssets = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const path = window.location.pathname;
        let pathList = [];

        for (let p of path.split("/")) {
          pathList.push(p);
        }

        const teamId = pathList[pathList.length - 1];
        const assetsRes = await axios.get(`${API_URL}/asset/team/${teamId}`);
        setAssets(assetsRes.data.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-md border border-indigo-100">
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
                    <span className="text-sm rounded-md p-0.5 bg-red-700 duration-300 hover:bg-red-600 text-white inline-block">
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

export default TeamDetailAssets;
