import React, { useRef, useState } from "react";

import Tick from "./Tick";
import Cross from "./Cross";

import ModalForm from "./ModalForm";
import FormField from "./FormField";

const RequestCard = ({ user, team, asset }) => {
  const [showModal, setShowModal] = useState(false);
  const assetRef = useRef(null);

  return (
    <div className="px-6 py-4 flex justify-between rounded-md bg-white border border-indigo-100 shadow-lg shadow-indigo-50">
      <div className="my-auto">
        <h1 className="text-2xl font-medium mb-1">{asset}</h1>
        <ul className="flex gap-3">
          <li>
            <span className="opacity-50 font-medium">{user}</span>
          </li>
          <li>
            <span className="opacity-50 font-medium">{team}</span>
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          <span className="text-sm rounded-md bg-gradient-to-br from-green-400 to-green-600 text-white inline-block shadow-md shadow-gray-200">
            <Tick />
          </span>
        </button>
        <button onClick={() => alert("decline request")}>
          <span className="text-sm rounded-md bg-gradient-to-br from-red-400 to-red-600 text-white inline-block shadow-md shadow-gray-200">
            <Cross />
          </span>
        </button>
      </div>
      <ModalForm
        showModal={showModal}
        setShowModal={setShowModal}
        title="Select Asset"
        onClick={() => {
          const assetId = assetRef.current.value;
          setShowModal(false);
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
