import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Page from "../components/Page";
import { pascalToString } from "../utils/utils";

import ModalForm from "../components/ModalForm";
import FormField from "../components/FormField";
import TeamUsersList from "../components/TeamUsersList";
import ManagerTable from "../components/ManagerTable";

const TeamDetails = () => {
  const params = useParams();
  const teamType = params.slug;

  const [showMemberModal, setShowMemberModal] = useState(false);
  const [showManagerModal, setShowManagerModal] = useState(false);

  return (
    <Page>
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl mb-1 font-medium">
            {pascalToString(teamType)}
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
        <TeamUsersList />
      </div>
      <div className="mt-8">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl mb-1 font-medium">Team Manager</h1>
            <h2 className="font-medium text-lg opacity-60">
              Manage Team Manager
            </h2>
          </div>
          <button
            onClick={() => setShowManagerModal(true)}
            className="bg-indigo-600 px-5 py-2 h-fit rounded-full text-white hover:bg-indigo-500 duration-300"
          >
            Add Team Manager
          </button>
        </div>
        <ManagerTable />
      </div>
      <ModalForm
        showModal={showMemberModal}
        setShowModal={setShowMemberModal}
        title="Add Team Manager"
        onClick={() => {
          setShowMemberModal(false);
          alert("team member added");
        }}
      >
        <FormField label="User Name" placeholder="Firstname Lastname" />
      </ModalForm>
      <ModalForm
        showModal={showManagerModal}
        setShowModal={setShowManagerModal}
        title="Add Team Member"
        onClick={() => {
          setShowManagerModal(false);
          alert("team manager added");
        }}
      >
        <FormField label="Manager Name" placeholder="Firstname Lastname" />
      </ModalForm>
    </Page>
  );
};

export default TeamDetails;
