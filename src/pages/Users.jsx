import React, { useState } from "react";

import Page from "../components/Page";
import UsersTable from "../components/UsersTable";

import ModalForm from "../components/ModalForm";
import FormField from "../components/FormField";

const Users = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Page>
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl mb-1 font-medium">Users</h1>
            <h2 className="font-medium text-lg opacity-60">Manage Users</h2>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 px-5 py-2 h-fit rounded-full text-white hover:bg-indigo-500 duration-300 shadow-indigo-100 shadow-md"
          >
            Add User
          </button>
        </div>
        <div className="mt-4">
          <UsersTable />
        </div>
        <ModalForm
          showModal={showModal}
          setShowModal={setShowModal}
          title="Add User"
          onClick={() => {
            setShowModal(false);
            alert("user added");
          }}
        >
          <FormField label="User Name" placeholder="Firstname Lastname" />
          <FormField label="Team Name" placeholder="Team where user works" />
        </ModalForm>
      </Page>
    </>
  );
};

export default Users;
