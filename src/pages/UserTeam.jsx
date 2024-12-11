import React, { useState } from "react";

import Page from "../components/Page";

import ModalForm from "../components/ModalForm";
import FormField from "../components/FormField";
import ProfileCard from "../components/ProfileCard";

const UserTeam = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Page>
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl mb-1 font-medium">Manangement Team</h1>
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
      <div className="mt-6 grid grid-cols-3 gap-4">
        <ProfileCard label="HR Manager" value="Cersei Lannister" />
        <ProfileCard label="Senior Manager" value="Bran Stark" />
        <ProfileCard label="Product Manager" value="Jorah Mormont" />
        <ProfileCard label="HR Manager" value="Tyrion Lannister" />
        <ProfileCard label="Jr Manager" value="Petyr Baelish" />
        <ProfileCard label="Project Manager" value="Jaime Lannister" />
        <ProfileCard label="Project Manager" value="Arya Stark" />
        <ProfileCard label="HR Manager" value="Robert Baratheon" />
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
