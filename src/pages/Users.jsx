import React, { useEffect, useRef, useState } from "react";

import Page from "../components/Page";
import UsersTable from "../components/UsersTable";

import ModalForm from "../components/ModalForm";
import FormField from "../components/FormField";
import axios from "axios";
import { API_URL } from "../config.mjs";

const Users = () => {
  const [showModal, setShowModal] = useState(false);

  const nameRef = useRef(null);
  const designationRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

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
            className="bg-gradient-to-r from-indigo-500 px-5 py-2 h-fit rounded-full text-white to-indigo-600 shadow-md shadow-gray-200"
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
          onClick={async () => {
            setShowModal(false);
            const name = nameRef.current.value;
            const role = "User";
            const designation = designationRef.current.value;
            const username = usernameRef.current.value;
            const password = passwordRef.current.value;

            const user = { name, role, designation, username, password };
            await axios.post(`${API_URL}/user`, user);

            window.location.reload();
          }}
        >
          <FormField
            label="User Name"
            placeholder="Firstname Lastname"
            fieldRef={nameRef}
          />
          <FormField
            label="User Designation"
            placeholder="Enter User Designation"
            fieldRef={designationRef}
          />
          <FormField
            label="Enter Username"
            placeholder="Enter Username for User"
            fieldRef={usernameRef}
          />
          <FormField
            label="Enter Password"
            placeholder="Enter Password for User"
            fieldRef={passwordRef}
          />
        </ModalForm>
      </Page>
    </>
  );
};

export default Users;
