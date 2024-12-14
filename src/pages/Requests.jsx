import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import RequestCard from "../components/RequestCard";
import axios from "axios";
import { API_URL } from "../config.mjs";

const Requests = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assetsRes = await axios.get(`${API_URL}/asset/asset-requests`);
        setAssets(assetsRes.data.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <Page>
      <h1 className="text-3xl mb-1 font-medium">Requests</h1>
      <h2 className="font-medium text-lg opacity-60">Manage Asset Requests</h2>
      <div className="mt-6 grid grid-cols-2 gap-5">
        {/* Users */}
        {assets.userAssets &&
          assets.userAssets.map(
            (user, i1) =>
              user.requests &&
              user.requests.map((asset, i2) => (
                <RequestCard
                  key={i1 * i2}
                  asset={asset}
                  user={user.name}
                  type="User"
                />
              ))
          )}

        {/* Teams */}
        {assets.teamAssets &&
          assets.teamAssets.map(
            (team, i1) =>
              team.requests &&
              team.requests.map((asset, i2) => (
                <RequestCard
                  key={i1 * i2}
                  asset={asset.asset}
                  user={team.name}
                  type="Team"
                />
              ))
          )}
      </div>
    </Page>
  );
};

export default Requests;
