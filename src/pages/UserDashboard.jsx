import React, { useState } from "react";

import Page from "../components/Page";

import Cookie from "js-cookie";
import users from "../utils/users.json";

import ModalForm from "../components/ModalForm";
import FormField from "../components/FormField";
import UserAssets from "../components/UserAssets";
import ProfileCard from "../components/ProfileCard";

const UserDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  let username;

  for (let user of users.users) {
    if (user.id == Cookie.get("user_id")) {
      username = user.name;
    }
  }
  return (
    <Page>
      <h1 className="text-3xl mb-1 font-medium">Welcome, {username}!</h1>
      <h2 className="font-medium text-lg opacity-60">Your Asset Dashboard</h2>
      <div className="mt-6 grid grid-cols-4 gap-4">
        <ProfileCard value="HR Manager" label="Your Role" />
        <ProfileCard value="Management Team" label="Your Team" />
      </div>
      <div className="mt-12 flex justify-between">
        <div>
          <h1 className="text-3xl mb-1 font-medium">Your Assets</h1>
          <h2 className="font-medium text-lg opacity-60">Manage Your Assets</h2>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 px-5 py-2 h-fit rounded-full text-white hover:bg-indigo-500 duration-300"
        >
          Request Asset
        </button>
      </div>
      <div className="mt-6">
        <UserAssets />
      </div>
      <ModalForm
        title="Request Asset"
        showModal={showModal}
        setShowModal={setShowModal}
        onClick={() => {
          setShowModal(false);
          alert("request successfully");
        }}
      >
        <FormField label="Asset ID" placeholder="Enter Asset ID" />
      </ModalForm>
    </Page>
  );
};

export default UserDashboard;
