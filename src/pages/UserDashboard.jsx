import React, { useEffect, useState } from "react";

import Page from "../components/Page";

import Cookie from "js-cookie";
import axios from "axios";
import { API_URL } from "../config.mjs";

import ModalForm from "../components/ModalForm";
import UserAssets from "../components/UserAssets";
import ProfileCard from "../components/ProfileCard";
import { capitalizeString } from "../utils/utils";
import FormDropdown from "../components/FormDropdown";

const UserDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  const [assetType, setAssetType] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get(
          `${API_URL}/user/${Cookie.get("user_id")}`
        );
        setUser(userRes.data.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Page>
      <h1 className="text-3xl mb-1 font-medium">
        Welcome, {user && capitalizeString(user.name)}!
      </h1>
      <h2 className="font-medium text-lg opacity-60">Your Asset Dashboard</h2>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <ProfileCard value={`${user && user.designation}`} label="Your Role" />
        <ProfileCard value={`${user && user.team.name}`} label="Your Team" />
      </div>
      <div className="mt-12 flex justify-between">
        <div>
          <h1 className="text-3xl mb-1 font-medium">Your Assets</h1>
          <h2 className="font-medium text-lg opacity-60">Manage Your Assets</h2>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-br from-indigo-400 px-5 py-2 h-fit hover:saturate-150 rounded-full text-white to-indigo-600 shadow-md shadow-gray-200"
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
        onClick={async () => {
          setShowModal(false);

          try {
            await axios.post(`${API_URL}/user/request-asset/${user._id}`, {
              asset: assetType,
            });
            alert("Request added successfuly");
          } catch (error) {
            alert(`error occured: ${error.message}`);
          }
        }}
      >
        <FormDropdown
          label="Select Asset Type"
          text="Asset Type"
          options={["Monitor", "Mouse", "Keyboard", "Laptop"]}
          valueRef={setAssetType}
        />
      </ModalForm>
    </Page>
  );
};

export default UserDashboard;
