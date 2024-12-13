import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../config.mjs";

const AssetsTable = ({ category }) => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assetRes = await axios.get(
          `${API_URL}/asset/category/${category}`
        );

        setAssets(assetRes.data.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const reloadAssets = async () => {
    try {
      const assetRes = await axios.get(`${API_URL}/asset/category/${category}`);

      setAssets(assetRes.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="bg-white rounded-md border border-indigo-100">
      <table className="w-full">
        <thead>
          <tr className="border-b border-indigo-100 font-semibold">
            <td className="py-2 px-8">ID</td>
            <td className="py-2 px-8">Product</td>
            <td className="py-2 px-8">User</td>
            <td className="py-2 px-8">Status</td>
            <td className="py-2 px-8">Action</td>
          </tr>
        </thead>
        <tbody>
          {assets &&
            assets.map((asset, index) => (
              <tr key={index} className="border-b border-indigo-100">
                <td className="py-2 px-8 text-sm">{asset._id}</td>
                <td className="py-2 px-8 text-sm">{asset.product}</td>
                <td className="py-2 px-8 text-sm">
                  {asset.user ? asset.user.name : "Unassigned"}
                </td>
                <td className="py-2 px-8 text-sm">{asset.status}</td>
                <td className="py-2 px-8 text-sm flex gap-2">
                  <button
                    onClick={async () => {
                      await axios.put(`${API_URL}/asset/scrap/${asset._id}`);
                      reloadAssets();
                    }}
                  >
                    <span className="text-sm rounded-md px-2.5 py-1.5 bg-indigo-600 duration-300 hover:bg-indigo-500 text-white inline-block">
                      Scrap
                    </span>
                  </button>
                  <button
                    onClick={async () => {
                      await axios.delete(`${API_URL}/asset/${asset._id}`);
                      reloadAssets();
                    }}
                  >
                    <span className="text-sm rounded-md px-2.5 py-1.5 bg-red-600 duration-300 hover:bg-red-500 text-white inline-block">
                      Remove
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

export default AssetsTable;
