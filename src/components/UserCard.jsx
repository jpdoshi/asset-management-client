import React, { useState } from "react";
import ModalForm from "./ModalForm";
import FormField from "./FormField";
import Edit from "./Edit";

const UserCard = ({ title, placeholder, value, onClick, fieldRef, noEdit }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-4 pb-2 rounded-md bg-white border border-indigo-100 shadow-lg shadow-indigo-50">
      <h1 className="text-3xl mb-2 font-medium">{value}</h1>
      <p className="opacity-50 font-semibold">{title}</p>
      <div className="flex justify-end">
        <button onClick={() => setShowModal(true)} disabled={noEdit}>
          <span
            className={`${
              noEdit ? "opacity-50" : ""
            } text-sm rounded-md p-1.5 bg-gradient-to-r from-indigo-500  to-indigo-600 text-white inline-block shadow-md shadow-gray-200`}
          >
            <Edit />
          </span>
        </button>
      </div>
      <ModalForm
        showModal={showModal}
        setShowModal={setShowModal}
        title={`Edit ${title}`}
        onClick={onClick}
      >
        <FormField
          fieldRef={fieldRef}
          label={title}
          placeholder={`${placeholder ? placeholder : "Enter User ID"}`}
        />
      </ModalForm>
    </div>
  );
};

export default UserCard;
