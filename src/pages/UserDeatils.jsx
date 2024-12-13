import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Page from "../components/Page";
import ModalForm from "../components/ModalForm";
import UserCard from "../components/UserCard";
import FormField from "../components/FormField";
import UserAssetsList from "../components/UserAssetsList";
import axios from "axios";
import { API_URL } from "../config.mjs";

const UserDeatils = () => {
  const [user, setUser] = useState(null);

  const params = useParams();
  const userId = params.slug;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get(`${API_URL}/user/${userId}`);
        setUser(userRes.data.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showAssetModal, setShowAssetModal] = useState(false);

  const designationRef = useRef(null);
  const teamRef = useRef(null);

  const navigate = useNavigate();
  return (
    <Page>
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl mb-1 font-medium">{user && user.name}</h1>
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
        <div className="mt-4 grid grid-cols-3 gap-4">
          <UserCard
            value={user && `${user.role == "User" ? "Member" : user.role}`}
            title="User Role"
            noEdit
          />
          <UserCard
            value={user && `${user.designation}`}
            title="User Designation"
            placeholder="Enter User Designation"
            fieldRef={designationRef}
            onClick={async () => {
              await axios.put(`${API_URL}/user/${user._id}`, {
                designation: designationRef.current.value,
              });
              window.location.reload();
            }}
          />
          <UserCard
            value={user && `${user.team ? user.team.name : "No Team"}`}
            title="Team"
            fieldRef={teamRef}
            placeholder="Enter Team ID"
            onClick={async () => {
              await axios.put(`${API_URL}/user/${user._id}`, {
                team: teamRef.current.value,
              });
              window.location.reload();
            }}
          />
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
        onClick={async () => {
          await axios.delete(`${API_URL}/user/${user._id}`);
          setShowRemoveModal(false);
          navigate("/users");
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
