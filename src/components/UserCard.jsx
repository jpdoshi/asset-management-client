import React, { useState } from "react";
import ModalForm from "./ModalForm";
import FormField from "./FormField";
import Edit from "./Edit";

const UserCard = ({ title, value }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-4 pb-2 rounded-md bg-white border border-indigo-100">
      <h1 className="text-3xl mb-2 font-medium">{value}</h1>
      <p className="opacity-50 font-semibold">{title}</p>
      <div className="flex justify-end">
        <button onClick={() => setShowModal(true)}>
          <span className="opacity-80 text-sm rounded-md p-1.5 bg-indigo-700 duration-300 hover:bg-indigo-600 text-white inline-block">
            <Edit />
          </span>
        </button>
      </div>
      <ModalForm
        showModal={showModal}
        setShowModal={setShowModal}
        title={`Edit ${title}`}
        onClick={() => {
          setShowModal(false);
          alert(`${title} changed successfuly`);
        }}
      >
        <FormField label={title} placeholder={`current value: ${value}`} />
      </ModalForm>
    </div>
  );
};

export default UserCard;
