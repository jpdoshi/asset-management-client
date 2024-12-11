import React, { useState } from "react";

import Page from "../components/Page";
import Card from "../components/Card";

import ModalForm from "../components/ModalForm";
import FormField from "../components/FormField";

const Assets = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Page>
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl mb-1 font-medium">Assets</h1>
          <h2 className="font-medium text-lg opacity-60">Manage Assets</h2>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 px-5 py-2 h-fit rounded-full text-white hover:bg-indigo-500 duration-300"
        >
          Add Asset
        </button>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4">
        <Card amount={64} title="Mouse" to="/assets/mouse" />
        <Card amount={55} title="Keyboard" to="/assets/keyboard" />
        <Card amount={47} title="Monitor" to="/assets/monitor" />
        <Card amount={28} title="Laptop" to="/assets/laptop" />
      </div>
      <ModalForm
        showModal={showModal}
        setShowModal={setShowModal}
        title="Add Asset"
        onClick={() => {
          setShowModal(false);
          alert("asset added");
        }}
      >
        <FormField
          label="Asset Name"
          placeholder="Mouse / Keyboard / Laptop / Monitor"
        />
        <FormField label="No of Units" placeholder="Enter units in digit" />
      </ModalForm>
    </Page>
  );
};

export default Assets;
