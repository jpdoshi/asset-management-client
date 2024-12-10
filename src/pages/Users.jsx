import React from "react";

import Page from "../components/Page";
import UsersTable from "../components/UsersTable";

const Users = () => {
  const addUser = () => {
    alert("add user dialog");
  };

  return (
    <>
      <Page>
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl mb-1 font-medium">Users</h1>
            <h2 className="font-medium text-lg opacity-60">Manage Users</h2>
          </div>
          <button
            onClick={addUser}
            className="bg-indigo-600 px-5 py-2 h-fit rounded-full text-white hover:bg-indigo-500 duration-300 shadow-indigo-100 shadow-md"
          >
            Add User
          </button>
        </div>
        <div className="mt-4">
          <UsersTable />
        </div>
      </Page>
    </>
  );
};

export default Users;
