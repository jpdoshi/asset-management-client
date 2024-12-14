import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import Card from "../components/Card";
import Maintanance from "../components/Maintanance";

import { API_URL } from "../config.mjs";
import axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState(null);
  const [teams, setTeams] = useState(null);
  const [assets, setAssets] = useState(null);
  const [assetRequests, setAssetRequests] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get(`${API_URL}/user`);
        const teamRes = await axios.get(`${API_URL}/team`);
        const assetRes = await axios.get(`${API_URL}/asset`);
        const assetRequestsRes = await axios.get(
          `${API_URL}/asset/asset-requests`
        );

        const teamAssets = assetRequestsRes.data.data.teamAssets;
        const userAssets = assetRequestsRes.data.data.userAssets;

        let _assetRequests = 0;

        for (let team of teamAssets) {
          _assetRequests += team.requests.length;
        }

        for (let user of userAssets) {
          _assetRequests += user.requests.length;
        }

        setAssetRequests(_assetRequests);
        setUsers(userRes.data.data);
        setTeams(teamRes.data.data);
        setAssets(assetRes.data.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Page>
      <h1 className="text-3xl mb-1 font-medium">Dashboard</h1>
      <h2 className="font-medium text-lg opacity-60">Assets Statistics</h2>
      <div className="mt-4 grid grid-cols-4 gap-4">
        <Card amount={assetRequests} title="Asset Requests" to="/requests" />
        <Card
          amount={assets && assets.length}
          title="No of Assets"
          to="/assets"
        />
        <Card amount={users && users.length} title="No of Users" to="/users" />
        <Card amount={teams && teams.length} title="No of Teams" to="/teams" />
      </div>
      <div className="mt-8">
        <h1 className="font-medium mb-1 text-3xl">Maintanance Logs</h1>
        <h2 className="font-medium text-lg opacity-60">Recent Asset Logs</h2>
        <div className="mt-4">
          <Maintanance />
        </div>
      </div>
    </Page>
  );
};

export default Dashboard;
