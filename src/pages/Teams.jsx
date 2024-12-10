import React from "react";

import Page from "../components/Page";
import TeamsTable from "../components/TeamsTable";

const Teams = () => {
  const addTeam = () => {
    alert("add team dialog");
  };

  return (
    <Page>
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl mb-1 font-medium">Teams</h1>
          <h2 className="font-medium text-lg opacity-60">Manage Teams</h2>
        </div>
        <button
          onClick={addTeam}
          className="bg-indigo-600 px-5 py-2 h-fit rounded-full text-white hover:bg-indigo-500 duration-300 shadow-indigo-100 shadow-md"
        >
          Add Team
        </button>
      </div>
      <div className="mt-4">
        <TeamsTable />
      </div>
    </Page>
  );
};

export default Teams;
