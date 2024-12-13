import React, { useEffect, useState } from "react";

import Page from "../components/Page";

import ModalForm from "../components/ModalForm";
import FormField from "../components/FormField";
import ProfileCard from "../components/ProfileCard";
import TeamAssets from "../components/TeamAssets";

import Cookie from "js-cookie";

import axios from "axios";
import { API_URL } from "../config.mjs";

const UserTeam = () => {
  const [showModal, setShowModal] = useState(false);
  const [team, setTeam] = useState(null);
  const [teamUsers, setTeamUsers] = useState([]);

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
            className="bg-indigo-600 px-5 py-2 h-fit rounded-full text-white hover:bg-indigo-500 duration-300"
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
        onClick={() => {
          alert("request successfuly");
          setShowModal(false);
        }}
      >
        <FormField label="Asset ID" placeholder="Enter Asset ID" />
      </ModalForm>
    </Page>
  );
};

export default UserTeam;
