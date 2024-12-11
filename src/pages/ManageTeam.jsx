import React, { useState } from "react";
import Page from "../components/Page";

import ModalForm from "../components/ModalForm";
import FormField from "../components/FormField";
import TeamUsers from "../components/TeamUsers";
import TeamAssets from "../components/TeamAssets";

const ManageTeam = () => {
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [showAssetModal, setShowAssetModal] = useState(false);

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
          className="bg-indigo-600 px-5 py-2 h-fit rounded-full text-white hover:bg-indigo-500 duration-300"
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
          className="bg-indigo-600 px-5 py-2 h-fit rounded-full text-white hover:bg-indigo-500 duration-300"
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
        onClick={() => {
          setShowMemberModal(false);
          alert("team member added");
        }}
      >
        <FormField label="User ID" placeholder="Enter User ID" />
      </ModalForm>
      <ModalForm
        showModal={showAssetModal}
        setShowModal={setShowAssetModal}
        title="Add Asset for Team"
        onClick={() => {
          setShowAssetModal(false);
          alert("team asset requested");
        }}
      >
        <FormField label="Asset ID" placeholder="Enter Asset ID" />
      </ModalForm>
    </Page>
  );
};

export default ManageTeam;
