import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Page from "../components/Page";
import { pascalToString } from "../utils/utils";

import ModalForm from "../components/ModalForm";
import FormField from "../components/FormField";
import TeamUsersList from "../components/TeamUsersList";
import UserCard from "../components/UserCard";
import axios from "axios";
import { API_URL } from "../config.mjs";

const TeamDetails = () => {
  const [team, setTeam] = useState(null);

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
            {team && pascalToString(team.name)}
          </h1>
          <h2 className="font-medium text-lg opacity-60">
            Manage Team Members
          </h2>
        </div>
        <button
          onClick={() => setShowMemberModal(true)}
          className="bg-indigo-600 px-5 py-2 h-fit rounded-full text-white hover:bg-indigo-500 duration-300"
        >
          Add Team Member
        </button>
      </div>
      <div className="mt-4">
        <TeamUsersList teamId={teamId} />
      </div>
      <div className="mt-8">
        <h1 className="text-3xl mb-1 font-medium">Team Manager</h1>
        <h2 className="font-medium text-lg opacity-60">Manage Team Manager</h2>
      </div>
      <div className="mt-4">
        <UserCard title="Team Manager" value={team && `${team.manager.name}`} />
      </div>
      <ModalForm
        showModal={showMemberModal}
        setShowModal={setShowMemberModal}
        title="Add Team Member"
        onClick={() => {
          setShowMemberModal(false);
          alert("team member added");
        }}
      >
        <FormField label="User Name" placeholder="Firstname Lastname" />
      </ModalForm>
    </Page>
  );
};

export default TeamDetails;
