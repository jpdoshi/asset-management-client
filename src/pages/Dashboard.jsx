import React from "react";
import Page from "../components/Page";
import Card from "../components/Card";
import Maintanance from "../components/Maintanance";

const Dashboard = () => {
  return (
    <Page>
      <h1 className="text-3xl mb-1 font-medium">Dashboard</h1>
      <h2 className="font-medium text-lg opacity-60">Assets Statistics</h2>
      <div className="mt-4 grid grid-cols-4 gap-4">
        <Card amount={12} title="Asset Requests" to="/requests" />
        <Card amount={194} title="No of Assets" to="/assets" />
        <Card amount={80} title="No of Users" to="/users" />
        <Card amount={4} title="No of Teams" to="/teams" />
      </div>
      <div className="mt-8">
        <h2 className="font-medium text-2xl">Maintanance and Logs</h2>
        <div className="mt-4">
          <Maintanance />
        </div>
      </div>
    </Page>
  );
};

export default Dashboard;
