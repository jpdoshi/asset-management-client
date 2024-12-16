import React, { useEffect, useState } from "react";

import Cross from "./Cross";

import axios from "axios";
import { API_URL } from "../config.mjs";

const UserAssetsList = () => {
  const [userAssets, setUserAssets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const path = window.location.pathname;
        let pathList = [];

        for (let p of path.split("/")) {
          pathList.push(p);
        }

        const userId = pathList[pathList.length - 1];

        const assetsRes = await axios.get(`${API_URL}/asset/user/${userId}`);
        setUserAssets(assetsRes.data.data);
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
            <td className="py-2 px-8">Action</td>
          </tr>
        </thead>
        <tbody>
          {userAssets &&
            userAssets.map((asset, index) => (
              <tr key={index} className="border-b border-indigo-100">
                <td className="py-2 px-8 text-sm">{asset._id}</td>
                <td className="py-2 px-8 text-sm">{asset.product}</td>
                <td className="py-2 px-8 text-sm">{asset.category}</td>
                <td className="py-2 px-8 text-sm flex gap-2">
                  <button
                    onClick={async () => {
                      await axios.put(`${API_URL}/asset/${asset._id}`, {
                        user: null,
                      });
                      window.location.reload();
                    }}
                  >
                    <span className="text-sm rounded-md hover:saturate-150 bg-gradient-to-br from-red-400  to-red-600 text-white inline-block shadow-md shadow-gray-200">
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

export default UserAssetsList;
