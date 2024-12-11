import React, { useState } from "react";

import Page from "../components/Page";
import TeamsTable from "../components/TeamsTable";
import ModalForm from "../components/ModalForm";
import FormField from "../components/FormField";

const Teams = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Page>
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl mb-1 font-medium">Teams</h1>
          <h2 className="font-medium text-lg opacity-60">Manage Teams</h2>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 px-5 py-2 h-fit rounded-full text-white hover:bg-indigo-500 duration-300 shadow-indigo-100 shadow-md"
        >
          Add Team
        </button>
      </div>
      <div className="mt-4">
        <TeamsTable />
      </div>
      <ModalForm
        showModal={showModal}
        setShowModal={setShowModal}
        title="Add Team"
        onClick={() => {
          setShowModal(false);
          alert("team added");
        }}
      >
        <FormField label="Team Name" placeholder="e.g: Graphics Designing" />
        <FormField label="Team Manager" placeholder="Firstname Lastname" />
      </ModalForm>
    </Page>
  );
};

export default Teams;
