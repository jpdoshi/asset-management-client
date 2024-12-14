import React, { useEffect, useState } from "react";

import axios from "axios";
import Cookie from "js-cookie";
import { API_URL } from "../config.mjs";

const UserAssets = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assetsRes = await axios.get(
          `${API_URL}/asset/user/${Cookie.get("user_id")}`
        );
        setAssets(assetsRes.data.data);
      } catch (error) {
        console.log(error.message);
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
          {assets &&
            assets.map((asset, index) => (
              <tr key={index} className="border-b border-indigo-100">
                <td className="py-2 px-8 text-sm">{asset._id}</td>
                <td className="py-2 px-8 text-sm">{asset.product}</td>
                <td className="py-2 px-8 text-sm">{asset.category}</td>
                <td className="py-2 px-8 text-sm">
                  <button onClick={() => alert("request maintanance")}>
                    <span className="text-sm rounded px-2.5 py-1.5 bg-indigo-600 duration-300 hover:bg-indigo-500 text-white inline-block shadow-md shadow-gray-200">
                      Request Maintanance
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

export default UserAssets;
