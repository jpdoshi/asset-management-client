import React from "react";
import { useParams } from "react-router-dom";

import Page from "../components/Page";
import { pascalToString } from "../utils/utils";

const TeamDetails = () => {
  const params = useParams();
  const teamType = params.slug;
  return (
    <Page>
      <h1 className="text-3xl mb-1 font-medium">{pascalToString(teamType)}</h1>
      <h2 className="font-medium text-lg opacity-60">
        Manage "{pascalToString(teamType)}" Team
      </h2>
    </Page>
  );
};

export default TeamDetails;
