import React from "react";

import Page from "../components/Page";
import Card from "../components/Card";

const Assets = () => {
  return (
    <Page>
      <h1 className="text-3xl mb-1 font-medium">Assets</h1>
      <h2 className="font-medium text-lg opacity-60">Manage Assets</h2>
      <div className="mt-4 grid grid-cols-4 gap-4">
        <Card amount={64} title="Mouse" to="/assets/mouse" />
        <Card amount={55} title="Keyboard" to="/assets/keyboard" />
        <Card amount={47} title="Monitor" to="/assets/monitor" />
        <Card amount={28} title="Laptop" to="/assets/laptop" />
      </div>
    </Page>
  );
};

export default Assets;
