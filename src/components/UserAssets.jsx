import React, { useEffect, useState } from "react";

import axios from "axios";
import Cookie from "js-cookie";
import { API_URL } from "../config.mjs";
import ModalForm from "./ModalForm";
import { capitalizeString } from "../utils/utils";

const UserAssets = () => {
  const [assets, setAssets] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [currentAsset, setCurrentAsset] = useState(false);

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
                <td className="py-2 px-8 text-sm flex gap-2">
                  <button
                    onClick={() => {
                      setCurrentAsset(asset);
                      setShowModal(true);
                    }}
                  >
                    <span className="text-sm rounded-full px-3.5 py-1 bg-gradient-to-br from-yellow-200  to-yellow-400 text-yellow-800 font-semibold inline-block shadow-md shadow-gray-200">
                      History Log
                    </span>
                  </button>
                  <button
                    onClick={() => alert("added request for maintanance")}
                  >
                    <span className="text-sm rounded-full px-3.5 py-1 bg-gradient-to-br from-indigo-400  to-indigo-600 text-white font-semibold inline-block shadow-md shadow-gray-200">
                      Request Maintanance
                    </span>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ModalForm
        title={`History Log for "${currentAsset && currentAsset.product}" ${
          currentAsset && capitalizeString(currentAsset.category)
        }`}
        showModal={showModal}
        setShowModal={setShowModal}
        onClick={() => {
          setShowModal(false);
        }}
        hideBtn
      >
        {currentAsset.maintenanceLog && currentAsset.maintenanceLog.length > 0
          ? currentAsset.maintenanceLog.map((log) => (
              <div className="flex gap-4 text-center text-sm opacity-80">
                <span className="w-full">
                  {new Date(log.date).toLocaleString()}
                </span>
                <span className="w-full">{log.issue}</span>
                <span className="w-full">{log.status}</span>
              </div>
            ))
          : "No History"}
      </ModalForm>
    </div>
  );
};

export default UserAssets;
