import React from "react";
import { useParams } from "react-router-dom";

import Page from "../components/Page";

const UserDeatils = () => {
  const params = useParams();
  const userSlug = params.slug;

  const user = {
    name: "Jainam Doshi",
  };
  return (
    <Page>
      <h1 className="text-3xl mb-1 font-medium">{user.name}</h1>
      <h2 className="font-medium text-lg opacity-60">Manage User</h2>
    </Page>
  );
};

export default UserDeatils;
