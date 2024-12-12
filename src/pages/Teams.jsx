import React, { useState } from "react";

import Page from "../components/Page";
import TeamsTable from "../components/TeamsTable";
import ModalForm from "../components/ModalForm";
import FormField from "../components/FormField";
import { useRef } from "react";
import axios from "axios";
import { API_URL } from "../config.mjs";

const Teams = () => {
  const [showModal, setShowModal] = useState(false);
  const teamNameRef = useRef(null);
  const teamManagerRef = useRef(null);

  return (
    <Page>
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl mb-1 font-medium">Teams</h1>
          <h2 className="font-medium text-lg opacity-60">Manage Teams</h2>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 px-5 py-2 h-fit rounded-full text-white hover:bg-indigo-500 duration-300"
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
        onClick={async () => {
          setShowModal(false);

          const name = teamNameRef.current.value;
          const manager = teamManagerRef.current.value;
          const team = { name, manager };

          const newTeam = await axios.post(`${API_URL}/team`, team);
          await axios.put(`${API_URL}/user/${manager}`, {
            team: newTeam.data.data._id,
            role: "Manager",
          });
          window.location.reload();
        }}
      >
        <FormField
          fieldRef={teamNameRef}
          label="Team Name"
          placeholder="e.g: Graphics Designing"
        />
        <FormField
          fieldRef={teamManagerRef}
          label="Team Manager"
          placeholder="Enter User ID"
        />
      </ModalForm>
    </Page>
  );
};

export default Teams;
