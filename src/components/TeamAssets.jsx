import React, { useEffect, useRef, useState } from "react";

import Cookie from "js-cookie";
import axios from "axios";
import { API_URL } from "../config.mjs";
import Cross from "./Cross";
import ModalForm from "./ModalForm";
import FormField from "./FormField";
import { capitalizeString } from "../utils/utils";

const TeamAssets = () => {
  const [assets, setAssets] = useState([]);
  const [userRole, setUserRole] = useState(null);

  const userIdRef = useRef(null);
  const [assignAsset, setAssignAsset] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

    setUserRole(Cookie.get("user_role"));
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
            {userRole == "User" ? null : <td className="py-2 px-8">Action</td>}
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
                  {asset.user ? (
                    asset.user.name
                  ) : userRole == "User" ? (
                    "Unassigned"
                  ) : (
                    <button
                      onClick={() => {
                        setShowModal(true);
                        setAssignAsset(asset);
                      }}
                    >
                      <span className="text-sm rounded-full px-3.5 py-1.5 hover:saturate-150 font-medium bg-gradient-to-br from-indigo-400  to-indigo-600 text-white inline-block shadow-md shadow-gray-200">
                        Assign User
                      </span>
                    </button>
                  )}
                </td>
                {userRole == "User" ? null : (
                  <td className="py-2 px-8 text-sm flex gap-2">
                    <button
                      onClick={async () => {
                        await axios.put(`${API_URL}/asset/${asset._id}`, {
                          team: null,
                        });
                        window.location.reload();
                      }}
                    >
                      <span className="text-sm rounded-md hover:saturate-150 bg-gradient-to-br from-red-400  to-red-600 text-white inline-block shadow-md shadow-gray-200">
                        <Cross />
                      </span>
                    </button>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      <ModalForm
        title={`Assign User for "${
          (assignAsset && assignAsset.product) || "undefined"
        }" ${assignAsset && capitalizeString(assignAsset.category || "")}`}
        showModal={showModal}
        setShowModal={setShowModal}
        onClick={async () => {
          setShowModal(false);

          try {
            await axios.put(`${API_URL}/asset/${assignAsset._id}`, {
              user: userIdRef.current.value,
            });
            window.location.reload();
          } catch (error) {
            alert(`Error Occured: ${error.message}`);
          }
        }}
      >
        <FormField
          label="User ID"
          placeholder="Enter User ID"
          fieldRef={userIdRef}
        />
      </ModalForm>
    </div>
  );
};

export default TeamAssets;
