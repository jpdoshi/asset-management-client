import React, { useState } from "react";
import Page from "../components/Page";

import ModalForm from "../components/ModalForm";
import FormField from "../components/FormField";
import TeamUsers from "../components/TeamUsers";

const ManageTeam = () => {
  const [showModal, setShowModal] = useState(false);

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
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 px-5 py-2 h-fit rounded-full text-white hover:bg-indigo-500 duration-300"
        >
          Add Member
        </button>
      </div>
      <div className="mt-6">
        <TeamUsers />
      </div>
      <ModalForm
        showModal={showModal}
        setShowModal={setShowModal}
        title="Add Team Member"
        onClick={() => {
          setShowModal(false);
          alert("team member added");
        }}
      >
        <FormField label="User ID" placeholder="Enter User ID" />
      </ModalForm>
    </Page>
  );
};

export default ManageTeam;
