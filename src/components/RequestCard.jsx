import React, { useRef, useState } from "react";

import Tick from "./Tick";
import Cross from "./Cross";

import ModalForm from "./ModalForm";
import FormField from "./FormField";

import axios from "axios";
import { API_URL } from "../config.mjs";

const RequestCard = ({ user, asset, type }) => {
  const [showModal, setShowModal] = useState(false);
  const assetRef = useRef(null);

  return (
    <div className="px-6 py-4 flex justify-between rounded-md bg-white border border-indigo-100 shadow-lg shadow-indigo-50">
      <div className="my-auto">
        <h1 className="text-2xl font-medium">{asset}</h1>
        <span className="opacity-50 font-medium">{user.name}</span>
        <span className="text-indigo-400 mx-2 font-medium">{type}</span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          <span className="text-sm rounded-md hover:saturate-150 bg-gradient-to-br from-green-400 to-green-600 text-white inline-block shadow-md shadow-gray-200">
            <Tick />
          </span>
        </button>
        <button
          onClick={async () => {
            if (type == "User") {
              try {
                await axios.put(`${API_URL}/user/remove-request/${user._id}`, {
                  asset,
                });
              } catch (error) {
                alert(`Error Occured: ${error.message}`);
              }
            }

            if (type == "Team") {
              try {
                await axios.put(`${API_URL}/team/remove-request/${user._id}`, {
                  asset,
                });
              } catch (error) {
                alert(`Error Occured: ${error.message}`);
              }
            }
            window.location.reload();
          }}
        >
          <span className="text-sm rounded-md hover:saturate-150 bg-gradient-to-br from-red-400 to-red-600 text-white inline-block shadow-md shadow-gray-200">
            <Cross />
          </span>
        </button>
      </div>
      <ModalForm
        showModal={showModal}
        setShowModal={setShowModal}
        title="Select Asset"
        onClick={async () => {
          setShowModal(false);
          const assetId = assetRef.current.value;

          if (type == "User") {
            try {
              await axios.put(`${API_URL}/asset/${assetId}`, {
                user: user._id,
              });

              alert(`${asset} assigned to ${type} "${user.name}"`);
            } catch (error) {
              alert(`Error Occured: ${error.message}`);
            }

            try {
              await axios.put(`${API_URL}/user/remove-request/${user._id}`, {
                asset,
              });
            } catch (error) {
              alert(`Error Occured: ${error.message}`);
            }
          }

          if (type == "Team") {
            try {
              await axios.put(`${API_URL}/asset/${assetId}`, {
                team: user._id,
              });

              alert(`${asset} assigned to ${type} "${user.name}"`);
            } catch (error) {
              alert(`Error Occured: ${error.message}`);
            }

            try {
              await axios.put(`${API_URL}/team/remove-request/${user._id}`, {
                asset,
              });
            } catch (error) {
              alert(`Error Occured: ${error.message}`);
            }
          }

          window.location.reload();
        }}
      >
        <FormField
          fieldRef={assetRef}
          label="Asset ID"
          placeholder="Enter Asset ID"
        />
      </ModalForm>
    </div>
  );
};

export default RequestCard;
