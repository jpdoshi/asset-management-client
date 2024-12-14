import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import Page from "../components/Page";
import { capitalizeString } from "../utils/utils";

import ModalForm from "../components/ModalForm";
import FormField from "../components/FormField";
import TeamUsersList from "../components/TeamUsersList";
import UserCard from "../components/UserCard";
import TeamDetailAssets from "../components/TeamDetailAssets";

import axios from "axios";
import { API_URL } from "../config.mjs";

const TeamDetails = () => {
  const [team, setTeam] = useState(null);
  const userIdRef = useRef(null);
  const editUserRef = useRef(null);

  const params = useParams();
  const teamId = params.slug;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamRes = await axios.get(`${`${API_URL}/team/${teamId}`}`);
        setTeam(teamRes.data.data.team);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const [showMemberModal, setShowMemberModal] = useState(false);

  return (
    <Page>
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl mb-1 font-medium">
            {team && capitalizeString(team.name)}
          </h1>
          <h2 className="font-medium text-lg opacity-60">
            Manage Team Members
          </h2>
        </div>
        <button
          onClick={() => setShowMemberModal(true)}
          className="bg-gradient-to-r from-indigo-500 px-5 py-2 h-fit rounded-full text-white to-indigo-600 shadow-md shadow-gray-200"
        >
          Add Team Member
        </button>
      </div>
      <div className="mt-4">
        <TeamUsersList teamId={teamId} />
      </div>
      <div className="mt-8">
        <h1 className="text-3xl mb-1 font-medium">Assets</h1>
        <h2 className="font-medium text-lg opacity-60">Manage Team Assets</h2>
      </div>
      <div className="mt-4">
        <TeamDetailAssets />
      </div>
      <div className="mt-8">
        <h1 className="text-3xl mb-1 font-medium">Team Manager</h1>
        <h2 className="font-medium text-lg opacity-60">Manage Team Manager</h2>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <UserCard
          fieldRef={editUserRef}
          title="Team Manager"
          value={team && `${team.manager.name}`}
          onClick={async () => {
            await axios.put(`${API_URL}/user/${team.manager._id}`, {
              role: "User",
            });
            await axios.put(`${API_URL}/user/${editUserRef.current.value}`, {
              role: "Manager",
              team: team._id,
            });
            await axios.put(`${API_URL}/team/${team._id}`, {
              manager: editUserRef.current.value,
            });

            window.location.reload();
          }}
        />
      </div>
      <ModalForm
        showModal={showMemberModal}
        setShowModal={setShowMemberModal}
        title="Add Team Member"
        onClick={async () => {
          setShowMemberModal(false);

          await axios.put(`${API_URL}/user/${userIdRef.current.value}`, {
            team: team._id,
          });

          window.location.reload();
        }}
      >
        <FormField
          fieldRef={userIdRef}
          label="User ID"
          placeholder="Enter User ID"
        />
      </ModalForm>
    </Page>
  );
};

export default TeamDetails;
