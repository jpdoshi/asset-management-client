import React from "react";
import { useParams } from "react-router-dom";

import Page from "../components/Page";
import { capitalizeString } from "../utils/utils";
import AssetsTable from "../components/AssetsTable";

const AssetsDetails = () => {
  const params = useParams();
  const assetType = params.slug;
  return (
    <Page>
      <h1 className="text-3xl mb-1 font-medium">
        {capitalizeString(assetType)}
      </h1>
      <h2 className="font-medium text-lg opacity-60">
        Manage {capitalizeString(assetType) + "s"}
      </h2>
      <div className="mt-4">
        <AssetsTable category={assetType} />
      </div>
    </Page>
  );
};

export default AssetsDetails;
