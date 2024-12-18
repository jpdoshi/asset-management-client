import React, { useEffect, useState } from "react";

import Page from "../components/Page";

import ModalForm from "../components/ModalForm";
import ProfileCard from "../components/ProfileCard";
import TeamAssets from "../components/TeamAssets";

import Cookie from "js-cookie";

import axios from "axios";
import { API_URL } from "../config.mjs";
import FormDropdown from "../components/FormDropdown";

const UserTeam = () => {
  const [showModal, setShowModal] = useState(false);
  const [team, setTeam] = useState(null);
  const [teamUsers, setTeamUsers] = useState([]);
  const [assetType, setAssetType] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get(
          `${API_URL}/user/${Cookie.get("user_id")}`
        );
        const teamId = userRes.data.data.team._id;
        const teamRes = await axios.get(`${API_URL}/team/${teamId}`);

        setTeam(teamRes.data.data.team);
        setTeamUsers(teamRes.data.data.users);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Page>
      <h1 className="text-3xl mb-1 font-medium">{team && team.name}</h1>
      <h2 className="font-medium text-lg opacity-60">Your Team Members</h2>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {teamUsers &&
          teamUsers.map((teamUser, index) => (
            <ProfileCard
              key={index}
              label={`${teamUser.designation}`}
              value={`${teamUser.name}`}
            />
          ))}
      </div>
      <div className="mt-8">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl mb-1 font-medium">Team Assets</h1>
            <h2 className="font-medium text-lg opacity-60">
              Request Asset for your Team
            </h2>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-br from-indigo-400 px-5 py-2 h-fit hover:saturate-150 rounded-full text-white to-indigo-600 shadow-md shadow-gray-200"
          >
            Request Asset for your Team
          </button>
        </div>
      </div>
      <div className="mt-4">
        <TeamAssets />
      </div>
      <ModalForm
        title="Request Asset for your Team"
        showModal={showModal}
        setShowModal={setShowModal}
        onClick={async () => {
          setShowModal(false);

          try {
            await axios.post(`${API_URL}/team/request-asset/${team._id}`, {
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

export default UserTeam;
