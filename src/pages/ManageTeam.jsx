import React, { useEffect, useRef, useState } from "react";
import Page from "../components/Page";

import ModalForm from "../components/ModalForm";
import FormField from "../components/FormField";
import FormDropdown from "../components/FormDropdown";
import TeamUsers from "../components/TeamUsers";
import TeamAssets from "../components/TeamAssets";

import Cookie from "js-cookie";
import axios from "axios";
import { API_URL } from "../config.mjs";

const ManageTeam = () => {
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [showAssetModal, setShowAssetModal] = useState(false);
  const [assetType, setAssetType] = useState(null);
  const [team, setTeam] = useState(null);

  const memberRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get(
          `${API_URL}/user/${Cookie.get("user_id")}`
        );
        setTeam(userRes.data.data.team._id);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Page>
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl mb-1 font-medium">Your Team</h1>
          <h2 className="font-medium text-lg opacity-60">
            Manage Team members
          </h2>
        </div>
        <button
          onClick={() => setShowMemberModal(true)}
          className="bg-gradient-to-br from-indigo-400 px-5 py-2 h-fit rounded-full hover:saturate-150 text-white to-indigo-600 shadow-md shadow-gray-200"
        >
          Add Member
        </button>
      </div>
      <div className="mt-4">
        <TeamUsers />
      </div>
      <div className="mt-8 flex justify-between">
        <div>
          <h1 className="text-3xl mb-1 font-medium">Team Assets</h1>
          <h2 className="font-medium text-lg opacity-60">Manage Team Assets</h2>
        </div>
        <button
          onClick={() => setShowAssetModal(true)}
          className="bg-gradient-to-br from-indigo-400 px-5 py-2 h-fit rounded-full hover:saturate-150 text-white to-indigo-600 shadow-md shadow-gray-200"
        >
          Request Asset for Team
        </button>
      </div>
      <div className="mt-4">
        <TeamAssets />
      </div>
      <ModalForm
        showModal={showMemberModal}
        setShowModal={setShowMemberModal}
        title="Add Team Member"
        onClick={async () => {
          setShowMemberModal(false);

          await axios.put(`${API_URL}/user/${memberRef.current.value}`, {
            team,
            role: "User",
          });
          window.location.reload();
        }}
      >
        <FormField
          label="User ID"
          placeholder="Enter User ID"
          fieldRef={memberRef}
        />
      </ModalForm>
      <ModalForm
        showModal={showAssetModal}
        setShowModal={setShowAssetModal}
        title="Add Asset for Team"
        onClick={async () => {
          setShowAssetModal(false);
          try {
            await axios.post(`${API_URL}/team/request-asset/${team}`, {
              asset: assetType,
              requestedBy: Cookie.get("user_id"),
            });
            alert("Request added successfuly");
          } catch (error) {
            alert(`Error Occured: ${error.message}`);
          }
        }}
      >
        <FormDropdown
          label="Select Asset Type"
          options={["Mouse", "Monitor", "Keyboard", "Laptop"]}
          text="Asset Type"
          valueRef={setAssetType}
        />
      </ModalForm>
    </Page>
  );
};

export default ManageTeam;
