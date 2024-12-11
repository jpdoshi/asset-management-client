import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Page from "../components/Page";
import ModalForm from "../components/ModalForm";
import UserCard from "../components/UserCard";
import FormField from "../components/FormField";
import UserAssetsList from "../components/UserAssetsList";

const UserDeatils = () => {
  const params = useParams();
  const userSlug = params.slug;

  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showAssetModal, setShowAssetModal] = useState(false);

  const navigate = useNavigate();

  const user = {
    name: "Jainam Doshi",
  };
  return (
    <Page>
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl mb-1 font-medium">{user.name}</h1>
          <h2 className="font-medium text-lg opacity-60">Manage User</h2>
        </div>
        <button
          onClick={() => setShowRemoveModal(true)}
          className="bg-red-600 px-5 py-2 h-fit rounded-full text-white hover:bg-red-500 duration-300"
        >
          Remove User
        </button>
      </div>
      <div className="mt-4">
        <div className="mt-4 grid grid-cols-2 gap-4">
          <UserCard value="Frontend Developer" title="User Role" />
          <UserCard value="Software Development" title="Team" />
        </div>
      </div>
      <div className="mt-8 flex justify-between">
        <div>
          <h1 className="text-3xl mb-1 font-medium">Assigned Assets</h1>
          <h2 className="font-medium text-lg opacity-60">Manage User Assets</h2>
        </div>
        <button
          onClick={() => setShowAssetModal(true)}
          className="bg-indigo-600 px-5 py-2 h-fit rounded-full text-white hover:bg-indigo-500 duration-300"
        >
          Assign Asset
        </button>
      </div>
      <div className="mt-4">
        <UserAssetsList />
      </div>
      <ModalForm
        showModal={showRemoveModal}
        setShowModal={setShowRemoveModal}
        title="Remove User"
        onClick={() => {
          setShowRemoveModal(false);
          navigate("/users");
          alert("user removed");
        }}
      >
        <p>
          Are you sure you want to remove user? This Action might be destructive
          and cannot be reverted
        </p>
      </ModalForm>
      <ModalForm
        showModal={showAssetModal}
        setShowModal={setShowAssetModal}
        title="Asign Asset"
        onClick={() => {
          setShowAssetModal(false);
          alert("asset assigned to user");
        }}
      >
        <FormField label="Asset Name" placeholder="Enter Asset ID" />
      </ModalForm>
    </Page>
  );
};

export default UserDeatils;
